import AnimatedSection from 'components/common/AnimatedSection';

/**
 * Renders the "About" section for Curious Cat Consulting.
 *
 * This component displays an animated section containing information about the company's
 * foundation, approach, and philosophy. It uses the `AnimatedSection` wrapper to apply
 * a fade-in animation and centers the content with appropriate styling for both light
 * and dark themes.
 *
 * @returns {JSX.Element} The rendered About section.
 */
const AboutInfo: React.FC = () => {
  return (
    <AnimatedSection
      animation="fade-in"
      className="max-w-4xl mx-auto text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        About Curious Cat Consulting
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Founded in 2025, Curious Cat Consulting was built on a foundation of
        technical excellence and a genuine curiosity about solving complex
        business problems through thoughtful software solutions.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        I approach every project with fresh eyes and a questioning mind, digging
        deeper to understand the real challenges behind your requirements. This
        curiosity-driven approach leads to solutions that not only meet your
        immediate needs but anticipate future ones as well.
      </p>
    </AnimatedSection>
  );
};

export default AboutInfo;
