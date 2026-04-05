'use client';

import { useState } from 'react';
import { ReactGoogleReviews } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  return (
    <div className="pl-4 font-mono text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
      {children}
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="mt-1 pl-4 font-mono text-zinc-300 dark:text-zinc-700 text-xs select-none">
      {'─'.repeat(48)}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  REPL sections                                                      */
/* ------------------------------------------------------------------ */

type ReplSection = 'team' | 'story' | 'values' | 'reviews' | 'recognition';

const replCommands: { id: ReplSection; label: string; command: string }[] = [
  { id: 'team', label: 'team', command: 'ls -la ./team/' },
  { id: 'story', label: 'story', command: 'git log --oneline --graph' },
  { id: 'values', label: 'values', command: "cat .values | jq '.core[]'" },
  {
    id: 'reviews',
    label: 'reviews',
    command: 'curl -s api.google.com/reviews | jq',
  },
  { id: 'recognition', label: 'awards', command: 'ls ./awards/' },
];

function ReplContent({ section }: Readonly<{ section: ReplSection }>) {
  switch (section) {
    case 'team':
      return (
        <div className="space-y-6">
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
                <span className="text-zinc-300 dark:text-zinc-600">{'>'} </span>
                location: Tampa, FL | status: available
              </div>
            </div>
          ))}
        </div>
      );

    case 'story':
      return (
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
                  <span className="text-zinc-400"> | </span>
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
      );

    case 'values':
      return (
        <div className="space-y-4">
          <Output>
            <p className="leading-relaxed mb-4">
              These core principles guide every project we undertake and every
              relationship we build.
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
      );

    case 'reviews':
      return (
        <div className="space-y-4">
          <Output>
            <p className="leading-relaxed mb-4">
              Don&rsquo;t just take our word for it. Here&rsquo;s what clients
              have to say about working with Curious Cat Consulting.
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
      );

    case 'recognition':
      return (
        <div className="space-y-4">
          <Output>
            <p className="leading-relaxed mb-4">
              Professional recognition and community acknowledgments that
              reflect our commitment to excellence.
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
                  <span className="text-zinc-400"> | </span>
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
      );
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutTerminal() {
  const [activeSection, setActiveSection] = useState<ReplSection | null>(null);

  return (
    <section
      id="about"
      className="relative py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden"
    >
      {/* Grid pattern */}
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
        <div className="max-w-4xl mx-auto">
          <TerminalChrome title="~/curious-cat/about" className="w-full">
            <div className="space-y-4">
              {/* ---- README ---- */}
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
                    mind, digging deeper to understand the real challenges
                    behind your requirements. This curiosity-driven approach
                    leads to solutions that not only meet your immediate needs
                    but anticipate future ones as well.
                  </p>
                </Output>
              </div>

              {/* ---- Stats ---- */}
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

              {/* ---- Separator ---- */}
              <div className="pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50" />

              {/* ---- REPL ---- */}
              <Prompt>ccc about --interactive</Prompt>
              <div className="pl-4 mt-2">
                <div className="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-3">
                  Welcome to the CCC interactive shell. Select a topic to
                  explore:
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {replCommands.map((cmd) => {
                    const isActive = activeSection === cmd.id;
                    return (
                      <button
                        key={cmd.id}
                        type="button"
                        onClick={() =>
                          setActiveSection(isActive ? null : cmd.id)
                        }
                        className={`font-mono text-xs px-3 py-1.5 rounded-md border transition-all duration-200 ${
                          isActive
                            ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : 'border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400'
                        }`}
                      >
                        {cmd.label}
                      </button>
                    );
                  })}
                </div>

                {/* Active section output */}
                {activeSection && (
                  <div className="animate-[fade-in-up_0.3s_ease-out]">
                    <div className="mb-4">
                      <div className="font-mono text-sm leading-relaxed">
                        <span className="text-emerald-500 dark:text-emerald-400">
                          ccc-about
                        </span>
                        <span className="text-zinc-400">{' > '}</span>
                        <span className="text-zinc-700 dark:text-zinc-300">
                          {
                            replCommands.find((c) => c.id === activeSection)
                              ?.command
                          }
                        </span>
                      </div>
                      <SectionDivider />
                    </div>
                    <ReplContent section={activeSection} />
                  </div>
                )}

                {!activeSection && (
                  <div className="font-mono text-sm leading-relaxed">
                    <span className="text-emerald-500 dark:text-emerald-400">
                      ccc-about
                    </span>
                    <span className="text-zinc-400">{' > '}</span>
                    <span className="animate-[blink_1s_step-end_infinite] text-zinc-500">
                      ▊
                    </span>
                  </div>
                )}
              </div>
            </div>
          </TerminalChrome>
        </div>
      </div>
    </section>
  );
}
