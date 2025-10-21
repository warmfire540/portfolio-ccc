/* eslint-disable prettier/prettier */
import React from 'react';

import { Link } from 'react-router-dom';

/**
 * Privacy Policy page component with comprehensive privacy terms suitable for mobile apps and web services.
 *
 * @component
 * @returns {JSX.Element} The Privacy Policy page with detailed privacy information.
 */
const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="text-gray-800 leading-relaxed">
          <p className="mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when
              you create an account, use our mobile applications, or contact us
              for support.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Personal Information
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and email address</li>
              <li>Account credentials and profile information</li>
              <li>Contact information when you reach out to us</li>
              <li>
                Payment information (processed securely through third-party
                providers)
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Usage Information
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Device information (device type, operating system, unique device
                identifiers)
              </li>
              <li>App usage data and feature interactions</li>
              <li>
                Log data (IP address, browser type, pages visited, time spent)
              </li>
              <li>Location data (if you grant permission)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>
                Send technical notices, updates, security alerts, and support
                messages
              </li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Personalize and improve user experience</li>
              <li>
                Detect, investigate, and prevent fraudulent transactions and
                other illegal activities
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We may share your information in the following circumstances:
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              With Your Consent
            </h3>
            <p className="mb-4">
              We may share your information when you give us explicit consent to
              do so.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Service Providers
            </h3>
            <p className="mb-4">
              We may share your information with third-party service providers
              who perform services on our behalf, such as payment processing,
              data analysis, email delivery, hosting services, and customer
              service.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Legal Requirements
            </h3>
            <p className="mb-4">
              We may disclose your information if required to do so by law or in
              response to valid requests by public authorities (e.g., a court or
              a government agency).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method
              of transmission over the Internet or electronic storage is 100%
              secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Data Retention
            </h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to
              provide our services and fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or
              permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Your Rights and Choices
            </h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Access:</strong> Request access to your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                personal information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your personal
                information
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your
                personal information
              </li>
              <li>
                <strong>Withdrawal:</strong> Withdraw consent where processing
                is based on consent
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect and
              use personal information about you. You can control cookies
              through your browser settings, but disabling cookies may affect
              the functionality of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Third-Party Services
            </h2>
            <p className="mb-4">
              Our services may contain links to third-party websites or
              services. We are not responsible for the privacy practices or
              content of these third parties. We encourage you to read their
              privacy policies before providing any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Children's Privacy
            </h2>
            <p className="mb-4">
              Our services are not intended for children under 13 years of age.
              We do not knowingly collect personal information from children
              under 13. If you are a parent or guardian and believe your child
              has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. International Data Transfers
            </h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              to protect your personal information in accordance with this
              Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date. We encourage you
              to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              12. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>
                <strong>Curious Cat Consulting, LLC</strong>
                <br />
                Email:{' '}
                <a
                  href="mailto:privacy@curiouscatconsulting.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  privacy@curiouscatconsulting.com
                </a>
                <br />
                General Contact:{' '}
                <a
                  href="mailto:contact@curiouscatconsulting.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  contact@curiouscatconsulting.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
