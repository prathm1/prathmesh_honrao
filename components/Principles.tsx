"use client";

import { principlesIntro, principles } from "@/data/principles";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Principles() {
  return (
    <section id="principles">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-label">How I think</p>
          <h2 className="section-title">Principles I keep coming back to</h2>
          <p className="section-subtitle mb-12">{principlesIntro}</p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-5">
          {principles.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 0.06}>
              <div className="card h-full flex gap-4">
                <span className="font-serif text-2xl font-bold text-brand/40 leading-none mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-base font-semibold text-ink mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
