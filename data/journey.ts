// Career Journey — the 10-year arc, told as growth.
// Each stage shows what the role was and, crucially, what NEW skills it added.
// Keep language simple and outcomes concrete.

export interface JourneyStage {
  id: string;
  period: string;
  title: string;      // what I was
  company: string;
  location: string;
  summary: string;    // one plain-language line
  gained: string[];   // skills / perspective gained at this stage
}

export const journey: JourneyStage[] = [
  {
    id: "developer",
    period: "2015 – 2017",
    title: "Mainframe Developer",
    company: "Accenture",
    location: "India · US Healthcare",
    summary:
      "Started by writing production COBOL for US Medicaid claims systems. This is where I learned how large, mission-critical systems really work.",
    gained: [
      "Hands-on COBOL, DB2, and batch development",
      "Discipline of zero-defect, production-grade code",
      "How enterprise systems are built and maintained",
    ],
  },
  {
    id: "support-lead",
    period: "2017 – 2021",
    title: "Support SME → Onsite Lead",
    company: "Accenture",
    location: "India → Wolfsburg, Germany",
    summary:
      "Kept critical automotive systems running, then moved onsite to Germany to lead the team. My first real step into client-facing leadership.",
    gained: [
      "Deep DB2 troubleshooting and performance tuning",
      "Leading a team and owning client relationships",
      "Working across cultures, onsite in Germany",
    ],
  },
  {
    id: "migration-lead",
    period: "2021 – 2024",
    title: "Data Migration Lead",
    company: "Deloitte",
    location: "Germany · Europe",
    summary:
      "Architected and led the migration of 2,500+ GB across 170 applications off the mainframe — three go-lives, zero production incidents.",
    gained: [
      "End-to-end migration architecture and automation",
      "Running a workstream from design to go-live",
      "Turning repeatable problems into reusable tooling",
    ],
  },
  {
    id: "strategist",
    period: "2024 – now",
    title: "Modernization Strategist",
    company: "Deloitte",
    location: "Germany · Europe · Japan",
    summary:
      "Now I shape modernization strategy for large enterprises — aligning many teams and entities on one practical, fact-based path forward.",
    gained: [
      "Enterprise modernization strategy and roadmaps",
      "Aligning many stakeholders on one direction",
      "Business cases that connect cost to value",
    ],
  },
];
