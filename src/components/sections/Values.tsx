import { Eye, Heart, HelpingHand, Shield } from 'lucide-react';

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
  // Map icons to values based on their titles
  const getValueIcon = (title: string) => {
    switch (title) {
      case 'Curiosity-Driven':
        return Eye;
      case 'Quality-Focused':
        return Shield;
      case 'True Partnership':
        return HelpingHand;
      case 'Radical Transparency':
        return Heart;
      default:
        return Eye;
    }
  };

  const getGradientColors = (index: number) => {
    const gradients = [
      'from-blue-500 to-indigo-600',
      'from-purple-500 to-pink-600',
      'from-green-500 to-teal-600',
      'from-orange-500 to-red-600',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="max-w-6xl mx-auto">
      <AnimatedSection animation="fade-in" className="text-center mb-16">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Our Values
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          These core principles guide every project we undertake and every
          relationship we build.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => {
          const IconComponent = getValueIcon(value.title);
          const gradientClass = getGradientColors(index);

          return (
            <AnimatedSection
              key={value.id}
              animation="slide-up"
              delay={index * 150}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full transform hover:scale-105 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradientClass} opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-gray-600 dark:text-gray-300" />
                  </div>

                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    {value.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`w-0 h-1 bg-gradient-to-r ${gradientClass} rounded-full mt-6 group-hover:w-full transition-all duration-500`}
                  ></div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
