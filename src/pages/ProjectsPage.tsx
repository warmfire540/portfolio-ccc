import React, { useState } from 'react';
import CtaButton from '../components/common/CtaButton';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

const ProjectsPage: React.FC = () => {
  // List of project categories for filtering
  const categories = ['All', 'Architecture', 'Development', 'Cloud', 'DevOps', 'Integration'];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Project data
  const projects: Project[] = [
    {
      id: 'monolith-to-microservices',
      title: 'Legacy Monolith to Microservices Transformation',
      category: 'Architecture',
      description:
        'Transformed a legacy on-premise monolithic application into a scalable cloud model with microservices architecture, improving scalability and maintainability.',
      technologies: ['Azure', 'Kubernetes', '.NET Core', 'Docker', 'Event-driven architecture'],
      imageUrl: '/api/placeholder/800/600',
    },
    {
      id: 'data-integration-platform',
      title: 'Enterprise Data Integration Platform',
      category: 'Integration',
      description:
        'Built a comprehensive data integration platform connecting multiple systems and providing a unified data lake for analytics and reporting.',
      technologies: ['Azure Data Factory', 'Databricks', 'Delta Lake', 'PowerBI'],
      imageUrl: '/api/placeholder/800/600',
    },
    {
      id: 'e-commerce-platform',
      title: 'Modern E-Commerce Platform',
      category: 'Development',
      description:
        'Developed a high-performance e-commerce platform with seamless payment processing and inventory management integration.',
      technologies: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'Stripe API'],
      imageUrl: '/api/placeholder/800/600',
    },
    {
      id: 'devops-automation',
      title: 'CI/CD Pipeline Automation',
      category: 'DevOps',
      description:
        'Implemented comprehensive CI/CD pipeline automation, significantly reducing deployment time and improving code quality through automated testing.',
      technologies: ['Azure DevOps', 'GitHub Actions', 'Docker', 'Selenium', 'xUnit'],
      imageUrl: '/api/placeholder/800/600',
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Strategy & Implementation',
      category: 'Cloud',
      description:
        'Designed and executed a phased cloud migration strategy, moving critical business applications to the cloud while ensuring zero downtime.',
      technologies: ['Azure', 'Terraform', 'Azure Site Recovery', 'Load Testing'],
      imageUrl: '/api/placeholder/800/600',
    },
    {
      id: 'finance-portal',
      title: 'Financial Services Customer Portal',
      category: 'Development',
      description:
        'Built a secure, responsive customer portal for a financial services provider, featuring account management, document uploads, and secure messaging.',
      technologies: ['Vue.js', 'TypeScript', '.NET Core', 'Azure AD B2C', 'Entity Framework'],
      imageUrl: '/api/placeholder/800/600',
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects delivering innovative solutions across
            various industries and technical challenges.
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
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
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
                <p className="text-gray-600 mb-4">{project.description}</p>
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

        {/* Call to action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how we can apply our expertise to solve your specific business
            challenges and create curiously better software together.
          </p>
          <CtaButton
            text="Start a Conversation"
            onClick={() => {}}
            primary={true}
            className="text-lg px-6 py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
