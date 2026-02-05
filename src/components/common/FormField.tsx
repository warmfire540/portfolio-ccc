import React from 'react';

import type { FieldValues, SubmissionError } from '@formspree/core';
import { ValidationError } from '@formspree/react';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'textarea' | 'select';
  required?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  className: string;
  error?: string;
  showError: boolean;
  validationErrors?: SubmissionError<FieldValues> | null;
  children?: React.ReactNode; // For select options
  rows?: number; // For textarea
  'data-testid'?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
  onBlur,
  className,
  error,
  showError,
  validationErrors,
  children,
  rows,
  'data-testid': dataTestId,
}) => {
  const renderInput = () => {
    const commonProps = {
      id,
      name,
      required,
      value,
      onChange,
      className,
      'data-testid': dataTestId,
    };

    switch (type) {
      case 'textarea':
        return <textarea {...commonProps} rows={rows || 5} onBlur={onBlur} />;
      case 'select':
        return <select {...commonProps}>{children}</select>;
      default:
        return <input {...commonProps} type={type} onBlur={onBlur} />;
    }
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label} {required && '*'}
      </label>
      {renderInput()}
      {showError && error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      <ValidationError
        prefix={label}
        field={name}
        errors={validationErrors ?? null}
        className="mt-1 text-sm text-red-600 dark:text-red-400"
      />
    </div>
  );
};
