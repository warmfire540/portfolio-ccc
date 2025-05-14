import React from 'react';
import ServiceCard from '../components/services/ServiceCard';
import CtaButton from '../components/common/CtaButton';
import { Service } from '../types/Service';

const HomePage: React.FC = () => {
  const featuredServices: Service[] = [
    {
      id: 'software-architecture',
      title: 'Software Architecture',
      description:
        'Design scalable, resilient systems with modern architectural patterns including microservices and cloud-native applications.',
      icon: 'Layers',
    },
    {
      id: 'full-stack-development',
      title: 'Full-Stack Development',
      description:
        'Expert development with C#/.NET, React, Vue.js and various cloud platforms to build robust enterprise applications.',
      icon: 'Code',
    },
    {
      id: 'devops-automation',
      title: 'DevOps & Automation',
      description:
        'Streamline your development workflow with CI/CD pipelines, container orchestration, and infrastructure as code.',
      icon: 'RefreshCw',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Ideas into Exceptional Software
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Specialized in building modern, scalable, and maintainable software solutions for
            businesses that want to stand out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CtaButton
              text="Our Services"
              onClick={() => {}}
              primary={true}
              className="text-lg px-6 py-3"
            />
            <CtaButton
              text="View Projects"
              onClick={() => {}}
              primary={false}
              className="text-lg px-6 py-3"
            />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end software consulting services with a focus on quality,
              maintainability and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <CtaButton text="Explore All Services" onClick={() => {}} primary={true} />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-xl text-gray-700 italic mb-6">
                &quot;Curious Cat Consulting transformed our legacy monolithic application into a
                scalable cloud model. Their technical expertise and collaborative approach resulted
                in a 250% improvement in data retrieval speeds.&quot;
              </p>
              <div className="flex items-center justify-center">
                <div>
                  <h4 className="font-semibold text-indigo-900">Technical Director</h4>
                  <p className="text-gray-600">Enterprise Software Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to build something amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our expertise can help bring your ideas to life with curiously
            better software solutions.
          </p>
          <CtaButton
            text="Get in Touch"
            onClick={() => {}}
            primary={false}
            className="text-lg px-6 py-3 bg-white text-indigo-800 hover:bg-gray-100"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
