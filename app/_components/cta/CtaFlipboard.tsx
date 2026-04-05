'use client';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from '@/app/_components/ui/AnimatedSection';

export default function CtaFlipboard() {
  return (
    <section className="py-20 relative overflow-hidden bg-stone-100 dark:bg-zinc-950">
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <AnimatedSection animation="fade-in">
          <div className="max-w-2xl mx-auto rounded-xl border-4 border-stone-300 dark:border-zinc-800 bg-stone-50/95 dark:bg-zinc-900/95 p-8 sm:p-10 shadow-[inset_0_2px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_2px_24px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)]">
            <p className="text-[0.65rem] text-amber-700/90 dark:text-amber-600/90 font-mono uppercase tracking-[0.35em] mb-4">
              Now Boarding
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 dark:text-amber-100 font-mono mb-3">
              YOUR NEXT PROJECT
            </h2>
            <p className="text-sm sm:text-base text-amber-900/70 dark:text-amber-300/70 font-mono leading-relaxed mb-8 max-w-lg">
              We keep things simple: a quick call, a clear plan, and software
              that works for your business.
            </p>
            <div className="pt-2 border-t border-stone-300/80 dark:border-zinc-800/80">
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-mono text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
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
        </AnimatedSection>
      </div>
    </section>
  );
}
