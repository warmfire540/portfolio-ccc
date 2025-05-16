import React from 'react';

import { GithubIcon, LinkedinIcon, Mail, MapPin } from 'lucide-react';

import ContactForm from 'components/common/ContactForm';

import AnimatedSection from '../components/common/AnimatedSection';

const CCCContactPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-indigo-900 dark:bg-indigo-950 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-700 opacity-20 blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-24 right-24 w-64 h-64 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Interested in working with Curious Cat Consulting? I'd love to hear
            about your project and how I can help.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <AnimatedSection animation="slide-right">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Let's Connect
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Whether you're looking for a technical consultation, interested
                in collaborating on a project, or simply want to discuss your
                software needs, I'm always open to connecting with
                forward-thinking organizations.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Tampa, FL, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@curiouscat.consulting"
                      className="text-indigo-600 hover:underline dark:text-indigo-400"
                    >
                      info@curiouscat.consulting
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Connect Online
                </h3>

                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/106965272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-800 dark:hover:bg-indigo-700 text-indigo-800 dark:text-indigo-200 p-3 rounded-full transition-colors duration-300"
                  >
                    <LinkedinIcon className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/homeassistant-extras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-800 dark:hover:bg-indigo-700 text-indigo-800 dark:text-indigo-200 p-3 rounded-full transition-colors duration-300"
                  >
                    <GithubIcon className="h-6 w-6" />
                    <span className="sr-only">GitHub (Home Assistant)</span>
                  </a>

                  <a
                    href="https://github.com/warmfire540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-800 dark:hover:bg-indigo-700 text-indigo-800 dark:text-indigo-200 p-3 rounded-full transition-colors duration-300"
                  >
                    <GithubIcon className="h-6 w-6" />
                    <span className="sr-only">GitHub (Personal)</span>
                  </a>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Availability
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm currently available for select consulting engagements,
                    architecture reviews, and development projects. Let's
                    discuss how I can help your business succeed.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slide-up" delay={200}>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send Me a Message
              </h2>

              <ContactForm formId={'xanovqwr'} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <AnimatedSection animation="fade-in" threshold={0.2}>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md dark:shadow-black/20">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    What types of projects does Curious Cat Consulting work on?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I specialize in enterprise software architecture, full-stack
                    development, cloud migrations, and DevOps automation. I
                    particularly enjoy complex projects that involve modernizing
                    legacy systems, implementing cloud-native architectures, or
                    building scalable data integration solutions.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" threshold={0.2} delay={100}>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md dark:shadow-black/20">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    What is your availability?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm currently available for select consulting engagements
                    and development projects. My availability varies depending
                    on current commitments, so please reach out with your
                    timeline and I'll let you know if I can accommodate your
                    project.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" threshold={0.2} delay={200}>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md dark:shadow-black/20">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    Do you work remotely?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes, I work primarily remotely with clients around the
                    United States. I use collaborative tools to ensure effective
                    communication and seamless workflow, regardless of
                    geographic location.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" threshold={0.2} delay={300}>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md dark:shadow-black/20">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    What is your approach to new projects?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I start by thoroughly understanding the business problem and
                    objectives before diving into technical solutions. I believe
                    in transparent communication, iterative development, and
                    building solutions that are not only technically sound but
                    also aligned with business goals.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" threshold={0.2} delay={400}>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md dark:shadow-black/20">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    Do you provide ongoing support after project completion?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes, I can provide ongoing maintenance and support as
                    needed. I also focus on knowledge transfer and documentation
                    throughout the project to ensure your team can confidently
                    manage the solution moving forward.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CCCContactPage;
