'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import BentoCell from '../hero/BentoCell';
import { services, specializedServices } from './data';

export default function ServicesBento() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Warm editorial background */}
      <div className="absolute inset-0 bg-[#faf9f7] dark:bg-[#121110]" />
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #d4d0c8 0.8px, transparent 0.8px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(234,179,8,0.04),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(234,179,8,0.05),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Heading cell */}
          <BentoCell
            className="flex flex-col items-center justify-center text-center !bg-primary-600 !border-primary-700 !p-10"
            delay={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Our Services
            </h2>
            <p className="text-primary-100 text-base sm:text-lg max-w-2xl">
              Software development and consulting services to help businesses
              build, modernize, and optimize their digital solutions.
            </p>
          </BentoCell>

          {/* Interactive service explorer — single cell */}
          <BentoCell className="!p-0 overflow-hidden" delay={100}>
            <div className="flex flex-col md:flex-row min-h-[420px]">
              {/* Left nav */}
              <nav className="md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-zinc-200/60 dark:border-zinc-700/50">
                <div className="p-4 md:p-0">
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium px-4 pt-4 pb-2 hidden md:block">
                    Services
                  </p>
                  <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible px-0 md:px-2 pb-0 md:pb-4">
                    {services.map((service, i) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left whitespace-nowrap md:whitespace-normal transition-all duration-200 w-full ${
                          i === activeIndex
                            ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                            : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-700 dark:hover:text-zinc-300'
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={service.icon}
                          className={`w-4 h-4 shrink-0 transition-colors duration-200 ${
                            i === activeIndex
                              ? 'text-primary-600 dark:text-primary-400'
                              : ''
                          }`}
                          aria-hidden
                        />
                        <span className="text-sm font-medium">
                          {service.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Right detail */}
              <div
                key={activeIndex}
                className="flex-1 p-6 md:p-8 animate-[fade-in-up_0.25s_ease-out]"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center shrink-0">
                    <FontAwesomeIcon
                      icon={active.icon}
                      className="w-6 h-6 text-primary-600 dark:text-primary-400"
                      aria-hidden
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-1">
                      {active.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {active.description}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-3">
                      What you get
                    </h4>
                    <ul className="space-y-2">
                      {active.benefits.map((benefit) => (
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
                  <div>
                    <h4 className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-3">
                      Offerings
                    </h4>
                    <ul className="space-y-2">
                      {active.offerings.map((offering) => (
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
            </div>
          </BentoCell>

          {/* Specialized services — compact pills */}
          <BentoCell className="!p-6" delay={200}>
            <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-4">
              Specialized Services
            </p>
            <div className="flex flex-wrap gap-2">
              {specializedServices.map((service) => (
                <span
                  key={service.title}
                  className="group relative inline-flex items-center gap-2 px-3.5 py-2 text-sm rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300 hover:border-primary-300 dark:hover:border-primary-700 transition-colors cursor-default"
                >
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="w-3.5 h-3.5 text-primary-500 dark:text-primary-400"
                    aria-hidden
                  />
                  {service.title}
                  {/* Tooltip */}
                  <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs leading-relaxed p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    {service.description}
                  </span>
                </span>
              ))}
            </div>
          </BentoCell>
        </div>
      </div>
    </section>
  );
}
