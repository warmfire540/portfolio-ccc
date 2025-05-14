import React from 'react';
import { Service } from '../types/Service';
import ServiceCard from '../components/services/ServiceCard';
import CtaButton from '../components/common/CtaButton';

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      id: 'software-architecture',
      title: 'Software Architecture',
      description: 'Design scalable, resilient systems with modern architectural patterns.',
      icon: 'Layers',
      longDescription: `Our architecture services focus on creating robust, maintainable software systems that stand the test of time. We specialize in microservices, cloud-native applications, and enterprise-grade architectures that enable businesses to scale efficiently.`,
      benefits: [
        'Scalable, future-proof system design',
        'Reduced technical debt',
        'Improved system performance and reliability',
        'Architecture that aligns with business goals',
      ],
      technologies: [
        'Microservices Architecture',
        'Cloud-Native Patterns',
        'Domain-Driven Design',
        'Event-Driven Architecture',
      ],
    },
    {
      id: 'full-stack-development',
      title: 'Full-Stack Development',
      description: 'Expert development with C#/.NET, React, Vue.js and various cloud platforms.',
      icon: 'Code',
      longDescription: `We leverage modern technologies to build powerful, user-friendly applications. With expertise in both frontend and backend development, we deliver seamless experiences that satisfy both users and business requirements.`,
      benefits: [
        'End-to-end application development',
        'Responsive and accessible UI/UX',
        'Optimized performance',
        'Comprehensive testing and quality assurance',
      ],
      technologies: [
        'C#/.NET Core',
        'React/Vue.js/Angular',
        'TypeScript',
        'Azure/AWS/GCP',
        'Entity Framework',
      ],
    },
    {
      id: 'devops-automation',
      title: 'DevOps & Automation',
      description:
        'Streamline development workflows with CI/CD pipelines and infrastructure as code.',
      icon: 'RefreshCw',
      longDescription: `Accelerate your development cycles while maintaining high quality standards through our DevOps expertise. We implement continuous integration, delivery, and deployment processes that enable teams to ship faster with confidence.`,
      benefits: [
        'Accelerated time-to-market',
        'Improved code quality',
        'Reduced operational overhead',
        'Increased deployment frequency with lower failure rates',
      ],
      technologies: [
        'Docker & Kubernetes',
        'Azure DevOps/GitHub Actions',
        'Infrastructure as Code (Terraform)',
        'CI/CD Pipelines',
        'Automated Testing',
      ],
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Harness the power of cloud with optimized infrastructure and management.',
      icon: 'Cloud',
      longDescription: `We design and implement cloud-based infrastructure solutions that provide scalability, reliability, and cost efficiency. Our cloud expertise spans multiple platforms and includes migration strategies, optimization, and ongoing management.`,
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and elasticity',
        'Enhanced disaster recovery capabilities',
        'Pay-as-you-go flexibility',
      ],
      technologies: [
        'Azure Services',
        'AWS Services',
        'Google Cloud Platform',
        'Serverless Architecture',
        'Cloud Optimization & Management',
      ],
    },
    {
      id: 'data-integration',
      title: 'Data Integration & ETL',
      description: 'Connect systems and transform data for meaningful insights.',
      icon: 'Database',
      longDescription: `Our data integration services help businesses unify disparate data sources, implement effective ETL processes, and build reliable data pipelines. We enable organizations to leverage their data assets for better decision-making.`,
      benefits: [
        'Unified view of business data',
        'Improved data quality and consistency',
        'Automated data workflows',
        'Enhanced reporting and analytics',
      ],
      technologies: [
        'Azure Data Factory',
        'Databricks',
        'Power Automate',
        'SQL/NoSQL Databases',
        'Data Warehousing Solutions',
      ],
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      description: 'Protect your applications and data with robust security measures.',
      icon: 'Shield',
      longDescription: `We integrate security throughout the development lifecycle, ensuring your applications and data remain protected. Our approaches include secure coding practices, identity management solutions, and compliance with industry standards.`,
      benefits: [
        'Proactive security posture',
        'Compliance with industry regulations',
        'Reduced security vulnerabilities',
        'Secure authentication and authorization',
      ],
      technologies: [
        'OAuth/OIDC',
        'Identity & Access Management',
        'Secure Coding Practices',
        'Compliance Frameworks (GDPR, HIPAA, etc.)',
        'Security Auditing',
      ],
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From architecture to implementation, we provide comprehensive software solutions to help
            your business succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-indigo-50 rounded-lg p-8 border border-indigo-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our expertise extends beyond these core services. Let&apos;s discuss your specific
              requirements and create a tailored approach for your business challenges.
            </p>
            <CtaButton
              text="Contact Us"
              onClick={() => {}}
              primary={true}
              className="text-lg px-6 py-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
