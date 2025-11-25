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
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-primary-200 dark:hover:border-primary-500 group"
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
                key={service.title}
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
      </div>
    </section>
  );
};

export default Services;
