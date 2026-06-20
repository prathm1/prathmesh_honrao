import Link from "next/link";
import { posts } from "@/data/writing";
import { ArrowLeft, Clock } from "lucide-react";

export const metadata = {
  title: "Writing – Prathmesh Honrao",
  description: "Notes on mainframe modernization, migrations, and AI-assisted engineering.",
};

export default function WritingIndexPage() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="sticky top-0 z-10 bg-bg/90 backdrop-blur-md border-b border-bg-dark">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-brand transition-colors"
          >
            <ArrowLeft size={15} />
            Home
          </Link>
          <span className="text-ink-muted/40">/</span>
          <span className="text-sm text-ink">Writing</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-3">
            Writing
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Notes on mainframe modernization, migrations, and what AI tooling actually changes.
          </p>
        </header>

        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="card group"
            >
              <div className="flex items-center gap-2 text-xs text-ink-muted mb-2">
                <Clock size={13} />
                {post.readTime}
                <span className="text-ink-muted/40">·</span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <h2 className="font-serif text-xl text-ink leading-snug mb-2 group-hover:text-brand transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-ink-light leading-relaxed mb-3">{post.excerpt}</p>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag bg-bg-dark text-ink-muted text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
