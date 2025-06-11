import React from 'react';

import { X, Mail, AlertTriangle, Copy } from 'lucide-react';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  errors: any[];
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
  isOpen,
  onClose,
  errors,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const errorText = errors
    .map(
      (error, index) =>
        `${index + 1}. Code: ${error.code || 'UNKNOWN'}, Message: ${
          error.message || 'No message'
        }`,
    )
    .join('\n');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(errorText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full mx-4 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mr-4">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Form Submission Error
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            There was an issue submitting your form. Please try again, or
            contact us directly using the email below.
          </p>

          {/* Error Details */}
          <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                Error Details:
              </h4>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                <Copy className="w-3 h-3" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded p-3 max-h-32 overflow-y-auto">
              {errors.map((error, index) => (
                <div key={index} className="mb-2 last:mb-0">
                  <span className="font-semibold">{index + 1}.</span>
                  <span className="ml-1">Code: {error.code || 'UNKNOWN'}</span>
                  <br />
                  <span className="ml-4">
                    Message: {error.message || 'No message'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2 flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Alternative Contact
            </h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Email us directly at{' '}
              <a
                href="mailto:info@curiouscat.consulting"
                className="font-medium underline hover:no-underline"
              >
                info@curiouscat.consulting
              </a>
              {errors.length > 0 && (
                <span className="block mt-1 text-xs">
                  (Feel free to include the error details above in your email)
                </span>
              )}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors"
            >
              Try Again
            </button>
            <a
              href={`mailto:info@curiouscat.consulting?subject=Contact Form Error&body=I encountered an error submitting the contact form. Here are the error details:%0A%0A${encodeURIComponent(
                errorText,
              )}`}
              className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-medium rounded-md transition-colors text-center"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
