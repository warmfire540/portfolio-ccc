import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import AnimatedSection from '../components/common/AnimatedSection';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  clientType: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
}

const CCCProjectsPage: React.FC = () => {
  // List of project categories for filtering
  const categories = [
    'All',
    'Architecture',
    'Full-Stack',
    'Cloud',
    'DevOps',
    'Data Integration',
  ];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Project data - limited since you mentioned just having completed one project
  const projects: Project[] = [
    {
      id: 'first-client-project',
      title: 'Enterprise System Modernization',
      category: 'Architecture',
      description:
        "Transformed a legacy on-premise monolithic application into a scalable cloud architecture. Collaborated with the client's technical team to implement a Well-Architected Framework in Azure, significantly improving system reliability and performance.",
      clientType: 'Mid-size Manufacturing Company',
      technologies: [
        'Azure',
        'Microservices',
        '.NET Core',
        'Event-driven Architecture',
        'CI/CD',
      ],
      imageUrl: '/api/placeholder/800/600',
      link: '#',
    },
    // Adding some placeholder projects for the future
    {
      id: 'future-project-1',
      title: 'Coming Soon: Data Integration Platform',
      category: 'Data Integration',
      description:
        'I have capacity to take on new data integration projects. My expertise includes building ETL pipelines, data warehousing solutions, and real-time data processing systems.',
      clientType: 'Your Company Here',
      technologies: [
        'Azure Data Factory',
        'Power BI',
        'SQL Server',
        'Python',
        'Databricks',
      ],
      imageUrl: '/api/placeholder/800/600',
    },
    {
      id: 'future-project-2',
      title: 'Coming Soon: Cloud Migration',
      category: 'Cloud',
      description:
        'Looking to migrate your applications to the cloud? I can help with planning, architecture design, and implementation to ensure a smooth transition with minimal disruption.',
      clientType: 'Your Company Here',
      technologies: [
        'AWS',
        'Azure',
        'GCP',
        'Containerization',
        'Kubernetes',
        'Terraform',
      ],
      imageUrl: '/api/placeholder/800/600',
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="bg-white py-12 pt-32">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <img
                src={project.imageUrl}
                alt={`${project.title} project preview`}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-800 bg-indigo-100 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-indigo-800 bg-gray-100 rounded mb-2">
                    Client: {project.clientType}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <button
                    onClick={() => console.log(`Navigate to: ${project.link}`)}
                    className="w-full px-4 py-2 border border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-colors text-center"
                  >
                    View Details
                  </button>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Empty state if no projects match filter */}
        {filteredProjects.length === 0 && (
          <AnimatedSection
            animation="fade-in"
            className="text-center py-16 bg-gray-50 rounded-lg"
          >
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 mb-4">
              No projects match the selected filter. Try another category.
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
            >
              Show All Projects
            </button>
          </AnimatedSection>
        )}

        {/* Call to action */}
        <AnimatedSection
          animation="fade-in"
          className="text-center mt-16 py-12 px-6 bg-gradient-to-r from-indigo-900 to-indigo-700 rounded-lg text-white"
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
            className="px-6 py-3 bg-white text-indigo-800 font-medium text-lg rounded-md hover:bg-gray-100 transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </AnimatedSection>

        {/* Services Section */}
        <div className="mt-16">
          <AnimatedSection animation="fade-in" className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Services Offered
            </h2>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <AnimatedSection
                animation="slide-right"
                delay={0}
                className="p-6 border border-gray-200 rounded-lg"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Custom Software Development
                </h3>
                <p className="text-gray-600">
                  From concept to deployment, I build custom software solutions
                  tailored to your specific business needs. My development
                  process focuses on quality, maintainability, and delivering
                  real business value.
                </p>
              </AnimatedSection>

              <AnimatedSection
                animation="slide-right"
                delay={200}
                className="p-6 border border-gray-200 rounded-lg"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Legacy System Modernization
                </h3>
                <p className="text-gray-600">
                  I help businesses transform outdated systems into modern,
                  scalable applications. My approach minimizes risk and
                  disruption while maximizing the benefits of modern technology.
                </p>
              </AnimatedSection>

              <AnimatedSection
                animation="slide-right"
                delay={400}
                className="p-6 border border-gray-200 rounded-lg"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Cloud Migration & Optimization
                </h3>
                <p className="text-gray-600">
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
                className="px-6 py-2 border border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-colors inline-block"
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
