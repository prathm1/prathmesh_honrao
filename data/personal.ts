// Personal — the subtle, professional photo strip + life highlights for "Beyond Work".
// Photos are used tastefully as a small gallery, not a centerpiece.

export interface Photo {
  src: string;
  caption: string;
}

// A small, tasteful strip — a day-in-the-life, not a photo dump.
export const photoStrip: Photo[] = [
  { src: "/assets/personal/cafe-work.jpeg", caption: "Working from a café in Germany" },
  { src: "/assets/personal/reading-pond.jpeg", caption: "Reading by the water" },
  { src: "/assets/personal/library.jpeg", caption: "A corner of my library" },
  { src: "/assets/personal/balcony-study.jpeg", caption: "Early study sessions" },
  { src: "/assets/personal/golf.jpeg", caption: "Learning golf, one swing at a time" },
  { src: "/assets/personal/wfh-desk.jpeg", caption: "The home setup" },
];

// Short life highlights shown as cards alongside the hobby builds.
export interface Highlight {
  title: string;
  description: string;
  icon: string;   // lucide-react icon name
  teaser?: boolean; // renders a subtle "coming soon" style
}

export const personalHighlights: Highlight[] = [
  {
    title: "Writing my first book",
    description:
      "I'm drafting my first book. More on that soon — for now, it's heads-down and one page at a time.",
    icon: "BookOpen",
    teaser: true,
  },
  {
    title: "Travel & souvenirs",
    description:
      "I like to travel and bring back a small souvenir from each place — little objects that each carry a story.",
    icon: "Plane",
  },
  {
    title: "A constant reader",
    description:
      "Mostly non-fiction — technology, history, and how organisations really work — with the occasional thriller to switch off.",
    icon: "Library",
  },
];
