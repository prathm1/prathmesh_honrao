import { profile } from "@/data/profile";
import AnimateOnScroll from "./AnimateOnScroll";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand/5 border-t border-brand/10">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Contact</h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10 mt-4">
          {/* Left: text */}
          <AnimateOnScroll delay={0.1}>
            <p className="text-ink-muted leading-relaxed mb-6">
              Open to conversations about modernization strategy, consulting
              engagements, technical deep-dives, and advisory roles. If you are
              working on something at the intersection of legacy and modern
              infrastructure — happy to connect.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-bg-card border border-bg-dark rounded-xl px-5 py-3 hover:border-brand hover:shadow-sm transition-all duration-200"
              >
                <Linkedin size={18} className="text-brand" />
                <div>
                  <p className="text-sm font-semibold text-ink">LinkedIn</p>
                  <p className="text-xs text-ink-muted">
                    /in/honraoprathmesh
                  </p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-bg-card border border-bg-dark rounded-xl px-5 py-3 hover:border-brand hover:shadow-sm transition-all duration-200"
              >
                <Github size={18} className="text-ink" />
                <div>
                  <p className="text-sm font-semibold text-ink">GitHub</p>
                  <p className="text-xs text-ink-muted">@prathm1</p>
                </div>
              </a>

              <a
                href="mailto:honraoprathmesh@gmail.com"
                className="group inline-flex items-center gap-3 bg-bg-card border border-bg-dark rounded-xl px-5 py-3 hover:border-brand hover:shadow-sm transition-all duration-200"
              >
                <Mail size={18} className="text-brand" />
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <p className="text-xs text-ink-muted">Get in touch directly</p>
                </div>
              </a>
            </div>
          </AnimateOnScroll>

          {/* Right: philosophy */}
          <AnimateOnScroll delay={0.2}>
            <div className="card border-l-4 border-l-brand h-full flex flex-col justify-center gap-5">
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
                Working Philosophy
              </p>
              {profile.workPhilosophy.map((p, i) => (
                <p key={i} className="text-ink-light leading-relaxed text-sm italic">
                  &ldquo;{p}&rdquo;
                </p>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
