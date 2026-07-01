#!/usr/bin/env node
/**
 * Generates a LinkedIn post + hand-drawn diagram from a published draft.
 * Called by GitHub Actions with env vars: ANTHROPIC_API_KEY, RESEND_API_KEY, DRAFT_SLUG
 *
 * Deps (installed in workflow): @anthropic-ai/sdk resend roughjs
 */

const fs = require("fs");
const path = require("path");

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const DRAFT_SLUG = process.env.DRAFT_SLUG;
const TO_EMAIL = "honraoprathmesh@gmail.com";

if (!ANTHROPIC_API_KEY || !RESEND_API_KEY || !DRAFT_SLUG) {
  console.error("Missing required env vars: ANTHROPIC_API_KEY, RESEND_API_KEY, DRAFT_SLUG");
  process.exit(1);
}

// ── 1. Read draft ─────────────────────────────────────────────────────────────

const draftPath = path.join(process.cwd(), "content", "drafts", `${DRAFT_SLUG}.md`);
if (!fs.existsSync(draftPath)) {
  console.error(`Draft not found: ${draftPath}`);
  process.exit(1);
}

const raw = fs.readFileSync(draftPath, "utf-8");

// Parse frontmatter
const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
if (!fmMatch) { console.error("Could not parse frontmatter"); process.exit(1); }

