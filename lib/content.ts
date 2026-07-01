import fs from "fs";
import path from "path";
import type { DraftSection } from "./github-cms";

export interface PublishedDraft {
  slug: string;
  title: string;
  section: DraftSection;
  created: string;
  updated: string;
  content: string;
}

function parseFrontmatter(raw: string): Record<string, string> {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm: Record<string, string> = {};
  match[1].split("\n").forEach((line) => {
    const [k, ...v] = line.split(": ");
    if (k) fm[k.trim()] = v.join(": ").trim().replace(/^["']|["']$/g, "");
  });
  return fm;
}

function getContent(raw: string): string {
  const match = raw.match(/^---\n[\s\S]*?\n---\n?([\s\S]*)$/);
  return match ? match[1].trim() : raw.trim();
}

export function getPublishedDrafts(section?: DraftSection): PublishedDraft[] {
  const dir = path.join(process.cwd(), "content", "drafts");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const drafts: PublishedDraft[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const fm = parseFrontmatter(raw);

    if (fm.published !== "true") continue;
    if (section && fm.section !== section) continue;

    drafts.push({
      slug: fm.slug || file.replace(".md", ""),
      title: fm.title || "Untitled",
      section: (fm.section as DraftSection) || "writing",
      created: fm.created || "",
      updated: fm.updated || "",
      content: getContent(raw),
    });
  }

  return drafts.sort((a, b) => b.updated.localeCompare(a.updated));
}
