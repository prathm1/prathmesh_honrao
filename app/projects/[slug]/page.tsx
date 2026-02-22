import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowLeft, Calendar, MapPin, Wrench, User } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.shortTitle} – Prathmesh Honrao`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const industryColor = {
    Insurance: "#2b7a78",
    Automotive: "#3f88c5",
    Banking: "#d07c3a",
  }[project.industry];

  return (
    <div className="min-h-screen bg-bg">
      {/* Back nav */}
      <div className="sticky top-0 z-10 bg-bg/90 backdrop-blur-md border-b border-bg-dark">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-brand transition-colors"
          >
            <ArrowLeft size={15} />
            All Projects
          </Link>
          <span className="text-ink-muted/40">/</span>
          <span className="text-sm text-ink truncate">{project.shortTitle}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            <span className="tag bg-bg-dark text-ink-muted text-xs">{project.year}</span>
            <span
              className="tag text-xs text-white"
              style={{ backgroundColor: industryColor }}
            >
              {project.industry}
            </span>
            {project.categories.map((c) => (
              <span key={c} className="tag bg-brand-100 text-brand text-xs">
                {c}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-ink-muted leading-relaxed">{project.tagline}</p>
        </header>

        <div className="grid md:grid-cols-[1fr_260px] gap-8 items-start">
          {/* Main content */}
          <div className="flex flex-col gap-8">
            {/* Overview */}
            <section>
              <h2 className="font-serif text-xl text-ink mb-3">Overview</h2>
              <p className="text-ink-light leading-relaxed">{project.overview}</p>
            </section>

            {/* Key Objective */}
            <section>
              <h2 className="font-serif text-xl text-ink mb-3">Objectives</h2>
              <ul className="flex flex-col gap-2.5">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span className="text-sm text-ink-light leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <section>
                <h2 className="font-serif text-xl text-ink mb-4">
                  Challenges & Solutions
                </h2>
                <div className="flex flex-col gap-3">
                  {project.challenges.map((ch, i) => (
                    <div
                      key={i}
                      className="card border-l-4 border-l-brand/40 py-4"
                    >
                      <p className="font-semibold text-sm text-ink mb-1.5">
                        {ch.title}
                      </p>
                      <p className="text-sm text-ink-light leading-relaxed">
                        {ch.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Outcomes */}
            <section>
              <h2 className="font-serif text-xl text-ink mb-3">Outcomes</h2>
              <ul className="flex flex-col gap-2.5">
                {project.outcomes.map((out, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span className="text-sm text-ink-light leading-relaxed">{out}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contribution */}
            <section>
              <h2 className="font-serif text-xl text-ink mb-3">My Contribution</h2>
              <ul className="flex flex-col gap-2.5">
                {project.contribution.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand/50 flex-shrink-0" />
                    <span className="text-sm text-ink-light leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-4 md:sticky md:top-20">
            {/* Key metric */}
            <div className="card text-center border border-brand/20 bg-brand/5">
              <p className="font-serif text-3xl font-bold text-brand">
                {project.stat.value}
              </p>
              <p className="text-xs text-ink-muted mt-1">{project.stat.label}</p>
            </div>

            {/* Metadata */}
            <div className="card flex flex-col gap-4">
              <div className="flex items-start gap-2.5">
                <Calendar size={14} className="text-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-ink-muted uppercase tracking-wider font-semibold">
                    Period
                  </p>
                  <p className="text-sm text-ink-light">{project.year}</p>
                  <p className="text-xs text-ink-muted">{project.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-ink-muted uppercase tracking-wider font-semibold">
                    Client
                  </p>
                  <p className="text-sm text-ink-light">{project.client}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <User size={14} className="text-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-ink-muted uppercase tracking-wider font-semibold">
                    Role
                  </p>
                  <p className="text-sm text-ink-light">{project.role}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Wrench size={14} className="text-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-ink-muted uppercase tracking-wider font-semibold mb-2">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tag bg-bg-dark text-ink-muted text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Back */}
            <Link
              href="/#projects"
              className="text-center text-sm text-brand hover:underline"
            >
              ← Back to all projects
            </Link>
          </aside>
        </div>
      </article>
    </div>
  );
}
