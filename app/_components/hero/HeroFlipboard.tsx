'use client';

import { faBinoculars, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SplitFlapCell, type SplitFlapSize } from './SplitFlapCell';

const EYEBROW = 'Curious Cat Consulting';
const HEADLINE = 'Your business deserves better tech.';
const BODY =
  "Your customers don't care about your tech stack. They care that everything just works.";

/** Stagger + deterministic jitter (avoids SSR/hydration random mismatch) */
function startDelayMsFor(delayIndex: number) {
  return delayIndex * 28 + ((delayIndex * 7919) % 200);
}

type FlapLineProps = Readonly<{
  text: string;
  size: SplitFlapSize;
  startIndex: number;
  brightFromWord?: number;
}>;

function FlapLine({ text, size, startIndex, brightFromWord }: FlapLineProps) {
  const upper = text.toUpperCase();
  const words = upper.split(/(\s+)/);
  let wordIndex = 0;
  let idx = startIndex;

  return (
    <div className="flex flex-wrap gap-y-2 gap-x-0">
      {words.map((segment, segI) => {
        if (/^\s+$/.test(segment)) {
          return (
            <span
              key={`ws-${segment}-${segI}`}
              className="inline-block w-[0.35em] sm:w-[0.45em] shrink-0"
            />
          );
        }
        const thisWord = wordIndex++;
        const bright =
          brightFromWord !== undefined && thisWord >= brightFromWord;
        return (
          <span key={`word-${segment}-${thisWord}`} className="inline-flex">
            {segment.split('').map((char, i) => {
              if (char === ' ') {
                return (
                  <span
                    key={`gap-${segment}-${char}-${i}`}
                    className="inline-block w-[0.35em] shrink-0"
                  />
                );
              }
              const delayIndex = idx++;
              return (
                <SplitFlapCell
                  key={`flap-${delayIndex}`}
                  targetChar={char}
                  startDelayMs={startDelayMsFor(delayIndex)}
                  size={size}
                  bright={bright}
                />
              );
            })}
          </span>
        );
      })}
    </div>
  );
}

export default function HeroFlipboard() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-stone-100 dark:bg-zinc-950">
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,130,40,0.06),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.06),transparent_55%)]" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-xl border-4 border-stone-300 bg-stone-50/95 dark:border-zinc-800 dark:bg-zinc-900/95 p-6 sm:p-8 md:p-10
              shadow-[inset_0_2px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.06),0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_24px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.45)]"
          >
            <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-5 mb-5">
              <p className="text-[0.65rem] text-amber-700/90 dark:text-amber-600/90 font-mono uppercase tracking-[0.35em] mb-1">
                Arrivals / Departures
              </p>
              <p className="text-xs sm:text-sm text-amber-800/80 dark:text-amber-300/80 font-mono uppercase tracking-[0.2em]">
                {EYEBROW}
              </p>
            </div>

            <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-6 mb-6">
              <FlapLine
                text={HEADLINE}
                size="lg"
                startIndex={0}
                brightFromWord={3}
              />
            </div>

            <div className="mb-10">
              <p className="text-sm sm:text-base text-amber-900/70 dark:text-amber-300/70 font-mono leading-relaxed max-w-2xl">
                {BODY}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 border-t border-stone-300/80 dark:border-zinc-800/80">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-mono text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                See how we work
                <FontAwesomeIcon
                  icon={faBinoculars}
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                  aria-hidden
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-stone-400 text-amber-900/90 dark:border-zinc-600 dark:text-amber-200/90 font-mono text-sm font-medium rounded-lg hover:border-amber-600/80 hover:text-amber-800 dark:hover:border-amber-700/80 dark:hover:text-amber-100 transition-colors"
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
      </div>
    </section>
  );
}
