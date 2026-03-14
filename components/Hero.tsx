"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Linkedin, ArrowDown } from "lucide-react";
import { asset } from "@/lib/basePath";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--brand) 1px, transparent 1px),
            linear-gradient(90deg, var(--brand) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-label"
            >
              {profile.currentRole} · {profile.currentCompany}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-[3.2rem] leading-tight text-ink mb-4"
            >
              {profile.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg text-ink-muted leading-relaxed mb-8 max-w-xl"
            >
              {profile.description}
            </motion.p>

            {/* Philosophy pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col gap-2 mb-10"
            >
              {profile.philosophy.map((p, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                  <p className="text-sm text-ink-light leading-snug">{p}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-brand-dark transition-colors shadow-sm"
              >
                View Projects
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-bg-dark bg-bg-card text-ink-light px-4 py-2.5 rounded-lg font-medium text-sm hover:border-brand hover:text-brand transition-colors"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Teal ring */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-brand to-brand-light opacity-30 blur-sm" />
              <img
                src={asset(profile.photo)}
                alt="Prathmesh Honrao"
                className="relative w-52 h-52 md:w-64 md:h-64 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {profile.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-bg-card border border-bg-dark rounded-xl px-5 py-4 text-center"
            >
              <p className="font-serif text-2xl font-bold text-brand">{stat.value}</p>
              <p className="text-xs text-ink-muted mt-0.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#experience"
            className="flex flex-col items-center gap-1 text-ink-muted hover:text-brand transition-colors"
            aria-label="Scroll to experience"
          >
            <span className="text-xs font-medium tracking-wider uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
