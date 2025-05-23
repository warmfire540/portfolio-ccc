import AnimatedSection from 'components/common/AnimatedSection';

import { milestones } from 'data/milestones';

/**
 * Renders the "Our Story" section for the website, introducing Curious Cat Consulting.
 *
 * This component displays a heading and descriptive paragraphs outlining the company's founding,
 * philosophy, and approach to software consulting. It uses Tailwind CSS classes for styling and
 * supports both light and dark themes.
 *
 * @component
 * @returns {JSX.Element} The rendered "Our Story" section.
 */
const Story: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <AnimatedSection animation="fade-in" className="text-center mb-16">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Our Story
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {milestones.map((milestone, index) => (
          <AnimatedSection
            key={index}
            animation="slide-up"
            delay={index * 150}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  {milestone.year}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {milestone.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Story;
