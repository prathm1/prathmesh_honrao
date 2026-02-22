"use client";

import { motion } from "framer-motion";
import { industryData } from "@/data/skills";

export default function IndustryChart() {
  // Build conic gradient
  let cumulative = 0;
  const gradient = industryData
    .map(({ color, percent }) => {
      const start = cumulative;
      const end = cumulative + percent;
      cumulative = end;
      return `${color} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8">
      {/* Pie chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-shrink-0"
      >
        <div
          className="w-44 h-44 rounded-full shadow-md"
          style={{ background: `conic-gradient(${gradient})` }}
          role="img"
          aria-label="Industry exposure pie chart"
        />
      </motion.div>

      {/* Legend */}
      <div className="flex flex-col gap-3">
        {industryData.map(({ label, years, color, percent }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-3"
          >
            <span
              className="w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm text-ink-light font-medium">{label}</span>
            <span className="text-sm text-ink-muted">~{years} yrs</span>
            <span
              className="text-xs font-semibold px-1.5 py-0.5 rounded"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {percent}%
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
