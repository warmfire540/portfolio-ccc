import React, { useState } from 'react';

import { useTheme } from 'utils/ThemeContext';

import { categories, projects } from 'data/projects';

import AnimatedSection from '../common/AnimatedSection';

/**
 * Renders the Projects section of the portfolio, displaying a filterable grid of project cards.
 *
 * Features:
 * - Displays a section header and description.
 * - Provides category filter buttons to filter projects by category.
 * - Shows a responsive grid of project cards, each with image, title, description, client type, technologies, and an optional link.
 * - Animates section elements and project cards using the `AnimatedSection` component.
 * - Adapts styling based on the current theme (light or dark).
 *
 * Dependencies:
 * - `useTheme` hook for theme context.
 * - `AnimatedSection` component for animations.
 * - `projects` and `categories` data arrays.
 *
 * @component
 * @returns {JSX.Element} The rendered Projects section.
 */
const Projects: React.FC = () => {
  const { theme } = useTheme();

  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter projects based on selected category
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A portfolio of my most impactful work across various technical
            disciplines. Each project represents unique challenges solved and
            value delivered.
          </p>
        </AnimatedSection>

        {/* Category filters */}
        <AnimatedSection
          animation="slide-up"
          className="flex flex-wrap justify-center mb-12 gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-indigo-900 text-white'
                  : theme === 'dark'
                  ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="zoom-in"
              delay={index * 100}
              className={`${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 hover:shadow-xl hover:shadow-indigo-900/20'
                  : 'bg-white border-gray-200 hover:shadow-xl'
              } rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-1 border`}
            >
              <img
                src={project.imageUrl}
                alt={`${project.title} project preview`}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${
                    theme === 'dark'
                      ? 'text-indigo-300 bg-indigo-900/50'
                      : 'text-indigo-800 bg-indigo-100'
                  }`}
                >
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="mb-3">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded mb-2 ${
                      theme === 'dark'
                        ? 'text-indigo-300 bg-gray-700'
                        : 'text-indigo-800 bg-gray-100'
                    }`}
                  >
                    Client: {project.clientType}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-gray-200'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={`w-full px-4 py-2 font-medium rounded-md transition-colors text-center ${
                        theme === 'dark'
                          ? 'border border-indigo-500 text-indigo-400 hover:bg-indigo-900/50'
                          : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                      }`}
                    >
                      View Details
                    </button>
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
