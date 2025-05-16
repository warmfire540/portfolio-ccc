import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import AnimatedSection from '../components/common/AnimatedSection';
import { teamMembers, values } from '../data/team';

const CCCAboutPage: React.FC = () => {
  // Animation on scroll functionality
  const useIntersectionObserver = (options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
      const node = ref.current;
      if (!node) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      }, options);

      observer.observe(node);

      return () => {
        if (node) {
          observer.unobserve(node);
        }
      };
    }, [options]);

    return ref;
  };

  // Create refs for each section
  const storyRef = useIntersectionObserver({ threshold: 0.1 });
  const teamRef = useIntersectionObserver({ threshold: 0.1 });
  const valuesRef = useIntersectionObserver({ threshold: 0.1 });
  const approachRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white relative overflow-hidden">
        {/* Animated background elements for visual interest */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-700 opacity-20 blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-24 right-24 w-64 h-64 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6">
            About Curious Cat Consulting
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Founded on curiosity, technical excellence, and a passion for
            solving complex business challenges through thoughtful software
            solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto opacity-0 transition-opacity duration-1000 ease-in-out"
            ref={storyRef}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p>
                Curious Cat Consulting was founded in 2025 by Patrick Masters,
                bringing together his extensive experience in software
                engineering and architecture. After years of working in various
                technical roles across different industries, I recognized a
                common gap: too many software projects focus on technology for
                technology's sake, rather than truly solving business problems.
              </p>
              <p>
                I started Curious Cat Consulting with a simple premise: great
                software begins with curiosity—asking the right questions to
                truly understand the business challenges before diving into
                code. This curiosity-driven approach leads to solutions that not
                only meet immediate needs but anticipate future ones as well.
              </p>
              <p>
                The name reflects our approach. Like a curious cat, we're
                inquisitive, thoughtful, and thorough in exploring every angle
                of a problem. We dig deeper, question assumptions, and don't
                rest until we find the optimal solution.
              </p>
              <p>
                Today, we work with select clients who value our collaborative
                approach and commitment to quality. We're not interested in
                simply building what you ask for—we want to understand why
                you're asking for it and make sure the solution truly addresses
                your underlying business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Meet Our Team
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto opacity-0 transition-opacity duration-1000 ease-in-out"
            ref={teamRef}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-white dark:border-gray-700 shadow-md"
                />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-lg text-indigo-600 dark:text-indigo-400 mb-4">
                  {member.role}
                </p>
                <div className="prose prose-lg text-gray-600 dark:text-gray-300 text-center">
                  {member.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Our Values
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto opacity-0 transition-opacity duration-1000 ease-in-out"
            ref={valuesRef}
          >
            {values.map((value) => (
              <div
                key={value.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-indigo-600 dark:border-indigo-500 dark:shadow-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto opacity-0 transition-opacity duration-1000 ease-in-out"
            ref={approachRef}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Our Approach
            </h2>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-2xl font-bold text-indigo-800 dark:text-indigo-300">
                    01
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Ask the Right Questions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We begin every project by digging deep to understand the
                    business problem at hand. Instead of rushing to solutions,
                    we take the time to ask questions, challenge assumptions,
                    and get to the heart of what you're really trying to
                    achieve.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-2xl font-bold text-indigo-800 dark:text-indigo-300">
                    02
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Design with Purpose
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our solutions are designed with intention. We don't just
                    apply the latest technology trends—we carefully select the
                    right tools and approaches based on your specific needs,
                    constraints, and long-term goals.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-2xl font-bold text-indigo-800 dark:text-indigo-300">
                    03
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Build with Quality
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We believe in doing things right the first time. Our
                    development process emphasizes clean code, thorough testing,
                    and robust architecture to ensure that what we build will
                    stand the test of time.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-2xl font-bold text-indigo-800 dark:text-indigo-300">
                    04
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Collaborate Continuously
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We work closely with our clients throughout the entire
                    process. Regular communication, demos, and feedback sessions
                    ensure that we're always aligned and can adapt quickly to
                    changing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-800 dark:bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl font-bold mb-6">
              Ready to solve your business challenges?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our curiosity-driven approach can help your
              business build software that truly makes a difference.
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

export default CCCAboutPage;
