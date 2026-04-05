'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  faArrowUpRightFromSquare,
  faCalendarDays,
  faChevronDown,
  faChevronUp,
  faFolder,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categories, projects, type Project } from './data';
import { getProjectCta, projectExternalLinkLabel } from './projectCta';

/* ------------------------------------------------------------------ */
/*  Sidebar project row                                                */
/* ------------------------------------------------------------------ */

function ProjectRow({
  project,
  isActive,
  onSelect,
}: Readonly<{
  project: Project;
  isActive: boolean;
  onSelect: () => void;
}>) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-all duration-200 rounded-lg ${
        isActive
          ? 'bg-primary-50 dark:bg-primary-900/30 border border-primary-200/60 dark:border-primary-800/40'
          : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50 border border-transparent'
      }`}
    >
      <FontAwesomeIcon
        icon={isActive ? faFolderOpen : faFolder}
        className={`w-3.5 h-3.5 mt-0.5 shrink-0 transition-colors ${
          isActive
            ? 'text-primary-600 dark:text-primary-400'
            : 'text-zinc-300 dark:text-zinc-600'
        }`}
        aria-hidden
      />
      <div className="min-w-0">
        <p
          className={`text-sm font-medium truncate transition-colors ${
            isActive
              ? 'text-primary-700 dark:text-primary-300'
              : 'text-zinc-700 dark:text-zinc-300'
          }`}
        >
          {project.title}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
            {project.category}
          </span>
          <span className="text-zinc-200 dark:text-zinc-800 text-[8px]">
            &bull;
          </span>
          <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
            {project.year}
          </span>
        </div>
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Detail panel                                                       */
/* ------------------------------------------------------------------ */

function DetailPanel({ project }: Readonly<{ project: Project }>) {
  const cta = getProjectCta(project);
  return (
    <div
      key={project.id}
      className="animate-[fade-in-up_0.3s_ease-out] h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden rounded-lg mb-6 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.imageUrl}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-600 text-white">
            {project.category}
          </span>
          <div className="flex items-center gap-1.5 text-white text-xs">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="w-3 h-3"
              aria-hidden
            />
            {project.year}
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Client type */}
      <div className="mb-5">
        <h4 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
          Client
        </h4>
        <span className="text-sm text-zinc-700 dark:text-zinc-300">
          {project.clientType}
        </span>
      </div>

      {/* Technologies */}
      <div className="mb-5">
        <h4 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
          Stack
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200/60 dark:border-primary-800/40 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Link */}
      {cta && (
        <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
          {cta.mode === 'internal' ? (
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
            >
              View Project
            </Link>
          ) : (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
            >
              {projectExternalLinkLabel(project.linkType)}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-3.5 h-3.5"
                aria-hidden
              />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Project>(projects[0]);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Blueprint background */}
      <div className="absolute inset-0 bg-[#e8f0fa] dark:bg-[#0c1929]" />
      <div
        className="absolute inset-0 opacity-[0.5] dark:opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(2,132,199,0.42) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,132,199,0.42) 1px, transparent 1px),
            linear-gradient(rgba(2,132,199,0.24) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,132,199,0.24) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(232,240,250,0.72)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(12,25,41,0.82)_100%)]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
              Project Explorer
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Browse our portfolio of impactful projects. Select a project from
              the list to inspect its details.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveFilter(category);
                    setShowAll(false);
                    const first =
                      category === 'All'
                        ? projects[0]
                        : projects.find((p) => p.category === category);
                    if (first) setSelected(first);
                  }}
                  className={`text-xs px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-300 border border-primary-200/40 dark:border-primary-800/30 hover:bg-white dark:hover:bg-zinc-800 backdrop-blur-sm'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Split panel */}
          <div className="rounded-xl border border-primary-200/40 dark:border-primary-800/30 bg-white/85 dark:bg-zinc-900/85 shadow-lg backdrop-blur-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left: project list */}
              <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-zinc-100 dark:border-zinc-800">
                {/* List header */}
                <div className="px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      Projects
                    </span>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
                      {filteredProjects.length} total
                    </span>
                  </div>
                </div>

                {/* Scrollable list */}
                <div
                  className={`p-2 overflow-y-auto ${showAll ? 'max-h-[48rem]' : 'omax-h-[28rem]'} space-y-0.5`}
                >
                  {displayedProjects.map((project) => (
                    <ProjectRow
                      key={project.id}
                      project={project}
                      isActive={selected.id === project.id}
                      onSelect={() => setSelected(project)}
                    />
                  ))}

                  {/* Show more/less */}
                  {hasMoreProjects && (
                    <button
                      type="button"
                      onClick={() => setShowAll(!showAll)}
                      className="w-full text-center py-3 text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center justify-center gap-1.5"
                    >
                      {showAll ? (
                        <>
                          Show less
                          <FontAwesomeIcon
                            icon={faChevronUp}
                            className="w-2.5 h-2.5"
                            aria-hidden
                          />
                        </>
                      ) : (
                        <>
                          Show all {filteredProjects.length} projects
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className="w-2.5 h-2.5"
                            aria-hidden
                          />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Right: detail panel */}
              <div className="lg:col-span-3 p-6">
                <DetailPanel project={selected} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
