'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  faArrowUpRightFromSquare,
  faChevronDown,
  faChevronUp,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SplitFlapCell, type SplitFlapSize } from '../hero/SplitFlapCell';
import ProjectModal from './ProjectModal';
import { categories, projects, type Project } from './data';
import { getProjectCta } from './projectCta';

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

  const minH = props.size === 'lg' ? 'min-h-[2.5rem]' : 'min-h-[1.2rem]';

  return (
    <div ref={ref} className={minH}>
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

export default function ProjectsFlipboard() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section
      id="projects"
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
          <BoardPanel className="p-6 sm:p-8">
            {/* Board header */}
            <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-4 mb-6">
              <SectionTag>Project Departures</SectionTag>
              <FlapLabel text="Our Projects" size="lg" bright />
            </div>

            <p className="text-xs sm:text-sm text-amber-900/60 dark:text-amber-300/60 font-mono leading-relaxed mb-6">
              A curated selection of impactful projects across various technical
              disciplines and business domains.
            </p>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => {
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveFilter(category);
                      setShowAll(false);
                      setExpanded(null);
                    }}
                    className={`text-[0.65rem] font-mono uppercase tracking-wider px-3 py-1.5 rounded-md border transition-all duration-200 ${
                      isActive
                        ? 'border-amber-500/60 bg-amber-50/80 dark:bg-amber-950/20 text-amber-800 dark:text-amber-200'
                        : 'border-stone-300/60 dark:border-zinc-700/60 text-amber-900/50 dark:text-amber-300/50 hover:border-amber-400/50 hover:text-amber-800 dark:hover:text-amber-200'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Column headers */}
            <div className="hidden sm:grid grid-cols-[2.5rem_1fr_6rem_5rem_3rem] gap-3 px-3 mb-2">
              <span className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider">
                Gate
              </span>
              <span className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider">
                Destination
              </span>
              <span className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider text-center">
                Category
              </span>
              <span className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider text-center">
                Year
              </span>
              <span />
            </div>

            {/* Project rows */}
            <div className="space-y-0">
              {displayedProjects.map((project, i) => {
                const isExpanded = expanded === project.id;
                const cta = getProjectCta(project);
                return (
                  <div key={project.id}>
                    {i > 0 && (
                      <div
                        className="h-px bg-stone-300/60 dark:bg-zinc-800/60"
                        aria-hidden
                      />
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded(isExpanded ? null : project.id)
                      }
                      className={`w-full grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[2.5rem_1fr_6rem_5rem_3rem] gap-3 items-center px-3 py-3.5 text-left transition-colors duration-200 rounded-md ${
                        isExpanded
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
                        <span className="text-sm font-bold font-mono text-amber-900 dark:text-amber-100 uppercase tracking-wide truncate block">
                          {project.title}
                        </span>
                        <p className="text-[0.65rem] font-mono text-amber-900/45 dark:text-amber-300/45 mt-0.5 truncate">
                          {project.clientType}
                        </p>
                      </div>

                      {/* Category */}
                      <div className="hidden sm:flex items-center justify-center">
                        <span className="text-[0.6rem] font-mono text-amber-700/60 dark:text-amber-400/60 uppercase">
                          {project.category}
                        </span>
                      </div>

                      {/* Year */}
                      <div className="hidden sm:flex items-center justify-center">
                        <span className="text-xs font-bold font-mono text-amber-800 dark:text-amber-200">
                          {project.year}
                        </span>
                      </div>

                      {/* Arrow */}
                      <span className="text-amber-700/40 dark:text-amber-400/40 text-xs font-mono text-right">
                        {isExpanded ? '▾' : '▸'}
                      </span>
                    </button>

                    {/* Boarding pass */}
                    {isExpanded && (
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
                                  Project Pass
                                </span>
                              </div>
                              <span className="text-[0.6rem] font-mono text-amber-700/60 dark:text-amber-500/60 uppercase">
                                Gate {String(i + 1).padStart(2, '0')}
                              </span>
                            </div>

                            {/* Image */}
                            <div className="relative h-40 sm:h-48 rounded-md overflow-hidden mb-4">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={project.imageUrl}
                                alt={`${project.title} preview`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            <h4 className="text-base font-bold font-mono text-amber-900 dark:text-amber-100 uppercase tracking-wide mb-1">
                              {project.title}
                            </h4>
                            <p className="text-xs font-mono text-amber-900/55 dark:text-amber-300/55 leading-relaxed mb-5">
                              {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="mb-5">
                              <p className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider mb-2">
                                Tech Stack
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="text-[0.6rem] font-mono px-2 py-0.5 rounded border border-amber-300/40 dark:border-amber-800/40 text-amber-900/70 dark:text-amber-300/70 bg-amber-50/50 dark:bg-amber-950/20"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3 pt-4 border-t border-amber-200/40 dark:border-amber-900/30">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedProject(project);
                                  setIsModalOpen(true);
                                }}
                                className="text-xs font-mono font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                              >
                                View Details
                              </button>
                              {cta &&
                                (cta.mode === 'internal' ? (
                                  <Link
                                    href={cta.href}
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-amber-700/70 dark:text-amber-400/70 hover:text-amber-800 dark:hover:text-amber-300 transition-colors"
                                  >
                                    View Project
                                  </Link>
                                ) : (
                                  <a
                                    href={cta.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-amber-700/70 dark:text-amber-400/70 hover:text-amber-800 dark:hover:text-amber-300 transition-colors"
                                  >
                                    {project.linkType === 'technology'
                                      ? 'View Tech'
                                      : project.linkType === 'client'
                                        ? 'View Client'
                                        : 'Visit'}
                                    <FontAwesomeIcon
                                      icon={faArrowUpRightFromSquare}
                                      className="w-2.5 h-2.5"
                                      aria-hidden
                                    />
                                  </a>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Result count */}
            <div className="mt-4 px-3">
              <p className="text-[0.6rem] font-mono text-amber-700/50 dark:text-amber-500/50">
                Showing {displayedProjects.length} of {filteredProjects.length}{' '}
                departures
              </p>
            </div>
          </BoardPanel>

          {/* Show more / less */}
          {hasMoreProjects && (
            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-stone-400 dark:border-zinc-600 text-amber-900/90 dark:text-amber-200/90 font-mono text-sm font-medium rounded-lg hover:border-amber-600/80 hover:text-amber-800 dark:hover:border-amber-700/80 dark:hover:text-amber-100 transition-colors bg-stone-50/80 dark:bg-zinc-900/80"
              >
                {showAll ? (
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
                    View Full Board
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform"
                      aria-hidden
                    />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
        project={selectedProject}
      />
    </section>
  );
}
