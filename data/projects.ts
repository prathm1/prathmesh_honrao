export type Industry = "Insurance" | "Automotive" | "Banking";
export type ProjectCategory = "Strategy" | "Migration" | "PoC" | "Support";

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  year: string;
  duration: string;
  client: string;
  industry: Industry;
  role: string;
  categories: ProjectCategory[];
  technologies: string[];
  tagline: string;
  stat: { value: string; label: string };
  overview: string;
  objectives: string[];
  outcomes: string[];
  contribution: string[];
  challenges?: { title: string; solution: string }[];
}

export const projects: Project[] = [
  {
    slug: "mainframe-poc-germany",
    title: "Mainframe Modernization PoC for a Global Automotive Manufacturer",
    shortTitle: "Mainframe PoC – Germany",
    year: "2025",
    duration: "2–3 months",
    client: "Global Automobile Manufacturer (Germany)",
    industry: "Automotive",
    role: "Technical Lead – Database Migration, Coordination, Documentation",
    categories: ["PoC"],
    technologies: ["COBOL", "DB2 z/OS", "Java", "Innowake", "Docker", "DB2 LUW"],
    tagline: "COBOL stored procedures refactored to Java with full functional parity",
    stat: { value: "100%", label: "Functional Parity" },
    overview:
      "Led a proof-of-concept to validate the feasibility of migrating COBOL stored procedures to Java for two critical mainframe applications at a global automotive manufacturer. The PoC validated Innowake's tooling pipeline and established a factory model for high-volume STP migration.",
    objectives: [
      "Refactor COBOL stored procedures into Java using Innowake tooling",
      "Set up a testing environment using Docker-based DB2 LUW containers",
      "Validate functional correctness through unit tests, inserts, and updates",
      "Deliver a comprehensive discovery and mining report",
    ],
    outcomes: [
      "Full functional parity achieved between COBOL stored procedures and generated Java versions",
      "Client engineers performed independent UAT and confirmed successful data operations",
      "Java code rated highly readable and close to internal Google-style standards",
      "Demonstrated feasibility of a factory model for high-volume STP migration",
      "Generated client trust in the transformation pipeline's speed, reliability, and maintainability",
    ],
    contribution: [
      "End-to-end technical bridge between client, Deloitte India delivery team, and Innowake engineering",
      "Led DB2 LUW environment setup via Docker",
      "Provided in-depth DB2 technical support throughout the engagement",
      "Created customized discovery and mining report",
      "Leveraged AI tools to accelerate technical documentation",
      "Led AI walkthrough session during client demo",
    ],
  },
  {
    slug: "global-modernization-strategy",
    title: "Mainframe Modernization Strategy for a Global Insurance Group",
    shortTitle: "Global Modernization Strategy",
    year: "2024–2025",
    duration: "6–8 months",
    client: "Large Multinational Insurance Group",
    industry: "Insurance",
    role: "Core Contributor – Application Inventory, Target Architecture, Strategic Toolkit",
    categories: ["Strategy"],
    technologies: ["COBOL", "PL/I", "DB2", "IMS", "Cloud Platforms", "Power BI"],
    tagline: "Unified modernization strategy across 9 independent global insurance entities",
    stat: { value: "9", label: "Entities Aligned" },
    overview:
      "Contributed to a 6–8 month strategic initiative to define a unified, long-term modernization strategy for the mainframe landscape of a large multinational insurance group spanning 9 independently managed global entities.",
    objectives: [
      "Define a unified, long-term modernization strategy for the mainframe landscape",
      "Create a centralized application repository across all 9 entities",
      "Develop reference architectures and tooling recommendations",
      "Build a quantitative business case for modernization investment",
      "Establish a group-wide modernization playbook",
    ],
    outcomes: [
      "Built validated, group-wide repository of mainframe and supporting applications",
      "Interactive Power BI dashboards presenting application distribution and risk visualizations",
      "Quantitative business case showing reduced time-to-market, lower TCO, and improved agility",
      "Standard cloud-native target architectures defined for key modernization patterns",
      "Cost ranges and effort estimates created for modernization patterns across all entities",
    ],
    contribution: [
      "Designed and implemented the central application repository framework",
      "Drove alignment workshops with 9 entity architecture teams",
      "Built Power BI dashboards for cross-entity application comparisons",
      "Developed business fit/tech fit scoring models for prioritization",
      "Co-authored reference architecture templates for the modernization playbook",
      "Shaped standardization strategy and costing frameworks",
    ],
  },
  {
    slug: "database-discovery-denmark",
    title: "Database Discovery for a Leading Danish Insurance Company",
    shortTitle: "DB Discovery – Denmark",
    year: "2024",
    duration: "4 months",
    client: "Leading Insurance Provider (Denmark)",
    industry: "Insurance",
    role: "Lead – Database Discovery & Modernization Strategy",
    categories: ["Strategy"],
    technologies: ["DB2 z/OS", "VSAM", "JCL", "COBOL", "Assembler", "Azure SQL", "Java", "Microservices"],
    tagline: "Deep discovery uncovering assembler exits and a phased cloud migration path",
    stat: { value: "100%", label: "DB2 Object Inventory" },
    overview:
      "Led a 4-month discovery engagement to audit the complete mainframe landscape for a leading Danish insurance company, including deep analysis of stored procedures, UDFs, assembler exits, and batch chains — resulting in a phased modernization roadmap.",
    objectives: [
      "Audit the full system landscape across applications, databases, and batch jobs",
      "Identify modernization blockers — particularly non-portable Assembler exits",
      "Complete DB2 DDL inventory and data model evaluation",
      "Deep analysis of stored procedures, UDFs, and assembler exits",
      "Design a future-ready target architecture on cloud",
    ],
    outcomes: [
      "Comprehensive inventory of all DB2 objects — SPs, UDFs, tables, indexes",
      "Data access logic mapped to modernization-ready service blueprints",
      "Assembler exit logic fully documented with modernization blockers identified",
      "Phased migration plan for batch processing and file transfers created",
      "Target state architecture and data modernization playbook delivered",
    ],
    contribution: [
      "Created comprehensive inventory of all DB2 objects across the landscape",
      "Mapped complex data access logic to modernization-ready service blueprints",
      "Documented assembler exit logic and identified key portability blockers",
      "Proposed a phased migration plan covering batch processing and file transfers",
      "Designed the target state architecture and authored the modernization playbook",
    ],
    challenges: [
      {
        title: "Assembler Exits",
        solution:
          "Custom DB2 intercept logic embedded as assembler exits is non-portable. Documented each exit's behavior to enable Java replacements in the target architecture.",
      },
      {
        title: "High-Volume Batch",
        solution:
          "Nightly batch jobs transferring high volumes of data through JCL chains were mapped to equivalent cloud-native orchestration patterns.",
      },
      {
        title: "VSAM Dependency",
        solution:
          "Thousands of VSAM files managed via COBOL/FTP were inventoried and migration paths to Azure storage defined.",
      },
    ],
  },
  {
    slug: "mainframe-discovery-japan",
    title: "Mainframe Discovery for Global Insurance in Japan",
    shortTitle: "Mainframe Discovery – Japan",
    year: "2024",
    duration: "3 months",
    client: "Major Insurance Provider (Japan)",
    industry: "Insurance",
    role: "Lead Discovery Consultant",
    categories: ["Strategy"],
    technologies: ["COBOL", "DB2 z/OS", "VSAM", "JCL", "Oracle Cloud (OCI)", "AWS", "Bash", "Excel Macros"],
    tagline: "Discovery revealing 80% redundant code and a clear AWS target architecture",
    stat: { value: "~80%", label: "Redundant Logic Found" },
    overview:
      "Led a 3-month mainframe discovery engagement for a major Japanese insurance provider with decades of COBOL and DB2-based systems, uncovering significant technical debt and defining a cloud-aligned target architecture on AWS.",
    objectives: [
      "Understand the current application landscape and system interdependencies",
      "Audit source code and database layers for complexity and modernization readiness",
      "Quantify the degree of technical debt and code redundancy",
      "Propose a cloud-aligned target architecture",
      "Create mappings: Module ↔ Copybook, Program ↔ Table, JCL ↔ Batch Schedule",
    ],
    outcomes: [
      "~80% of programs found to contain unused or duplicated logic",
      "Incremental coding patterns identified (new logic appended rather than edited)",
      "Many stored procedures performing business logic via embedded dynamic SQL flagged",
      "Target architecture defined on AWS (EC2, Aurora PostgreSQL, Lambda, CloudWatch)",
      "Terraform templates recommended for infrastructure as code",
    ],
    contribution: [
      "Led all phases of the discovery and mining project",
      "Performed static analysis and manual code review across COBOL programs",
      "Created Module ↔ Copybook, Program ↔ Table, JCL ↔ Batch Schedule mappings",
      "Provided target architecture recommendations aligned with AWS best practices",
    ],
    challenges: [
      {
        title: "Incremental Coding Culture",
        solution:
          "Programmers had appended new logic rather than editing existing programs for decades, with rollback done by commenting out code. Static analysis tooling helped identify and isolate active logic from dead code.",
      },
      {
        title: "Dynamic SQL in Stored Procedures",
        solution:
          "Business logic was embedded in stored procedures using dynamic SQL, making static analysis insufficient. Manual review was required to extract and document these rules.",
      },
    ],
  },
  {
    slug: "db2-oracle-migration",
    title: "Data Migration for a Large Insurance Company in the Netherlands",
    shortTitle: "DB2 → Oracle Migration",
    year: "2021–2023",
    duration: "Multi-phase, 2 years",
    client: "Major Insurance Provider (Netherlands)",
    industry: "Insurance",
    role: "Lead – Data Migration Workstream",
    categories: ["Migration"],
    technologies: [
      "COBOL", "DB2", "IMS", "VSAM", "Oracle", "MS SQL Server",
      "Java", "Bash", "Python", "FTP", "SQL*Loader",
    ],
    tagline: "2500+ GB migrated across 170 applications with zero production incidents",
    stat: { value: "2500+ GB", label: "Data Migrated" },
    overview:
      "Architected and led the complete data migration workstream for a legacy-to-modern infrastructure transition covering 170 applications across 3 mainframe LPARs and 2500+ GB of production data, delivered across multiple go-live phases over 2 years.",
    objectives: [
      "Migrate legacy systems (COBOL, DB2, IMS, VSAM) to modern x86 infrastructure",
      "Ensure data accuracy, integrity, and full audit traceability",
      "Implement repeatable, automated migration pipelines",
      "Handle complex data types including LOBs, CLOBs, BLOBs, and XML",
    ],
    outcomes: [
      "Successful migration of 2500+ GB of production data across 170 applications",
      "Three major go-lives completed without production incidents",
      "Audit-approved logs and artifacts created for every data movement",
      "Reusable tooling built for future mainframe exit programs",
      "Database performance tuning and index optimization completed post-migration",
    ],
    contribution: [
      "Architected the entire data migration pipeline from design to production",
      "Developed Python and Bash scripts for DB2-to-Oracle DDL conversion",
      "Automated DB2 data unload using DSN Utility with mainframe-side EBCDIC conversion",
      "Designed 3-layer validation strategy: row count, SHA-256 hash, deep diff",
      "Built SQL*Loader jobs for high-performance data loading into Oracle",
      "Built dashboards and log pipelines for migration audit and traceability",
    ],
    challenges: [
      {
        title: "CHAR Padding (DB2 vs Oracle)",
        solution:
          "DB2 treats trailing spaces as insignificant; Oracle doesn't in PreparedStatements. Implemented RPAD solution to normalize string comparison behavior across both platforms.",
      },
      {
        title: "EBCDIC → UTF-8 Encoding Corruption",
        solution:
          "Improper conversion was corrupting special characters. Moved the conversion to the mainframe side using DSN Utility before the data left the z/OS environment.",
      },
      {
        title: "Sort Order Mismatch",
        solution:
          "Mainframe and Oracle sort sequences differ for special characters. Added explicit ORDER BY clauses to all queries to enforce deterministic ordering.",
      },
      {
        title: "Junk Characters in LOB/XML",
        solution:
          "Character data stored in binary columns produced garbage on extraction. Implemented field-level cleansing logic with validation rules before loading.",
      },
    ],
  },
  {
    slug: "db2-support-automotive",
    title: "Third-Level Mainframe Support & DB2 Optimization – Global Automotive",
    shortTitle: "L3 Support – Automotive",
    year: "2017–2021",
    duration: "~4 years",
    client: "Leading German Automobile Manufacturer (After-Sales Division)",
    industry: "Automotive",
    role: "Mainframe SME → Onsite Team Lead (Wolfsburg)",
    categories: ["Support"],
    technologies: ["COBOL", "DB2", "JCL", "VSAM", "RACF", "CA7", "File-Aid", "Abend-AID", "ITIL"],
    tagline: "4-year journey from analyst to onsite lead at Wolfsburg headquarters",
    stat: { value: "4 yrs", label: "Tenure & Growth" },
    overview:
      "Provided third-level production support for mission-critical after-sales mainframe systems at a global German automotive manufacturer, progressing from analyst to SME to onsite team lead in Wolfsburg over 4 years.",
    objectives: [
      "Provide L3 production support for dealer parts, vehicle history, warranty, and logistics systems",
      "Maintain and optimize DB2 database performance across critical workloads",
      "Support releases and ensure operational continuity",
      "Build client relationships and onshore delivery coordination capability",
    ],
    outcomes: [
      "Resolved long-standing production bugs through targeted DB2 query rewrites",
      "Delivered root cause analysis reports for client consumption and audit",
      "Improved system resilience through access controls and job restart logic",
      "Drafted SOPs for major DB2 administration activities",
      "Built strong client relationships with application managers and operations leads",
    ],
    contribution: [
      "Diagnosed and resolved application abends using Abend-AID and File-Aid",
      "Supported CA7 job chains, DB2 query optimization, and JCL updates",
      "Coordinated with client architects on DB2 schema changes and releases",
      "Managed change tickets and testing sign-offs for production deployments",
      "Mentored junior analysts and built team knowledge through SOPs",
      "Developed dashboards tracking incidents, SLAs, and resolution metrics",
    ],
  },
  {
    slug: "medicaid-development",
    title: "Mainframe Application Development – U.S. Medicaid Insurance",
    shortTitle: "Medicaid Development",
    year: "2015–2017",
    duration: "~2 years",
    client: "Major U.S. Medicaid & Health Insurance Provider",
    industry: "Insurance",
    role: "COBOL Developer – Batch Systems",
    categories: ["Support"],
    technologies: ["COBOL", "JCL", "DB2 z/OS", "VSAM", "Endevor", "File-Aid"],
    tagline: "Career foundation: production-grade COBOL development for Medicaid claims processing",
    stat: { value: "Zero", label: "Defects in SIT/UAT" },
    overview:
      "Built production-grade COBOL batch applications for Medicaid claims processing and member eligibility at a major US health insurance provider — the engagement that built the technical foundation for everything that followed.",
    objectives: [
      "Automate key Medicaid claims processing functions",
      "Reduce dependency on manual workflows in eligibility and rejection processing",
      "Improve compliance and batch throughput",
    ],
    outcomes: [
      "Wrote production-grade COBOL code running daily in batch mode",
      "Delivered zero-defect code during SIT/UAT cycles",
      "Built proficiency in Endevor, File-Aid, SPUFI, and DB2 tooling",
      "Gained deep exposure to insurance data structures and US Medicaid systems",
      "Developed strong mainframe debugging and log analysis skills",
    ],
    contribution: [
      "Owned full development lifecycle — requirements, design, coding, testing, deployment",
      "Converted functional user stories into COBOL technical design specs",
      "Developed core COBOL batch logic for file handling, eligibility validation, and DB2 DML",
      "Set up JCL for batch jobs, restarts, and scheduling",
      "Promoted code through Endevor change management with full documentation",
    ],
  },
  {
    slug: "cloud-migration-strategy-banking",
    title: "Cloud Migration Discovery & Roadmap – Regulated Enterprise Platform",
    shortTitle: "Cloud Migration Strategy",
    year: "2025",
    duration: "Multi-month discovery engagement",
    client: "Regulated Enterprise Organization (Banking)",
    industry: "Banking",
    role: "Senior Consultant – Discovery Lead, Architecture Options, Governance Alignment",
    categories: ["Strategy"],
    technologies: ["AWS", "Azure", "Hybrid Architecture", "Cloud Integration Patterns"],
    tagline: "End-to-end dependency mapping and phased roadmap for a complex regulated platform",
    stat: { value: "7–8", label: "Teams Aligned" },
    overview:
      "Led a multi-phase discovery and strategy engagement for a regulated banking platform to define a pragmatic modernization path balancing compliance, performance sensitivity, and hybrid on-prem/cloud constraints.",
    objectives: [
      "Define a pragmatic modernization path for a complex application landscape",
      "Create a fact-based, team-aligned modernization strategy",
      "Develop a phased migration roadmap with clear prerequisites",
      "Balance risk, feasibility, and modernization value across teams",
    ],
    outcomes: [
      "Consolidated technical understanding across 7–8 independent teams",
      "End-to-end dependency and integration map created",
      "Multiple target-state architecture options defined with clear trade-offs",
      "Three-phase roadmap delivered with risk register and executive narrative",
      "Early-win opportunities identified to build stakeholder confidence",
    ],
    contribution: [
      "Led discovery workshops across 7–8 independent application teams",
      "Created consolidated end-to-end dependency and integration picture",
      "Defined architecture option narratives with pros, cons, and fit analysis",
      "Shaped the phased roadmap structure and rationale",
      "Acted as bridge between engineering teams and governance stakeholders",
      "Authored the executive narrative deck for leadership decision-making",
    ],
    challenges: [
      {
        title: "Fragmented Visibility",
        solution:
          "No single team had a full picture of cross-system dependencies. Ran structured discovery workshops with each team to build a unified dependency map.",
      },
      {
        title: "Hybrid Constraints",
        solution:
          "On-prem/cloud constraints ruled out simple lift-and-shift. A transitional hybrid architecture was designed as a mandatory intermediate state.",
      },
      {
        title: "Governance Complexity",
        solution:
          "Compliance and governance requirements varied by component. Early governance alignment was treated as a delivery accelerator, not a blocker.",
      },
    ],
  },
  {
    slug: "ai-business-rules-banking",
    title: "Mainframe Modernization & Java Migration Support – Regulated Banking Platform",
    shortTitle: "AI Business Rules & Java",
    year: "2025",
    duration: "4-month engagement",
    client: "Regulated Banking Platform",
    industry: "Banking",
    role: "Consultant – COBOL Analysis, Rule Reconciliation, Java Mapping",
    categories: ["PoC", "Migration"],
    technologies: ["COBOL", "DB2", "Java", "Spring Boot", "DIH", "EGP", "SQL"],
    tagline: "AI-assisted COBOL rule extraction enabling Java migration with full traceability",
    stat: { value: "AI", label: "Rule Extraction Engine" },
    overview:
      "Supported migration of legacy COBOL business logic into Java for a regulated banking platform, replacing DB2 UNLOAD-based pipelines with DIH-sourced, Java-transformed EGP containers — using AI-assisted tools to extract and reconcile rules directly from source code.",
    objectives: [
      "Extract transformation logic from legacy COBOL programs with full traceability",
      "Replace DB2 UNLOAD-based pipelines with DIH-sourced, Java-transformed flows",
      "Ensure consistency across data logic and integration points",
      "Reduce migration risk and avoid silent behavioral drift in generated Java",
    ],
    outcomes: [
      "Transformation logic extracted directly from COBOL with AI-assisted parsing",
      "COBOL-derived rules mapped to documented business rules for reconciliation",
      "Discrepancies between COBOL logic and business definitions surfaced for client sign-off",
      "Java implementation guidance provided with implementable mapping documentation",
      "Test scenarios designed rooted in legacy COBOL behavior for full coverage",
    ],
    contribution: [
      "Led client discussions on rule clarity, accuracy, and sign-off",
      "Analyzed COBOL programs using AI-assisted tooling to extract complex business rules",
      "Mapped extracted rules to DIH field availability for implementation",
      "Provided Java developers with implementable, traceable mapping guidance",
      "Enabled test scenario design grounded in legacy COBOL behavior",
      "Provided onsite support for client presentations and validation sessions",
    ],
    challenges: [
      {
        title: "Undocumented Legacy Logic",
        solution:
          "COBOL programs contained undocumented transformations with no accompanying specifications. AI-assisted parsing was used to extract and surface logic that would otherwise require weeks of manual analysis.",
      },
      {
        title: "Behavioral Drift Risk",
        solution:
          "Generating Java purely from business definitions risked silent drift from actual COBOL behavior. Rule reconciliation workshops surfaced discrepancies for explicit client validation before Java was written.",
      },
    ],
  },
];
