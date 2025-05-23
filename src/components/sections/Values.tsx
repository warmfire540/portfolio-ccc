import AnimatedSection from 'components/common/AnimatedSection';

import { values } from 'data/team';

/**
 * Renders the "Our Values" section, displaying a list of company values in a responsive grid layout.
 * Each value is presented inside an animated card with a title and description.
 *
 * @component
 * @returns {JSX.Element} The rendered values section.
 *
 * @example
 * <Values />
 *
 * @remarks
 * - Expects a `values` array to be available in the component's scope, where each value has `id`, `title`, and `description` properties.
 * - Uses the `AnimatedSection` component to animate each value card.
 */
const Values: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-12 text-center">
        Our Values
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {values.map((value, index) => (
          <AnimatedSection
            key={value.id}
            animation="slide-up"
            delay={index * 100}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-indigo-600 dark:border-indigo-500"
          >
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              {value.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {value.description}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Values;
