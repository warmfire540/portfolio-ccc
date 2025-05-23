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
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AboutInfo />
        <Story />
        <Team />
        <Values />
      </div>
    </section>
  );
};

export default About;
