import AnimatedSection from 'components/common/AnimatedSection';

/**
 * Call-to-Action (CTA) section component.
 *
 * Renders a visually prominent section encouraging users to get in touch.
 * Includes a heading, descriptive text, and a styled button linking to the contact section.
 * Utilizes the `AnimatedSection` component for entry animation effects.
 *
 * @returns {JSX.Element} The rendered CTA section.
 */
const Cta: React.FC = () => {
  return (
    <section className="py-16 bg-primary-800 dark:bg-primary-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how Curious Cat Consulting can help bring your ideas
            to life with thoughtful, well-architected solutions.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-white dark:bg-primary-200 text-primary-800 font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-primary-300 transition-colors text-lg"
          >
            Get In Touch
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Cta;
