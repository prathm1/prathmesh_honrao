"use client";

import { motion } from "framer-motion";
import { cloudSkills } from "@/data/skills";

const sizeClasses = {
  xl: "text-xl font-bold text-brand",
  lg: "text-base font-semibold text-ink",
  md: "text-sm font-medium text-ink-light",
  sm: "text-xs text-ink-muted",
};

export default function SkillCloud() {
  return (
    <div
      className="flex flex-wrap gap-x-4 gap-y-2.5 items-baseline"
      role="list"
      aria-label="Key skills"
    >
      {cloudSkills.map((skill, i) => (
        <motion.span
          key={skill.label}
          role="listitem"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.6) }}
          className={`${sizeClasses[skill.size]} hover:text-brand transition-colors cursor-default leading-tight`}
        >
          {skill.label}
        </motion.span>
      ))}
    </div>
  );
}
