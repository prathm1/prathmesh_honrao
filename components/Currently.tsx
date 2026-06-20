import { now } from "@/data/now";
import { Layers, Target, Lightbulb } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Currently() {
  return (
    <section id="now" className="bg-bg-dark/30">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <p className="section-label mb-0">Right Now</p>
            <span className="tag bg-brand-100 text-brand text-xs">
              Updated {now.updated}
            </span>
          </div>
          <h2 className="section-title">What I'm Working On</h2>
          <p className="section-subtitle mb-12">
            A live snapshot, not a brochure — the stack, the problem, and the idea on my mind this month.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-5">
          <AnimateOnScroll delay={0.05}>
            <div className="card h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg bg-brand-100 text-brand flex items-center justify-center">
                  <Layers size={16} />
                </span>
                <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
                  Tech Stack
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {now.techStack.map((tech) => (
                  <span key={tech} className="tag bg-bg-dark text-ink-light text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="card h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg bg-brand-100 text-brand flex items-center justify-center">
                  <Target size={16} />
                </span>
                <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
                  Problem I'm Solving
                </p>
              </div>
              <p className="text-sm text-ink-light leading-relaxed">{now.problem}</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="card h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg bg-brand-100 text-brand flex items-center justify-center">
                  <Lightbulb size={16} />
                </span>
                <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
                  Concept I Learned Recently
                </p>
              </div>
              <p className="text-sm text-ink-light leading-relaxed">{now.conceptLearned}</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
