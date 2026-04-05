'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TerminalChrome from '../hero/TerminalChrome';
import { services, specializedServices } from './data';

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

function SectionHeader({
  command,
  title,
}: Readonly<{ command: string; title: string }>) {
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

export default function ServicesTerminal() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      id="services"
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
        <div className="max-w-4xl mx-auto space-y-12">
          {/* ---- Core Services ---- */}
          <TerminalChrome title="~/curious-cat/services" className="w-full">
            <div className="space-y-4">
              <Prompt>cat services.md</Prompt>
              <div className="pl-4 mt-2 mb-6">
                <h2 className="font-mono text-2xl md:text-3xl font-bold text-zinc-800 dark:text-white">
                  # Our Services
                </h2>
              </div>

              <Output>
                <p className="leading-relaxed mb-4">
                  We offer a comprehensive range of software development and
                  consulting services to help businesses build, modernize, and
                  optimize their digital solutions.
                </p>
              </Output>

              <Prompt>ccc services --list</Prompt>

              {/* Service listing */}
              <div className="pl-4 space-y-1 mt-2">
                <div className="font-mono text-xs text-zinc-400 dark:text-zinc-600 mb-2">
                  {'  '}NAME{'              '}DESCRIPTION
                </div>
                {services.map((service) => {
                  const isExpanded = expanded === service.id;
                  return (
                    <div key={service.id}>
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(isExpanded ? null : service.id)
                        }
                        className="w-full text-left font-mono text-sm group hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded px-2 py-1.5 -mx-2 transition-colors duration-150"
                      >
                        <span className="inline-flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={service.icon}
                            className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
                            aria-hidden
                          />
                          <span className="text-primary-600 dark:text-primary-400 font-semibold w-44 inline-block">
                            {service.id}
                          </span>
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400">
                          {service.title}
                        </span>
                        <span className="text-zinc-300 dark:text-zinc-700 float-right group-hover:text-emerald-500 transition-colors">
                          {isExpanded ? '▾' : '▸'}
                        </span>
                      </button>

                      {/* Expanded man page */}
                      {isExpanded && (
                        <div className="ml-2 my-3 border-l-2 border-emerald-500/30 pl-4 space-y-3 animate-[fade-in-up_0.3s_ease-out]">
                          <div className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                            <span className="text-emerald-500">$</span> man ccc-
                            {service.id}
                          </div>

                          <div>
                            <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-1">
                              NAME
                            </div>
                            <div className="font-mono text-sm text-zinc-700 dark:text-zinc-300 pl-4">
                              {service.title} &mdash; {service.description}
                            </div>
                          </div>

                          <div>
                            <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-1">
                              BENEFITS
                            </div>
                            <div className="pl-4 space-y-1">
                              {service.benefits.map((benefit) => (
                                <div
                                  key={benefit}
                                  className="font-mono text-xs text-zinc-500 dark:text-zinc-400"
                                >
                                  <span className="text-emerald-500">✓</span>{' '}
                                  {benefit}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-1">
                              OFFERINGS
                            </div>
                            <div className="pl-4 space-y-1">
                              {service.offerings.map((offering) => (
                                <div
                                  key={offering}
                                  className="font-mono text-xs text-zinc-500 dark:text-zinc-400"
                                >
                                  <span className="text-zinc-300 dark:text-zinc-600">
                                    •
                                  </span>{' '}
                                  {offering}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pl-4 font-mono text-xs text-zinc-400 dark:text-zinc-600 mt-4">
                {services.length} services available. Click a service for
                details.
              </div>

              {/* Separator between commands */}
              <div className="pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50" />

              {/* Specialized Services */}
              <SectionHeader
                command="ccc services --specialized"
                title="Specialized Services"
              />

              <div className="pl-4 space-y-3">
                {specializedServices.map((service) => (
                  <div
                    key={service.title}
                    className="flex items-start gap-3 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-emerald-500/30 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0"
                      aria-hidden
                    />
                    <div>
                      <div className="font-mono text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                        {service.title}
                      </div>
                      <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TerminalChrome>
        </div>
      </div>
    </section>
  );
}
