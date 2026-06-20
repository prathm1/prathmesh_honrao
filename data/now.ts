// "Right Now" snapshot — update this whenever your day-to-day work shifts.
// Keep it short and specific; this is the one part of the site meant to go stale
// fast on purpose, so update it every few weeks.
//
// NOTE: the values below are placeholders based on your most recent project data.
// Replace them with what you're actually doing today before publishing.

export interface NowSnapshot {
  updated: string; // e.g. "June 2026"
  techStack: string[];
  problem: string;
  conceptLearned: string;
}

export const now: NowSnapshot = {
  updated: "June 2026",
  techStack: ["Informatica", "Apache Airflow", "DBT", "Oracle DWH", "AWS Architectures"],
  problem:
    "Planning legacy Informatica migration to new open-source ETL tools",
  conceptLearned:
    "Modernisation shouldnt always only solve todays problems, it must unlock future value",
};
