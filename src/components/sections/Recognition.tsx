import React from 'react';

import AnimatedSection from 'components/common/AnimatedSection';

import { recognitions } from 'data/recognition';

/**
 * Renders the "Recognition & Awards" section, displaying badges, certifications,
 * and other forms of professional recognition.
 *
 * This component showcases various accolades, badges, and recognition received
 * by Curious Cat Consulting, including business directory listings, community
 * contributions, and professional achievements.
 *
 * The layout automatically adjusts based on the number of recognitions:
 * - Single item: Centered with max width
 * - Multiple items: Responsive grid layout
 *
 * @component
 * @returns {JSX.Element} The rendered Recognition section.
 */
const Recognition: React.FC = () => {
  const isSingleItem = recognitions.length === 1;

  return (
    <div className="max-w-6xl mx-auto">
      <AnimatedSection animation="fade-in" className="text-center mb-16">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Recognition & Awards
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Professional recognition and community acknowledgments that reflect
          our commitment to excellence.
        </p>
      </AnimatedSection>

      <div
        className={
          isSingleItem
            ? 'flex justify-center'
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        }
      >
        {recognitions.map((recognition, index) => (
          <AnimatedSection
            key={recognition.title}
            animation="slide-up"
            delay={index * 150}
            className={`group ${isSingleItem ? 'max-w-md' : ''}`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-center">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {recognition.icon}
                </div>
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {recognition.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                {recognition.description}
              </p>

              {/* Badge */}
              <div className="flex justify-center">{recognition.badge}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Recognition;
