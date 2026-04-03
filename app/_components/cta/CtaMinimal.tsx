'use client';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CtaMinimal() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white">
          Got a project in mind?
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            Let&rsquo;s talk about it
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}
