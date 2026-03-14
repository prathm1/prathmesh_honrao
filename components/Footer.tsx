"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/prathmesh-portfolio/pageviews/up")
      .then((r) => r.json())
      .then((data) => setVisitors(data.count ?? data.value ?? null))
      .catch(() => {});
  }, []);

  return (
    <footer className="border-t border-bg-dark bg-bg">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
        <p>
          &copy; {year} Prathmesh Honrao. All rights reserved.
        </p>
        <div className="flex items-center gap-4 font-mono">
          {visitors !== null && (
            <span>{visitors.toLocaleString()} visits</span>
          )}
          <span>Built with Next.js · TypeScript · Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
