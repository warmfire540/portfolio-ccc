import React from 'react';

import AnimatedSection from 'components/common/AnimatedSection';

import { getServices, specializedServices } from 'data/services';

/**
 * Renders the Services section of the portfolio, including a list of core services,
 * specialized services, and key differentiators for Curious Cat Consulting.
 *
 * The section is visually organized with animated transitions and responsive grid layouts.
 * - Displays a main heading and description.
 * - Lists core services using the `getServices` function.
 * - Highlights specialized services in a separate grid.
 * - Presents reasons to choose the consulting service.
 *
 * @component
 * @returns {JSX.Element} The rendered Services section.
 */
const Services: React.FC = () => {
  const services = getServices(48);

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Specialized Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Specialized Services
          </h3>
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
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white ml-3">
                    {service.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Why Choose Curious Cat Consulting?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedSection
              animation="slide-up"
              delay={0}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-indigo-600 dark:border-indigo-500"
            >
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Curiosity-Driven
              </h4>
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
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Quality-Focused
              </h4>
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
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Partnership Approach
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I work closely with you as a true partner, fostering open
                communication and ensuring alignment throughout the development
                process.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
