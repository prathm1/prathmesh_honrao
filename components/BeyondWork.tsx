"use client";

import Link from "next/link";
import { hobbies } from "@/data/hobbies";
import { personalHighlights, photoStrip } from "@/data/personal";
import AnimateOnScroll from "./AnimateOnScroll";
import { asset } from "@/lib/basePath";
import {
  ArrowUpRight,
  BookOpen,
  Plane,
  Library,
  type LucideIcon,
} from "lucide-react";
import type { PublishedDraft } from "@/lib/content";

interface Props {
  drafts: PublishedDraft[];
}

const highlightIcons: Record<string, LucideIcon> = {
  BookOpen,
  Plane,
  Library,
};

export default function BeyondWork({ drafts }: Props) {
  return (
    <section id="beyond">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-label">Personal</p>
          <h2 className="section-title">Beyond work</h2>
          <p className="section-subtitle mb-12">
            The things that make the work more interesting — and the person more
            three-dimensional.
          </p>
        </AnimateOnScroll>

        {/* Life highlights: book teaser, travel, reading */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {personalHighlights.map((h, i) => {
            const Icon = highlightIcons[h.icon] ?? BookOpen;
            return (
              <AnimateOnScroll key={h.title} delay={i * 0.08}>
                <div
                  className={`card h-full ${
                    h.teaser ? "border-l-4 border-l-brand bg-brand/[0.03]" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-9 h-9 rounded-xl bg-brand-100 text-brand flex items-center justify-center">
                      <Icon size={17} />
                    </span>
                    {h.teaser && (
                      <span className="tag bg-brand-100 text-brand text-[10px]">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-base font-semibold text-ink mb-1.5">
                    {h.title}
                  </h3>
                  <p className="text-sm text-ink-light leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Hobby builds */}
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

        {/* Subtle, professional photo strip */}
        <AnimateOnScroll delay={0.1}>
          <div className="mt-12">
            <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-4">
              A few moments
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {photoStrip.map((photo) => (
                <figure key={photo.src} className="group relative overflow-hidden rounded-xl">
                  <img
                    src={asset(photo.src)}
                    alt={photo.caption}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent text-white text-[10px] leading-tight p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {drafts.length > 0 && (
          <div className="mt-10 flex flex-col gap-4">
            {drafts.map((draft, i) => (
              <AnimateOnScroll key={draft.slug} delay={i * 0.05}>
                <div className="card">
                  <p className="font-serif text-base font-semibold text-ink mb-2">{draft.title}</p>
                  <div
                    className="text-sm text-ink-light leading-relaxed prose prose-invert prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: draft.content }}
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
