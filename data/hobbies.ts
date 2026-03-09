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
      "I print and paint a physical replica of the system I spend my days modernizing. Make of that what you will.",
    longDescription:
      "People find it funny that I 3D print replicas of the exact technology I'm paid to help companies move away from. I don't think it's contradictory at all. The IBM z17 is genuinely impressive engineering — the fact that it still runs a significant slice of the world's financial and insurance infrastructure isn't a failure of progress, it's proof that the original engineers got something right. Building a 1:32 scale physical replica was my way of acknowledging that. It took a few print iterations to get the proportions right, a bit of patience to paint in IBM's signature black and silver, and one slightly too-detailed afternoon on the cable trays. It sits on my desk now, and I think it looks exactly right there.",
    image: "/assets/hobby/mf_1.jpeg",
    tags: ["3D Printing", "IBM z17", "Scale Model", "Mainframe"],
    emoji: "🖥️",
  },
  {
    slug: "v8-engine",
    title: "MouldKing V8 Engine",
    subtitle: "Model 10088 — Working Pistons",
    description:
      "Eight pistons, one crankshaft, a working valvetrain, and two evenings that genuinely flew by.",
    longDescription:
      "I'm not a car enthusiast in the traditional sense — I don't track lap times or follow Formula 1 — but I find the mechanics of combustion engines genuinely fascinating. The way eight pistons coordinate through a crankshaft, the camshafts timing the valves, the whole sequence happening fast enough to be invisible to the eye — that's real engineering. The MouldKing 10088 brings all of that out in slow motion. You assemble it by hand, so you understand exactly what does what and why. When you plug it in for the first time and all eight pistons start moving in the correct V8 sequence, it's one of those moments where the engineering just becomes obvious. Spent two evenings building it, then probably another hour just running it and not doing anything else.",
    image: "/assets/hobby/L_V8.JPG",
    tags: ["Mechanical Model", "MouldKing", "Engineering", "V8"],
    emoji: "⚙️",
  },
  {
    slug: "lego-iron-man",
    title: "LEGO Iron Man",
    subtitle: "Set 76307",
    description:
      "The Mark III in brick form. Took longer than I expected, looked better than I expected — so, a win.",
    longDescription:
      "I'll be honest — I picked this up partly because it's Iron Man and partly because the build complexity looked interesting. Turns out both reasons were correct. Every armor plate on the Mark III is represented with actual detail: panel lines, joint articulation, the chest arc reactor. It's more involved than a typical display set, which I appreciated. There's a version of LEGO that's just snapping pieces together and watching a shape form, and then there's this — where you're solving a three-dimensional puzzle and the suit slowly emerges from a pile of parts. Got a bit tedious in the middle sections, then very satisfying by the end. It sits on the shelf now and looks exactly as it should.",
    image: "/assets/hobby/L_IronMan.JPG",
    tags: ["LEGO", "Marvel", "Iron Man", "Display Build"],
    emoji: "🤖",
  },
  {
    slug: "lego-lamborghini",
    title: "LEGO Lamborghini",
    subtitle: "Set 76923",
    description:
      "A full weekend, a V10 with moving pistons, scissor doors that actually open. Sits next to the V8 and they look like they planned it.",
    longDescription:
      "Technic sets are a different beast from regular LEGO. There's mechanical logic you have to follow — things have to mesh and rotate and flex correctly, or the whole thing just doesn't work as intended. The Huracán has functional suspension you can actually compress by pushing down on the body, a V10 engine with visible piston movement, and those iconic scissor doors that swing straight up. I hit a few confusing steps somewhere around instruction page 180 and had to partially disassemble a section, but that's part of it. The moment those doors open properly for the first time, all the earlier frustration just evaporates. It now sits right next to the MouldKing V8 engine, and I'm genuinely a little surprised at how well they complement each other.",
    image: "/assets/hobby/L_Lamborghini.JPG",
    tags: ["LEGO Technic", "Lamborghini", "Automotive", "Scale Model"],
    emoji: "🏎️",
  },
  {
    slug: "secret-of-secrets",
    title: "Secret of Secrets",
    subtitle: "Dan Brown — A Rare Addition",
    description:
      "I don't read a lot of fiction, but 'hidden knowledge' happens to be my thing professionally. Dan Brown made it work.",
    longDescription:
      "I read almost exclusively non-fiction — usually something around technology, history, or how organizations function. So it takes something specific to get me to pick up a thriller. Dan Brown's recurring theme — that there's always a hidden layer underneath the surface, that the official version of things is never the whole story — resonates more than I expected. Professionally, I spend a lot of time inside legacy codebases that nobody has properly documented in 20 years. You learn to read the signals: variable names that reveal the original intent, commented-out blocks of logic that tell you what changed and roughly when, batch job sequences that explain an entire business process if you know how to trace them. It's the same instinct as the protagonist in this book: assume there's more to the story, then go looking for it. This scratches that same itch, just with considerably more drama and far fewer JCL error codes.",
    image: "/assets/hobby/SoS1.JPG",
    tags: ["Reading", "Dan Brown", "Books", "History"],
    emoji: "📚",
  },
];
