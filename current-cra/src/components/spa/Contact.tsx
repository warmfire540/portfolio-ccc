import AnimatedSection from 'components/common/AnimatedSection';
import ContactForm from 'components/common/ContactForm';
import Connect from 'components/sections/Connect';

/**
 * Renders the Contact section of the portfolio, including an animated header,
 * a brief introduction, and a two-column layout with contact information and a contact form.
 *
 * @component
 * @returns {JSX.Element} The Contact section with animated heading, description, and contact form.
 */
const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Interested in working with Curious Cat Consulting? I'd love to hear
            about your project and how I can help.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Connect />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
