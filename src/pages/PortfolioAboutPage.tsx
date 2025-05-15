import React from 'react';
import CtaButton from '../components/common/CtaButton';

interface Experience {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

const PortfolioAboutPage: React.FC = () => {
  // Professional experience data based on resume
  const experiences: Experience[] = [
    {
      id: 'ipsos',
      position: 'Lead Developer',
      company: 'Ipsos',
      period: 'September 2024 - Present',
      description: [
        'Leading full-stack development team in designing and building enterprise platform solutions with C#/.NET backend services, Vue.js frontend applications, and Google Cloud Platform infrastructure.',
        'Managing daily scrums, sprint planning, and cross-functional collaboration with business partners to analyze requirements and deliver high-quality software solutions.',
        'Providing technical guidance and mentorship to team members while establishing coding standards and implementing code quality tools.',
        'Developing microservices architecture, ETL processes, and API integration solutions with a focus on performance optimization and scalability.'
      ],
      technologies: ['C#/.NET', 'Vue.js', 'Google Cloud Platform', 'Microservices', 'Agile', 'ETL', 'API Integration']
    },
    {
      id: 'lazydays',
      position: 'Transformation Architect',
      company: 'Lazydays',
      period: 'October 2022 - June 2024',
      description: [
        'Transformed legacy on-premise monolithic application infrastructure into a scalable cloud model, collaborating with multiple vendors to implement a Well-Architected Framework in Azure.',
        'Collaborated within a pluridisciplinary team including the C-Suite, IT Director, Infrastructure, and Networking teams to maintain close communication and reach alignment.',
        'Engineered reusable Bitbucket Pipes and YML templates for various technologies, establishing 40+ repositories for building, testing, and deploying code.',
        'Facilitated deployments into Azure services including Web Services, Functions, and Container Registries, achieving streamlined automation across multiple environments.'
      ],
      technologies: ['Azure', '.NET Core', 'Vue.js', 'Python', 'Databricks', 'Power Automate', 'Azure Data Factory', 'Docker', 'CI/CD']
    },
    {
      id: 'lazydays-senior',
      position: 'Senior Application Developer',
      company: 'Lazydays',
      period: 'August 2020 - March 2022',
      description: [
        'Managed a portfolio of complex initiatives across multiple business lines including Finance/Accounting, HR, Sales, Service, and M&A.',
        'Migrated General Ledger from Dynamics AX to an integrated DMS system with an internal GL, improving data retrieval speeds by 250%.',
        'Deployed using blue-green deployment and canary release strategies, reducing deployment time to under 5 minutes.',
        'Maintained and enhanced software by implementing periodic updates and optimizations, reducing system downtime by 90%.'
      ],
      technologies: ['C#/.NET', 'Dynamics AX', 'Bitbucket', 'Azure DevOps', 'Git', 'Retrace', 'CI/CD']
    },
    {
      id: 'connectwise',
      position: 'Team Lead, Software Engineer',
      company: 'ConnectWise',
      period: 'July 2020 - August 2020',
      description: [
        'Led a development team of 6, focusing on their success and continuous growth through strategic guidance and performance monitoring.',
        'Architected new products, integrations, and services tailored to meet ConnectWise\'s operational requirements.',
        'Engineered scalable, available, and secure shared services within the new platform architecture, integrating core products and ensuring compatibility across multiple versions.'
      ],
      technologies: ['GoLang', 'React', 'AWS', 'OAuth', 'JWT', 'SSO', 'Microservices']
    }
  ];

  // Education data
  const education: Education[] = [
    {
      id: 'usf',
      degree: 'B.Sc. in Computer Engineering',
      institution: 'University of South Florida',
      period: 'August 2007 - May 2014'
    }
  ];

  // Skills grouped by category
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['C#', 'JavaScript', 'Java', 'Python', 'SQL', 'PowerShell', 'Bash', 'TypeScript']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['ASP.NET Core', 'Vue.js', 'React', 'Angular', 'Entity Framework', 'GraphQL', 'REST']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['Azure', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Microservices']
    },
    {
      category: 'Database & Data',
      skills: ['SQL Server', 'Azure SQL', 'MySQL', 'PostgreSQL', 'Databricks', 'ETL', 'Data Factory']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Senior Solutions Architect with 8+ years of experience delivering innovative 
            software solutions for complex business challenges.
          </p>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional Summary</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                I'm a Senior Software Engineer and Architect with over 8 years of experience, 
                delivering innovative solutions such as cloud-based integrations and large-scale 
                infrastructure transformations within fast-paced environments.
              </p>
              <p>
                My technical journey has equipped me with a diverse skillset spanning programming 
                languages, frameworks, cloud platforms, and DevOps practices. I specialize in 
                designing scalable, efficient, and robust solutions involving architectural patterns 
                such as cloud-native applications and microservices.
              </p>
              <p>
                Throughout my career, I've played an active role during each phase of the Software 
                Development Life Cycle, significantly enhancing code quality and maintainability 
                through comprehensive management of complex initiatives. I thrive in collaborative 
                environments where I can influence and align multiple teams with conflicting priorities 
                to drive progress under aggressive time constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-indigo-800 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Professional Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative pl-8 pb-12 ${index !== experiences.length - 1 ? 'border-l-2 border-indigo-200' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full"></div>
                
                {/* Experience content */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                    <span className="text-indigo-600 font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-indigo-800 mb-4">{exp.company}</h4>
                  
                  <ul className="mb-4 list-disc pl-5 text-gray-600 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            {education.map(edu => (
              <div 
                key={edu.id}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                  <p className="text-indigo-600">{edu.institution}</p>
                </div>
                <span className="mt-2 md:mt-0 text-gray-600">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Curiosity-Driven</h3>
                <p className="text-gray-600">
                  I approach every challenge with genuine curiosity, asking deeper questions to understand 
                  the real problem before jumping to solutions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Quality-Focused</h3>
                <p className="text-gray-600">
                  I believe in doing things right the first time, with thorough testing, clean code,
                  and solutions that stand the test of time.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Collaborative</h3>
                <p className="text-gray-600">
                  I work closely with all stakeholders as a true partner, fostering open communication
                  and ensuring alignment throughout the development process.
                </p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                I believe great software is built at the intersection of technical excellence and deep 
                business understanding. That's why I take the time to understand not just what needs 
                to be built, but why it matters to users and the business.
              </p>
              <p>
                My engineering philosophy centers on creating maintainable, scalable solutions that 
                can evolve with changing business needs. Whether I'm architecting a new system or 
                optimizing an existing one, I focus on delivering long-term value through thoughtful 
                design and clean implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in collaborating on a project or discussing potential opportunities?
            I'd love to hear from you and explore how we can create something amazing together.
          </p>
          <CtaButton
            text="Contact Me"
            onClick={() => {}}
            primary={false}
            className="text-lg px-6 py-3 bg-white text-indigo-800 hover:bg-gray-100"
          />
        </div>
      </section>
    </div>
  );
};

export default PortfolioAboutPage;