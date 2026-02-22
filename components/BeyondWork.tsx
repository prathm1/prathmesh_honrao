"use client";

import Link from "next/link";
import { hobbies } from "@/data/hobbies";
import AnimateOnScroll from "./AnimateOnScroll";
import { asset } from "@/lib/basePath";
import { ArrowUpRight } from "lucide-react";

export default function BeyondWork() {
  return (
    <section id="beyond">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-label">Personal</p>
          <h2 className="section-title">Beyond Work</h2>
          <p className="section-subtitle mb-12">
            The things that make the work more interesting — and the person more three-dimensional.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hobbies.map((hobby, i) => (
            <AnimateOnScroll key={hobby.slug} delay={i * 0.08}>
              <Link href={`/beyond/${hobby.slug}`} className="group block">
                <div className="card h-full overflow-hidden group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-40 -mx-6 -mt-6 mb-5 overflow-hidden bg-bg-dark">
                    <img
                      src={asset(hobby.image)}
                      alt={hobby.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.style.display = "none";
                        if (el.parentElement) {
                          el.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-5xl">${hobby.emoji}</div>`;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-base font-semibold text-ink mb-1 group-hover:text-brand transition-colors">
                        {hobby.title}
                      </h3>
                      <p className="text-xs text-ink-muted mb-3">{hobby.subtitle}</p>
                      <p className="text-sm text-ink-light leading-relaxed line-clamp-2">
                        {hobby.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-ink-muted group-hover:text-brand transition-colors flex-shrink-0 mt-1"
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {hobby.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="tag bg-bg-dark text-ink-muted text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
