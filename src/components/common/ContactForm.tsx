import React, { useState, useEffect } from 'react';

import { useForm } from '@formspree/react';
import { Send } from 'lucide-react';

import AnimatedSection from './AnimatedSection';
import { ErrorModal, type FormspreeError } from './ErrorModal';
import { FormField } from './FormField';
import { SuccessMessage } from './SuccessMessage';
import { projectTypes } from '../../data/project-types';
import { useFormValidation } from '../../hooks/useFormValidation';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm(
    process.env.REACT_APP_FORMSPREE_FORM_ID ?? '',
  );

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [formErrors, setFormErrors] = useState<FormspreeError[]>([]);

  const {
    formData,
    errors,
    touched,
    handleInputChange,
    handleBlur,
    validateForm,
    markAllTouched,
    getFieldClasses,
  } = useFormValidation();

  // Check for any submission errors
  useEffect(() => {
    const formErrors = state.errors?.getFormErrors();
    const fieldErrors = state.errors?.getAllFieldErrors();
    const allErrors: FormspreeError[] = [];

    if (formErrors && formErrors.length > 0) {
      // Collect all form errors (not field-specific errors)
      allErrors.push(...formErrors);
    }

    if (fieldErrors && fieldErrors.length > 0) {
      // getAllFieldErrors returns tuples [fieldName, FieldError[]]
      // Flatten them into individual error objects
      fieldErrors.forEach(([_fieldName, errors]) => {
        errors.forEach((error) => {
          allErrors.push({
            code: error.code,
            message: error.message,
          });
        });
      });
    }

    // If we have any errors, show the modal
    if (allErrors.length > 0) {
      setFormErrors(allErrors);
      setShowErrorModal(true);
    }
  }, [state.errors]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    markAllTouched();

    if (!validateForm()) {
      return;
    }

    handleSubmit(e);
  };

  if (state.succeeded) {
    return <SuccessMessage />;
  }

  return (
    <>
      <AnimatedSection animation="slide-up" delay={200}>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Send Me a Message
        </h3>
        <form onSubmit={onSubmit} noValidate className="space-y-6">
          <FormField
            id="name"
            name="name"
            label="Name"
            required
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={getFieldClasses('name')}
            error={errors.name}
            showError={touched.name}
            validationErrors={state.errors}
            data-testid="name-input"
          />

          <FormField
            id="email"
            name="email"
            label="Email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={getFieldClasses('email')}
            error={errors.email}
            showError={touched.email}
            validationErrors={state.errors}
            data-testid="email-input"
          />

          <FormField
            id="company"
            name="company"
            label="Company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500"
            error=""
            showError={false}
            validationErrors={state.errors}
            data-testid="company-input"
          />

          <FormField
            id="projectType"
            name="projectType"
            label="Interest Area"
            type="select"
            value={formData.projectType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500"
            error=""
            showError={false}
            validationErrors={state.errors}
            data-testid="project-type-input"
          >
            {projectTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormField>

          <FormField
            id="message"
            name="message"
            label="Message"
            type="textarea"
            required
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={getFieldClasses('message')}
            error={errors.message}
            showError={touched.message}
            validationErrors={state.errors}
            data-testid="message-input"
          />

          <div>
            <button
              type="submit"
              disabled={state.submitting}
              className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-200 ${
                state.submitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              <Send className="h-5 w-5" />
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </AnimatedSection>

      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        errors={formErrors}
      />
    </>
  );
};

export default ContactForm;
