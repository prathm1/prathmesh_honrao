// Principles — "How I think", distilled into Prathmesh's own words.
// Inspired by ideas he follows (learning by doing, failing forward, updating on
// new information) but rewritten as original, first-person principles.

export const principlesIntro =
  "A few ideas I keep coming back to — in work and otherwise.";

export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: "Learn by doing real things",
    description:
      "I get good at something by taking on a concrete problem and seeing it through — depth first, learning what I need as I need it. Then I explain it in my own words until it's genuinely mine.",
  },
  {
    title: "Fail forward",
    description:
      "Setbacks are data, not defeat. I'd rather try, be wrong early, and adjust quickly than play it safe and learn nothing. Ownership over blame, every time.",
  },
  {
    title: "The goal isn't to be right — it's to get it right",
    description:
      "I change my mind when the facts change. Holding a view lightly and updating it isn't weakness; it's how you avoid being confidently wrong.",
  },
  {
    title: "Old doesn't mean obsolete",
    description:
      "The most dangerous assumption in enterprise IT is that legacy means worthless. These systems still run the world for a reason. Respect what works, then improve it carefully.",
  },
  {
    title: "People and process first, technology second",
    description:
      "Every transformation is a people and process problem before it's a technology one. The best technical answer is the one the business can actually sustain.",
  },
  {
    title: "Measure against who I was",
    description:
      "I compare myself to my younger self, not to other people. Am I better than I was last year? That's the only scoreboard that keeps me honest.",
  },
];
