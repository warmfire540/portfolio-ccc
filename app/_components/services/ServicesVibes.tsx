'use client';

import AnimatedSection from '@/app/_components/ui/AnimatedSection';
import ServiceCard from '@/app/_components/ui/ServiceCard';
import { services, specializedServices } from './data';

export default function ServicesVibes() {
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
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              variant="vertical"
              iconSize="lg"
              headingLevel="h3"
            />
          ))}
        </div>

        {/* Specialized Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Specialized Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specializedServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
                variant="horizontal"
                iconSize="sm"
                headingLevel="h4"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
