"use client";

import { journey } from "@/data/journey";
import AnimateOnScroll from "./AnimateOnScroll";
import { Check } from "lucide-react";

export default function Journey() {
  return (
    <section id="journey" className="bg-bg-dark/30">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-label">How I grew</p>
          <h2 className="section-title">Ten years, one arc</h2>
          <p className="section-subtitle mb-12">
            I didn&apos;t start as a strategist. I started by writing code — and
            each step added a new skill and a new point of view. Here&apos;s the path.
          </p>
        </AnimateOnScroll>

        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-brand/30 hidden sm:block" />

          <div className="flex flex-col gap-6">
            {journey.map((stage, i) => (
              <AnimateOnScroll key={stage.id} delay={i * 0.08}>
                <div className="relative sm:pl-10">
                  {/* Dot */}
                  <div className="absolute left-0 top-6 w-[15px] h-[15px] rounded-full bg-brand ring-4 ring-bg hidden sm:block" />

                  <div className="card">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-serif text-lg font-semibold text-ink">
                        {stage.title}
                      </h3>
                      <span className="font-mono text-xs font-semibold text-brand bg-brand-100 px-2 py-0.5 rounded-md">
                        {stage.period}
                      </span>
                    </div>
                    <p className="text-xs text-ink-muted mb-3">
                      {stage.company} · {stage.location}
                    </p>
                    <p className="text-sm text-ink-light leading-relaxed mb-4">
                      {stage.summary}
                    </p>

                    <p className="text-[11px] font-semibold text-ink-muted uppercase tracking-wider mb-2">
                      What this added
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {stage.gained.map((g) => (
                        <li key={g} className="flex items-start gap-2 text-sm text-ink-light">
                          <Check size={15} className="text-brand mt-0.5 flex-shrink-0" />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
