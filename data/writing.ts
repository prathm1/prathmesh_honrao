export interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "what-80-percent-redundant-cobol-taught-me",
    title: "What 80% Redundant COBOL Taught Me About Technical Debt",
    date: "2026-06-20",
    readTime: "4 min read",
    tags: ["Mainframe", "Modernization"],
    excerpt:
      "On a discovery engagement in Japan, static analysis found that roughly 80% of a COBOL codebase was unused or duplicated logic. The reason wasn't bad engineers — it was decades of a culture where nobody deletes code.",
    body: [
      "On a discovery engagement for a Japanese insurance client, static analysis turned up something startling: roughly 80% of the COBOL codebase was unused or duplicated logic. My first instinct was to assume the original engineers had been careless. They hadn't been.",
      "What had actually happened was simpler and far more human: for decades, the convention was to append new logic rather than edit existing programs, and to roll back changes by commenting out code rather than deleting it. Every fix, every requirement change, every rollback left a fossil layer behind. None of it was wrong when it was written — it was a reasonable way to survive in a system where a bad edit could take down claims processing.",
      "The lesson that stuck with me: technical debt is rarely a competence problem, it's an incentive problem. If the cost of deleting code is higher than the cost of leaving it, people will leave it — every time, in every codebase, regardless of skill level. Static analysis tooling helped us isolate the active 20% from the dead 80%, but the real deliverable wasn't the tooling output. It was naming the incentive structure so the client's target architecture didn't just modernize the code, it removed the reason the rot accumulated in the first place.",
      "If you're scoping a modernization effort, ask less about how messy the code is and more about why it got that way. The 'why' tells you whether you're fixing a codebase or a process — and if it's the process, refactoring without changing the workflow just buys you a cleaner version of the same problem in five years.",
    ],
  },
  {
    slug: "ai-assisted-cobol-rule-extraction",
    title: "Using AI to Extract Business Rules from Undocumented COBOL",
    date: "2026-06-10",
    readTime: "5 min read",
    tags: ["AI", "Mainframe", "Migration"],
    excerpt:
      "On a regulated banking platform, the hardest part of a Java migration wasn't the migration — it was reconstructing business rules nobody had written down. AI-assisted parsing changed the economics of that work.",
    body: [
      "Most mainframe modernization writing focuses on the migration mechanics — converting COBOL to Java, replacing batch with services, picking a target architecture. The part that actually determines whether a migration succeeds or quietly breaks production is far less glamorous: figuring out what the existing code is actually supposed to do, when the only specification is the code itself.",
      "On a regulated banking platform, we were replacing a DB2 UNLOAD-based pipeline with a Java-transformed flow. The COBOL programs at the center of it had no accompanying documentation, and the business rules they encoded had drifted from whatever the official business definitions said years ago. Generating Java straight from the business definitions would have been faster — and wrong, because it would silently reproduce the documentation's gaps rather than the system's actual behavior.",
      "We used AI-assisted parsing to extract transformation logic directly from the COBOL source, then ran reconciliation workshops to surface every place the extracted rules disagreed with the documented business rules. That divergence list, not the generated Java, was the most valuable artifact of the engagement — it forced explicit client sign-off on which version of the truth would survive into the new system.",
      "The broader pattern: AI tooling is most valuable in modernization not when it writes code, but when it makes previously uneconomical analysis economical. Manually reverse-engineering business rules from undocumented COBOL across a large codebase would have taken weeks per program. That cost is exactly why so much legacy logic stays undocumented — nobody could justify the hours. Lower that cost and you change what kinds of rigor are possible, not just what's fast.",
    ],
  },
];
