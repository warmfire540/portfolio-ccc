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
    <div className="max-w-4xl mx-auto mb-16">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Our Story
      </h3>
      <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
        <p className="mb-4">
          Curious Cat Consulting was founded in 2025 by Patrick Masters,
          bringing together his extensive experience in software engineering and
          architecture. After years of working in various technical roles across
          different industries, I recognized a common gap: too many software
          projects focus on technology for technology's sake, rather than truly
          solving business problems.
        </p>
        <p className="mb-4">
          I started Curious Cat Consulting with a simple premise: great software
          begins with curiosity—asking the right questions to truly understand
          the business challenges before diving into code. This curiosity-driven
          approach leads to solutions that not only meet immediate needs but
          anticipate future ones as well.
        </p>
      </div>
    </div>
  );
};

export default Story;
