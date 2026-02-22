import { notFound } from "next/navigation";
import Link from "next/link";
import { hobbies } from "@/data/hobbies";
import { ArrowLeft } from "lucide-react";
import HobbyImage from "@/components/HobbyImage";
import { asset } from "@/lib/basePath";

export async function generateStaticParams() {
  return hobbies.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hobby = hobbies.find((h) => h.slug === slug);
  if (!hobby) return {};
  return {
    title: `${hobby.title} – Prathmesh Honrao`,
    description: hobby.description,
  };
}

export default async function BeyondPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hobby = hobbies.find((h) => h.slug === slug);
  if (!hobby) notFound();

  return (
    <div className="min-h-screen bg-bg">
      {/* Back nav */}
      <div className="sticky top-0 z-10 bg-bg/90 backdrop-blur-md border-b border-bg-dark">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link
            href="/#beyond"
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-brand transition-colors"
          >
            <ArrowLeft size={15} />
            Beyond Work
          </Link>
          <span className="text-ink-muted/40">/</span>
          <span className="text-sm text-ink truncate">{hobby.title}</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Hero image */}
        <HobbyImage src={asset(hobby.image)} alt={hobby.title} emoji={hobby.emoji} />

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {hobby.tags.map((tag) => (
              <span key={tag} className="tag bg-brand-100 text-brand text-xs">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-ink mb-2">
            {hobby.title}
          </h1>
          <p className="text-ink-muted">{hobby.subtitle}</p>
        </header>

        {/* Content */}
        <div className="prose prose-sm max-w-none">
          <p className="text-ink-light leading-relaxed text-base">
            {hobby.longDescription}
          </p>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-bg-dark">
          <Link
            href="/#beyond"
            className="inline-flex items-center gap-1.5 text-sm text-brand hover:underline"
          >
            <ArrowLeft size={14} />
            Back to Beyond Work
          </Link>
        </div>
      </article>
    </div>
  );
}
