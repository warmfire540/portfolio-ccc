import AboutInfo from 'components/sections/AboutInfo';
import Story from 'components/sections/Story';
import Team from 'components/sections/Team';
import Values from 'components/sections/Values';

/**
 * Renders the About section of the SPA, including information about the project,
 * its story, team members, and core values. This component composes several
 * subcomponents: AboutInfo, Story, Team, and Values, and applies styling for
 * both light and dark themes.
 *
 * @component
 * @returns {JSX.Element} The rendered About section.
 */
const About: React.FC = () => {
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
          <AboutInfo />
          <Story />
          <Team />
          <Values />
        </div>
      </div>
    </section>
  );
};

export default About;
