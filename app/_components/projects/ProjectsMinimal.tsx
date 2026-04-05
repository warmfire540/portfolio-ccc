'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectModal from './ProjectModal';
import { categories, projects, type Project } from './data';
import { getProjectCta } from './projectCta';

export default function ProjectsMinimal() {
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
    : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-zinc-950 dark:via-primary-950/20 dark:to-zinc-950"
    >
      <div className="mx-auto max-w-3xl px-6">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
          <span className="bg-[length:200%_auto] bg-gradient-to-r from-zinc-900 via-primary-600 to-zinc-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent animate-[shimmer_8s_ease-in-out_infinite]">
            What we&rsquo;ve built.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-16">
          A curated selection of impactful projects across various technical
          disciplines and business domains.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-16">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false);
                }}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Section label */}
        <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-10">
          {activeFilter === 'All' ? 'All projects' : activeFilter}{' '}
          <span className="text-zinc-300 dark:text-zinc-700">
            &mdash; {filteredProjects.length}
          </span>
        </h3>

        {/* Project list */}
        <div className="space-y-0 divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
          {displayedProjects.map((project) => {
            const cta = getProjectCta(project);
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
                className="group w-full text-left py-8 first:pt-0 last:pb-0 transition-colors duration-200"
              >
                {/* Top row: title + year */}
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h4 className="text-base font-semibold text-zinc-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-xs text-zinc-400 dark:text-zinc-600 shrink-0 tabular-nums">
                    {project.year}
                  </span>
                </div>

                {/* Description — two lines max */}
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-3">
                  {project.description}
                </p>

                {/* Bottom row: category + tech + link */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[11px] text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded">
                    {project.category}
                  </span>
                  <span className="text-zinc-200 dark:text-zinc-800 text-[10px]">
                    /
                  </span>
                  <span className="text-[11px] text-zinc-400 dark:text-zinc-600">
                    {project.clientType}
                  </span>

                  {cta && (
                    <>
                      <span className="text-zinc-200 dark:text-zinc-800 text-[10px]">
                        /
                      </span>
                      {cta.mode === 'internal' ? (
                        <Link
                          href={cta.href}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                          View Project
                        </Link>
                      ) : (
                        <a
                          href={cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                          Visit
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="w-2.5 h-2.5"
                            aria-hidden
                          />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Show more */}
        {hasMoreProjects && (
          <div className="mt-16 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              {showAll ? 'Show less' : 'View all projects'}
            </button>
          </div>
        )}
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
