'use client';

import { useState } from 'react';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TerminalChrome from '../hero/TerminalChrome';
import ProjectModal from './ProjectModal';
import { categories, projects, type Project } from './data';
import { getProjectCta } from './projectCta';

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

/** Formats a project id into a scoped package name */
function pkgName(id: string) {
  return `@ccc/${id}`;
}

/* ------------------------------------------------------------------ */
/*  Package card                                                       */
/* ------------------------------------------------------------------ */

function PackageRow({
  project,
  onSelect,
}: Readonly<{ project: Project; onSelect: () => void }>) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="w-full text-left group rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-emerald-500/40 p-4 transition-all duration-200 animate-[fade-in-up_0.3s_ease-out]"
    >
      {/* Package header line */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="font-mono text-sm min-w-0">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">
            {pkgName(project.id)}
          </span>
          <span className="text-zinc-400">@</span>
          <span className="text-primary-600 dark:text-primary-400">
            {project.year}.0.0
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            {project.category.toLowerCase()}
          </span>
          {getProjectCta(project) && (
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="w-3 h-3 text-zinc-400 group-hover:text-emerald-500 transition-colors"
              aria-hidden
            />
          )}
        </div>
      </div>

      {/* Description */}
      <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3 line-clamp-2">
        {project.description}
      </p>

      {/* Dependencies row */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 mr-1">
          deps:
        </span>
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
          >
            {tech.toLowerCase().replace(/ /g, '-')}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>

      {/* Client type */}
      <div className="mt-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
        <span className="text-zinc-300 dark:text-zinc-700">{'>'}</span>{' '}
        published by{' '}
        <span className="text-zinc-500 dark:text-zinc-400">
          {project.clientType}
        </span>
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ProjectsTerminal() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);
  const hasMoreProjects = filteredProjects.length > 3;

  const filterFlag =
    activeFilter === 'All'
      ? ''
      : ` --category=${activeFilter.toLowerCase().replace(/ /g, '-')}`;

  return (
    <section
      id="projects"
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
          <TerminalChrome title="~/curious-cat/projects" className="w-full">
            <div className="space-y-4">
              {/* Header */}
              <Prompt>ccc search --registry</Prompt>
              <div className="pl-4 space-y-4">
                <h2 className="font-mono text-2xl md:text-3xl font-bold text-zinc-800 dark:text-white">
                  # Project Registry
                </h2>
                <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  A curated selection of impactful projects that showcase our
                  expertise across various technical disciplines and business
                  domains.
                </p>
              </div>

              {/* Separator */}
              <div className="pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50" />

              {/* Category filter tabs */}
              <div>
                <div className="font-mono text-xs text-zinc-400 dark:text-zinc-600 mb-2 pl-4">
                  Filter by category:
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {categories.map((category) => {
                    const isActive = activeFilter === category;
                    const flag =
                      category === 'All'
                        ? '--all'
                        : `--${category.toLowerCase().replace(/ /g, '-')}`;
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          setActiveFilter(category);
                          setShowAll(false);
                        }}
                        className={`font-mono text-xs px-3 py-1.5 rounded-md border transition-all duration-200 ${
                          isActive
                            ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : 'border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400'
                        }`}
                      >
                        {flag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Search command */}
              <Prompt>
                ccc search &quot;*&quot;{filterFlag} | head -n{' '}
                {showAll ? filteredProjects.length : 3}
              </Prompt>

              {/* Results count */}
              <div className="pl-4 font-mono text-xs text-zinc-400 dark:text-zinc-600">
                found {filteredProjects.length} package
                {filteredProjects.length !== 1 ? 's' : ''} matching query
                {showAll
                  ? ''
                  : ` (showing ${Math.min(3, filteredProjects.length)} of ${filteredProjects.length})`}
              </div>

              {/* Package list */}
              <div className="pl-4 space-y-3">
                {displayedProjects.map((project) => (
                  <PackageRow
                    key={project.id}
                    project={project}
                    onSelect={() => {
                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }}
                  />
                ))}
              </div>

              {/* Show more / less */}
              {hasMoreProjects && (
                <div className="pl-4">
                  <button
                    type="button"
                    onClick={() => setShowAll(!showAll)}
                    className="font-mono text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
                  >
                    {showAll ? (
                      <>
                        <span className="text-zinc-400">$ </span>
                        ccc search --collapse{' '}
                        <span className="text-zinc-400">
                          # show fewer results
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-zinc-400">$ </span>
                        ccc search --no-limit{' '}
                        <span className="text-zinc-400">
                          # show all {filteredProjects.length} packages
                        </span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Blinking cursor */}
              <div className="font-mono text-sm leading-relaxed">
                <span className="text-emerald-500 dark:text-emerald-400">
                  curious-cat
                </span>
                <span className="text-zinc-400">:</span>
                <span className="text-primary-500 dark:text-primary-400">
                  ~
                </span>
                <span className="text-zinc-400">$ </span>
                <span className="animate-[blink_1s_step-end_infinite] text-zinc-500">
                  ▊
                </span>
              </div>
            </div>
          </TerminalChrome>
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
