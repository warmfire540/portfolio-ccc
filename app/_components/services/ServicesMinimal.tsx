'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { services, specializedServices } from './data';

export default function ServicesMinimal() {
  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-zinc-950 dark:via-primary-950/20 dark:to-zinc-950"
    >
      <div className="mx-auto max-w-3xl px-6">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
          <span className="bg-[length:200%_auto] bg-gradient-to-r from-zinc-900 via-primary-600 to-zinc-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent animate-[shimmer_8s_ease-in-out_infinite]">
            What we do.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-20">
          Software development and consulting services to help businesses build,
          modernize, and optimize their digital solutions.
        </p>

        {/* Core Services */}
        <div className="space-y-12 mb-24">
          {services.map((service) => (
            <div key={service.id} className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="w-4 h-4 text-zinc-400 dark:text-zinc-500"
                  aria-hidden
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Services */}
        <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-10">
          Specialized
        </h3>

        <div className="grid sm:grid-cols-2 gap-px bg-zinc-200/60 dark:bg-zinc-800/60 rounded-2xl overflow-hidden">
          {specializedServices.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-zinc-950 p-8"
            >
              <FontAwesomeIcon
                icon={service.icon}
                className="w-5 h-5 text-zinc-300 dark:text-zinc-700 mb-4"
                aria-hidden
              />
              <h4 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
