"use client";

import { bridgeIntro, bridgePoints } from "@/data/bridge";
import AnimateOnScroll from "./AnimateOnScroll";
import { Combine, Layers, MessagesSquare, Globe, type LucideIcon } from "lucide-react";
import { asset } from "@/lib/basePath";

const icons: Record<string, LucideIcon> = {
  Combine,
  Layers,
  MessagesSquare,
  Globe,
};

export default function Bridge() {
  return (
    <section id="bridge">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-label">What makes me different</p>
          <h2 className="section-title">The bridge between business and tech</h2>
          <p className="section-subtitle mb-12">{bridgeIntro}</p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
          {/* Points */}
          <div className="grid sm:grid-cols-2 gap-5">
            {bridgePoints.map((point, i) => {
              const Icon = icons[point.icon] ?? Combine;
              return (
                <AnimateOnScroll key={point.title} delay={i * 0.08}>
                  <div className="card h-full">
                    <span className="w-10 h-10 rounded-xl bg-brand-100 text-brand flex items-center justify-center mb-4">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-serif text-base font-semibold text-ink mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-ink-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Supporting image */}
          <AnimateOnScroll delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-brand to-brand-light opacity-20 blur-sm" />
              <img
                src={asset("/assets/personal/cafe-work.jpeg")}
                alt="Prathmesh working from a café in Germany"
                className="relative w-full rounded-2xl shadow-lg object-cover aspect-[4/5]"
              />
              <p className="text-xs text-ink-muted mt-3 text-center italic">
                Between the business and the build — where the real work happens.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
