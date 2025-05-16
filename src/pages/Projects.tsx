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

  // Project data
  const projects: Project[] = [
    {
      id: 'home-assistant-extensions',
      title: 'Home Assistant Open Source Contributions',
      category: 'Full-Stack',
      description:
        'Maintained and developed 6+ open source integrations and extensions for Home Assistant, the popular home automation platform. Projects include custom components, integrations with various APIs and services, and utilities that enhance the Home Assistant ecosystem. These projects have collectively received hundreds of stars on GitHub and are actively used by the community.',
      clientType: 'Open Source / Community',
      technologies: [
        'Python',
        'Home Assistant',
        'REST APIs',
        'MQTT',
        'GitHub Actions',
        'IoT Protocols',
        'Automation',
      ],
      imageUrl: '/assets/projects/ha.png',
      link: 'https://github.com/orgs/homeassistant-extras/repositories',
    },
    {
      id: 'ci-cd-transformation',
      title: 'Enterprise CI/CD Transformation',
      category: 'DevOps',
      description:
        'Transformed a brittle, manual deployment process into a robust, automated CI/CD pipeline. Revamped Git workflows, implemented branch protection rules, and created standardized deployment templates. Reduced deployment time by 85% while eliminating deployment errors that had previously affected business operations.',
      clientType: 'Large Retail Corporation',
      technologies: [
        'Azure DevOps',
        'Bitbucket Pipelines',
        'Docker',
        'PowerShell',
        'YAML',
        '.NET Core',
        'Git Flow',
      ],
      imageUrl: '/assets/projects/devops.png',
    },
    {
      id: 'cloud-data-transformation',
      title: 'Digital Transformation - Ground to Cloud',
      category: 'Cloud',
      description:
        'Led a comprehensive migration from legacy on-premise applications to a scalable cloud architecture. Developed data pipeline integrations between on-premise SQL databases and cloud-based Delta Lake infrastructure. Enabled business self-service reporting through Power BI, replacing outdated SSRS and Cognos implementations.',
      clientType: 'National Retail Chain',
      technologies: [
        'Azure Data Factory',
        'Databricks',
        'Google Cloud Platform',
        'Power BI',
        'ASP.NET',
        'Microservices',
        'Hubspot Integration',
      ],
      imageUrl: '/assets/projects/delta.jpeg',
      link: 'https://learn.microsoft.com/en-us/azure/databricks/introduction/',
    },
    {
      id: 'intranet-modernization',
      title: 'SharePoint Intranet Modernization',
      category: 'Full-Stack',
      description:
        'Revitalized an outdated corporate intranet by implementing modern workflows, approval processes, and security groups. Created custom PowerApps solutions to replace paper-based processes, and developed Power Automate flows to streamline business operations. Implemented proper governance and documentation to ensure long-term maintainability.',
      clientType: 'Healthcare Services Provider',
      technologies: [
        'SharePoint Online',
        'Power Apps',
        'Power Automate',
        'Microsoft Graph API',
        'Azure AD',
        'React',
        'SPFx',
      ],
      imageUrl: '/assets/projects/sharepoint.jpg',
      link: 'https://www.ctileadership.com/',
    },
    {
      id: 'legacy-app-modernization',
      title: 'Legacy Application Modernization',
      category: 'Architecture',
      description:
        'Transformed a suite of outdated Windows Forms applications into a modern web-based platform. Applied domain-driven design principles to restructure the application architecture while preserving business logic. Implemented a phased migration approach that minimized business disruption while delivering incremental improvements.',
      clientType: 'Financial Services Firm',
      technologies: [
        'React',
        'TypeScript',
        'ASP.NET Core API',
        'Entity Framework',
        'SQL Server',
        'Azure App Services',
        'CI/CD',
      ],
      imageUrl: '/assets/projects/modernize.jpg',
    },
    {
      id: 'gl-system-integration',
      title: 'General Ledger System Integration',
      category: 'Data Integration',
      description:
        'Orchestrated the integration between a legacy accounting system and a new enterprise DMS platform. Identified all affected systems, many with no prior documentation, and developed comprehensive migration strategies. Created validation frameworks to ensure data integrity during and after migration, resulting in zero financial discrepancies post-cutover.',
      clientType: 'Automotive Retail Group',
      technologies: [
        'SQL Server',
        'Azure Functions',
        'Dynamics AX',
        'Custom APIs',
        'PowerShell',
        'ETL Processes',
        'Data Validation Framework',
      ],
      imageUrl: '/assets/projects/d365.jpg',
      link: 'https://www.microsoft.com/en-us/dynamics-365',
    },
    {
      id: 'multi-system-integration',
      title: 'Multi-System Integration Platform',
      category: 'Data Integration',
      description:
        'Designed and implemented an integration hub that connected disparate business systems (CRM, ERP, and custom applications) to enable unified data flow across the organization. Created a centralized logging and monitoring solution that provided real-time visibility into integration health and data movement.',
      clientType: 'Manufacturing Enterprise',
      technologies: [
        'Azure Service Bus',
        'Logic Apps',
        'API Management',
        'Event Grid',
        'Azure Functions',
        'Cosmos DB',
        'Application Insights',
      ],
      imageUrl: '/assets/projects/integration.png',
      link: 'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven',
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
                  <Link to={project.link} target="_blank">
                    <button className="w-full px-4 py-2 border border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-colors text-center">
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
