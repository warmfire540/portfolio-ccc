'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { ReactGoogleReviews } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronDown,
  faChevronUp,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BentoCell from '../hero/BentoCell';
import { STATS, TEAM, MILESTONES, VALUES, RECOGNITIONS } from './data';

export default function AboutBento() {
  const [showMore, setShowMore] = useState(false);
  const scrollRestoreY = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (scrollRestoreY.current === null) return;
    const y = scrollRestoreY.current;
    scrollRestoreY.current = null;
    window.scrollTo({ top: y, left: 0, behavior: 'instant' });
  }, [showMore]);

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden [overflow-anchor:none]"
    >
      {/* Warm editorial background matching HeroBento */}
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
        <div className="max-w-6xl mx-auto">
          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-min">
            {/* Section heading — full width accent cell */}
            <BentoCell
              className="sm:col-span-2 lg:col-span-4 flex flex-col items-center justify-center text-center !bg-primary-600 !border-primary-700 !p-10"
              delay={0}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                About Curious Cat Consulting
              </h2>
              <p className="text-primary-100 text-base sm:text-lg max-w-2xl">
                Founded in 2025 on a foundation of technical excellence and
                genuine curiosity about solving complex business problems.
              </p>
            </BentoCell>

            {/* Intro text */}
            <BentoCell className="sm:col-span-2 flex flex-col justify-center" delay={100}>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-3">
                I approach every project with fresh eyes and a questioning mind,
                digging deeper to understand the real challenges behind your
                requirements.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                This curiosity-driven approach leads to solutions that not only
                meet your immediate needs but anticipate future ones as well.
              </p>
            </BentoCell>

            {/* Stats */}
            <BentoCell className="sm:col-span-2 flex flex-col justify-center" delay={200}>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-4">
                By the numbers
              </p>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCell>

            {/* Team members */}
            {TEAM.map((member, i) => (
              <BentoCell
                key={member.name}
                className="sm:col-span-2 flex flex-col"
                delay={300 + i * 100}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-primary-200/40 dark:border-primary-800/30 shadow-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-zinc-800 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left min-w-0">
                    <h4 className="text-lg font-bold text-zinc-800 dark:text-white">
                      {member.name}
                    </h4>
                    <span className="inline-block px-2.5 py-0.5 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium mb-2">
                      {member.role}
                    </span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {member.bio[0]}
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-3 mt-3">
                      <span className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="w-3 h-3"
                          aria-hidden
                        />
                        Tampa, FL
                      </span>
                      <span className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="w-3 h-3"
                          aria-hidden
                        />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </BentoCell>
            ))}
          </div>

          {/* Show More / Less toggle */}
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => {
                scrollRestoreY.current = window.scrollY;
                setShowMore((v) => !v);
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-600/25 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm"
            >
              {showMore ? (
                <>
                  Show Less
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden
                  />
                </>
              ) : (
                <>
                  Learn More About Us
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                    aria-hidden
                  />
                </>
              )}
            </button>
          </div>

          {/* Expandable content */}
          <div
            className={`[overflow-anchor:none] transition-all duration-500 ease-in-out ${
              showMore
                ? 'max-h-none opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
            }`}
          >
            {showMore && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-min mt-4">
                {/* Row 1: milestone 0 (wide) + value 0 (tall, spans 2 rows) */}
                <BentoCell className="sm:col-span-2 flex flex-col items-center text-center" delay={0}>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center mb-3">
                    <FontAwesomeIcon
                      icon={MILESTONES[0].icon}
                      className="w-6 h-6 text-primary-600 dark:text-primary-400"
                      aria-hidden
                    />
                  </div>
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                    {MILESTONES[0].year}
                  </span>
                  <h4 className="text-sm font-semibold text-zinc-800 dark:text-white mt-1">
                    {MILESTONES[0].title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
                    {MILESTONES[0].description}
                  </p>
                </BentoCell>

                <BentoCell
                  className="sm:col-span-2 lg:row-span-2 flex flex-col relative overflow-hidden group"
                  delay={80}
                >
                  <div
                    className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${VALUES[0].gradient} opacity-10 rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`}
                  />
                  <div className="relative z-10 h-full flex flex-col">
                    <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-2">
                      Our Values
                    </p>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 flex items-center justify-center shrink-0">
                        <FontAwesomeIcon
                          icon={VALUES[0].icon}
                          className="w-5 h-5 text-zinc-600 dark:text-zinc-300"
                          aria-hidden
                        />
                      </div>
                      <h4 className="text-base font-bold text-zinc-800 dark:text-white">
                        {VALUES[0].title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
                      {VALUES[0].description}
                    </p>
                    <div
                      className={`w-0 h-0.5 bg-gradient-to-r ${VALUES[0].gradient} rounded-full mt-4 group-hover:w-full transition-all duration-500`}
                    />
                  </div>
                </BentoCell>

                {/* Row 2: milestone 1 + milestone 2 (left side, value 0 still spans right) */}
                <BentoCell className="flex flex-col items-center text-center" delay={160}>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center mb-3">
                    <FontAwesomeIcon
                      icon={MILESTONES[1].icon}
                      className="w-6 h-6 text-primary-600 dark:text-primary-400"
                      aria-hidden
                    />
                  </div>
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                    {MILESTONES[1].year}
                  </span>
                  <h4 className="text-sm font-semibold text-zinc-800 dark:text-white mt-1">
                    {MILESTONES[1].title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
                    {MILESTONES[1].description}
                  </p>
                </BentoCell>

                <BentoCell className="flex flex-col items-center text-center" delay={240}>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center mb-3">
                    <FontAwesomeIcon
                      icon={MILESTONES[2].icon}
                      className="w-6 h-6 text-primary-600 dark:text-primary-400"
                      aria-hidden
                    />
                  </div>
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                    {MILESTONES[2].year}
                  </span>
                  <h4 className="text-sm font-semibold text-zinc-800 dark:text-white mt-1">
                    {MILESTONES[2].title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
                    {MILESTONES[2].description}
                  </p>
                </BentoCell>

                {/* Row 3: value 1 (wide) + milestone 3 */}
                <BentoCell
                  className="sm:col-span-2 lg:col-span-3 flex flex-col relative overflow-hidden group"
                  delay={320}
                >
                  <div
                    className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${VALUES[1].gradient} opacity-10 rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 flex items-center justify-center shrink-0">
                        <FontAwesomeIcon
                          icon={VALUES[1].icon}
                          className="w-5 h-5 text-zinc-600 dark:text-zinc-300"
                          aria-hidden
                        />
                      </div>
                      <h4 className="text-base font-bold text-zinc-800 dark:text-white">
                        {VALUES[1].title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {VALUES[1].description}
                    </p>
                    <div
                      className={`w-0 h-0.5 bg-gradient-to-r ${VALUES[1].gradient} rounded-full mt-4 group-hover:w-full transition-all duration-500`}
                    />
                  </div>
                </BentoCell>

                <BentoCell className="flex flex-col items-center text-center" delay={400}>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center mb-3">
                    <FontAwesomeIcon
                      icon={MILESTONES[3].icon}
                      className="w-6 h-6 text-primary-600 dark:text-primary-400"
                      aria-hidden
                    />
                  </div>
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                    {MILESTONES[3].year}
                  </span>
                  <h4 className="text-sm font-semibold text-zinc-800 dark:text-white mt-1">
                    {MILESTONES[3].title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
                    {MILESTONES[3].description}
                  </p>
                </BentoCell>

                {/* Row 4: value 2 + reviews (wide) */}
                <BentoCell
                  className="flex flex-col relative overflow-hidden group"
                  delay={480}
                >
                  <div
                    className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${VALUES[2].gradient} opacity-10 rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 flex items-center justify-center shrink-0">
                        <FontAwesomeIcon
                          icon={VALUES[2].icon}
                          className="w-5 h-5 text-zinc-600 dark:text-zinc-300"
                          aria-hidden
                        />
                      </div>
                      <h4 className="text-base font-bold text-zinc-800 dark:text-white">
                        {VALUES[2].title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {VALUES[2].description}
                    </p>
                    <div
                      className={`w-0 h-0.5 bg-gradient-to-r ${VALUES[2].gradient} rounded-full mt-4 group-hover:w-full transition-all duration-500`}
                    />
                  </div>
                </BentoCell>

                <BentoCell className="sm:col-span-2 lg:col-span-3 flex flex-col justify-center" delay={560}>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-3">
                    What our clients say
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                    Don&rsquo;t just take our word for it. Here&rsquo;s what
                    clients have to say about working with us.
                  </p>
                  <div className="bg-white dark:bg-zinc-900 rounded-lg p-3 border border-zinc-200/60 dark:border-zinc-700">
                    <ReactGoogleReviews
                      layout="badge"
                      featurableId={
                        process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID ?? ''
                      }
                    />
                  </div>
                </BentoCell>

                {/* Row 5: recognition + value 3 (wide) */}
                <BentoCell className="flex flex-col justify-center items-center text-center" delay={640}>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-3">
                    Recognition
                  </p>
                  {RECOGNITIONS.map((r) => (
                    <div key={r.title} className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-3">
                        <FontAwesomeIcon
                          icon={r.icon}
                          className="w-6 h-6 text-emerald-500"
                          aria-hidden
                        />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-800 dark:text-white mb-1">
                        {r.title}
                      </h4>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mb-3">
                        {r.description}
                      </p>
                      <a
                        href={r.badgeLink}
                        title="Find me on Biz Growth Collective"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-80 transition-opacity"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={r.badgeUrl}
                          alt="Verified on Biz Growth Collective"
                          className="h-14 w-auto"
                        />
                      </a>
                    </div>
                  ))}
                </BentoCell>

                <BentoCell
                  className="sm:col-span-2 lg:col-span-3 flex flex-col relative overflow-hidden group"
                  delay={720}
                >
                  <div
                    className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${VALUES[3].gradient} opacity-10 rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 flex items-center justify-center shrink-0">
                        <FontAwesomeIcon
                          icon={VALUES[3].icon}
                          className="w-5 h-5 text-zinc-600 dark:text-zinc-300"
                          aria-hidden
                        />
                      </div>
                      <h4 className="text-base font-bold text-zinc-800 dark:text-white">
                        {VALUES[3].title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {VALUES[3].description}
                    </p>
                    <div
                      className={`w-0 h-0.5 bg-gradient-to-r ${VALUES[3].gradient} rounded-full mt-4 group-hover:w-full transition-all duration-500`}
                    />
                  </div>
                </BentoCell>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
