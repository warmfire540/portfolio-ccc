import React from 'react';

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
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-12 text-center">
        Meet Our Team
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {teamMembers.map((member) => (
          <AnimatedSection
            key={member.id}
            animation="zoom-in"
            className="flex flex-col items-center"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-white dark:border-gray-700 shadow-md"
            />
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
              {member.name}
            </h4>
            <p className="text-lg text-indigo-600 dark:text-indigo-400 mb-4">
              {member.role}
            </p>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 text-center">
              {member.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Team;
