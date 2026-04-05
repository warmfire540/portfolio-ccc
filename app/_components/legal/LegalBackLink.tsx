'use client';

import Link from 'next/link';

export default function LegalBackLink() {
  return (
    <div className="mb-8">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
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
  );
}
