/* eslint-disable prettier/prettier */
import React from 'react';

import { Link } from 'react-router-dom';

/**
 * Terms of Service page component with generic terms suitable for mobile apps and web services.
 *
 * @component
 * @returns {JSX.Element} The Terms of Service page with comprehensive legal terms.
 */
const TermsOfService: React.FC = () => {
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
          Terms of Service
        </h1>

        <div className="text-gray-800 leading-relaxed">
          <p className="mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing and using our mobile applications and web services
              (collectively, the "Service"), you accept and agree to be bound by
              the terms and provision of this agreement. If you do not agree to
              abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Use License
            </h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of our
              mobile applications for personal, non-commercial transitory
              viewing only. This is the grant of a license, not a transfer of
              title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>modify or copy the materials</li>
              <li>
                use the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                attempt to reverse engineer any software contained in the
                applications
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. User Accounts
            </h2>
            <p className="mb-4">
              When you create an account with us, you must provide information
              that is accurate, complete, and current at all times. You are
              responsible for safeguarding the password and for all activities
              that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Prohibited Uses
            </h2>
            <p className="mb-4">You may not use our Service:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                For any unlawful purpose or to solicit others to perform
                unlawful acts
              </li>
              <li>
                To violate any international, federal, provincial, or state
                regulations, rules, laws, or local ordinances
              </li>
              <li>
                To infringe upon or violate our intellectual property rights or
                the intellectual property rights of others
              </li>
              <li>
                To harass, abuse, insult, harm, defame, slander, disparage,
                intimidate, or discriminate
              </li>
              <li>To submit false or misleading information</li>
              <li>
                To upload or transmit viruses or any other type of malicious
                code
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Content
            </h2>
            <p className="mb-4">
              Our Service allows you to post, link, store, share and otherwise
              make available certain information, text, graphics, videos, or
              other material ("Content"). You are responsible for the Content
              that you post to the Service, including its legality, reliability,
              and appropriateness.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Privacy Policy
            </h2>
            <p className="mb-4">
              Your privacy is important to us. Please review our Privacy Policy,
              which also governs your use of the Service, to understand our
              practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Termination
            </h2>
            <p className="mb-4">
              We may terminate or suspend your account and bar access to the
              Service immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Disclaimer
            </h2>
            <p className="mb-4">
              The information on this Service is provided on an "as is" basis.
              To the fullest extent permitted by law, this Company excludes all
              representations, warranties, conditions and terms relating to our
              Service and the use of this Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Governing Law
            </h2>
            <p className="mb-4">
              These Terms shall be interpreted and governed by the laws of the
              United States, without regard to its conflict of law provisions.
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Changes to Terms
            </h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will
              provide at least 30 days notice prior to any new terms taking
              effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              11. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>
                <strong>Curious Cat Consulting, LLC</strong>
                <br />
                Email:{' '}
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

export default TermsOfService;
