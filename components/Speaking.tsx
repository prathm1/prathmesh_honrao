"use client";

import { speakingIntro, workshopTopics, talks } from "@/data/speaking";
import AnimateOnScroll from "./AnimateOnScroll";
import { Database, Server, Network, Mic, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Database,
  Server,
  Network,
};

export default function Speaking() {
  return (
    <section id="speaking">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-brand-100 text-brand flex items-center justify-center">
              <Mic size={16} />
            </span>
            <p className="section-label mb-0">An edge of mine</p>
          </div>
          <h2 className="section-title">Speaking &amp; workshops</h2>
          <p className="section-subtitle mb-12">{speakingIntro}</p>
        </AnimateOnScroll>

        {/* Topics */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {workshopTopics.map((topic, i) => {
            const Icon = icons[topic.icon] ?? Mic;
            return (
              <AnimateOnScroll key={topic.title} delay={i * 0.08}>
                <div className="card h-full">
                  <span className="w-10 h-10 rounded-xl bg-brand-100 text-brand flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-serif text-base font-semibold text-ink mb-1.5">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-ink-light leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Engagements */}
        <div className="grid sm:grid-cols-2 gap-5">
          {talks.map((talk, i) => (
            <AnimateOnScroll key={talk.title} delay={i * 0.08}>
              <div className="card h-full border-l-4 border-l-brand/40">
                <h3 className="font-serif text-base font-semibold text-ink mb-1">
                  {talk.title}
                </h3>
                <p className="text-xs font-semibold text-brand mb-2">{talk.audience}</p>
                <p className="text-sm text-ink-light leading-relaxed">{talk.note}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
