import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/data/writing";
import { ArrowLeft, Clock } from "lucide-react";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} – Prathmesh Honrao`,
    description: post.excerpt,
  };
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-bg">
      <div className="sticky top-0 z-10 bg-bg/90 backdrop-blur-md border-b border-bg-dark">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link
            href="/writing"
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-brand transition-colors"
          >
            <ArrowLeft size={15} />
            All Writing
          </Link>
          <span className="text-ink-muted/40">/</span>
          <span className="text-sm text-ink truncate">{post.title}</span>
        </div>
      </div>

      <article className="max-w-2xl mx-auto px-6 py-12">
        <header className="mb-10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="tag bg-brand-100 text-brand text-xs">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-ink-muted">
            <Clock size={14} />
            {post.readTime}
            <span className="text-ink-muted/40">·</span>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </header>

        <div className="flex flex-col gap-5">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-ink-light leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-bg-dark">
          <Link href="/writing" className="text-sm text-brand hover:underline">
            ← Back to all writing
          </Link>
        </div>
      </article>
    </div>
  );
}
