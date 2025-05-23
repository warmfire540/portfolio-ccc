import { GithubIcon, LinkedinIcon, Mail, MapPin } from 'lucide-react';

import AnimatedSection from 'components/common/AnimatedSection';

/**
 * Renders the "Connect" section, providing contact information and online profiles.
 *
 * This section includes:
 * - A heading and description inviting users to connect.
 * - Location and email contact details, each with an icon.
 * - A card with links to online profiles (LinkedIn and GitHub).
 *
 * @component
 * @returns {JSX.Element} The rendered Connect section.
 */
const Connect: React.FC = () => {
  return (
    <AnimatedSection animation="slide-right">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Let's Connect
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Whether you're looking for a technical consultation, interested in
        collaborating on a project, or simply want to discuss your software
        needs, I'm always open to connecting with forward-thinking
        organizations.
      </p>

      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
              Location
            </h4>
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
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
              Email
            </h4>
            <a
              href="mailto:info@curiouscat.consulting"
              className="text-indigo-600 hover:underline dark:text-indigo-400"
            >
              info@curiouscat.consulting
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Connect Online
        </h4>

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
      </div>
    </AnimatedSection>
  );
};

export default Connect;
