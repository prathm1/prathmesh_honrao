export interface Certification {
  category: string;
  name: string;
  issuer: string;
  credential?: string;
  year?: string;
}

export const certifications: Certification[] = [
  {
    category: "Language",
    name: "Goethe-Zertifikat B1 (German)",
    issuer: "Goethe-Institut e.V.",
    credential: "2000-AB1A-0002077923",
  },
  {
    category: "Cloud",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    credential: "Verified via AWS",
  },
  {
    category: "Cloud",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    credential: "991910386",
  },
  {
    category: "Cloud",
    name: "Bluemix Essentials",
    issuer: "IBM",
    credential: "Verified via IBM",
  },
  {
    category: "Project Management",
    name: "IT Information Library Foundations (ITIL)",
    issuer: "PeopleCert",
    credential: "GR750574291PH",
  },
  {
    category: "Methodology",
    name: "Agile Professional Certification",
    issuer: "Accenture",
    credential: "700095190",
  },
  {
    category: "Development",
    name: "IBM Cloud Application Developer",
    issuer: "IBM",
    credential: "Verified via IBM",
  },
  {
    category: "Development",
    name: "C Programming Essentials",
    issuer: "CDAC India",
    credential: "Verified via CDAC",
  },
  {
    category: "Modernization",
    name: "Mainframe Modernization — Best Kept Secrets",
    issuer: "Udemy",
    credential: "UC-73d33c2c-1451-4d2e-99db-5232087f689e",
  },
];
