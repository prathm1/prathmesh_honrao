// Speaking & Workshops — a stated edge.
// SCAFFOLD: topics below are drawn from what you've described (databases,
// environments, architecture). Replace the specific talk/workshop entries with
// real titles, clients, and dates when ready.

export const speakingIntro =
  "Speaking is where I'm at my best. Give me a room — a team, a workshop, a client's leadership — and I can take a complex topic and make it land. Over the years I've led workshops for clients across a range of technical topics.";

export interface WorkshopTopic {
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

export const workshopTopics: WorkshopTopic[] = [
  {
    title: "Databases",
    description:
      "From DB2 internals to migration strategy — making database decisions clear for mixed technical and business audiences.",
    icon: "Database",
  },
  {
    title: "Environments",
    description:
      "How enterprise environments fit together, and how to set them up so modernization work can move quickly and safely.",
    icon: "Server",
  },
  {
    title: "Architecture",
    description:
      "Walking teams through target architectures and modernization patterns — the trade-offs, not just the diagrams.",
    icon: "Network",
  },
];

// SCAFFOLD — replace with real engagements (or remove if you'd rather keep it to topics only)
export interface Talk {
  title: string;
  audience: string;
  note: string;
}

export const talks: Talk[] = [
  {
    title: "Client modernization workshops",
    audience: "Enterprise architecture & delivery teams",
    note: "Led multiple hands-on sessions aligning teams on databases, environments, and target architecture.",
  },
  {
    title: "Client demo walkthroughs",
    audience: "Client leadership & stakeholders",
    note: "Led live walkthroughs during PoC demos — including an AI-assisted modernization session.",
  },
];
