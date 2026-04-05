'use client';

import { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { services, specializedServices } from './data';

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = services.length;

  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + total) % total),
    [total],
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % total),
    [total],
  );

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Blueprint background */}
      <div className="absolute inset-0 bg-[#e8f0fa] dark:bg-[#0c1929]" />
      <div
        className="absolute inset-0 opacity-[0.5] dark:opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(2,132,199,0.42) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,132,199,0.42) 1px, transparent 1px),
            linear-gradient(rgba(2,132,199,0.24) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,132,199,0.24) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(232,240,250,0.72)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(12,25,41,0.82)_100%)]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
              Our Services
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Software development and consulting services to help businesses
              build, modernize, and optimize their digital solutions.
            </p>
          </div>

          {/* Card stack */}
          <div
            className="relative mx-auto max-w-2xl mb-8"
            style={{ perspective: '1200px' }}
          >
            {/* Navigation arrows */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 shadow-md flex items-center justify-center text-zinc-500 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-700 transition-all"
              aria-label="Previous service"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="w-4 h-4"
                aria-hidden
              />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 shadow-md flex items-center justify-center text-zinc-500 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-700 transition-all"
              aria-label="Next service"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-4 h-4"
                aria-hidden
              />
            </button>

            {/* Cards */}
            <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
              {services.map((service, i) => {
                const offset = (i - activeIndex + total) % total;
                // Map offset to position: 0 = front, 1 = right, total-1 = left, rest = hidden
                let transform = '';
                let zIndex = 0;
                let opacity = 0;
                let pointerEvents: 'auto' | 'none' = 'none';

                if (offset === 0) {
                  // Active card — front and center
                  transform = 'translateX(0) translateZ(0) rotateY(0deg)';
                  zIndex = 30;
                  opacity = 1;
                  pointerEvents = 'auto';
                } else if (offset === 1) {
                  // Next card — peeking right
                  transform =
                    'translateX(65%) translateZ(-120px) rotateY(-12deg)';
                  zIndex = 20;
                  opacity = 0.6;
                  pointerEvents = 'auto';
                } else if (offset === total - 1) {
                  // Previous card — peeking left
                  transform =
                    'translateX(-65%) translateZ(-120px) rotateY(12deg)';
                  zIndex = 20;
                  opacity = 0.6;
                  pointerEvents = 'auto';
                } else if (offset === 2) {
                  // Two ahead — barely visible right
                  transform =
                    'translateX(80%) translateZ(-220px) rotateY(-18deg)';
                  zIndex = 10;
                  opacity = 0.25;
                } else if (offset === total - 2) {
                  // Two behind — barely visible left
                  transform =
                    'translateX(-80%) translateZ(-220px) rotateY(18deg)';
                  zIndex = 10;
                  opacity = 0.25;
                }

                return (
                  <div
                    key={service.id}
                    onClick={() => {
                      if (offset === 1) next();
                      else if (offset === total - 1) prev();
                    }}
                    className={`${offset === 0 ? 'relative' : 'absolute inset-0'} rounded-xl border border-primary-200/40 dark:border-primary-800/30 bg-white/95 dark:bg-zinc-900/95 shadow-lg overflow-hidden backdrop-blur-sm transition-all duration-500 ease-out ${
                      offset === 1 || offset === total - 1
                        ? 'cursor-pointer'
                        : ''
                    }`}
                    style={{
                      transform,
                      zIndex,
                      opacity,
                      pointerEvents,
                    }}
                  >
                    {/* Card content */}
                    <div className="px-8 pt-8 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800/50 flex items-center justify-center shrink-0">
                          <FontAwesomeIcon
                            icon={service.icon}
                            className="w-7 h-7 text-primary-600 dark:text-primary-400"
                            aria-hidden
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                            {service.title}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-100 dark:divide-zinc-800 px-8 pb-8 pt-6">
                      <div className="md:pr-8 pb-6 md:pb-0">
                        <h4 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                          What you get
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                            >
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="w-3 h-3 text-primary-500 mt-1 shrink-0"
                                aria-hidden
                              />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:pl-8 pt-6 md:pt-0">
                        <h4 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                          Offerings
                        </h4>
                        <ul className="space-y-2">
                          {service.offerings.map((offering) => (
                            <li
                              key={offering}
                              className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                              {offering}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mb-20">
            {services.map((service, i) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Show ${service.title}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'bg-primary-600 dark:bg-primary-400 scale-125'
                    : 'bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>

          {/* Specialized services */}
          <div>
            <h3 className="text-center text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-8">
              Specialized Services
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {specializedServices.map((service) => (
                <div
                  key={service.title}
                  className="flex items-start gap-3 rounded-lg border border-primary-200/40 dark:border-primary-800/30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-4"
                >
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="w-4 h-4 text-primary-500 dark:text-primary-400 mt-0.5 shrink-0"
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-white">
                      {service.title}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
