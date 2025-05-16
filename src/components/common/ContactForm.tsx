import React from 'react';

import { useForm, ValidationError } from '@formspree/react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  formId: string;
}

const projectTypes = [
  { value: '', label: 'Select Project Type' },
  { value: 'architecture', label: 'Software Architecture' },
  { value: 'fullstack', label: 'Full-Stack Development' },
  { value: 'cloud', label: 'Cloud Solutions' },
  { value: 'devops', label: 'DevOps & Automation' },
  { value: 'data', label: 'Data Integration' },
  { value: 'consultation', label: 'General Consultation' },
  { value: 'other', label: 'Other' },
];

const ContactForm: React.FC<ContactFormProps> = ({ formId }) => {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div
        className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-200 px-4 py-3 rounded mb-6"
        data-testid="success-message"
      >
        <p>Thank you for your message! I'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600`}
          data-testid="name-input"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600`}
          data-testid="email-input"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
        />
      </div>

      {/* Company Field */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
          data-testid="company-input"
        />
        <ValidationError
          prefix="Company"
          field="company"
          errors={state.errors}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
        />
      </div>

      {/* Project Type Field */}
      <div>
        <label
          htmlFor="projectType"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Interest Area
        </label>
        <select
          id="projectType"
          name="projectType"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
          data-testid="project-type-input"
        >
          {projectTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ValidationError
          prefix="Project Type"
          field="projectType"
          errors={state.errors}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600`}
          data-testid="message-input"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-medium rounded-md transition-colors duration-200 ${
            state.submitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          <Send className="h-5 w-5" />
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
