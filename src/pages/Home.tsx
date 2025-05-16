import {
  Cloud,
  Code,
  Database,
  Layers,
  RefreshCw,
  Terminal,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { useTheme } from 'utils/ThemeContext';

import { ReactComponent as Logo } from '../assets/logo.svg';
import AnimatedSection from '../components/common/AnimatedSection';

const CCCHomePage = () => {
  const { theme } = useTheme();

  // Services offered by Curious Cat Consulting
  // todo - rused
  const services = [
    {
      id: 'architecture',
      title: 'Software Architecture',
      icon: (
        <Layers size={36} className="text-indigo-600 dark:text-indigo-400" />
      ),
      description:
        'Designing scalable and maintainable software systems using cloud-native and microservices patterns.',
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      icon: <Code size={36} className="text-indigo-600 dark:text-indigo-400" />,
      description:
        'Building responsive user interfaces and robust backend services with modern technologies and frameworks.',
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      icon: (
        <Cloud size={36} className="text-indigo-600 dark:text-indigo-400" />
      ),
      description:
        'Leveraging Azure, AWS, and GCP services to build and deploy modern, scalable applications.',
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      icon: (
        <RefreshCw size={36} className="text-indigo-600 dark:text-indigo-400" />
      ),
      description:
        'Implementing CI/CD pipelines, container orchestration, and infrastructure as code for seamless delivery.',
    },
    {
      id: 'data',
      title: 'Data Integration',
      icon: (
        <Database size={36} className="text-indigo-600 dark:text-indigo-400" />
      ),
      description:
        'Connecting systems and transforming data with ETL processes, data pipelines, and integration solutions.',
    },
    {
      id: 'consultation',
      title: 'Technical Consultation',
      icon: (
        <Terminal size={36} className="text-indigo-600 dark:text-indigo-400" />
      ),
      description:
        'Providing expert advice and guidance on technical decisions, architecture reviews, and technology selection.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with animated gradient background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-90 dark:bg-opacity-80 z-0"></div>
        {/* Animated background elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-700 opacity-20 blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute -bottom-24 left-1/3 w-64 h-64 rounded-full bg-indigo-800 opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Curiously Better Software Solutions
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-indigo-200">
                Transforming your complex business requirements into elegant
                technical solutions
              </h2>
              <p className="text-lg mb-8 text-gray-100">
                Curious Cat Consulting specializes in building high-quality,
                scalable software that delivers real business value through
                thoughtful architecture and engineering excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="px-6 py-3 bg-white text-indigo-900 dark:bg-indigo-200 font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-indigo-300 transition-colors text-center"
                >
                  Our Services
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-indigo-800 transition-colors text-center"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-md relative">
                <Logo
                  fill={theme === 'dark' ? 'white' : 'darkblue'}
                  style={{ width: `auto`, height: '100px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection
            animation="fade-in"
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              About Curious Cat Consulting
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Founded in 2025, Curious Cat Consulting was built on a foundation
              of technical excellence and a genuine curiosity about solving
              complex business problems through thoughtful software solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I approach every project with fresh eyes and a questioning mind,
              digging deeper to understand the real challenges behind your
              requirements. This curiosity-driven approach leads to solutions
              that not only meet your immediate needs but anticipate future ones
              as well.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-indigo-600 dark:bg-indigo-700 text-white font-semibold rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
            >
              Learn More About Us
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of software development and
              consulting services to help businesses build, modernize, and
              optimize their digital solutions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                animation="zoom-in"
                delay={index * 100}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-indigo-200 dark:hover:border-indigo-500 group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Why Choose Curious Cat Consulting?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My clients choose me for my technical expertise, my thoughtful
              approach, and my commitment to building solutions that truly
              address their business needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedSection
              animation="slide-up"
              delay={0}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-indigo-600 dark:border-indigo-500"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Curiosity-Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I ask deeper questions to understand the real problems behind
                your requirements, leading to more effective and
                forward-thinking solutions.
              </p>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-up"
              delay={200}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-indigo-600 dark:border-indigo-500"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Quality-Focused
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in doing things right the first time, with thorough
                testing, clean code, and solutions that stand the test of time.
              </p>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-up"
              delay={400}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-indigo-600 dark:border-indigo-500"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Partnership Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I work closely with you as a true partner, fostering open
                communication and ensuring alignment throughout the development
                process.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-800 dark:bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl font-bold mb-6">
              Ready to build something amazing?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how Curious Cat Consulting can help bring your ideas
              to life with thoughtful, well-architected solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-white dark:bg-indigo-200 text-indigo-800 font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-indigo-300 transition-colors text-lg"
            >
              Get In Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CCCHomePage;
