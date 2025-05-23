import React from 'react';

import { Mail, MapPin } from 'lucide-react';

import { teamMembers } from 'data/team';

import AnimatedSection from '../common/AnimatedSection';

/**
 * Renders the "Meet Our Team" section, displaying a list of team members with their photos, names, roles, and bios.
 *
 * Each team member is displayed inside an animated section with their image, name, role, and a multi-paragraph bio.
 * The layout is responsive, using a single column on small screens and two columns on medium and larger screens.
 *
 * @component
 * @returns {JSX.Element} The rendered team section.
 */
const Team: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <AnimatedSection animation="fade-in" className="text-center mb-16">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Meet Our Team
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {teamMembers.map((member, index) => (
          <AnimatedSection
            key={member.id}
            animation="zoom-in"
            delay={index * 200}
            className="group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-indigo-200 dark:ring-indigo-700 shadow-lg">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {member.name}
                  </h4>
                  <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-medium">
                      {member.role}
                    </div>
                  </div>

                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    {member.bio.map((paragraph, index) => (
                      <p key={index} className="text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-center justify-center md:justify-start space-x-4 mt-6">
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>Tampa, FL</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <Mail className="w-4 h-4" />
                      <span>Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Team;
