'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  faCalendarDays,
  faUpRightFromSquare,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Project } from './data';
import { getProjectCta, projectExternalLinkLabel } from './projectCta';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: Readonly<ProjectModalProps>) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;

    if (isOpen && project) {
      if (!d.open) {
        d.showModal();
      }
      document.body.style.overflow = 'hidden';
    } else {
      if (d.open) {
        d.close();
      }
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, project]);

  const cta = project ? getProjectCta(project) : null;

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby={project ? 'project-title' : undefined}
      aria-modal="true"
      className="fixed inset-0 z-50 m-0 hidden h-full max-h-none w-full max-w-none animate-fade-in border-0 bg-transparent p-4 open:flex open:items-center open:justify-center [&::backdrop]:bg-black/75"
    >
      {project ? (
        <>
          <button
            type="button"
            className="absolute inset-0 z-0 border-0 bg-transparent p-0"
            onClick={closeDialog}
            aria-label="Close modal"
          />
          <div className="relative z-10 mx-4 max-h-[90vh] w-full max-w-4xl animate-slide-up overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeDialog}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 text-gray-400 shadow-lg backdrop-blur-sm transition-colors hover:text-gray-600 dark:bg-gray-800/90 dark:hover:text-gray-300"
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
            </button>

            {/* Project Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-t-2xl md:h-80 lg:h-96">
              <Image
                src={project.imageUrl}
                alt={`${project.title} project preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-block rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white">
                    {project.category}
                  </span>
                  <div className="flex items-center text-sm text-white">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="mr-2 h-4 w-4"
                    />
                    {project.year}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 md:p-8">
              {/* Title */}
              <h2
                id="project-title"
                className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white"
              >
                {project.title}
              </h2>

              {/* Description */}
              <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              {/* Client Type */}
              <div className="mb-6">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Client Type
                </h3>
                <span className="inline-block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                  {project.clientType}
                </span>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-primary-200 bg-primary-50 px-3 py-2 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              {cta && (
                <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                  {cta.mode === 'internal' ? (
                    <Link
                      href={cta.href}
                      onClick={closeDialog}
                      className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-primary-700 hover:shadow-primary-600/25"
                    >
                      View Project
                    </Link>
                  ) : (
                    <a
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-primary-700 hover:shadow-primary-600/25"
                    >
                      {projectExternalLinkLabel(project.linkType)}
                      <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        className="ml-2 h-5 w-5"
                      />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      ) : null}
    </dialog>
  );
}
