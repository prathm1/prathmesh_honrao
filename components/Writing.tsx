import Link from "next/link";
import { posts } from "@/data/writing";
import { ArrowRight, Clock, PenSquare } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import type { PublishedDraft } from "@/lib/content";

interface Props {
  drafts: PublishedDraft[];
}

export default function Writing({ drafts }: Props) {
  const latest = posts.slice(0, 3);

  return (
    <section id="writing" className="bg-bg-dark/30">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <p className="section-label mb-0">Writing</p>
            <Link
              href="/writing"
              className="inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-dark transition-colors"
            >
              All posts
              <ArrowRight size={14} />
            </Link>
          </div>
          <h2 className="section-title">Notes from the Field</h2>
          <p className="section-subtitle mb-12">
            Short reflections on mainframe modernization, migrations, and what AI tooling actually changes.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-5">
          {latest.map((post, i) => (
            <AnimateOnScroll key={post.slug} delay={i * 0.05}>
              <Link href={`/writing/${post.slug}`} className="card h-full flex flex-col group">
                <div className="flex items-center gap-2 text-xs text-ink-muted mb-3">
                  <Clock size={13} />
                  {post.readTime}
                  <span className="text-ink-muted/40">·</span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </div>
                <h3 className="font-serif text-lg text-ink leading-snug mb-2 group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-light leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag bg-bg-dark text-ink-muted text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </AnimateOnScroll>
          ))}

          {drafts.map((draft, i) => (
            <AnimateOnScroll key={draft.slug} delay={(latest.length + i) * 0.05}>
              <div className="card h-full flex flex-col">
                <div className="flex items-center gap-2 text-xs text-ink-muted mb-3">
                  <PenSquare size={13} />
                  {new Date(draft.updated).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </div>
                <h3 className="font-serif text-lg text-ink leading-snug mb-2">{draft.title}</h3>
                <div
                  className="text-sm text-ink-light leading-relaxed flex-1 prose prose-sm max-w-none line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: draft.content }}
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
