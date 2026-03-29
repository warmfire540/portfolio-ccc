'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { ReactGoogleReviews } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import TerminalChrome from '../hero/TerminalChrome';
import { STATS, TEAM, MILESTONES, VALUES, RECOGNITIONS } from './data';

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function Prompt({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="font-mono text-sm leading-relaxed">
      <span className="text-emerald-500 dark:text-emerald-400">
        curious-cat
      </span>
      <span className="text-zinc-400">:</span>
      <span className="text-primary-500 dark:text-primary-400">~</span>
      <span className="text-zinc-400">$ </span>
      <span className="text-zinc-700 dark:text-zinc-300">{children}</span>
    </div>
  );
}

function Output({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="pl-4 font-mono text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{children}</div>;
}

function SectionHeader({ command, title }: Readonly<{ command: string; title: string }>) {
  return (
    <div className="mb-6">
      <Prompt>{command}</Prompt>
      <div className="mt-2 pl-4 text-emerald-600 dark:text-emerald-400 font-mono text-xs tracking-widest uppercase">
        {title}
      </div>
      <div className="mt-1 pl-4 font-mono text-zinc-300 dark:text-zinc-700 text-xs select-none">
        {'─'.repeat(48)}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutTerminal() {
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
      className="relative py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden [overflow-anchor:none]"
    >
      {/* Grid pattern (matches hero) */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* CRT scanlines */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 3px)',
        }}
      />

      {/* Terminal glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-400/[0.04] dark:bg-emerald-500/[0.06] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* ---- About ---- */}
          <TerminalChrome title="~/curious-cat/about" className="w-full">
            <div className="space-y-4">
              <Prompt>cat README.md</Prompt>
              <div className="pl-4 space-y-4">
                <h2 className="font-mono text-2xl md:text-3xl font-bold text-zinc-800 dark:text-white">
                  # About Curious Cat Consulting
                </h2>
                <Output>
                  <p className="leading-relaxed">
                    Founded in 2025, Curious Cat Consulting was built on a
                    foundation of technical excellence and a genuine curiosity
                    about solving complex business problems through thoughtful
                    software solutions.
                  </p>
                </Output>
                <Output>
                  <p className="leading-relaxed">
                    I approach every project with fresh eyes and a questioning
                    mind, digging deeper to understand the real challenges behind
                    your requirements. This curiosity-driven approach leads to
                    solutions that not only meet your immediate needs but
                    anticipate future ones as well.
                  </p>
                </Output>
              </div>

              {/* Stats as key-value pairs */}
              <div className="mt-6">
                <Prompt>printenv | grep METRICS</Prompt>
                <div className="pl-4 mt-2 grid grid-cols-2 gap-x-8 gap-y-2">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="font-mono text-sm">
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {stat.label.toUpperCase().replace(/ /g, '_')}
                      </span>
                      <span className="text-zinc-400">=</span>
                      <span className="text-primary-600 dark:text-primary-400 font-bold">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TerminalChrome>

          {/* ---- Team ---- */}
          <TerminalChrome title="~/curious-cat/team" className="w-full">
            <div className="space-y-6">
              <SectionHeader command="ls -la ./team/" title="Meet Our Team" />

              {TEAM.map((member) => (
                <div key={member.name} className="pl-4 space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-mono text-sm">
                        <span className="text-zinc-400">-rw-r--r-- </span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                          {member.name}
                        </span>
                      </div>
                      <div className="font-mono text-xs text-primary-600 dark:text-primary-400">
                        # {member.role}
                      </div>
                    </div>
                  </div>
                  {member.bio.map((paragraph, i) => (
                    <Output key={i}>
                      <p className="leading-relaxed">{paragraph}</p>
                    </Output>
                  ))}
                  <div className="font-mono text-xs text-zinc-400 pl-4">
                    <span className="text-zinc-300 dark:text-zinc-600">
                      {'>'}{' '}
                    </span>
                    location: Tampa, FL | status: available
                  </div>
                </div>
              ))}
            </div>
          </TerminalChrome>

          {/* ---- Show More Button ---- */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                scrollRestoreY.current = window.scrollY;
                setShowMore((v) => !v);
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 font-mono text-sm border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-lg hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 bg-white dark:bg-zinc-900"
            >
              <span className="text-emerald-500">$</span>
              {showMore ? (
                <>
                  collapse --section=details
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden
                  />
                </>
              ) : (
                <>
                  expand --section=details
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-3 h-3 group-hover:translate-y-0.5 transition-transform"
                    aria-hidden
                  />
                </>
              )}
            </button>
          </div>

          {/* ---- Expandable sections ---- */}
          <div
            className={`[overflow-anchor:none] transition-all duration-500 ease-in-out ${
              showMore
                ? 'max-h-none opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
            }`}
          >
            {showMore && (
              <div className="space-y-12">
                {/* Story / Milestones */}
                <TerminalChrome title="~/curious-cat/history" className="w-full">
                  <div className="space-y-4">
                    <SectionHeader
                      command="git log --oneline --graph"
                      title="Our Story"
                    />

                    <div className="pl-4 space-y-4">
                      {MILESTONES.map((m, i) => (
                        <div key={m.title} className="flex gap-3">
                          <div className="flex flex-col items-center shrink-0">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                              <FontAwesomeIcon
                                icon={m.icon}
                                className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
                                aria-hidden
                              />
                            </div>
                            {i < MILESTONES.length - 1 && (
                              <div className="w-px flex-1 bg-zinc-200 dark:bg-zinc-700 mt-1" />
                            )}
                          </div>
                          <div className="pb-6">
                            <div className="font-mono text-xs">
                              <span className="text-primary-600 dark:text-primary-400">
                                {m.year}
                              </span>
                              <span className="text-zinc-400"> &mdash; </span>
                              <span className="text-zinc-700 dark:text-zinc-300 font-semibold">
                                {m.title}
                              </span>
                            </div>
                            <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed max-w-lg">
                              {m.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TerminalChrome>

                {/* Values */}
                <TerminalChrome title="~/curious-cat/values" className="w-full">
                  <div className="space-y-4">
                    <SectionHeader
                      command="cat .values | jq '.core[]'"
                      title="Our Values"
                    />

                    <Output>
                      <p className="leading-relaxed mb-4">
                        These core principles guide every project we undertake and
                        every relationship we build.
                      </p>
                    </Output>

                    <div className="pl-4 space-y-4">
                      {VALUES.map((v) => (
                        <div
                          key={v.title}
                          className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-emerald-500/30 transition-colors duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <FontAwesomeIcon
                              icon={v.icon}
                              className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0"
                              aria-hidden
                            />
                            <div>
                              <div className="font-mono text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                                {'{'}
                                <span className="text-emerald-600 dark:text-emerald-400">
                                  &quot;{v.title.toLowerCase().replace(/ /g, '-')}&quot;
                                </span>
                                {': '}
                              </div>
                              <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                                &quot;{v.description}&quot;
                              </p>
                              <div className="font-mono text-sm text-zinc-800 dark:text-zinc-200">
                                {'}'}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TerminalChrome>

                {/* Reviews */}
                <TerminalChrome title="~/curious-cat/reviews" className="w-full">
                  <div className="space-y-4">
                    <SectionHeader
                      command="curl -s api.google.com/reviews | jq"
                      title="What Our Clients Say"
                    />

                    <Output>
                      <p className="leading-relaxed mb-4">
                        Don&rsquo;t just take our word for it. Here&rsquo;s what
                        clients have to say about working with Curious Cat
                        Consulting.
                      </p>
                    </Output>

                    <div className="pl-4">
                      <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800">
                        <ReactGoogleReviews
                          layout="badge"
                          featurableId={
                            process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID ?? ''
                          }
                        />
                      </div>
                    </div>
                  </div>
                </TerminalChrome>

                {/* Recognition */}
                <TerminalChrome title="~/curious-cat/recognition" className="w-full">
                  <div className="space-y-4">
                    <SectionHeader
                      command="ls ./awards/"
                      title="Recognition & Awards"
                    />

                    <Output>
                      <p className="leading-relaxed mb-4">
                        Professional recognition and community acknowledgments
                        that reflect our commitment to excellence.
                      </p>
                    </Output>

                    {RECOGNITIONS.map((r) => (
                      <div
                        key={r.title}
                        className="pl-4 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-zinc-50/50 dark:bg-zinc-900/50"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <FontAwesomeIcon
                            icon={r.icon}
                            className="w-5 h-5 text-emerald-500"
                            aria-hidden
                          />
                          <div className="font-mono text-sm">
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                              {r.title}
                            </span>
                            <span className="text-zinc-400"> &mdash; </span>
                            <span className="text-zinc-500 dark:text-zinc-400 text-xs">
                              {r.description}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <a
                            href={r.badgeLink}
                            title="Find me on Biz Growth Collective"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:opacity-80 transition-opacity duration-200"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={r.badgeUrl}
                              alt="Verified on Biz Growth Collective"
                              className="h-16 w-auto"
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </TerminalChrome>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
