export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bg-dark bg-bg">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
        <p>
          &copy; {year} Prathmesh Honrao. All rights reserved.
        </p>
        <p className="font-mono">
          Built with Next.js · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
