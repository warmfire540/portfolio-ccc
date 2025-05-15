import React from 'react';
import { Code, Database, Layers, RefreshCw, Cloud, Terminal } from 'lucide-react';
import CtaButton from '../components/common/CtaButton';

const PortfolioHomePage = () => {
  // Skills data with icons and descriptions
  const skills = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Code size={36} className="text-indigo-600" />,
      description: 'Building responsive and accessible user interfaces with React, Vue.js, and modern CSS frameworks.'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Terminal size={36} className="text-indigo-600" />,
      description: 'Creating robust APIs and services with C#, ASP.NET Core, Entity Framework, and GraphQL.'
    },
    {
      id: 'architecture',
      title: 'Software Architecture',
      icon: <Layers size={36} className="text-indigo-600" />,
      description: 'Designing scalable and maintainable software systems using cloud-native and microservices patterns.'
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      icon: <RefreshCw size={36} className="text-indigo-600" />,
      description: 'Implementing CI/CD pipelines, container orchestration, and infrastructure as code.'
    },
    {
      id: 'cloud',
      title: 'Cloud Services',
      icon: <Cloud size={36} className="text-indigo-600" />,
      description: 'Leveraging Azure, AWS, and GCP services to build and deploy modern applications.'
    },
    {
      id: 'data',
      title: 'Data Integration',
      icon: <Database size={36} className="text-indigo-600" />,
      description: 'Connecting systems and transforming data with ETL processes, Databricks, and data pipelines.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with animated gradient background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-90 z-0"></div>
        {/* Animated background elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-700 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-24 left-1/3 w-64 h-64 rounded-full bg-indigo-800 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Patrick W. Masters
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-indigo-200">
              Senior Software Engineer & Architect
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-100">
              Transforming complex business requirements into elegant technical solutions.
              With 8+ years of experience in full-stack development, cloud architecture,
              and DevOps, I build software that delivers real value.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <CtaButton 
                text="View My Projects" 
                onClick={() => {}} 
                className="text-lg px-6 py-3"
              />
              <CtaButton 
                text="Get In Touch" 
                onClick={() => {}} 
                primary={false}
                className="text-lg px-6 py-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized in building modern, scalable, and maintainable software solutions
              that help businesses succeed in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map(skill => (
              <div 
                key={skill.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-200 group"
                data-testid={`skill-card-${skill.id}`}
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">8+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">20+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
              <div className="text-gray-600">Tech Stack Expertise</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work CTA */}
      <section className="py-16 bg-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's build something amazing together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in seeing my work or discussing a potential project?
            Check out my portfolio or get in touch to start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CtaButton
              text="Explore Projects"
              onClick={() => {}}
              primary={false}
              className="text-lg px-6 py-3 bg-white text-indigo-800 hover:bg-gray-100"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioHomePage;