"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { posts } from "@/data/writing";
import { now } from "@/data/now";
import { projects } from "@/data/projects";
import { PenLine, Radar, Briefcase, ArrowRight } from "lucide-react";

export default function Highlights() {
  const latestPost = posts[0];
  const latestProject = projects[0];

  const cards = [
    {
      icon: Radar,
      label: "Right Now",
      title: now.problem,
      href: "#now",
    },
    {
      icon: PenLine,
      label: "Latest Writing",
      title: latestPost.title,
      href: `/writing/${latestPost.slug}`,
    },
    {
      icon: Briefcase,
      label: "Latest Project",
      title: latestProject.shortTitle,
      href: `/projects/${latestProject.slug}`,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.75 }}
      className="mt-8 grid md:grid-cols-3 gap-3"
    >
      {cards.map(({ icon: Icon, label, title, href }) => (
        <Link
          key={label}
          href={href}
          className="group flex items-start gap-3 bg-bg-card border border-bg-dark rounded-xl px-4 py-3.5 hover:border-brand transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-brand-100 text-brand flex items-center justify-center flex-shrink-0">
            <Icon size={15} />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold text-ink-muted uppercase tracking-wider">
              {label}
            </p>
            <p className="text-sm text-ink leading-snug truncate group-hover:text-brand transition-colors">
              {title}
            </p>
          </div>
          <ArrowRight
            size={14}
            className="ml-auto mt-1.5 text-ink-muted/0 group-hover:text-brand group-hover:translate-x-0.5 transition-all flex-shrink-0"
          />
        </Link>
      ))}
    </motion.div>
  );
}
