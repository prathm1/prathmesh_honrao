"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects, type ProjectCategory, type Industry } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import IndustryChart from "./IndustryChart";
import SkillCloud from "./SkillCloud";
import AnimateOnScroll from "./AnimateOnScroll";

const industryTagClass: Record<Industry, string> = {
  Insurance: "tag-insurance",
  Automotive: "tag-automotive",
  Banking: "tag-banking",
};

// The lanes, in priority order. Each project is shown once, in its primary lane.
const lanes: { key: ProjectCategory; label: string; blurb: string }[] = [
  {
    key: "Strategy",
    label: "Strategy & Discovery",
    blurb: "Mapping complex landscapes and defining the path forward.",
  },
  {
    key: "Migration",
    label: "Migration",
    blurb: "Moving production systems off the mainframe — safely.",
  },
  {
    key: "PoC",
    label: "Proofs of Concept",
    blurb: "Proving new approaches work before the big bet.",
  },
  {
    key: "Support",
    label: "Build & Support",
    blurb: "Developing and running mission-critical systems.",
  },
];

const lanePriority: ProjectCategory[] = ["Strategy", "Migration", "PoC", "Support"];

function primaryLane(categories: ProjectCategory[]): ProjectCategory {
  for (const lane of lanePriority) {
    if (categories.includes(lane)) return lane;
  }
  return categories[0];
}

export default function Projects() {
  return (
    <section id="projects" className="bg-bg-dark/30">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-label">Work</p>
          <h2 className="section-title">What I&apos;ve delivered</h2>
          <p className="section-subtitle mb-12">
            Nine major engagements across insurance, automotive, and banking —
            grouped by the kind of work, so you can see the full range at a glance.
          </p>
        </AnimateOnScroll>

        {/* Industry exposure + Skill cloud overview */}
        <div className="grid md:grid-cols-[auto_1fr] gap-10 mb-16 items-start">
          <AnimateOnScroll delay={0.1}>
            <div className="card min-w-0">
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-4">
                Industry Exposure
              </p>
              <IndustryChart />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="card h-full">
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-4">
                Areas of Expertise
              </p>
              <SkillCloud />
            </div>
          </AnimateOnScroll>
        </div>

        {/* Capability lanes */}
        <div className="flex flex-col gap-14">
          {lanes.map((lane) => {
            const laneProjects = projects
              .filter((p) => primaryLane(p.categories) === lane.key)
              .sort((a, b) => b.year.localeCompare(a.year));

            if (laneProjects.length === 0) return null;

            return (
              <div key={lane.key}>
                {/* Lane header */}
                <AnimateOnScroll>
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-serif text-xl font-semibold text-ink">
                      {lane.label}
                    </h3>
                    <span className="h-px flex-1 bg-bg-dark" />
                    <span className="font-mono text-xs text-ink-muted">
                      {laneProjects.length}
                    </span>
                  </div>
                  <p className="text-sm text-ink-muted mb-6">{lane.blurb}</p>
                </AnimateOnScroll>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {laneProjects.map((project, i) => (
                    <AnimateOnScroll key={project.slug} delay={i * 0.05}>
                      <Link href={`/projects/${project.slug}`} className="group block h-full">
                        <motion.div
                          whileHover={{ y: -3 }}
                          className="card h-full flex flex-col group-hover:shadow-md transition-shadow"
                        >
                          {/* Outcome first */}
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div>
                              <p className="font-serif text-2xl font-bold text-brand leading-none">
                                {project.stat.value}
                              </p>
                              <p className="text-[11px] text-ink-muted mt-1">
                                {project.stat.label}
                              </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-end gap-1.5">
                              <span className="tag bg-bg-dark text-ink-muted text-[10px]">
                                {project.year}
                              </span>
                              <span className={`tag text-[10px] ${industryTagClass[project.industry]}`}>
                                {project.industry}
                              </span>
                            </div>
                          </div>

                          <h4 className="font-serif text-base font-semibold text-ink mb-1.5 group-hover:text-brand transition-colors leading-snug">
                            {project.shortTitle}
                          </h4>
                          <p className="text-sm text-ink-light leading-relaxed flex-1">
                            {project.tagline}
                          </p>

                          <span className="flex items-center gap-1 text-xs font-semibold text-brand group-hover:gap-2 transition-all mt-4">
                            Deep dive
                            <ArrowUpRight size={13} />
                          </span>
                        </motion.div>
                      </Link>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
