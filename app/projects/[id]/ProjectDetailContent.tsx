'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  faArrowLeft,
  faCalendar,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Project } from '@/app/_components/projects/data';

function linkLabel(type?: string) {
  if (type === 'technology') return 'View Technology';
  if (type === 'client') return 'View Client';
  return 'View Project';
}

interface ProjectDetailContentProps {
  project: Project;
  isApp: boolean;
  appStoreUrl: string;
  playStoreUrl: string;
  screenshots: string[];
  features: Array<{ title: string; description: string }>;
}

export default function ProjectDetailContent({
  project,
  isApp,
  appStoreUrl,
  playStoreUrl,
  screenshots,
  features,
}: Readonly<ProjectDetailContentProps>) {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav bar */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 max-w-5xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary-600 text-white mb-3">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {project.title}
          </h1>
          <div className="flex items-center gap-4 mt-3 text-white/80 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <FontAwesomeIcon icon={faCalendar} className="w-3.5 h-3.5" />
              {project.year}
            </span>
            <span className="text-white/40">·</span>
            <span>{project.clientType}</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </section>

            {/* Features */}
            {isApp && features.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="p-5 rounded-xl border border-gray-100 bg-gray-50/60"
                    >
                      <h3 className="font-medium text-gray-900 mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Download links */}
            {isApp && appStoreUrl && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                  Download
                </h3>
                <div className="space-y-3">
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="/assets/appstore.svg"
                      alt="Download on the App Store"
                      width={180}
                      height={54}
                      className="w-[180px] h-auto"
                    />
                  </a>
                  {playStoreUrl && (
                    <a
                      href={playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-opacity hover:opacity-80"
                    >
                      <Image
                        src="/assets/playstore.svg"
                        alt="Get it on Google Play"
                        width={180}
                        height={54}
                        className="w-[180px] h-auto"
                      />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* External link */}
            {project.link && project.linkType !== 'project' && (
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                >
                  {linkLabel(project.linkType)}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="w-4 h-4"
                  />
                </a>
              </div>
            )}
          </aside>
        </div>

        {/* Screenshots — full width with dot indicators */}
        {isApp && screenshots.length > 0 && (
          <ScreenshotGallery
            screenshots={screenshots}
            projectTitle={project.title}
          />
        )}
      </main>
    </div>
  );
}

function ScreenshotGallery({
  screenshots,
  projectTitle,
}: Readonly<{ screenshots: string[]; projectTitle: string }>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) return;

    const scrollCenter = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    for (let i = 0; i < children.length; i++) {
      const childCenter = children[i].offsetLeft + children[i].offsetWidth / 2;
      const dist = Math.abs(scrollCenter - childCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    }
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (!child) return;
    const offset =
      child.offsetLeft - (el.clientWidth / 2 - child.offsetWidth / 2);
    el.scrollTo({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Screenshots</h2>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {screenshots.map((src, i) => (
          <div
            key={src}
            className="flex-shrink-0 snap-center rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow duration-300"
            style={{ width: 'min(360px, 80vw)' }}
          >
            <Image
              src={src}
              alt={`${projectTitle} screenshot ${i + 1}`}
              width={360}
              height={780}
              className="w-full h-auto object-contain"
              loading={i < 2 ? 'eager' : 'lazy'}
              sizes="(max-width: 400px) 80vw, 360px"
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {screenshots.map((src, i) => (
          <button
            key={src}
            onClick={() => scrollTo(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              i === activeIndex
                ? 'bg-gray-800 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
