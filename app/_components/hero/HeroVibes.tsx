'use client';

import { useMemo } from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowTrendUp,
  faBolt,
  faBullseye,
  faCompass,
  faRocket,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STATS: {
  number: string;
  label: string;
  icon: IconDefinition;
  color: string;
}[] = [
  {
    number: '10+',
    label: 'Years Experience',
    icon: faRocket,
    color: 'text-blue-300',
  },
  {
    number: '20+',
    label: 'Projects Delivered',
    icon: faArrowTrendUp,
    color: 'text-teal-300',
  },
  {
    number: '100%',
    label: 'Client Satisfaction',
    icon: faBullseye,
    color: 'text-pink-300',
  },
];

export default function HeroVibes() {
  const particles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${10 + ((i * 17) % 90)}%`,
        top: `${5 + ((i * 23) % 85)}%`,
        delay: `${(i * 0.7) % 5}s`,
        duration: `${3 + ((i * 0.4) % 4)}s`,
      })),
    [],
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-teal-900 to-primary-800 dark:from-zinc-900 dark:via-primary-900 dark:to-zinc-800" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-teal-600 rounded-full mix-blend-multiply blur-xl opacity-30 animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full mix-blend-multiply blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-primary-400 to-blue-600 rounded-full mix-blend-multiply blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-[float_4s_ease-in-out_infinite]"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pb-16 md:pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white mb-8 hover:bg-white/20 transition-all duration-300">
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="w-4 h-4 mr-2 text-yellow-300"
                aria-hidden
              />
              <span className="text-sm font-medium">
                Curiously Better Software
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text text-transparent">
                Technology That
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Grows With Your Business
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-light">
              Your corner bakery, your law practice, your growing
              startup; you shouldn&rsquo;t need a Fortune&nbsp;500 budget
              to run like one.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="#services"
                className="group relative px-8 py-4 bg-white text-primary-900 font-semibold rounded-full hover:bg-zinc-100 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/25 flex items-center"
              >
                Explore Our Services
                <FontAwesomeIcon
                  icon={faCompass}
                  className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform"
                  aria-hidden
                />
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 border-2 border-white/30 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center"
              >
                <FontAwesomeIcon
                  icon={faBolt}
                  className="mr-2 w-5 h-5 text-yellow-300"
                  aria-hidden
                />
                Start Your Project
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-3">
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className={`w-8 h-8 ${stat.color}`}
                    aria-hidden
                  />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
