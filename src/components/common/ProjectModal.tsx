import React, { useEffect } from 'react';

import { Calendar, ExternalLink, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Project } from '../../data/projects';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBackdropKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={handleBackdropClick}
      onKeyDown={handleBackdropKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Close modal"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 relative max-h-[90vh] overflow-y-auto animate-slide-up"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image */}
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-t-2xl">
          <img
            src={project.imageUrl}
            alt={`${project.title} project preview`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-primary-600 text-white">
                {project.category}
              </span>
              <div className="flex items-center text-white text-sm">
                <Calendar className="w-4 h-4 mr-2" />
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
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            {project.description}
          </p>

          {/* Client Type */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
              Client Type
            </h3>
            <span className="inline-block px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              {project.clientType}
            </span>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 text-sm rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Link */}
          {project.link && (
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              {project.detailPageUrl && project.linkType === 'project' ? (
                <Link
                  to={project.detailPageUrl}
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-primary-600/25"
                >
                  View Project
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-primary-600/25"
                >
                  {project.linkType === 'technology'
                    ? 'View Technology'
                    : project.linkType === 'client'
                    ? 'View Client'
                    : 'View Project'}
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
