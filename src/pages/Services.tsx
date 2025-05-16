import React from 'react';

import { Link } from 'react-router-dom';

import AnimatedSection from '../components/common/AnimatedSection';
import { services, specializedServices } from '../data/services';

const CCCServicesPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Curious Cat Consulting provides a comprehensive range of software
            development and consulting services to help businesses build,
            modernize, and optimize their digital solutions.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              How I Can Help
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From architecture design to implementation and support, I provide
              end-to-end services to address your most challenging technical
              problems.
            </p>
          </AnimatedSection>

          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection
                id={service.id}
                key={service.id}
                animation={index % 2 === 0 ? 'slide-right' : 'slide-up'}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="md:w-1/3 flex justify-center">
                  <div className="p-6 bg-indigo-100 dark:bg-indigo-900/50 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-3">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-indigo-600 dark:text-indigo-400 mr-2">
                              •
                            </span>
                            <span className="text-gray-600 dark:text-gray-300">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-3">
                        What I Offer
                      </h4>
                      <ul className="space-y-2">
                        {service.offerings.map((offering, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-indigo-600 dark:text-indigo-400 mr-2">
                              •
                            </span>
                            <span className="text-gray-600 dark:text-gray-300">
                              {offering}
                            </span>
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
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Specialized Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Beyond my core offerings, I provide specialized services to
              address specific technical challenges.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specializedServices.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="zoom-in"
                delay={index * 100}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-600"
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white ml-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* My Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              My Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I follow a collaborative, iterative approach to ensure I deliver
              solutions that truly meet your needs.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-800"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <AnimatedSection
                  animation="fade-in"
                  delay={0}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full border-4 border-indigo-600 dark:border-indigo-400 bg-white dark:bg-gray-800"></div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-2 text-right pr-8 pt-0">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        Discovery
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        I start by understanding your business objectives,
                        technical constraints, and user needs through workshops
                        and interviews.
                      </p>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2"></div>
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  animation="fade-in"
                  delay={200}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full border-4 border-indigo-600 dark:border-indigo-400 bg-white dark:bg-gray-800"></div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-2"></div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2 pl-8 pt-0">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        Planning
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Based on my findings, I develop a strategic roadmap,
                        select appropriate technologies, and define the
                        architecture.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  animation="fade-in"
                  delay={400}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full border-4 border-indigo-600 dark:border-indigo-400 bg-white dark:bg-gray-800"></div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-2 text-right pr-8 pt-0">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        Development
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        I work in iterative cycles, building, testing, and
                        refining the solution with regular feedback from your
                        team.
                      </p>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2"></div>
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  animation="fade-in"
                  delay={600}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full border-4 border-indigo-600 dark:border-indigo-400 bg-white dark:bg-gray-800"></div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-2"></div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2 pl-8 pt-0">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        Deployment
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        I carefully manage the transition from development to
                        production, ensuring a smooth and reliable launch.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  animation="fade-in"
                  delay={800}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full border-4 border-indigo-600 dark:border-indigo-400 bg-white dark:bg-gray-800"></div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-2 text-right pr-8 pt-0">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        Support & Evolution
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our relationship continues after launch with ongoing
                        support, monitoring, and continuous improvement of your
                        solution.
                      </p>
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
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I use modern, proven technologies to build robust, scalable
              solutions. Here are some of the technologies I work with:
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection
              animation="slide-up"
              delay={0}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Front-End
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>React / Vue.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
                <li>Progressive Web Apps</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-up"
              delay={100}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Back-End
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>.NET Core / C#</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>GraphQL</li>
                <li>RESTful APIs</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-up"
              delay={200}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Cloud & DevOps
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Azure / AWS / GCP</li>
                <li>Docker / Kubernetes</li>
                <li>CI/CD Pipelines</li>
                <li>Terraform</li>
                <li>Microservices</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-up"
              delay={300}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Databases
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>SQL Server</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Azure Cosmos DB</li>
                <li>Redis</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-up"
              delay={400}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Data & Integration
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Azure Data Factory</li>
                <li>Databricks</li>
                <li>Power BI</li>
                <li>API Management</li>
                <li>Event-driven architecture</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-up"
              delay={500}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Tools & Practices
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
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
      <section className="py-16 bg-indigo-800 dark:bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl font-bold mb-6">
              Ready to transform your technical challenges into solutions?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how Curious Cat Consulting can help bring your ideas
              to life with thoughtful, well-architected solutions.
            </p>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white dark:bg-indigo-200 text-indigo-800 font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-indigo-300 transition-colors text-lg inline-block"
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
