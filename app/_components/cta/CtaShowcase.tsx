'use client';

import {
  faComments,
  faLightbulb,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from '@/app/_components/ui/AnimatedSection';

const steps = [
  {
    icon: faComments,
    label: 'Discovery call',
    detail: 'We learn your business',
  },
  {
    icon: faLightbulb,
    label: 'Scoping & plan',
    detail: 'Clear roadmap, no surprises',
  },
  {
    icon: faRocket,
    label: 'Build & launch',
    detail: 'Working software, delivered',
  },
];

export default function CtaShowcase() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Blueprint bg */}
      <div className="absolute inset-0 bg-[#e8f0fa] dark:bg-[#0c1929]" />
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(2,132,199,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,132,199,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <AnimatedSection animation="fade-in">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Three steps to launch
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg">
              No 40-page proposals. No months of planning. Just momentum.
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className="bg-white/85 dark:bg-zinc-900/85 border border-primary-200/40 dark:border-primary-800/30 rounded-lg p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={step.icon}
                    className="w-5 h-5 text-primary-600 dark:text-primary-400"
                    aria-hidden
                  />
                </div>
                <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mb-1">
                  Step {i + 1}
                </p>
                <p className="font-semibold text-zinc-900 dark:text-white mb-1">
                  {step.label}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-md"
            >
              Start with Step 1
              <FontAwesomeIcon
                icon={faComments}
                className="w-4 h-4"
                aria-hidden
              />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
