"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory, type Industry } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import IndustryChart from "./IndustryChart";
import SkillCloud from "./SkillCloud";
import AnimateOnScroll from "./AnimateOnScroll";

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", "Strategy", "Migration", "PoC", "Support"];

const industryTagClass: Record<Industry, string> = {
  Insurance: "tag-insurance",
  Automotive: "tag-automotive",
  Banking: "tag-banking",
};

const categoryTagClass: Record<ProjectCategory, string> = {
  Strategy: "tag-strategy",
  Migration: "tag-migration",
  PoC: "tag-poc",
  Support: "tag-support",
};

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = projects.filter(
    (p) => filter === "All" || p.categories.includes(filter as ProjectCategory)
  );

  return (
    <section id="projects" className="bg-bg-dark/30">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-label">Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mb-12">
            Nine major engagements across insurance, automotive, and banking — strategy, migration, support, and everything in between.
          </p>
        </AnimateOnScroll>

        {/* Industry exposure + Skill cloud */}
        <div className="grid md:grid-cols-[auto_1fr] gap-10 mb-14 items-start">
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

        {/* Filter bar */}
        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === f
                    ? "bg-brand text-white shadow-sm"
                    : "bg-bg-card border border-bg-dark text-ink-muted hover:border-brand hover:text-brand"
                }`}
              >
                {f}
                {f !== "All" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    {projects.filter((p) => p.categories.includes(f as ProjectCategory)).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full"
                >
                  <div className="card h-full flex flex-col group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                    {/* Year + tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      <span className="tag bg-bg-dark text-ink-muted text-[10px]">
                        {project.year}
                      </span>
                      <span
                        className={`tag text-[10px] ${industryTagClass[project.industry]}`}
                      >
                        {project.industry}
                      </span>
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className={`tag text-[10px] ${categoryTagClass[cat]}`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-base font-semibold text-ink mb-2 group-hover:text-brand transition-colors leading-snug">
                      {project.shortTitle}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm text-ink-muted leading-relaxed flex-1 mb-4">
                      {project.tagline}
                    </p>

                    {/* Stat + CTA */}
                    <div className="flex items-center justify-between pt-3 border-t border-bg-dark">
                      <div>
                        <p className="font-serif text-lg font-bold text-brand">
                          {project.stat.value}
                        </p>
                        <p className="text-[10px] text-ink-muted">
                          {project.stat.label}
                        </p>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-semibold text-brand group-hover:gap-2 transition-all">
                        Deep Dive
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
