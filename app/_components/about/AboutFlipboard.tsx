'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ReactGoogleReviews } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  SplitFlapCell,
  type SplitFlapSize,
} from '../hero/SplitFlapCell';
import { STATS, TEAM, MILESTONES, VALUES, RECOGNITIONS } from './data';

/* ------------------------------------------------------------------ */
/*  Scroll-triggered flap label                                        */
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

  const minH = props.size === 'lg' ? 'min-h-[2.5rem]' : 'min-h-[1.2rem]';

  return (
    <div ref={ref} className={minH}>
      {inView && <FlapLabelInner {...props} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Styled departure-board primitives                                  */
/* ------------------------------------------------------------------ */

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

function Divider() {
  return (
    <div className="h-px bg-stone-300/80 dark:bg-zinc-800/80" aria-hidden />
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

export default function AboutFlipboard() {
  const [showMore, setShowMore] = useState(false);
  const scrollRestoreY = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (scrollRestoreY.current === null) return;
    const y = scrollRestoreY.current;
    scrollRestoreY.current = null;
    window.scrollTo({ top: y, left: 0, behavior: 'instant' });
  }, [showMore]);

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-stone-100 dark:bg-zinc-950 [overflow-anchor:none]"
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
          {/* ---- Main board ---- */}
          <BoardPanel className="p-6 sm:p-8">
            {/* Board header */}
            <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-4 mb-6">
              <SectionTag>Company Information</SectionTag>
              <FlapLabel text="About Us" size="lg" bright />
            </div>

            {/* Intro */}
            <div className="mb-6">
              <p className="text-sm sm:text-base text-amber-900/70 dark:text-amber-300/70 font-mono leading-relaxed max-w-2xl">
                Founded in 2025, Curious Cat Consulting was built on a
                foundation of technical excellence and a genuine curiosity about
                solving complex business problems through thoughtful software
                solutions.
              </p>
            </div>

            <Divider />

            {/* Stats — styled as departure board status columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px my-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center px-3 py-3">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-800 dark:text-amber-200 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[0.6rem] text-amber-700/60 dark:text-amber-500/60 font-mono uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </BoardPanel>

          {/* ---- Team board ---- */}
          <BoardPanel className="p-6 sm:p-8">
            <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-4 mb-6">
              <SectionTag>Personnel</SectionTag>
              <FlapLabel text="Our Team" size="sm" startIndex={20} bright />
            </div>

            <div className="space-y-6">
              {TEAM.map((member, i) => (
                <div key={member.name}>
                  {i > 0 && <Divider />}
                  <div className={`flex gap-5 items-start ${i > 0 ? 'pt-6' : ''}`}>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-stone-300 dark:border-zinc-700 shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-bold font-mono text-amber-900 dark:text-amber-100 uppercase tracking-wide">
                        {member.name}
                      </h4>
                      <p className="text-xs font-mono text-amber-700/70 dark:text-amber-400/70 uppercase tracking-wider mb-2">
                        {member.role}
                      </p>
                      <p className="text-xs sm:text-sm text-amber-900/60 dark:text-amber-300/60 font-mono leading-relaxed">
                        {member.bio[0]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BoardPanel>

          {/* ---- Show More ---- */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                scrollRestoreY.current = window.scrollY;
                setShowMore((v) => !v);
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-stone-400 dark:border-zinc-600 text-amber-900/90 dark:text-amber-200/90 font-mono text-sm font-medium rounded-lg hover:border-amber-600/80 hover:text-amber-800 dark:hover:border-amber-700/80 dark:hover:text-amber-100 transition-colors bg-stone-50/80 dark:bg-zinc-900/80"
            >
              {showMore ? (
                <>
                  Show Less
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden
                  />
                </>
              ) : (
                <>
                  View Full Listing
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform"
                    aria-hidden
                  />
                </>
              )}
            </button>
          </div>

          {/* ---- Expandable boards ---- */}
          <div
            className={`[overflow-anchor:none] transition-all duration-500 ease-in-out ${
              showMore
                ? 'max-h-none opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
            }`}
          >
            {showMore && (
              <div className="space-y-6">
                {/* Milestones board */}
                <BoardPanel className="p-6 sm:p-8">
                  <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-4 mb-6">
                    <SectionTag>Timeline</SectionTag>
                    <FlapLabel text="Our Story" size="sm" startIndex={30} bright />
                  </div>

                  <div className="space-y-0">
                    {MILESTONES.map((m, i) => (
                      <div key={m.title}>
                        {i > 0 && <Divider />}
                        <div className="flex gap-4 sm:gap-6 items-start py-4">
                          {/* "Gate number" style year badge */}
                          <div className="w-14 sm:w-16 shrink-0 text-center">
                            <div className="inline-block px-2 py-1.5 rounded border border-amber-400/40 dark:border-amber-900/50 bg-amber-50/80 dark:bg-zinc-800/80">
                              <span className="text-sm sm:text-base font-bold font-mono text-amber-800 dark:text-amber-200">
                                {m.year}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 rounded-md bg-amber-100/60 dark:bg-amber-900/20 flex items-center justify-center shrink-0 mt-0.5">
                              <FontAwesomeIcon
                                icon={m.icon}
                                className="w-4 h-4 text-amber-700/70 dark:text-amber-400/70"
                                aria-hidden
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold font-mono text-amber-900 dark:text-amber-100 uppercase tracking-wide">
                                {m.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-amber-900/55 dark:text-amber-300/55 font-mono leading-relaxed mt-1">
                                {m.description}
                              </p>
                            </div>
                          </div>

                          {/* Status indicator */}
                          <div className="hidden sm:flex items-center gap-1.5 shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse" />
                            <span className="text-[0.6rem] font-mono text-green-700/70 dark:text-green-400/70 uppercase">
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </BoardPanel>

                {/* Values board */}
                <BoardPanel className="p-6 sm:p-8">
                  <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-4 mb-6">
                    <SectionTag>Operating Principles</SectionTag>
                    <FlapLabel text="Values" size="sm" startIndex={45} bright />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-px bg-stone-300/60 dark:bg-zinc-800/60 rounded-lg overflow-hidden">
                    {VALUES.map((v) => (
                      <div
                        key={v.title}
                        className="bg-stone-50 dark:bg-zinc-900 p-5 sm:p-6"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-md bg-amber-100/60 dark:bg-amber-900/20 flex items-center justify-center shrink-0">
                            <FontAwesomeIcon
                              icon={v.icon}
                              className="w-4 h-4 text-amber-700/70 dark:text-amber-400/70"
                              aria-hidden
                            />
                          </div>
                          <h4 className="text-sm font-bold font-mono text-amber-900 dark:text-amber-100 uppercase tracking-wide">
                            {v.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-amber-900/55 dark:text-amber-300/55 font-mono leading-relaxed">
                          {v.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </BoardPanel>

                {/* Reviews board */}
                <BoardPanel className="p-6 sm:p-8">
                  <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-4 mb-6">
                    <SectionTag>Passenger Feedback</SectionTag>
                    <FlapLabel text="Reviews" size="sm" startIndex={55} bright />
                  </div>

                  <p className="text-xs sm:text-sm text-amber-900/60 dark:text-amber-300/60 font-mono leading-relaxed mb-5">
                    Don&rsquo;t just take our word for it. Here&rsquo;s what
                    clients have to say about working with Curious Cat
                    Consulting.
                  </p>

                  <div className="rounded-lg border border-stone-300/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-4">
                    <ReactGoogleReviews
                      layout="badge"
                      featurableId={
                        process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID ?? ''
                      }
                    />
                  </div>
                </BoardPanel>

                {/* Recognition board */}
                <BoardPanel className="p-6 sm:p-8">
                  <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-4 mb-6">
                    <SectionTag>Certifications</SectionTag>
                    <FlapLabel text="Recognition" size="sm" startIndex={65} bright />
                  </div>

                  {RECOGNITIONS.map((r) => (
                    <div
                      key={r.title}
                      className="flex items-center gap-5"
                    >
                      <a
                        href={r.badgeLink}
                        title="Find me on Biz Growth Collective"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity shrink-0"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={r.badgeUrl}
                          alt="Verified on Biz Growth Collective"
                          className="h-16 w-auto"
                        />
                      </a>
                      <div>
                        <h4 className="text-sm font-bold font-mono text-amber-900 dark:text-amber-100 uppercase tracking-wide">
                          {r.title}
                        </h4>
                        <p className="text-xs text-amber-900/55 dark:text-amber-300/55 font-mono">
                          {r.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </BoardPanel>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
