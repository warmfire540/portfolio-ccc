import React from 'react';
import { Code, Database, Layers, RefreshCw, Cloud, Terminal, FileCode, Server, Workflow, GitBranch, BarChart, Users } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  offerings: string[];
}

const CCCServicesPage: React.FC = () => {
  // Services data
  const services: Service[] = [
    {
      id: 'architecture',
      title: 'Software Architecture',
      description: 'Design scalable, maintainable systems that align with your business goals and technical requirements.',
      icon: <Layers size={48} className="text-indigo-600" />,
      benefits: [
        'Scalable systems that grow with your business',
        'Reduced technical debt and maintenance costs',
        'Improved performance and reliability',
        'Better alignment between technology and business goals'
      ],
      offerings: [
        'Architecture assessment and review',
        'Cloud architecture design',
        'Microservices architecture',
        'Event-driven architecture',
        'System integration architecture'
      ]
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      description: 'Build complete web and mobile applications with modern front-end interfaces and robust back-end services.',
      icon: <Code size={48} className="text-indigo-600" />,
      benefits: [
        'Cohesive application development from end to end',
        'Consistent practices across the technology stack',
        'Streamlined communication and faster development',
        'Unified testing and quality assurance approach'
      ],
      offerings: [
        'Custom web application development',
        'RESTful API development',
        'Progressive Web Apps (PWAs)',
        'Single Page Applications (SPAs)',
        'Database design and implementation'
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      description: 'Leverage the power of cloud platforms to reduce costs, increase scalability, and improve reliability.',
      icon: <Cloud size={48} className="text-indigo-600" />,
      benefits: [
        'Reduced infrastructure costs and management overhead',
        'Improved scalability and flexibility',
        'Enhanced disaster recovery capabilities',
        'Access to cutting-edge cloud services and features'
      ],
      offerings: [
        'Cloud migration strategy and implementation',
        'Multi-cloud and hybrid cloud solutions',
        'Serverless architecture and development',
        'Cloud cost optimization',
        'Managed services integration'
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      description: 'Streamline your development lifecycle with continuous integration, delivery, and infrastructure as code.',
      icon: <RefreshCw size={48} className="text-indigo-600" />,
      benefits: [
        'Faster, more reliable software releases',
        'Reduced deployment risks and downtime',
        'Improved collaboration between development and operations',
        'Consistent, repeatable infrastructure provisioning'
      ],
      offerings: [
        'CI/CD pipeline implementation',
        'Infrastructure as Code (IaC)',
        'Containerization with Docker and Kubernetes',
        'Automated testing strategies',
        'Monitoring and observability solutions'
      ]
    },
    {
      id: 'data',
      title: 'Data Integration',
      description: 'Connect disparate systems and data sources to provide a unified view of your business information.',
      icon: <Database size={48} className="text-indigo-600" />,
      benefits: [
        'Unified view of business data across systems',
        'Improved data quality and consistency',
        'Reduced manual data entry and processing',
        'Enhanced reporting and analytics capabilities'
      ],
      offerings: [
        'ETL/ELT pipeline development',
        'API integration and management',
        'Data warehouse design and implementation',
        'Real-time data processing solutions',
        'Legacy system integration'
      ]
    },
    {
      id: 'consultation',
      title: 'Technical Consultation',
      description: 'Get expert advice on technology selection, system design, and technical strategy to guide your decisions.',
      icon: <Terminal size={48} className="text-indigo-600" />,
      benefits: [
        'Informed decisions based on technical expertise',
        'Reduced risk in technology selection',
        'Clear roadmap for technical implementation',
        'Independent perspective on technical challenges'
      ],
      offerings: [
        'Technology stack evaluation and selection',
        'Technical debt assessment and remediation planning',
        'System performance optimization',
        'Security and compliance review',
        'Technical team mentoring and training'
      ]
    }
  ];

  // Additional specialized services
  const specializedServices = [
    {
      title: 'Legacy System Modernization',
      icon: <Server size={24} className="text-indigo-600" />,
      description: 'Transform outdated systems into modern, maintainable applications without losing critical functionality.'
    },
    {
      title: 'API Design & Development',
      icon: <FileCode size={24} className="text-indigo-600" />,
      description: 'Create well-designed, developer-friendly APIs that enable seamless integration and extensibility.'
    },
    {
      title: 'Workflow Automation',
      icon: <Workflow size={24} className="text-indigo-600" />,
      description: 'Automate repetitive business processes to improve efficiency, reduce errors, and free up valuable resources.'
    },
    {
      title: 'Version Control & Branching Strategy',
      icon: <GitBranch size={24} className="text-indigo-600" />,
      description: 'Establish effective source code management practices to support your development team and release processes.'
    },
    {
      title: 'Data Visualization',
      icon: <BarChart size={24} className="text-indigo-600" />,
      description: 'Transform raw data into insightful visualizations that help drive better business decisions.'
    },
    {
      title: 'Team Augmentation',
      icon: <Users size={24} className="text-indigo-600" />,
      description: 'Supplement your existing technical team with my expertise to tackle challenging projects or meet deadlines.'
    }
  ];

  return (
    <div className="bg-white pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Curious Cat Consulting provides a comprehensive range of software development and consulting services 
            to help businesses build, modernize, and optimize their digital solutions.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How I Can Help</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From architecture design to implementation and support, I provide end-to-end services 
              to address your most challenging technical problems.
            </p>
          </AnimatedSection>

          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection 
                key={service.id}
                animation={index % 2 === 0 ? "slide-right" : "slide-up"}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="md:w-1/3 flex justify-center">
                  <div className="p-6 bg-indigo-100 rounded-full">{service.icon}</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-700 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-700 mb-3">What I Offer</h4>
                      <ul className="space-y-2">
                        {service.offerings.map((offering, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span className="text-gray-600">{offering}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Specialized Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond my core offerings, I provide specialized services to address specific technical challenges.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specializedServices.map((service, index) => (
              <AnimatedSection 
                key={index} 
                animation="zoom-in" 
                delay={index * 100}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* My Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">My Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I follow a collaborative, iterative approach to ensure I deliver solutions that truly meet your needs.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <AnimatedSection animation="fade-in" delay={0} className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full border-4 border-indigo-600 bg-white"></div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-2 text-right pr-8 pt-0">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Discovery</h3>
                      <p className="text-gray-600">I start by understanding your business objectives, technical constraints, and user needs through workshops and interviews.</p>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2"></div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={200} className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full border-4 border-indigo-600 bg-white"></div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-2"></div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2 pl-8 pt-0">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Planning</h3>
                      <p className="text-gray-600">Based on my findings, I develop a strategic roadmap, select appropriate technologies, and define the architecture.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={400} className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full border-4 border-indigo-600 bg-white"></div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-2 text-right pr-8 pt-0">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Development</h3>
                      <p className="text-gray-600">I work in iterative cycles, building, testing, and refining the solution with regular feedback from your team.</p>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2"></div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={600} className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full border-4 border-indigo-600 bg-white"></div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-2"></div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2 pl-8 pt-0">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Deployment</h3>
                      <p className="text-gray-600">I carefully manage the transition from development to production, ensuring a smooth and reliable launch.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={800} className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full border-4 border-indigo-600 bg-white"></div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-2 text-right pr-8 pt-0">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Support & Evolution</h3>
                      <p className="text-gray-600">Our relationship continues after launch with ongoing support, monitoring, and continuous improvement of your solution.</p>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2"></div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I use modern, proven technologies to build robust, scalable solutions. Here are some of the technologies I work with:
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-up" delay={0} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Front-End</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React / Vue.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
                <li>Progressive Web Apps</li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={100} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Back-End</h3>
              <ul className="space-y-2 text-gray-600">
                <li>.NET Core / C#</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>GraphQL</li>
                <li>RESTful APIs</li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={200} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cloud & DevOps</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Azure / AWS / GCP</li>
                <li>Docker / Kubernetes</li>
                <li>CI/CD Pipelines</li>
                <li>Terraform</li>
                <li>Microservices</li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={300} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Databases</h3>
              <ul className="space-y-2 text-gray-600">
                <li>SQL Server</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Azure Cosmos DB</li>
                <li>Redis</li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={400} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Data & Integration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Azure Data Factory</li>
                <li>Databricks</li>
                <li>Power BI</li>
                <li>API Management</li>
                <li>Event-driven architecture</li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={500} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Tools & Practices</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Git / GitHub / Azure DevOps</li>
                <li>Agile / Scrum</li>
                <li>Test-Driven Development</li>
                <li>Continuous Integration</li>
                <li>Infrastructure as Code</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your technical challenges into solutions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how Curious Cat Consulting can help bring your ideas to life with thoughtful, 
              well-architected solutions.
            </p>
            <Link 
              to="/contact"
              className="px-6 py-3 bg-white text-indigo-800 font-semibold rounded-md hover:bg-gray-100 transition-colors text-lg inline-block"
            >
              Schedule a Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CCCServicesPage;