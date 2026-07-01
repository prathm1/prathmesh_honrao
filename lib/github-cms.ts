const REPO = "prathm1/prathmesh_honrao";
const BRANCH = "main";

function headers(pat: string) {
  return {
    Authorization: `Bearer ${pat}`,
    "Content-Type": "application/json",
    Accept: "application/vnd.github+json",
  };
}

export type DraftSection = "writing" | "now" | "beyond";

export interface Draft {
  slug: string;
  title: string;
  published: boolean;
  section: DraftSection;
  created: string;
  updated: string;
  content: string;
}

function parseFrontmatter(raw: string): Draft {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { slug: "", title: "Untitled", published: false, section: "writing", created: "", updated: "", content: raw };
  const fm: Record<string, string> = {};
  match[1].split("\n").forEach((line) => {
    const [k, ...v] = line.split(": ");
    if (k) fm[k.trim()] = v.join(": ").trim().replace(/^["']|["']$/g, "");
  });
  return {
    slug: fm.slug ?? "",
    title: fm.title ?? "Untitled",
    published: fm.published === "true",
    section: (fm.section as DraftSection) ?? "writing",
    created: fm.created ?? "",
    updated: fm.updated ?? "",
    content: match[2].trim(),
  };
}

function toMarkdown(draft: Draft): string {
  return `---
slug: ${draft.slug}
title: "${draft.title}"
published: ${draft.published}
section: ${draft.section}
created: ${draft.created}
updated: ${draft.updated}
---

${draft.content}`;
}

export async function listDrafts(pat: string): Promise<Draft[]> {
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/content/drafts`,
    { headers: headers(pat) }
  );
  if (!res.ok) return [];
  const files: { name: string; download_url: string }[] = await res.json();
  const mdFiles = files.filter((f) => f.name.endsWith(".md"));

  const drafts = await Promise.all(
    mdFiles.map(async (f) => {
      const raw = await fetch(f.download_url).then((r) => r.text());
      const draft = parseFrontmatter(raw);
      draft.slug = f.name.replace(".md", "");
      return draft;
    })
  );
  return drafts.sort((a, b) => b.updated.localeCompare(a.updated));
}

export async function saveDraft(pat: string, draft: Draft): Promise<boolean> {
  const path = `content/drafts/${draft.slug}.md`;
  const content = btoa(unescape(encodeURIComponent(toMarkdown(draft))));

  // Get existing SHA if file exists (needed for update)
  let sha: string | undefined;
  const existing = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${path}`,
    { headers: headers(pat) }
  );
  if (existing.ok) {
    const data = await existing.json();
    sha = data.sha;
  }

  const body: Record<string, string> = {
    message: `studio: ${draft.published ? "publish" : "save draft"} "${draft.title}"`,
    content,
    branch: BRANCH,
  };
  if (sha) body.sha = sha;

  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${path}`,
    { method: "PUT", headers: headers(pat), body: JSON.stringify(body) }
  );
  return res.ok;
}

export async function triggerLinkedInGeneration(pat: string, slug: string): Promise<boolean> {
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/dispatches`,
    {
      method: "POST",
      headers: headers(pat),
      body: JSON.stringify({ event_type: "generate-linkedin", client_payload: { slug } }),
    }
  );
  return res.ok || res.status === 204;
}

export async function deleteDraft(pat: string, slug: string): Promise<boolean> {
  const path = `content/drafts/${slug}.md`;
  const existing = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${path}`,
    { headers: headers(pat) }
  );
  if (!existing.ok) return false;
  const { sha } = await existing.json();

  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${path}`,
    {
      method: "DELETE",
      headers: headers(pat),
      body: JSON.stringify({ message: `studio: delete "${slug}"`, sha, branch: BRANCH }),
    }
  );
  return res.ok;
}