const fm = Object.fromEntries(
  fmMatch[1].split("\n").filter(Boolean).map((l) => {
    const [k, ...v] = l.split(": ");
    return [k.trim(), v.join(": ").trim().replace(/^['"]|['"]$/g, "")];
  })
);
const content = fmMatch[2].trim();
const draftTitle = fm.title || "Untitled";

// Strip HTML tags from content for plain text
const plainContent = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

// ── 2. Call Claude API ────────────────────────────────────────────────────────

const Anthropic = require("@anthropic-ai/sdk");
const client = new Anthropic.default({ apiKey: ANTHROPIC_API_KEY });

async function generateContent() {
  console.log(`Generating LinkedIn post for: ${draftTitle}`);

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2000,
    messages: [
      {
        role: "user",
        content: `You are a professional LinkedIn content strategist. Based on the following article/draft, generate:

1. A compelling LinkedIn post (200-280 words). Use a strong opening hook, 2-3 key insights, a closing CTA. Include 4-6 relevant hashtags at the end. Write in first person, professional but human tone.

2. A hand-drawn style block diagram that visually explains the core concept. Return it as JSON with this exact structure:
{
  "title": "short diagram title",
  "nodes": [
    { "id": "1", "label": "Node Label", "type": "start|process|decision|end" }
  ],
  "edges": [
    { "from": "1", "to": "2", "label": "optional edge label" }
  ],
  "layout": "flowchart|mindmap|comparison"
}

Keep the diagram to 4-7 nodes max. Make it tell a story visually.

Article title: ${draftTitle}

Article content:
${plainContent.slice(0, 3000)}

Return your response as JSON with exactly this structure:
{
  "post": "the full linkedin post text",
  "diagram": { ... the diagram JSON above ... }
}`,
      },
    ],
  });

  const text = message.content[0].text;

  // Extract JSON from response
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("Claude did not return valid JSON");

  return JSON.parse(jsonMatch[0]);
}

// ── 3. Render rough SVG diagram ───────────────────────────────────────────────

function renderRoughDiagram(diagram) {
  const rough = require("roughjs/bundled/rough.cjs");

  const W = 680;
  const H = 380;
  const nodes = diagram.nodes || [];
  const edges = diagram.edges || [];
  const layout = diagram.layout || "flowchart";

  // Assign positions based on layout
  const positions = {};

  if (layout === "mindmap" && nodes.length > 0) {
    // Center node + radial layout
    const center = nodes[0];
    positions[center.id] = { x: W / 2, y: H / 2 };
    const rest = nodes.slice(1);
    rest.forEach((n, i) => {
      const angle = (2 * Math.PI * i) / rest.length - Math.PI / 2;
      const r = 130;
      positions[n.id] = {
        x: W / 2 + r * Math.cos(angle),
        y: H / 2 + r * Math.sin(angle),
      };
    });
  } else if (layout === "comparison" && nodes.length >= 2) {
    // Two columns
    const mid = Math.ceil(nodes.length / 2);
    nodes.forEach((n, i) => {
      const col = i < mid ? 0 : 1;
      const row = col === 0 ? i : i - mid;
      positions[n.id] = {
        x: col === 0 ? W * 0.28 : W * 0.72,
        y: 80 + row * 100,
      };
    });
  } else {
    // Default: left-to-right flowchart
    const cols = Math.ceil(nodes.length / 2);
    nodes.forEach((n, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      positions[n.id] = {
        x: 80 + col * ((W - 160) / Math.max(cols - 1, 1)),
        y: 80 + row * 130,
      };
    });
  }

  // Build SVG manually using roughjs path generators
  const rc = rough.default.svg;

  // We'll build SVG string directly
  const BOX_W = 140;
  const BOX_H = 46;

  // Hand-drawn style: use rough.js to get path data
  // We simulate rough by adding slight offsets to paths
  function roughRect(x, y, w, h) {
    // Simple wobbly rectangle approximation
    const jitter = () => (Math.random() - 0.5) * 3;
    const x1 = x + jitter(), y1 = y + jitter();
    const x2 = x + w + jitter(), y2 = y + jitter();
    const x3 = x + w + jitter(), y3 = y + h + jitter();
    const x4 = x + jitter(), y4 = y + h + jitter();
    return `M${x1},${y1} L${x2},${y2} L${x3},${y3} L${x4},${y4} Z`;
  }

  function roughLine(x1, y1, x2, y2) {
    const jitter = () => (Math.random() - 0.5) * 2;
    const mx = (x1 + x2) / 2 + jitter() * 8;
    const my = (y1 + y2) / 2 + jitter() * 8;
    return `M${x1 + jitter()},${y1 + jitter()} Q${mx},${my} ${x2 + jitter()},${y2 + jitter()}`;
  }

  const COLORS = {
    start: { fill: "#e8f5f3", stroke: "#1a7a6e" },
    end: { fill: "#fef3e8", stroke: "#d97706" },
    decision: { fill: "#f0f4ff", stroke: "#4f46e5" },
    process: { fill: "#f9f9f7", stroke: "#374151" },
  };

  let svgParts = [];

  // Arrow marker
  svgParts.push(`<defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 Z" fill="#555" opacity="0.7"/>
    </marker>
  </defs>`);

  // Draw edges first (behind nodes)
  edges.forEach((e) => {
    const from = positions[e.from];
    const to = positions[e.to];
    if (!from || !to) return;

    // Connect from edge of box
    const fx = from.x;
    const fy = from.y;
    const tx = to.x;
    const ty = to.y;

    const d = roughLine(fx, fy, tx, ty);
    svgParts.push(`<path d="${d}" fill="none" stroke="#555" stroke-width="1.8" stroke-dasharray="0" opacity="0.75" marker-end="url(#arrow)"/>`);

    if (e.label) {
      const lx = (fx + tx) / 2 + 6;
      const ly = (fy + ty) / 2 - 6;
      svgParts.push(`<text x="${lx}" y="${ly}" font-family="Caveat, Comic Sans MS, cursive" font-size="12" fill="#666" text-anchor="middle">${e.label}</text>`);
    }
  });

  // Draw nodes
  nodes.forEach((n) => {
    const pos = positions[n.id];
    if (!pos) return;
    const x = pos.x - BOX_W / 2;
    const y = pos.y - BOX_H / 2;
    const c = COLORS[n.type] || COLORS.process;

    if (n.type === "decision") {
      // Diamond shape
      const hw = BOX_W / 2, hh = BOX_H / 2;
      const cx = pos.x, cy = pos.y;
      const jitter = () => (Math.random() - 0.5) * 3;
      const d = `M${cx},${cy - hh + jitter()} L${cx + hw + jitter()},${cy + jitter()} L${cx + jitter()},${cy + hh + jitter()} L${cx - hw + jitter()},${cy + jitter()} Z`;
      svgParts.push(`<path d="${d}" fill="${c.fill}" stroke="${c.stroke}" stroke-width="2" opacity="0.9"/>`);
    } else {
      const d = roughRect(x, y, BOX_W, BOX_H);
      svgParts.push(`<path d="${d}" fill="${c.fill}" stroke="${c.stroke}" stroke-width="2" opacity="0.9"/>`);
    }

    // Label (wrap long text)
    const words = n.label.split(" ");
    const lines = [];
    let line = "";
    words.forEach((w) => {
      if ((line + w).length > 18) { lines.push(line.trim()); line = w + " "; }
      else line += w + " ";
    });
    if (line.trim()) lines.push(line.trim());

    const lineH = 16;
    const startY = pos.y - ((lines.length - 1) * lineH) / 2;
    lines.forEach((l, i) => {
      svgParts.push(`<text x="${pos.x}" y="${startY + i * lineH + 4}" font-family="Caveat, Comic Sans MS, cursive" font-size="14" font-weight="600" fill="#1a1a1a" text-anchor="middle">${l}</text>`);
    });
  });

  // Diagram title
  svgParts.push(`<text x="${W / 2}" y="22" font-family="Caveat, Comic Sans MS, cursive" font-size="16" font-weight="700" fill="#374151" text-anchor="middle" opacity="0.8">${diagram.title || ""}</text>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="background:#fafaf8; border-radius:12px;">
  ${svgParts.join("\n  ")}
</svg>`;
}

// ── 4. Build HTML email ───────────────────────────────────────────────────────

function buildEmail(post, svgDiagram, title) {
  const postHtml = post
    .split("\n\n")
    .map((p) => `<p style="margin:0 0 16px 0; line-height:1.7;">${p.replace(/\n/g, "<br>")}</p>`)
    .join("");

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0; padding:0; background:#f4f4f0; font-family: Georgia, serif;">
  <div style="max-width:680px; margin:40px auto; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:#1a7a6e; padding:32px 40px;">
      <div style="font-family: sans-serif; font-size:11px; font-weight:700; letter-spacing:3px; color:rgba(255,255,255,0.6); text-transform:uppercase; margin-bottom:8px;">LinkedIn Post Draft</div>
      <h1 style="margin:0; color:#fff; font-size:22px; font-weight:600; line-height:1.3;">${title}</h1>
    </div>

    <!-- LinkedIn post preview -->
    <div style="padding:40px 40px 24px;">
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
        <div style="width:44px; height:44px; border-radius:50%; background:#1a7a6e; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:15px; text-align:center; line-height:44px;">PH</div>
        <div>
          <div style="font-family:sans-serif; font-weight:700; font-size:14px; color:#1a1a1a;">Prathmesh Honrao</div>
          <div style="font-family:sans-serif; font-size:12px; color:#666;">Senior Consultant · Deloitte Germany</div>
        </div>
      </div>

      <div style="font-family:sans-serif; font-size:15px; color:#1a1a1a; line-height:1.7; border-left:3px solid #1a7a6e; padding-left:20px; margin-bottom:32px;">
        ${postHtml}
      </div>

      <!-- Diagram -->
      <div style="margin-bottom:8px; font-family:sans-serif; font-size:11px; font-weight:700; letter-spacing:2px; color:#999; text-transform:uppercase;">Visual Concept</div>
      <div style="background:#fafaf8; border-radius:12px; padding:4px; border:1px solid #e8e8e4;">
        ${svgDiagram}
      </div>
      <p style="font-family:sans-serif; font-size:11px; color:#aaa; margin:8px 0 0; text-align:center;">Attach this diagram as an image to your LinkedIn post for 2-3× more reach</p>
    </div>

    <!-- Copy prompt -->
    <div style="background:#f4f4f0; margin:0 40px 40px; border-radius:12px; padding:24px;">
      <div style="font-family:sans-serif; font-size:11px; font-weight:700; letter-spacing:2px; color:#999; text-transform:uppercase; margin-bottom:12px;">Raw post text (copy-paste ready)</div>
      <pre style="margin:0; font-family:monospace; font-size:13px; color:#333; white-space:pre-wrap; line-height:1.6;">${post}</pre>
    </div>

    <!-- Footer -->
    <div style="border-top:1px solid #eee; padding:20px 40px; text-align:center;">
      <p style="font-family:sans-serif; font-size:11px; color:#bbb; margin:0;">Generated by Studio · prathmesh_honrao</p>
    </div>
  </div>
</body>
</html>`;
}

// ── 5. Send via Resend ────────────────────────────────────────────────────────

async function sendEmail(html, title) {
  const { Resend } = require("resend");
  const resend = new Resend(RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "Studio <onboarding@resend.dev>",
    to: [TO_EMAIL],
    subject: `LinkedIn Draft: ${title}`,
    html,
  });

  if (error) throw new Error(JSON.stringify(error));
  console.log("Email sent:", data?.id);
}

// ── Run ───────────────────────────────────────────────────────────────────────

(async () => {
  try {
    const { post, diagram } = await generateContent();
    console.log("LinkedIn post generated.");

    const svg = renderRoughDiagram(diagram);
    console.log("Diagram rendered.");

    const html = buildEmail(post, svg, draftTitle);
    await sendEmail(html, draftTitle);

    console.log("Done ✓");
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
})();
