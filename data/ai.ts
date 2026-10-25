// AI as a Force Multiplier — a dedicated spotlight.
// Message: using AI reliably since 2020 to do more, better, with LESS risk.
// Keep it concrete and grounded — not hype.

export const aiIntro =
  "Since 2020, AI has been a force multiplier in my work — not a gimmick. The real skill is using it reliably: knowing where it speeds things up, where it adds risk, and how to keep a human firmly in control of anything that matters.";

export interface AiUse {
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

export const aiUses: AiUse[] = [
  {
    title: "Reading legacy code faster",
    description:
      "AI-assisted analysis extracts business rules from decades-old COBOL in days, not weeks — surfacing logic that no documentation ever captured.",
    icon: "ScanSearch",
  },
  {
    title: "Documentation that keeps up",
    description:
      "I use AI to turn complex technical work into clear discovery reports, mappings, and walkthroughs — so the knowledge is actually usable by the client.",
    icon: "FileText",
  },
  {
    title: "Catching drift early",
    description:
      "When moving logic from COBOL to Java, I use AI to reconcile the old rules against the new code — surfacing silent behaviour changes before they reach production.",
    icon: "GitCompareArrows",
  },
  {
    title: "Risk kept in check",
    description:
      "Every AI output is validated, traced to source, and signed off by people. AI accelerates the work; it never gets the final say on anything critical.",
    icon: "ShieldCheck",
  },
];

// The principle that ties it together
export const aiPrinciple =
  "The goal is not to replace judgement with AI. It is to spend less time on the mechanical parts, so more time goes to the decisions that actually need a human.";
