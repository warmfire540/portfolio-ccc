import React, { useState } from 'react';

import { Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/cat.svg';

const PRIMARY_COLORS = [
  { name: '50', hex: '#f0f9ff', tailwind: 'primary-50' },
  { name: '100', hex: '#e0f2fe', tailwind: 'primary-100' },
  { name: '200', hex: '#bae6fd', tailwind: 'primary-200' },
  { name: '300', hex: '#7dd3fc', tailwind: 'primary-300' },
  { name: '400', hex: '#38bdf8', tailwind: 'primary-400' },
  { name: '500', hex: '#0ea5e9', tailwind: 'primary-500' },
  { name: '600', hex: '#0284c7', tailwind: 'primary-600' },
  { name: '700', hex: '#0369a1', tailwind: 'primary-700' },
  { name: '800', hex: '#075985', tailwind: 'primary-800' },
  { name: '900', hex: '#0c4a6e', tailwind: 'primary-900' },
];

const GRAY_COLORS = [
  { name: '50', hex: '#f9fafb' },
  { name: '100', hex: '#f3f4f6' },
  { name: '200', hex: '#e5e7eb' },
  { name: '300', hex: '#d1d5db' },
  { name: '400', hex: '#9ca3af' },
  { name: '500', hex: '#6b7280' },
  { name: '600', hex: '#4b5563' },
  { name: '700', hex: '#374151' },
  { name: '800', hex: '#1f2937' },
  { name: '900', hex: '#111827' },
];

const AI_AGENT_PROMPT = `When designing or writing for this brand, follow these guidelines:

## Colors
- Primary: Sky blue scale. Main brand: #0284c7 (primary-600). Dark accent: #0c4a6e (primary-900).
- Backgrounds: Light mode bg-gray-50 (#f9fafb); dark mode bg-gray-900 (#111827).
- Text: Light mode text-gray-800 (#1f2937); dark mode text-white or text-gray-300.
- Links/accents: primary-600 hover primary-800 (light); primary-400 hover primary-300 (dark).

## Typography
- Font: Inter (weights 300, 400, 500, 600, 700).
- Headings: Bold (700), gray-800 / gray-100 in dark mode.
- Body: Regular (400), gray-700 / gray-300 in dark mode.
- Scale: h1 text-4xl, h2 text-3xl, h3 text-2xl, h4 text-xl, h5 text-lg, h6 text-base.

## Components
- Buttons: Primary = bg-primary-600 hover:bg-primary-700 text-white, rounded-md. Secondary = border border-primary-600 text-primary-600.
- Cards: rounded-lg, shadow-md, white/dark:bg-gray-800.
- Focus: ring-2 ring-primary-500 ring-offset-2.
- Inputs: rounded-md, border border-gray-300, focus:ring-primary-500.

## Layout
- Container: max-w-* mx-auto, padding px-4 sm:px-6 lg:px-8.
- Section spacing: py-16 or py-24.

## Voice
- Professional, approachable, concise. Avoid jargon; explain technical concepts clearly.`;

/**
 * Brand Kit page documenting the design system as the source of truth.
 * White-label, document-like aesthetic with copyable AI agent prompt.
 */
const BrandKit: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(AI_AGENT_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors duration-200"
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

        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          Brand Kit
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Design system reference and source of truth for the portfolio.
        </p>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Colors
          </h2>

          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Primary palette
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
            {PRIMARY_COLORS.map((c) => (
              <div key={c.name} className="flex flex-col">
                <div
                  className="h-16 rounded-lg border border-gray-200 dark:border-gray-700 mb-2"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                  {c.name}: {c.hex}
                </span>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Gray scale
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {GRAY_COLORS.map((c) => (
              <div key={c.name} className="flex flex-col">
                <div
                  className="h-12 rounded-lg border border-gray-200 dark:border-gray-700 mb-2"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                  {c.name}: {c.hex}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Typography
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Font family: Inter. Weights: 300, 400, 500, 600, 700.
          </p>
          <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-1">
                h1 — text-4xl font-bold
              </p>
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                Heading 1
              </h1>
            </div>
            <div>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-1">
                h2 — text-3xl font-bold
              </p>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Heading 2
              </h2>
            </div>
            <div>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-1">
                h3 — text-2xl font-semibold
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Heading 3
              </h3>
            </div>
            <div>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-1">
                Body — text-base
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                Body text uses Inter at 400 weight. Use gray-700 for light mode
                and gray-300 for dark mode.
              </p>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Components
          </h2>

          <div className="space-y-8 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-3">
                Primary button: btn-primary
              </p>
              <button
                type="button"
                className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Primary Button
              </button>
            </div>
            <div>
              <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-3">
                Secondary button: btn-secondary
              </p>
              <button
                type="button"
                className="inline-block px-6 py-3 bg-transparent border border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Secondary Button
              </button>
            </div>
            <div>
              <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-3">
                Card: rounded-lg shadow-md
              </p>
              <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Card Title
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Card content with rounded corners and soft shadow.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-3">
                Input: rounded-md border
              </p>
              <input
                type="text"
                placeholder="Placeholder text"
                className="w-full max-w-sm px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                readOnly
              />
            </div>
          </div>
        </section>

        {/* Logo */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Logo
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Cat icon with company name and tagline. Use fill="currentColor" for
            flexible theming.
          </p>
          <div className="flex flex-wrap gap-12 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-3">
                On light background
              </p>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <LogoSvg
                  className="text-primary-600 dark:text-primary-400"
                  fill="currentColor"
                  height="50px"
                  width="50px"
                />
                <div>
                  <div className="text-base font-bold text-gray-800 dark:text-white">
                    CURIOUS CAT CONSULTING
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    CURIOUSLY BETTER SOFTWARE
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-3">
                On dark background
              </p>
              <div className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg">
                <LogoSvg
                  className="text-primary-400"
                  fill="currentColor"
                  height="50px"
                  width="50px"
                />
                <div>
                  <div className="text-base font-bold text-white">
                    CURIOUS CAT CONSULTING
                  </div>
                  <div className="text-xs text-primary-200">
                    CURIOUSLY BETTER SOFTWARE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing & Layout */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Spacing & Layout
          </h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>
              Container:{' '}
              <code className="font-mono text-sm">
                max-w-4xl mx-auto px-4 sm:px-6 lg:px-8
              </code>
            </li>
            <li>
              Section padding: <code className="font-mono text-sm">py-16</code>{' '}
              or <code className="font-mono text-sm">py-24</code>
            </li>
            <li>
              Card padding: <code className="font-mono text-sm">p-6</code>
            </li>
            <li>
              Button padding:{' '}
              <code className="font-mono text-sm">px-4 py-2</code> or{' '}
              <code className="font-mono text-sm">px-6 py-3</code>
            </li>
          </ul>
        </section>

        {/* Agentic Guidance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Agentic Guidance
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Copy this prompt to give agents consistent brand guidance for design
            and copy.
          </p>
          <div className="relative">
            <pre className="p-6 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre-wrap">
              {AI_AGENT_PROMPT}
            </pre>
            <button
              type="button"
              onClick={handleCopy}
              className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandKit;
