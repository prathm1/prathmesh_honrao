import { education } from "@/data/education";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Education() {
  return (
    <section id="education">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-label">Academic</p>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle mb-12">
            Two degrees, ten years apart — one built how I think technically, the other how I think strategically.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((entry, i) => (
            <AnimateOnScroll key={entry.id} delay={i * 0.12}>
              <div className="card h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{entry.icon}</span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink">
                      {entry.degree}{" "}
                      <span className="text-brand">({entry.field})</span>
                    </h3>
                    <p className="text-sm text-ink-muted">
                      {entry.institution} · {entry.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="tag bg-brand-100 text-brand text-xs">
                    {entry.period}
                  </span>
                  {entry.recognition && (
                    <span className="tag bg-amber-50 text-amber-700 text-xs">
                      {entry.recognition}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-2 flex-1">
                  {entry.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="mt-2 w-1 h-1 rounded-full bg-brand/50 flex-shrink-0" />
                      <span className="text-sm text-ink-light leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
