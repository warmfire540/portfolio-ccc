'use client';

import { useState, useEffect, useRef } from 'react';
import {
  faAws,
  faCloudflare,
  faDocker,
  faLinux,
  faMicrosoft,
  faNodeJs,
  faNpm,
  faPostgresql,
  faPython,
  faReact,
  faTypescript,
} from '@fortawesome/free-brands-svg-icons';
import { faCodeCommit, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BentoCell from './BentoCell';
import TerminalChrome from './TerminalChrome';

const testimonials = [
  {
    quote: 'They automated several pain points in our business.',
    author: 'Small Business Owner',
  },
  {
    quote:
      'Curious Cat brought clarity to a mess we thought was beyond saving.',
    author: 'CTO, Series A Startup',
  },
  {
    quote: 'The best investment we\u2019ve made in our tech. Period.',
    author: 'VP of Operations',
  },
];

const commits = [
  { message: 'feat: add real-time sync engine', time: '2m ago' },
  { message: 'fix: resolve auth token refresh race', time: '14m ago' },
  { message: 'perf: optimize query batch size', time: '1h ago' },
  { message: 'chore: upgrade to React 19', time: '3h ago' },
  { message: 'feat: add webhook retry logic', time: '5h ago' },
];

/** Free brands has no Next.js / Supabase / Terraform glyphs; icon substitutes only. */
const techStack = [
  { name: 'React', icon: faReact, color: '#61DAFB' },
  { name: 'Next.js', icon: faNpm, color: '#000000' },
  { name: 'TypeScript', icon: faTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: faNodeJs, color: '#339933' },
  { name: 'Python', icon: faPython, color: '#3776AB' },
  { name: 'AWS', icon: faAws, color: '#FF9900' },
  { name: 'Azure', icon: faMicrosoft, color: '#0078D4' },
  { name: 'PostgreSQL', icon: faPostgresql, color: '#4169E1' },
  { name: 'Supabase', icon: faCloudflare, color: '#3FCF8E' },
  { name: 'Docker', icon: faDocker, color: '#2496ED' },
  { name: 'Terraform', icon: faLinux, color: '#844FBA' },
  { name: 'SharePoint', icon: faMicrosoft, color: '#038387' },
] as const;

const automationLines = [
  '// Your morning routine, automated',
  '',
  'type Order = { id: string; email: string; items: string[] };',
  '',
  'async function onNewOrder(order: Order) {',
  '  await createInvoice(order);',
  '  await sendConfirmationEmail(order.email);',
  '  await updateInventory(order.items);',
  '  await notifyTeam("order-fulfillment", order.id);',
  '}',
  '',
  '// Done — you didn\u2019t lift a finger.',
];

function RotatingTestimonial() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];
  return (
    <div
      className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
    >
      <p className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-100 mb-3 leading-relaxed">
        &ldquo;{t.quote}&rdquo;
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        &mdash; {t.author}
      </p>
    </div>
  );
}

function AutomationTyper() {
  const [visibleLines, setVisibleLines] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    let cancelled = false;

    function schedule(fn: () => void, ms: number) {
      timerRef.current = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    }

    function showNext(line: number) {
      if (line > automationLines.length) {
        schedule(() => {
          setVisibleLines(0);
          schedule(() => showNext(1), 800);
        }, 3000);
        return;
      }
      setVisibleLines(line);
      const nextDelay = automationLines[line - 1] === '' ? 200 : 500;
      schedule(() => showNext(line + 1), nextDelay);
    }

    schedule(() => showNext(1), 800);
    return () => {
      cancelled = true;
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-hidden">
      {automationLines.slice(0, visibleLines).map((line, lineNum) => {
        let colorClass = 'text-zinc-500 dark:text-zinc-400';
        if (line.startsWith('//') && line.includes('Done'))
          colorClass = 'text-amber-600 dark:text-amber-400 font-semibold';
        else if (line.startsWith('//')) colorClass = 'text-zinc-400 dark:text-zinc-500';
        else if (line.startsWith('type ') || line.startsWith('async function'))
          colorClass = 'text-primary-600 dark:text-primary-400';
        else if (line.includes('await ')) colorClass = 'text-emerald-600 dark:text-emerald-400';

        return (
          <div key={lineNum} className={colorClass}>
            {line || '\u00A0'}
          </div>
        );
      })}
      {visibleLines > 0 && visibleLines < automationLines.length && (
        <span className="text-zinc-400 dark:text-zinc-500 animate-[blink_1s_step-end_infinite]">
          ▊
        </span>
      )}
    </pre>
  );
}

export default function HeroBento() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Warm editorial background with subtle halftone pattern */}
      <div className="absolute inset-0 bg-[#faf9f7] dark:bg-[#121110]" />
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #d4d0c8 0.8px, transparent 0.8px)',
          backgroundSize: '16px 16px',
        }}
      />
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(234,179,8,0.04),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(234,179,8,0.05),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-min">
            {/* Headline — spans 2 cols */}
            <BentoCell
              className="sm:col-span-2 flex flex-col justify-center !bg-primary-600 !border-primary-700 !p-8"
              delay={0}
            >
              <p className="text-primary-200 text-sm font-medium mb-2 uppercase tracking-wide">
                Curious Cat Consulting
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-3">
                Curiously Better Solutions
              </h1>
              <p className="text-primary-100 text-base sm:text-lg">
                Stop drowning in tabs. We connect your tools, automate the
                repetitive stuff, and give you the view you need.
              </p>
            </BentoCell>

            {/* Testimonial — spans 2 cols */}
            <BentoCell
              className="sm:col-span-2 flex flex-col justify-center"
              delay={100}
            >
              <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-3">
                What clients say
              </p>
              <RotatingTestimonial />
            </BentoCell>

            {/* Automation animation */}
            <div
              className="sm:col-span-2 lg:row-span-2 animate-[fade-in-up_0.5s_ease-out_both]"
              style={{ animationDelay: '300ms' }}
            >
              <TerminalChrome title="automation.ts" className="h-full">
                <AutomationTyper />
              </TerminalChrome>
            </div>

            {/* CTA */}
            <BentoCell
              className="flex flex-col justify-center items-start"
              delay={400}
            >
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                Ready to build something great?
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Let&rsquo;s talk
                <FontAwesomeIcon
                  icon={faComments}
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden
                />
              </a>
            </BentoCell>

            {/* Commits */}
            <BentoCell className="" delay={500}>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-3">
                Recent activity
              </p>
              <div className="space-y-2.5">
                {commits.map((c) => (
                  <div key={c.message} className="flex items-start gap-2">
                    <FontAwesomeIcon
                      icon={faCodeCommit}
                      className="w-3.5 h-3.5 text-primary-500 mt-0.5 shrink-0"
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-zinc-700 dark:text-zinc-300 truncate">
                        {c.message}
                      </p>
                      <p className="text-[10px] text-zinc-400">{c.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </BentoCell>

            {/* Tech stack (Font Awesome brands) */}
            <BentoCell className="sm:col-span-2" delay={600}>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-3">
                Tech we work with
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300"
                  >
                    <FontAwesomeIcon
                      icon={tech.icon}
                      className={
                        tech.name === 'Next.js'
                          ? 'h-3.5 w-3.5 shrink-0 dark:invert'
                          : 'h-3.5 w-3.5 shrink-0'
                      }
                      style={{ color: tech.color }}
                      aria-hidden
                    />
                    {tech.name}
                  </span>
                ))}
              </div>
            </BentoCell>
          </div>
        </div>
      </div>
    </section>
  );
}
