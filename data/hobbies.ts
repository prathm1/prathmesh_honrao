export interface Hobby {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  emoji: string;
}

export const hobbies: Hobby[] = [
  {
    slug: "ibm-z17-mainframe",
    title: "3D Printed IBM z17 Mainframe",
    subtitle: "1:32 Scale Model",
    description:
      "A fully 3D-printed replica of the IBM z17 mainframe at 1:32 scale. Every panel, door, and detail recreated.",
    longDescription:
      "As someone who spends their professional life working with mainframes, building a physical replica felt like the right way to honor this remarkable technology. The IBM z17 is printed at 1:32 scale with every external panel, cable tray, and door recreated as faithfully as possible. The model took multiple print iterations to get the proportions right and is painted in IBM's signature black and silver.",
    image: "/assets/hobby/mf_1.jpeg",
    tags: ["3D Printing", "IBM z17", "Scale Model", "Mainframe"],
    emoji: "🖥️",
  },
  {
    slug: "v8-engine",
    title: "MouldKing V8 Engine",
    subtitle: "Model 10088 — Working Pistons",
    description:
      "A motorized V8 engine model with synchronized pistons, rotating crankshaft, and working valvetrain.",
    longDescription:
      "The MouldKing 10088 V8 engine is a precision mechanical model with a working crankshaft, synchronized piston movement, rotating camshafts, and a fully detailed valvetrain. When powered, all eight pistons fire in the correct V8 sequence. It's a satisfying blend of engineering precision and aesthetic craft — much like the systems I work on professionally.",
    image: "/assets/hobby/L_V8.JPG",
    tags: ["Mechanical Model", "MouldKing", "Engineering", "V8"],
    emoji: "⚙️",
  },
  {
    slug: "lego-iron-man",
    title: "LEGO Iron Man",
    subtitle: "Set 76307",
    description:
      "Marvel's Iron Man Mark III suit in full LEGO form — detailed armor panels, articulated joints, and all.",
    longDescription:
      "The LEGO Iron Man 76307 set is one of the most technically impressive armor builds in the Marvel collection. Every plate of the Mark III armor is faithfully represented with detailed panel lines, articulated arms and legs, and the iconic chest arc reactor. A display piece that balances technical precision with iconic design.",
    image: "/assets/hobby/L_IronMan.JPG",
    tags: ["LEGO", "Marvel", "Iron Man", "Display Build"],
    emoji: "🤖",
  },
  {
    slug: "lego-lamborghini",
    title: "LEGO Lamborghini",
    subtitle: "Set 76923",
    description:
      "The iconic Lamborghini Huracán in LEGO Technic form — working suspension, V10 engine, and scissor doors.",
    longDescription:
      "The LEGO Lamborghini Huracán 76923 is a Technic masterpiece featuring functional suspension, a detailed V10 engine with moving pistons, and the Huracán's signature scissor doors. Building it was a weekend well spent — and the finished model looks exactly at home next to the V8 engine build.",
    image: "/assets/hobby/L_Lamborghini.JPG",
    tags: ["LEGO Technic", "Lamborghini", "Automotive", "Scale Model"],
    emoji: "🏎️",
  },
  {
    slug: "secret-of-secrets",
    title: "Secret of Secrets",
    subtitle: "Dan Brown — A Rare Addition",
    description:
      "A special addition to the collection — Dan Brown's exploration of the Emerald Tablet and alchemical secrets.",
    longDescription:
      "Dan Brown's 'Secret of Secrets' takes the reader through centuries of hidden knowledge, alchemical symbolism, and the enduring human fascination with what lies beneath the surface of things. A fitting read for someone who spends their days uncovering the logic hidden deep inside legacy codebases — where the real secrets have been locked away for decades.",
    image: "/assets/hobby/SoS1.JPG",
    tags: ["Reading", "Dan Brown", "Books", "History"],
    emoji: "📚",
  },
];
