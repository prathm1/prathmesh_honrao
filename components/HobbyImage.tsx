"use client";

interface Props {
  src: string;
  alt: string;
  emoji: string;
}

export default function HobbyImage({ src, alt, emoji }: Props) {
  return (
    <div className="relative h-64 md:h-80 -mx-6 mb-8 overflow-hidden bg-bg-dark rounded-2xl">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          const el = e.target as HTMLImageElement;
          el.style.display = "none";
          if (el.parentElement) {
            el.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-8xl">${emoji}</div>`;
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent pointer-events-none" />
    </div>
  );
}
