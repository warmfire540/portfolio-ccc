'use client';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from '@/app/_components/ui/AnimatedSection';

export default function CtaTerminal() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <AnimatedSection animation="fade-in">
          <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden shadow-sm">
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs font-mono text-zinc-400">
                ~/next-steps
              </span>
            </div>
            <div className="p-6 sm:p-8 font-mono text-sm space-y-3">
              <p className="text-zinc-400 dark:text-zinc-500">
                # You&rsquo;ve seen what we do. Here&rsquo;s the next step.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                <span className="text-emerald-600 dark:text-emerald-400">
                  $
                </span>{' '}
                curious-cat start-project --with-you
              </p>
              <p className="text-emerald-600 dark:text-emerald-400">
                &gt; Connection established. Let&rsquo;s build.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-mono text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-4 h-4"
                    aria-hidden
                  />
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
