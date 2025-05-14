import React from 'react';
import CtaButton from '../components/common/CtaButton';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

interface Value {
  id: string;
  title: string;
  description: string;
  iconPath: string;
}

const AboutPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 'patrick-masters',
      name: 'Patrick Masters',
      role: 'Founder & Senior Software Architect',
      bio: 'Senior Solutions Architect with over 8 years of experience delivering innovative solutions. Patrick specializes in cloud-based integrations, large-scale infrastructure transformations, and building robust enterprise applications.',
      imageUrl: '/api/placeholder/300/300',
    },
    {
      id: 'team-member-2',
      name: 'Alex Johnson',
      role: 'Lead Full-Stack Developer',
      bio: 'Full-stack developer with expertise in React, TypeScript, and .NET Core. Alex has a passion for creating intuitive user interfaces and efficient backend services.',
      imageUrl: '/api/placeholder/300/300',
    },
    {
      id: 'team-member-3',
      name: 'Sarah Chen',
      role: 'DevOps & Cloud Specialist',
      bio: 'Cloud architecture and DevOps expert with a focus on automation, CI/CD pipelines, and infrastructure as code. Sarah ensures our solutions are scalable, reliable, and efficient.',
      imageUrl: '/api/placeholder/300/300',
    },
  ];

  const companyValues: Value[] = [
    {
      id: 'curiosity',
      title: 'Curiosity',
      description:
        'We approach every project with genuine curiosity, asking deep questions to truly understand the problem space and discover innovative solutions.',
      iconPath:
        'M10 12a2 2 0 100-4 2 2 0 000 4z M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z',
    },
    {
      id: 'quality',
      title: 'Quality',
      description:
        'We believe in doing things right the first time. Our commitment to quality means thorough testing, clean code, and solutions that stand the test of time.',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description:
        'We work closely with our clients as true partners, fostering open communication and ensuring alignment throughout the development process.',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description:
        'We continuously explore emerging technologies and methodologies to deliver forward-thinking solutions that give our clients a competitive edge.',
      iconPath:
        'M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About Curious Cat Consulting</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We&apos;re a team of passionate software engineers dedicated to building curiously
            better software solutions for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Curious Cat Consulting was founded in 2024 by Patrick Masters with a simple mission:
                to create software that doesn&apos;t just work, but works exceptionally well.
                Drawing from years of experience building enterprise solutions across various
                industries, we noticed a recurring pattern - many software projects failed not due
                to technical limitations, but because of a lack of curiosity about the real problems
                they were trying to solve.
              </p>
              <p>
                Our name reflects our philosophy: approach every challenge with the curiosity of a
                cat. We dig deeper, ask the right questions, and explore all possibilities before
                crafting solutions. This curiosity-driven approach leads to software that truly
                addresses the core needs of businesses and their users.
              </p>
              <p>
                Today, we partner with organizations to transform their ideas into robust, scalable,
                and maintainable software solutions. From architectural design to full-stack
                implementation, our team brings expertise, passion, and of course, curiosity to
                every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map(value => (
              <div
                key={value.id}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                data-testid={`value-card-${value.id}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d={value.iconPath} clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map(member => (
              <div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                data-testid={`team-member-${member.id}`}
              >
                <img
                  src={member.imageUrl}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Build Something Amazing Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you need architectural guidance, full-stack development, or a complete digital
            transformation, we&apos;re here to help.
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

export default AboutPage;
