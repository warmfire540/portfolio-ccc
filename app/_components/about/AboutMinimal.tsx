'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { ReactGoogleReviews } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { STATS, TEAM, MILESTONES, VALUES, RECOGNITIONS } from './data';

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutMinimal() {
  const [expanded, setExpanded] = useState(false);
  const scrollRestoreY = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (scrollRestoreY.current === null) return;
    const y = scrollRestoreY.current;
    scrollRestoreY.current = null;
    window.scrollTo({ top: y, left: 0, behavior: 'instant' });
  }, [expanded]);

  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-zinc-950 dark:via-primary-950/20 dark:to-zinc-950 overflow-hidden [overflow-anchor:none]"
    >
      <div className="mx-auto max-w-3xl px-6">
        {/* ---- Headline ---- */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
          <span className="bg-[length:200%_auto] bg-gradient-to-r from-zinc-900 via-primary-600 to-zinc-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent animate-[shimmer_8s_ease-in-out_infinite]">
            Curiosity is our compass.
          </span>
        </h2>

        {/* ---- Intro ---- */}
        <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 max-w-2xl">
          Founded in 2025, Curious Cat Consulting exists to turn complex
          business problems into software that simply works, no bloat, no
          guesswork, no duct tape.
        </p>
        <p className="text-base text-zinc-400 dark:text-zinc-500 leading-relaxed max-w-2xl mb-16">
          Every project begins with a question, not a quote. We listen first,
          then build solutions that anticipate what comes next.
        </p>

        {/* ---- Stats ---- */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-200/60 dark:bg-zinc-800/60 rounded-2xl overflow-hidden mb-20">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-zinc-950 py-8 px-4 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ---- Team ---- */}
        <div className="mb-20">
          <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-10">
            The team
          </h3>

          <div className="space-y-16">
            {TEAM.map((member) => (
              <div key={member.name} className="flex gap-6 sm:gap-8 items-start">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-zinc-100 dark:bg-zinc-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">
                    {member.role}
                  </p>
                  {member.bio.map((p, i) => (
                    <p
                      key={i}
                      className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-2 last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Expand ---- */}
        <div className="text-center mb-20">
          <button
            type="button"
            onClick={() => {
              scrollRestoreY.current = window.scrollY;
              setExpanded((v) => !v);
            }}
            className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            {expanded ? 'Show less' : 'Learn more about us'}
          </button>
        </div>

        {/* ---- Expandable ---- */}
        <div
          className={`[overflow-anchor:none] transition-all duration-500 ease-in-out ${
            expanded
              ? 'max-h-none opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
          }`}
        >
          {expanded && (
            <div className="space-y-24">
              {/* Milestones */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-10">
                  Our story
                </h3>

                <div className="space-y-10">
                  {MILESTONES.map((m) => (
                    <div key={m.title} className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0">
                        <FontAwesomeIcon
                          icon={m.icon}
                          className="w-4 h-4 text-zinc-400 dark:text-zinc-500"
                          aria-hidden
                        />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {m.title}
                          </span>
                          <span className="text-xs text-zinc-400 dark:text-zinc-500">
                            {m.year}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-10">
                  What we believe
                </h3>

                <div className="grid sm:grid-cols-2 gap-px bg-zinc-200/60 dark:bg-zinc-800/60 rounded-2xl overflow-hidden">
                  {VALUES.map((v) => (
                    <div
                      key={v.title}
                      className="bg-white dark:bg-zinc-950 p-8"
                    >
                      <FontAwesomeIcon
                        icon={v.icon}
                        className="w-5 h-5 text-zinc-300 dark:text-zinc-700 mb-4"
                        aria-hidden
                      />
                      <h4 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
                        {v.title}
                      </h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-10">
                  Client feedback
                </h3>
                <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-8">
                  <ReactGoogleReviews
                    layout="badge"
                    featurableId={
                      process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID ?? ''
                    }
                  />
                </div>
              </div>

              {/* Recognition */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-10">
                  Recognition
                </h3>
                {RECOGNITIONS.map((r) => (
                  <div
                    key={r.title}
                    className="flex items-center gap-6 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-6"
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
                        className="h-14 w-auto"
                      />
                    </a>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                        {r.title}
                      </p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500">
                        {r.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
