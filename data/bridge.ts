// "The Bridge" — the core differentiator, in plain language.
// This is the heart of the site's message: what makes Prathmesh different.

export interface BridgePoint {
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

export const bridgeIntro =
  "I sit between the people who run the business and the people who build the systems — and I speak both languages. That is where most big projects succeed or fail, and it is where I do my best work.";

export const bridgePoints: BridgePoint[] = [
  {
    title: "Engineer and business mind",
    description:
      "An engineering degree gave me the technical depth. An operations MBA gave me the business lens. I use both at the same time — so the solution is sound and the business can actually live with it.",
    icon: "Combine",
  },
  {
    title: "Strategy, delivery, and operations",
    description:
      "I have set strategy, run hands-on implementations, and kept production systems alive. Having done all three, I see the whole picture — not just my slice of it.",
    icon: "Layers",
  },
  {
    title: "A translator in the room",
    description:
      "I turn technical complexity into clear decisions for leaders, and strategy into working systems for engineers. Fewer misunderstandings, less rework, faster progress.",
    icon: "MessagesSquare",
  },
  {
    title: "A global perspective",
    description:
      "An Indian working in Germany on projects across Europe and Japan. I connect ideas, cultures, and teams — and I am comfortable being the person who joins the dots.",
    icon: "Globe",
  },
];
