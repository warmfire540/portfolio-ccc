import React, { useState } from 'react';
import CtaButton from '../components/common/CtaButton';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
}

const PortfolioProjectsPage: React.FC = () => {
  // List of project categories for filtering
  const categories = ['All', 'Architecture', 'Full-Stack', 'Cloud', 'DevOps', 'Data Integration'];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Project data - based on your resume
  const projects: Project[] = [
    {
      id: 'enterprise-platform',
      title: 'Enterprise Platform Solutions',
      category: 'Full-Stack',
      description:
        'Led a full-stack development team in designing and building enterprise platform solutions with C#/.NET backend services, Vue.js frontend applications, and Google Cloud Platform infrastructure across multiple Agile projects.',
      role: 'Lead Developer',
      technologies: ['C#/.NET', 'Vue.js', 'Google Cloud Platform', 'Microservices', 'Agile'],
      imageUrl: '/api/placeholder/800/600',
      link: '#',
    },
    {
      id: 'cloud-transformation',
      title: 'Legacy to Cloud Transformation',
      category: 'Architecture',
      description:
        'Transformed legacy on-premise monolithic app infrastructure into a scalable cloud model, collaborating with multiple vendors to construct a PowerBI and Delta Lake cloud infrastructure in Azure with a Well-Architected Framework established in partnership with Microsoft.',
      role: 'Transformation Architect',
      technologies: ['Azure', 'PowerBI', 'Delta Lake', 'Microservices', 'Well-Architected Framework'],
      imageUrl: '/api/placeholder/800/600',
      link: '#',
    },
    {
      id: 'gl-migration',
      title: 'General Ledger Migration',
      category: 'Data Integration',
      description:
        'Migrated a company\'s General Ledger from Dynamics AX to an integrated DMS system with an internal GL, overseeing the adaptation of all related portals, services, and reports to ensure seamless functionality and integration, improving data retrieval speeds by 250%.',
      role: 'Senior Application Developer',
      technologies: ['Dynamics AX', '.NET Core', 'SQL Server', 'ETL', 'Data Migration'],
      imageUrl: '/api/placeholder/800/600',
      link: '#',
    },
    {
      id: 'cicd-pipeline',
      title: 'CI/CD Pipeline Automation',
      category: 'DevOps',
      description:
        'Engineered reusable Bitbucket Pipes and YML templates for various technologies, establishing 40+ repositories for building, testing, and deploying using cloud and on-premise runners, achieving streamlined automation across multiple environments.',
      role: 'DevOps Engineer',
      technologies: ['Bitbucket', 'CI/CD', 'Docker', 'Azure DevOps', 'Windows Runners'],
      imageUrl: '/api/placeholder/800/600',
      link: '#',
    },
    {
      id: 'shared-services',
      title: 'Scalable Shared Services Platform',
      category: 'Architecture',
      description:
        'Engineered a scalable, available, and secure shared services platform within a new architecture, integrating core products and ensuring compatibility across multiple versions, using GoLang and React, hosted in AWS, and secured with OAuth and JWT.',
      role: 'Team Lead / Software Engineer',
      technologies: ['GoLang', 'React', 'AWS', 'OAuth', 'JWT', 'Microservices'],
      imageUrl: '/api/placeholder/800/600',
      link: '#',
    },
    {
      id: 'data-integration-platform',
      title: 'Enterprise Data Integration Platform',
      category: 'Data Integration',
      description:
        'Worked with vendors to define new integrations, conversions, and product onboarding using Databricks, Power Automate, Azure Data Factory, and Informatica, ensuring seamless system interoperability and achieving a data accuracy rate of 99% and pipeline success of 95%.',
      role: 'Solutions Architect',
      technologies: ['Databricks', 'Power Automate', 'Azure Data Factory', 'Informatica', 'ETL'],
      imageUrl: '/api/placeholder/800/600',
      link: '#',
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A portfolio of my most impactful work across various technical disciplines.
            Each project represents unique challenges solved and value delivered.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
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
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
              data-testid={`project-card-${project.id}`}
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
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-indigo-800 bg-gray-100 rounded mb-2">
                    Role: {project.role}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <CtaButton
                  text="View Details"
                  onClick={() => {}}
                  primary={false}
                  className="w-full text-center"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-4">No projects match the selected filter. Try another category.</p>
            <CtaButton
              text="Show All Projects"
              onClick={() => setActiveFilter('All')}
              primary={true}
            />
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16 py-12 px-6 bg-gradient-to-r from-indigo-900 to-indigo-700 rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss how my technical expertise can help bring your ideas to life with thoughtful, well-architected solutions.
          </p>
          <CtaButton
            text="Get In Touch"
            onClick={() => {}}
            primary={false}
            className="text-lg px-6 py-3 bg-white text-indigo-800 hover:bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjectsPage;