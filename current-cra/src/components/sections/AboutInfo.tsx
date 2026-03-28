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
      className="max-w-5xl mx-auto text-center"
    >
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-primary-600 dark:from-white dark:to-primary-400 bg-clip-text text-transparent mb-6">
          About Curious Cat Consulting
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-left">
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Founded in 2025, Curious Cat Consulting was built on a foundation of
            technical excellence and a genuine curiosity about solving complex
            business problems through thoughtful software solutions.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I approach every project with fresh eyes and a questioning mind,
            digging deeper to understand the real challenges behind your
            requirements. This curiosity-driven approach leads to solutions that
            not only meet your immediate needs but anticipate future ones as
            well.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  85%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Deployment Time Reduced
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  6+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Open Source Projects
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  0
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Post-Migration Errors
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  10K+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Community Downloads
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutInfo;
