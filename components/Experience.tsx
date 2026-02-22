"use client";

import { experience } from "@/data/experience";
import AnimateOnScroll from "./AnimateOnScroll";
import { asset } from "@/lib/basePath";

export default function Experience() {
  return (
    <section id="experience" className="bg-bg-dark/30">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-label">Career</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mb-12">
            Ten years building expertise at the intersection of legacy systems and modern infrastructure.
          </p>
        </AnimateOnScroll>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brand/60 via-brand/20 to-transparent hidden md:block" />

          <div className="flex flex-col gap-12">
            {experience.map((entry, i) => (
              <AnimateOnScroll key={entry.id} delay={i * 0.1}>
                <div className="md:pl-10 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-brand hidden md:block -translate-x-[3px]" />

                  <div className="card">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={asset(entry.logo)}
                          alt={entry.company}
                          className="h-7 w-auto object-contain opacity-80"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-ink">
                            {entry.role}
                          </h3>
                          <p className="text-sm text-ink-muted">
                            {entry.company} · {entry.location}
                          </p>
                        </div>
                      </div>
                      <span className="tag bg-brand-100 text-brand whitespace-nowrap text-xs">
                        {entry.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-2.5 mb-5">
                      {entry.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="mt-2 w-1 h-1 rounded-full bg-brand/50 flex-shrink-0" />
                          <span className="text-sm text-ink-light leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Photos */}
                    {entry.photos.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-bg-dark">
                        {entry.photos.map((photo, j) => (
                          <img
                            key={j}
                            src={asset(photo.src)}
                            alt={photo.alt}
                            className="h-16 w-24 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        ))}
                      </div>
                    )}
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
