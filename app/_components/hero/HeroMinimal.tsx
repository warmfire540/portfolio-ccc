'use client';

import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeroMinimal() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-zinc-950 dark:via-primary-950/20 dark:to-zinc-950" />

      <div className="relative z-10 max-w-4xl text-center">
        {/* Single powerful statement */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight">
          <span className="bg-[length:200%_auto] bg-gradient-to-r from-zinc-900 via-primary-600 to-zinc-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent animate-[shimmer_8s_ease-in-out_infinite]">
            Less duct tape. More done.
          </span>
        </h1>

        {/* Single CTA with generous spacing */}
        <div className="mt-16">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            Start a conversation
            <FontAwesomeIcon
              icon={faHandshake}
              className="w-4 h-4 group-hover:scale-105 transition-transform"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}
