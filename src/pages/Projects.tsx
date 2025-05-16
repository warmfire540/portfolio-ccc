import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useTheme } from 'utils/ThemeContext';

import { categories, projects } from 'data/projects';

import AnimatedSection from '../components/common/AnimatedSection';

const CCCProjectsPage: React.FC = () => {
  const { theme } = useTheme();

  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter projects based on selected category
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="bg-white dark:bg-gray-900 py-12 pt-32">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Projects
          </h1>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  <Link to={project.link} target="_blank">
                    <button
                      className={`w-full px-4 py-2 font-medium rounded-md transition-colors text-center ${
                        theme === 'dark'
                          ? 'border border-indigo-500 text-indigo-400 hover:bg-indigo-900/50'
                          : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                      }`}
                    >
                      View Details
                    </button>
                  </Link>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Empty state if no projects match filter */}
        {filteredProjects.length === 0 && (
          <AnimatedSection
            animation="fade-in"
            className={`text-center py-16 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No projects match the selected filter. Try another category.
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors"
            >
              Show All Projects
            </button>
          </AnimatedSection>
        )}

        {/* Call to action */}
        <AnimatedSection
          animation="fade-in"
          className={`text-center mt-16 py-12 px-6 rounded-lg text-white ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-indigo-800 to-indigo-600'
              : 'bg-gradient-to-r from-indigo-900 to-indigo-700'
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss how Curious Cat Consulting can help bring your ideas
            to life with thoughtful, well-architected solutions.
          </p>
          <Link
            to="/contact"
            className={`px-6 py-3 font-medium text-lg rounded-md transition-colors inline-block ${
              theme === 'dark'
                ? 'bg-white text-indigo-800 hover:bg-gray-100'
                : 'bg-white text-indigo-800 hover:bg-gray-100'
            }`}
          >
            Get In Touch
          </Link>
        </AnimatedSection>

        {/* Services Section */}
        <div className="mt-16">
          <AnimatedSection animation="fade-in" className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Services Offered
            </h2>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <AnimatedSection
                animation="slide-right"
                delay={0}
                className={`p-6 rounded-lg ${
                  theme === 'dark'
                    ? 'border border-gray-700 bg-gray-800/50'
                    : 'border border-gray-200'
                }`}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Custom Software Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  From concept to deployment, I build custom software solutions
                  tailored to your specific business needs. My development
                  process focuses on quality, maintainability, and delivering
                  real business value.
                </p>
              </AnimatedSection>

              <AnimatedSection
                animation="slide-right"
                delay={200}
                className={`p-6 rounded-lg ${
                  theme === 'dark'
                    ? 'border border-gray-700 bg-gray-800/50'
                    : 'border border-gray-200'
                }`}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Legacy System Modernization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I help businesses transform outdated systems into modern,
                  scalable applications. My approach minimizes risk and
                  disruption while maximizing the benefits of modern technology.
                </p>
              </AnimatedSection>

              <AnimatedSection
                animation="slide-right"
                delay={400}
                className={`p-6 rounded-lg ${
                  theme === 'dark'
                    ? 'border border-gray-700 bg-gray-800/50'
                    : 'border border-gray-200'
                }`}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Cloud Migration & Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I guide organizations through every step of moving to the
                  cloud, from strategy and planning to implementation and
                  optimization. My cloud solutions are secure, scalable, and
                  cost-effective.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection
              animation="fade-in"
              delay={500}
              className="text-center mt-8"
            >
              <Link
                to="/services"
                className={`px-6 py-2 font-medium rounded-md transition-colors inline-block ${
                  theme === 'dark'
                    ? 'border border-indigo-500 text-indigo-400 hover:bg-indigo-900/30'
                    : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                View All Services
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCCProjectsPage;
