'use client';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlane } from '@fortawesome/free-solid-svg-icons';
import {
  SplitFlapCell,
  type SplitFlapSize,
} from '../hero/SplitFlapCell';
import { services, specializedServices } from './data';

/* ------------------------------------------------------------------ */
/*  Shared flipboard primitives                                        */
/* ------------------------------------------------------------------ */

function startDelayMsFor(delayIndex: number) {
  return delayIndex * 28 + ((delayIndex * 7919) % 200);
}

interface FlapLabelProps {
  text: string;
  size?: SplitFlapSize;
  startIndex?: number;
  bright?: boolean;
}

function FlapLabelInner({
  text,
  size = 'sm',
  startIndex = 0,
  bright,
}: Readonly<FlapLabelProps>) {
  const upper = text.toUpperCase();
  let idx = startIndex;

  return (
    <div className="inline-flex flex-wrap gap-y-1 gap-x-0">
      {upper.split('').map((char) => {
        if (char === ' ') {
          return (
            <span
              key={`sp-${idx++}`}
              className="inline-block w-[0.35em] sm:w-[0.45em] shrink-0"
            />
          );
        }
        const delayIndex = idx++;
        return (
          <SplitFlapCell
            key={`f-${delayIndex}`}
            targetChar={char}
            startDelayMs={startDelayMsFor(delayIndex)}
            size={size}
            bright={bright}
          />
        );
      })}
    </div>
  );
}

function FlapLabel(props: Readonly<FlapLabelProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[1.2rem]">
      {inView && <FlapLabelInner {...props} />}
    </div>
  );
}

