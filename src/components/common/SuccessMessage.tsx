import React from 'react';

import { CheckCircle } from 'lucide-react';

export const SuccessMessage: React.FC = () => {
  return (
    <div
      className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-200 px-4 py-3 rounded mb-6 flex items-center"
      data-testid="success-message"
    >
      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
      <p>Thank you for your message! I'll get back to you shortly.</p>
    </div>
  );
};
