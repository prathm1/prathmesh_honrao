"use client";

import { aiIntro, aiUses, aiPrinciple } from "@/data/ai";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  ScanSearch,
  FileText,
  GitCompareArrows,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  ScanSearch,
  FileText,
  GitCompareArrows,
  ShieldCheck,
};

export default function AIWork() {
  return (
    <section id="ai" className="relative overflow-hidden">
      {/* subtle brand wash to make this section stand out */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand/[0.06] via-transparent to-transparent pointer-events-none" />

      <div className="section-container relative">
        <AnimateOnScroll>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-brand text-bg flex items-center justify-center">
              <Sparkles size={16} />
            </span>
            <p className="section-label mb-0">What&apos;s latest</p>
          </div>
          <h2 className="section-title">AI as a force multiplier</h2>
          <p className="section-subtitle mb-12">{aiIntro}</p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {aiUses.map((use, i) => {
            const Icon = icons[use.icon] ?? Sparkles;
            return (
              <AnimateOnScroll key={use.title} delay={i * 0.08}>
                <div className="card h-full flex gap-4">
                  <span className="w-10 h-10 rounded-xl bg-brand-100 text-brand flex items-center justify-center flex-shrink-0">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-ink mb-1.5">
                      {use.title}
                    </h3>
                    <p className="text-sm text-ink-light leading-relaxed">
                      {use.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll delay={0.1}>
          <div className="card border-l-4 border-l-brand bg-brand/[0.03]">
            <p className="font-serif text-lg text-ink leading-relaxed italic">
              &ldquo;{aiPrinciple}&rdquo;
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