function BoardPanel({
  children,
  className = '',
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div
      className={`rounded-xl border-2 border-stone-300 bg-stone-50/95 dark:border-zinc-800 dark:bg-zinc-900/95
        shadow-[inset_0_1px_12px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08)]
        dark:shadow-[inset_0_1px_12px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.03),0_8px_24px_rgba(0,0,0,0.35)]
        ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTag({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <p className="text-[0.6rem] text-amber-700/80 dark:text-amber-600/80 font-mono uppercase tracking-[0.35em] mb-1">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ServicesFlipboard() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden bg-stone-100 dark:bg-zinc-950"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,130,40,0.06),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.06),transparent_55%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Departures board */}
          <BoardPanel className="p-6 sm:p-8">
            {/* Board header */}
            <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-4 mb-6">
              <SectionTag>Service Departures</SectionTag>
              <FlapLabel text="Our Services" size="lg" bright />
            </div>

            <p className="text-xs sm:text-sm text-amber-900/60 dark:text-amber-300/60 font-mono leading-relaxed mb-6">
              Software development and consulting services to help businesses
              build, modernize, and optimize their digital solutions.
            </p>

            {/* Column headers */}
            <div className="hidden sm:grid grid-cols-[2rem_1fr_6rem_5rem] gap-3 px-3 mb-2">
              <span className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider">
                Gate
              </span>
              <span className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider">
                Destination
              </span>
              <span className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider text-center">
                Status
              </span>
              <span />
            </div>

            {/* Service rows */}
            <div className="space-y-0">
              {services.map((service, i) => {
                const isSelected = selected === service.id;
                return (
                  <div key={service.id}>
                    {i > 0 && (
                      <div
                        className="h-px bg-stone-300/60 dark:bg-zinc-800/60"
                        aria-hidden
                      />
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setSelected(isSelected ? null : service.id)
                      }
                      className={`w-full grid grid-cols-[2rem_1fr_auto] sm:grid-cols-[2rem_1fr_6rem_5rem] gap-3 items-center px-3 py-3.5 text-left transition-colors duration-200 rounded-md ${
                        isSelected
                          ? 'bg-amber-50/80 dark:bg-amber-950/20'
                          : 'hover:bg-amber-50/40 dark:hover:bg-amber-950/10'
                      }`}
                    >
                      {/* Gate */}
                      <span className="text-sm font-bold font-mono text-amber-800 dark:text-amber-200">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* Destination */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={service.icon}
                            className="w-3.5 h-3.5 text-amber-700/60 dark:text-amber-400/60 shrink-0"
                            aria-hidden
                          />
                          <span className="text-sm font-bold font-mono text-amber-900 dark:text-amber-100 uppercase tracking-wide truncate">
                            {service.title}
                          </span>
                        </div>
                        <p className="text-[0.65rem] font-mono text-amber-900/45 dark:text-amber-300/45 mt-0.5 truncate">
                          {service.description}
                        </p>
                      </div>

                      {/* Status */}
                      <div className="hidden sm:flex items-center justify-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse" />
                        <span className="text-[0.6rem] font-mono text-green-700/70 dark:text-green-400/70 uppercase">
                          Active
                        </span>
                      </div>

                      {/* Arrow */}
                      <span className="text-amber-700/40 dark:text-amber-400/40 text-xs font-mono text-right">
                        {isSelected ? '▾' : '▸'}
                      </span>
                    </button>

                    {/* Boarding pass */}
                    {isSelected && (
                      <div className="mx-3 mb-4 animate-[fade-in-up_0.25s_ease-out]">
                        <div className="relative rounded-lg border border-dashed border-amber-400/50 dark:border-amber-800/50 bg-white dark:bg-zinc-900 overflow-hidden">
                          {/* Perforated top edge */}
                          <div className="flex justify-between px-2 -mt-px">
                            {Array.from({ length: 20 }).map((_, j) => (
                              <div
                                key={j}
                                className="w-2 h-2 rounded-full bg-stone-100 dark:bg-zinc-950 -mt-1"
                              />
                            ))}
                          </div>

                          <div className="px-5 pt-3 pb-5">
                            {/* Pass header */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <FontAwesomeIcon
                                  icon={faPlane}
                                  className="w-3.5 h-3.5 text-primary-500"
                                  aria-hidden
                                />
                                <span className="text-[0.6rem] font-mono text-amber-700/60 dark:text-amber-500/60 uppercase tracking-[0.3em]">
                                  Boarding Pass
                                </span>
                              </div>
                              <span className="text-[0.6rem] font-mono text-amber-700/60 dark:text-amber-500/60 uppercase">
                                Gate {String(i + 1).padStart(2, '0')}
                              </span>
                            </div>

                            <h4 className="text-base font-bold font-mono text-amber-900 dark:text-amber-100 uppercase tracking-wide mb-1">
                              {service.title}
                            </h4>
                            <p className="text-xs font-mono text-amber-900/55 dark:text-amber-300/55 leading-relaxed mb-5">
                              {service.description}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-5">
                              <div>
                                <p className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider mb-2">
                                  Included
                                </p>
                                <ul className="space-y-1.5">
                                  {service.benefits.map((b) => (
                                    <li
                                      key={b}
                                      className="flex items-start gap-2 text-xs font-mono text-amber-900/70 dark:text-amber-300/70"
                                    >
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        className="w-3 h-3 text-green-600/70 dark:text-green-400/70 mt-0.5 shrink-0"
                                        aria-hidden
                                      />
                                      {b}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider mb-2">
                                  Itinerary
                                </p>
                                <ul className="space-y-1.5">
                                  {service.offerings.map((o) => (
                                    <li
                                      key={o}
                                      className="flex items-start gap-2 text-xs font-mono text-amber-900/70 dark:text-amber-300/70"
                                    >
                                      <span className="text-amber-500/60 mt-px">
                                        ›
                                      </span>
                                      {o}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </BoardPanel>

          {/* Connecting flights — specialized services */}
          <BoardPanel className="p-6 sm:p-8">
            <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-4 mb-6">
              <SectionTag>Connecting Flights</SectionTag>
              <FlapLabel
                text="Specialized"
                size="sm"
                startIndex={40}
                bright
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-stone-300/60 dark:bg-zinc-800/60 rounded-lg overflow-hidden">
              {specializedServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-stone-50 dark:bg-zinc-900 p-4 sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-amber-100/60 dark:bg-amber-900/20 flex items-center justify-center shrink-0 mt-0.5">
                      <FontAwesomeIcon
                        icon={service.icon}
                        className="w-3.5 h-3.5 text-amber-700/70 dark:text-amber-400/70"
                        aria-hidden
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-mono text-amber-900 dark:text-amber-100 uppercase tracking-wide">
                        {service.title}
                      </h4>
                      <p className="text-[0.65rem] text-amber-900/50 dark:text-amber-300/50 font-mono leading-relaxed mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BoardPanel>
        </div>
      </div>
    </section>
  );
}
