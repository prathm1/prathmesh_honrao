export interface EducationEntry {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  recognition?: string;
  highlights: string[];
  icon: string;
}

export const education: EducationEntry[] = [
  {
    id: "mba",
    degree: "MBA",
    field: "Operations Management",
    institution: "IGNOU",
    location: "New Delhi, India",
    period: "2023 – 2025",
    recognition: "ANABIN H+ (German-equivalent Master's degree)",
    highlights: [
      "Operations Management, Strategic Management, and Project Management",
      "Agile methodologies, Risk Analysis, and Management Information Systems",
      "Capstone: Operational risk management in large-scale enterprise IT transformations",
      "ANABIN H+ recognition — recognized as equivalent to a German Master's degree",
    ],
    icon: "🎓",
  },
  {
    id: "be",
    degree: "B.E.",
    field: "Electronics & Telecommunications",
    institution: "SPPU",
    location: "Pune, India",
    period: "2011 – 2015",
    highlights: [
      "Digital Signal Processing, Embedded Systems, Microcontrollers, VLSI Design",
      "Led autonomous hovercraft build for IIT Bombay Techfest",
      "Worked on Real-Time Data Management System for smart-grid integration",
      "Led robotics club initiatives and technical workshops",
    ],
    icon: "⚙️",
  },
];
