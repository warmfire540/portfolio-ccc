'use client';

import { useState } from 'react';
import {
  faArrowUpRightFromSquare,
  faCalendarDays,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BentoCell from '../hero/BentoCell';
import ProjectModal from './ProjectModal';
import { categories, projects, type Project } from './data';
import { getProjectCta } from './projectCta';

/* ------------------------------------------------------------------ */
/*  Featured (hero) card — first project gets the spotlight            */
/* ------------------------------------------------------------------ */

function FeaturedCard({
  project,
  onSelect,
}: Readonly<{ project: Project; onSelect: () => void }>) {
  return (
    <BentoCell
      className="sm:col-span-2 lg:col-span-2 !p-0 overflow-hidden cursor-pointer group"
      delay={100}
    >
      <button type="button" onClick={onSelect} className="w-full text-left">
        <div className="relative h-52 sm:h-64 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <span className="inline-block px-2.5 py-1 text-[10px] font-semibold rounded-full bg-primary-600 text-white mb-2">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-white leading-tight">
              {project.title}
            </h3>
          </div>
        </div>
        <div className="p-5">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-600/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] px-2 py-0.5 text-zinc-400 dark:text-zinc-600">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </button>
    </BentoCell>
  );
}

/* ------------------------------------------------------------------ */
/*  Compact card — smaller grid tiles                                  */
/* ------------------------------------------------------------------ */

function CompactCard({
  project,
  index,
  onSelect,
}: Readonly<{ project: Project; index: number; onSelect: () => void }>) {
  return (
    <BentoCell
      className="!p-0 overflow-hidden cursor-pointer group"
      delay={150 + index * 60}
    >
      <button type="button" onClick={onSelect} className="w-full text-left">
        <div className="relative h-32 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
            <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-primary-600/90 text-white">
              {project.category}
            </span>
            <span className="text-[10px] text-white/80 flex items-center gap-1">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="w-2.5 h-2.5"
                aria-hidden
              />
              {project.year}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-sm font-semibold text-zinc-800 dark:text-white mb-1 truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h4>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-2">
            {project.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
              {project.clientType}
            </span>
            {getProjectCta(project) && (
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-2.5 h-2.5 text-zinc-300 dark:text-zinc-700"
                aria-hidden
              />
            )}
          </div>
        </div>
      </button>
    </BentoCell>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ProjectsBento() {
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
    : filteredProjects.slice(0, 5);
  const hasMoreProjects = filteredProjects.length > 5;

  const [featured, ...rest] = displayedProjects;

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Warm editorial background */}
      <div className="absolute inset-0 bg-[#faf9f7] dark:bg-[#121110]" />
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #d4d0c8 0.8px, transparent 0.8px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(234,179,8,0.04),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(234,179,8,0.05),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading cell */}
          <BentoCell
            className="flex flex-col items-center justify-center text-center !bg-primary-600 !border-primary-700 !p-10 mb-4"
            delay={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Our Projects
            </h2>
            <p className="text-primary-100 text-base sm:text-lg max-w-2xl">
              A curated selection of impactful projects across various technical
              disciplines and business domains.
            </p>
          </BentoCell>

          {/* Category filter pills */}
          <BentoCell className="!p-4 mb-4" delay={50}>
            <div className="flex flex-wrap gap-2 justify-center">
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
                    className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-primary-300 dark:hover:border-primary-700'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </BentoCell>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-min">
            {/* Featured card */}
            {featured && (
              <FeaturedCard
                project={featured}
                onSelect={() => openModal(featured)}
              />
            )}

            {/* Stats cell */}
            <BentoCell className="flex flex-col justify-center" delay={120}>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-3">
                Portfolio
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                    {projects.length}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Total Projects
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                    {categories.length - 1}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Categories
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                    {new Set(projects.map((p) => p.clientType)).size}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Client Types
                  </div>
                </div>
              </div>
            </BentoCell>

            {/* Top tech cell */}
            <BentoCell className="flex flex-col justify-center" delay={140}>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-3">
                Top Technologies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {Array.from(new Set(projects.flatMap((p) => p.technologies)))
                  .slice(0, 10)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600 text-zinc-600 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </BentoCell>

            {/* Rest of the project cards */}
            {rest.map((project, i) => (
              <CompactCard
                key={project.id}
                project={project}
                index={i}
                onSelect={() => openModal(project)}
              />
            ))}
          </div>

          {/* Show more / less */}
          {hasMoreProjects && (
            <div className="text-center mt-8">
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition-colors duration-300 shadow-md hover:shadow-primary-600/20 bg-white/80 dark:bg-zinc-800/80"
              >
                {showAll ? (
                  <>
                    Show Less
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
                      aria-hidden
                    />
                  </>
                ) : (
                  <>
                    View All Projects
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
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
