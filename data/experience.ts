export interface ExperienceEntry {
  id: string;
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  photos: { src: string; alt: string }[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "deloitte",
    company: "Deloitte",
    logo: "/assets/deloitte.svg",
    role: "Senior Consultant",
    period: "2021 – present",
    location: "Germany (hybrid)",
    bullets: [
      "Lead mainframe modernization engagements for insurance, automotive, and banking clients across Europe and Japan.",
      "Automated DB2/VSAM to Oracle migrations achieving ~80% cost reduction through repeatable tooling and pipelines.",
      "Delivered COBOL-to-Java PoCs using Innowake, enabling factory-model migration at scale.",
      "Built phased mainframe exit strategies spanning discovery, mining, roadmap planning, and RFP support.",
      "Drove AI-assisted delivery workflows, leveraging LLMs for documentation, rule extraction, and code analysis.",
    ],
    photos: [
      { src: "/assets/deloitte1.jpeg", alt: "Prathmesh at Deloitte" },
      { src: "/assets/deloitte2.jpeg", alt: "Deloitte engagement" },
    ],
  },
  {
    id: "accenture-senior",
    company: "Accenture",
    logo: "/assets/accenture.svg",
    role: "Senior Application Development Specialist",
    period: "2019 – 2021",
    location: "Pune · Wolfsburg",
    bullets: [
      "Provided L3 production support for mission-critical mainframe applications in the automotive after-sales domain.",
      "Managed DB2 performance, availability, and capacity across high-volume workloads under ITIL frameworks.",
      "Served as onshore lead in Wolfsburg, coordinating releases, support windows, and client communications.",
      "Mentored junior analysts and developed SOPs for major DB2 administration activities.",
      "Resolved long-standing production defects through targeted DB2 query rewrites and JCL optimization.",
    ],
    photos: [
      { src: "/assets/accenture1.jpeg", alt: "Prathmesh at Accenture" },
      { src: "/assets/acn2.jpeg", alt: "Accenture Wolfsburg" },
      { src: "/assets/acn3.jpeg", alt: "Team at Accenture" },
      { src: "/assets/acn4.jpeg", alt: "Accenture engagement" },
    ],
  },
  {
    id: "accenture-analyst",
    company: "Accenture",
    logo: "/assets/accenture.svg",
    role: "Application Development Analyst",
    period: "2015 – 2019",
    location: "Hyderabad · Pune",
    bullets: [
      "Developed COBOL-DB2 batch applications for a US-based Medicaid insurance provider.",
      "Owned full development lifecycle — from requirements and technical design through coding, testing, and deployment.",
      "Worked with VSAM, JCL, Endevor, and File-Aid in a mainframe development environment.",
      "Delivered zero-defect code across SIT and UAT cycles for production-critical batch processing systems.",
      "Built strong foundation in mainframe architecture, insurance data structures, and batch scheduling.",
    ],
    photos: [],
  },
];
