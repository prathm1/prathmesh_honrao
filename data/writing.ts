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
      "On a discovery engagement in Japan, our static analysis kept saying roughly 80% of a COBOL codebase was dead or duplicated. I assumed the tool was wrong. It wasn't — the programmers weren't sloppy, the system just never let anyone delete anything.",
    body: [
      "We were three weeks into a discovery engagement for a Japanese insurance client when the static analysis numbers came back: about 80% of the COBOL codebase was unused or duplicated logic. I remember staring at that number assuming someone had misconfigured the tool. Run it again. Same result.",
      "Turns out the explanation was almost boring. For decades, the house rule on this system was: never edit a program, append to it. And if a change needed rolling back, you didn't delete the bad code, you commented it out and left it there as a kind of warning sign for the next person. Multiply that by thirty years and a claims-processing system that genuinely cannot go down, and you get a codebase that's 80% fossil layer. None of it was a mistake when it was written. It was just the safest thing to do at the time.",
      "I've started telling people technical debt is almost never a skill problem — it's an incentive problem. Deleting code is scarier than leaving it, so people leave it, and that's true whether your team is brilliant or mediocre. The static analysis got us from 100% to a workable 20% of active logic pretty fast. What took longer, and mattered more, was writing down why the other 80% existed at all, because the client's new architecture needed to remove that incentive, not just the dead code sitting on top of it.",
      "So now when I scope a modernization project, I spend less time asking how messy the code is and more time asking why it got that way. If the answer is process, cleaning the code without touching the process just buys you a tidier version of the same mess in five years.",
    ],
  },
  {
    slug: "ai-assisted-cobol-rule-extraction",
    title: "Using AI to Extract Business Rules from Undocumented COBOL",
    date: "2026-06-10",
    readTime: "5 min read",
    tags: ["AI", "Mainframe", "Migration"],
    excerpt:
      "Everyone wants to talk about the COBOL-to-Java part of a migration. Nobody wants to talk about the part where you find out the documentation has been lying for ten years. That's the part AI tooling actually helped with.",
    body: [
      "Ask someone about mainframe modernization and they'll tell you about converting COBOL to Java, breaking batch jobs into services, picking a target architecture on AWS or Azure. Fine, sure, that's the part with diagrams. The part that decides whether the migration actually works is uglier: figuring out what the existing code does, when the code is the only documentation that's still telling the truth.",
      "We hit exactly that wall on a regulated banking platform. We were replacing an old DB2 UNLOAD pipeline with a Java-based flow, and the COBOL programs driving it had zero documentation worth trusting — the official business rule definitions had drifted from what the code actually did, probably years before anyone on the current team joined. The tempting shortcut was to just generate the new Java straight from those business definitions. Faster, sure. Also wrong, because it would have quietly reproduced every gap in the documentation instead of what the system was really doing.",
      "So instead we used AI-assisted parsing to pull the transformation logic directly out of the COBOL, then sat in reconciliation workshops going line by line through every spot where that extracted logic disagreed with the official rules. That list of disagreements ended up mattering more than any line of generated Java — it's what got the client to actually sign off on which version of the truth was going to survive into the new system.",
      "If I had to draw a general lesson out of it: AI tooling isn't most useful when it writes the code for you. It's most useful when it makes some kind of analysis affordable that used to be a luxury. Reverse-engineering business rules from undocumented COBOL by hand, program by program, across a system this size would eat weeks nobody had budget for — which is exactly why it never got done and the documentation kept drifting further from reality. Make that cheap enough and you're not just moving faster. You're able to be more careful in places you used to have to skip.",
    ],
  },
];
