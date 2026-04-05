'use client';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from '@/app/_components/ui/AnimatedSection';

export default function CtaBento() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Warm editorial bg */}
      <div className="absolute inset-0 bg-[#faf9f7] dark:bg-[#121110]" />
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #d4d0c8 0.8px, transparent 0.8px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <AnimatedSection animation="fade-in">
          <div className="max-w-xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 sm:p-10 shadow-sm">
            <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-4">
              Next step
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
              Your project won&rsquo;t build itself.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Tell us what&rsquo;s slowing you down. We&rsquo;ll tell you how to
              fix it — even if that means you don&rsquo;t need us.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get in touch
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                aria-hidden
              />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
