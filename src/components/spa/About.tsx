import { useState } from 'react';

import { ChevronDown, ChevronUp } from 'lucide-react';

import Reviews from 'components/common/Reviews';
import AboutInfo from 'components/sections/AboutInfo';
import Recognition from 'components/sections/Recognition';
import Story from 'components/sections/Story';
import Team from 'components/sections/Team';
import Values from 'components/sections/Values';

/**
 * Renders the About section of the SPA, including information about the project,
 * its story, team members, and core values. The Story and Values sections are
 * hidden behind a "Show More" button to improve initial page load experience.
 *
 * @component
 * @returns {JSX.Element} The rendered About section.
 */
const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-40 right-20 w-48 h-48 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-xl animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-24">
          {/* Always visible sections */}
          <AboutInfo />
          <Team />

          {/* Show More Button */}
          <div className="text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-600/25"
            >
              {showMore ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                </>
              ) : (
                <>
                  Learn More About Us
                  <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>

          {/* Conditionally rendered sections with smooth transition */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              showMore
                ? 'max-h-none opacity-100 transform translate-y-0'
                : 'max-h-0 opacity-0 transform -translate-y-4 overflow-hidden'
            }`}
          >
            {showMore && (
              <div className="space-y-24 pt-8">
                <Story />
                <Values />
                <Reviews />
                <Recognition />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
