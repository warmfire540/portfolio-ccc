import React from 'react';

import { ReactGoogleReviews } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';

import AnimatedSection from 'components/common/AnimatedSection';

/**
 * Renders client reviews for Curious Cat Consulting.
 *
 * This component includes a heading, a descriptive paragraph, and integrates
 * the `ReactGoogleReviews` widget to showcase client testimonials. The component
 * is styled for both light and dark themes and is responsive.
 *
 * @component
 * @returns {JSX.Element} The rendered reviews component.
 */
const Reviews: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <AnimatedSection animation="fade-in" className="text-center mb-16">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          What Our Clients Say
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what clients have to say about
          working with Curious Cat Consulting.
        </p>
      </AnimatedSection>

      <div className="flex justify-center">
        <AnimatedSection
          animation="slide-up"
          delay={150}
          className="group max-w-5xl w-full"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <ReactGoogleReviews
              layout="badge"
              featurableId={process.env.REACT_APP_FEATURABLE_WIDGET_ID ?? ''}
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Reviews;
