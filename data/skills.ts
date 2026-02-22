export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Mainframe",
    icon: "🖥️",
    skills: ["COBOL", "DB2 z/OS", "VSAM", "JCL", "CICS", "z/OS", "Assembler", "IMS", "CA7", "RACF"],
  },
  {
    category: "Cloud & Data",
    icon: "☁️",
    skills: ["AWS", "Azure", "Oracle Cloud", "SQL*Loader", "Oracle DB", "Python", "Bash", "SQL", "FTP/SFTP", "Docker"],
  },
  {
    category: "Consulting",
    icon: "🧭",
    skills: [
      "Modernization Strategy",
      "Discovery & Mining",
      "Architecture Design",
      "Business Cases",
      "RFP Support",
      "Stakeholder Alignment",
      "Program Governance",
      "Cross-Cultural Collaboration",
    ],
  },
  {
    category: "Tools & Methods",
    icon: "🔧",
    skills: ["Innowake", "Power BI", "ITIL", "Agile", "File-Aid", "Abend-AID", "Endevor", "Java", "Spring Boot", "Git"],
  },
];

// For the visual word cloud
export const cloudSkills: { label: string; size: "xl" | "lg" | "md" | "sm" }[] = [
  { label: "Mainframe Modernization", size: "xl" },
  { label: "COBOL", size: "xl" },
  { label: "DB2", size: "lg" },
  { label: "Cloud Strategy", size: "lg" },
  { label: "Data Migration", size: "lg" },
  { label: "Oracle Migration", size: "md" },
  { label: "VSAM", size: "md" },
  { label: "Program Governance", size: "md" },
  { label: "Innowake PoCs", size: "md" },
  { label: "Stakeholder Alignment", size: "md" },
  { label: "AI-Assisted Delivery", size: "md" },
  { label: "Mainframe Exit Roadmaps", size: "sm" },
  { label: "RFP Support", size: "sm" },
  { label: "L3 Production Support", size: "sm" },
  { label: "ITIL Practices", size: "sm" },
  { label: "Risk Analysis", size: "sm" },
  { label: "Migration Factory Model", size: "sm" },
  { label: "Cross-Cultural Collaboration", size: "sm" },
  { label: "Business + Engineering", size: "sm" },
  { label: "Quick Learner", size: "sm" },
];

export const industryData = [
  { label: "Insurance", years: 6, color: "#2b7a78", percent: 57 },
  { label: "Automotive", years: 3.5, color: "#3f88c5", percent: 33 },
  { label: "Banking", years: 1, color: "#d07c3a", percent: 10 },
];
