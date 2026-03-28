'use client';

import { faCirclePlay, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TerminalChrome from './TerminalChrome';
import TerminalLine from './TerminalLine';

const terminalLines = [
  { type: 'command' as const, text: '$ npx curious-cat init', delay: 0 },
  { type: 'success' as const, text: '\u2713 Slow website? Fixed. Now loads in 0.4s', delay: 1200 },
  { type: 'success' as const, text: '\u2713 Manual busywork automated away', delay: 2000 },
  { type: 'success' as const, text: '\u2713 Customer portal up and running', delay: 2800 },
  { type: 'success' as const, text: '\u2713 Old spreadsheet mess \u2192 real dashboard', delay: 3600 },
  { type: 'success' as const, text: '\u2713 Built to grow with you, not against you', delay: 4400 },
  { type: 'final' as const, text: 'Ready to launch. \ud83d\ude80', delay: 5400 },
];

export default function HeroTerminal() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-50 dark:bg-zinc-950">
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

      {/* Radial terminal glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-400/[0.06] dark:bg-emerald-500/[0.07] rounded-full blur-3xl" />

      {/* Secondary accent glow — dark mode */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-primary-500/[0.05] rounded-full blur-3xl hidden dark:block" />

      {/* Corner code decoration — light mode */}
      <div className="absolute top-8 right-8 font-mono text-[10px] leading-relaxed text-zinc-300 dark:hidden select-none pointer-events-none" aria-hidden>
        <div>{'{'} &quot;status&quot;: &quot;ready&quot; {'}'}</div>
        <div>{'>'} npm run build</div>
        <div>{'>'} deploying...</div>
        <div className="text-emerald-300">{'>'} live ✓</div>
      </div>

      {/* Corner code decoration — dark mode */}
      <div className="absolute top-8 right-8 font-mono text-[10px] leading-relaxed text-zinc-700 hidden dark:block select-none pointer-events-none" aria-hidden>
        <div>{'{'} &quot;status&quot;: &quot;ready&quot; {'}'}</div>
        <div>{'>'} npm run build</div>
        <div>{'>'} deploying...</div>
        <div className="text-emerald-700">{'>'} live ✓</div>
      </div>

      {/* Floating prompt watermark — dark mode */}
      <div className="absolute bottom-16 left-12 font-mono text-[120px] leading-none text-emerald-500/[0.03] hidden dark:block select-none pointer-events-none" aria-hidden>
        &gt;_
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Copy */}
          <div>
            <p className="text-primary-600 dark:text-primary-400 font-mono text-sm mb-4 tracking-wider">
              CURIOUS CAT CONSULTING
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-[1.1] mb-6">
              Your business deserves{' '}
              <span className="text-primary-600 dark:text-primary-400">better tech.</span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-md leading-relaxed">
              Slow website? Clunky checkout? Spreadsheet spaghetti? We
              diagnose, fix, and future-proof the tech behind your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-mono text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-sm"
              >
                See how we work
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                  aria-hidden
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 font-mono text-sm font-medium rounded-lg hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" aria-hidden />
                Book a call
              </a>
            </div>
          </div>

          {/* Right: Terminal */}
          <TerminalChrome title="~/curious-cat">
            <div className="min-h-[260px] space-y-1.5">
              {terminalLines.map((line) => (
                <TerminalLine
                  key={`${line.delay}-${line.text}`}
                  text={line.text}
                  type={line.type}
                  delay={line.delay}
                />
              ))}
            </div>
          </TerminalChrome>
        </div>
      </div>
    </section>
  );
}
