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
import { STATS, TEAM, MILESTONES, VALUES, RECOGNITIONS } from './data';

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutVibes() {
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
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 overflow-hidden [overflow-anchor:none]"
    >
      {/* Decorative blurred orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 blur-xl animate-pulse" />
      <div
        className="absolute bottom-40 right-20 w-48 h-48 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 blur-xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-xl animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-24">
          {/* ---- About Info ---- */}
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-primary-600 dark:from-white dark:to-primary-400 bg-clip-text text-transparent mb-6">
              About Curious Cat Consulting
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-left">
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Founded in 2025, Curious Cat Consulting was built on a
                  foundation of technical excellence and a genuine curiosity
                  about solving complex business problems through thoughtful
                  software solutions.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I approach every project with fresh eyes and a questioning
                  mind, digging deeper to understand the real challenges behind
                  your requirements. This curiosity-driven approach leads to
                  solutions that not only meet your immediate needs but
                  anticipate future ones as well.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-6 text-center">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="space-y-2">
                      <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ---- Team ---- */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Meet Our Team
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary-200 dark:ring-primary-700 shadow-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {member.name}
                      </h4>
                      <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                        <div className="px-3 py-1 bg-gradient-to-r from-primary-500 to-teal-600 text-white rounded-full text-sm font-medium">
                          {member.role}
                        </div>
                      </div>

                      <div className="space-y-3 text-gray-600 dark:text-gray-300">
                        {member.bio.map((paragraph, i) => (
                          <p key={i} className="text-sm leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="flex items-center justify-center md:justify-start space-x-4 mt-6">
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="w-4 h-4"
                            aria-hidden
                          />
                          <span>Tampa, FL</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="w-4 h-4"
                            aria-hidden
                          />
                          <span>Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---- Show More Button ---- */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                scrollRestoreY.current = window.scrollY;
                setShowMore((v) => !v);
              }}
              className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-full hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-600/25"
            >
              {showMore ? (
                <>
                  Show Less
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
                    aria-hidden
                  />
                </>
              ) : (
                <>
                  Learn More About Us
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                    aria-hidden
                  />
                </>
              )}
            </button>
          </div>

          {/* ---- Expandable sections ---- */}
          <div
            className={`[overflow-anchor:none] transition-all duration-500 ease-in-out ${
              showMore
                ? 'max-h-none opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
            }`}
          >
            {showMore && (
              <div className="space-y-24 pt-8">
                {/* Story / Milestones */}
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                      Our Story
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-600 mx-auto rounded-full" />
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {MILESTONES.map((m, i) => (
                      <div
                        key={m.title}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                        style={{ animationDelay: `${i * 150}ms` }}
                      >
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                            <FontAwesomeIcon
                              icon={m.icon}
                              className="w-8 h-8 text-white"
                              aria-hidden
                            />
                          </div>
                          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                            {m.year}
                          </div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                            {m.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {m.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Values */}
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                      Our Values
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-600 mx-auto rounded-full mb-6" />
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                      These core principles guide every project we undertake and
                      every relationship we build.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {VALUES.map((v, i) => (
                      <div
                        key={v.title}
                        className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full transform hover:scale-105 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                        style={{ animationDelay: `${i * 150}ms` }}
                      >
                        <div
                          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${v.gradient} opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}
                        />
                        <div className="relative z-10">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            <FontAwesomeIcon
                              icon={v.icon}
                              className="w-14 h-14 text-gray-600 dark:text-gray-300"
                              aria-hidden
                            />
                          </div>
                          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                            {v.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {v.description}
                          </p>
                          <div
                            className={`w-0 h-1 bg-gradient-to-r ${v.gradient} rounded-full mt-6 group-hover:w-full transition-all duration-500`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                      What Our Clients Say
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-600 mx-auto rounded-full mb-6" />
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                      Don&rsquo;t just take our word for it. Here&rsquo;s what
                      clients have to say about working with Curious Cat
                      Consulting.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                      <ReactGoogleReviews
                        layout="badge"
                        featurableId={
                          process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID ?? ''
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Recognition */}
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                      Recognition &amp; Awards
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-600 mx-auto rounded-full mb-6" />
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                      Professional recognition and community acknowledgments
                      that reflect our commitment to excellence.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    {RECOGNITIONS.map((r) => (
                      <div
                        key={r.title}
                        className="group max-w-md bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-center"
                      >
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <FontAwesomeIcon
                              icon={r.icon}
                              className="w-8 h-8 text-green-500"
                              aria-hidden
                            />
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                          {r.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                          {r.description}
                        </p>
                        <div className="flex justify-center">
                          <a
                            href={r.badgeLink}
                            title="Find me on Biz Growth Collective"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:opacity-80 transition-opacity duration-200"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={r.badgeUrl}
                              alt="Verified on Biz Growth Collective"
                              className="h-20 w-auto"
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
