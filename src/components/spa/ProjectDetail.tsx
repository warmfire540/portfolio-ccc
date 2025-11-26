import React from 'react';

import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Smartphone,
  Tablet,
  Monitor,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { projects } from '../../data/projects';

/**
 * ProjectDetail component displays a detailed view of a specific project.
 *
 * Features:
 * - Hero section with project image and key information
 * - Overview section with detailed description
 * - Features section (for apps)
 * - Technologies section
 * - App Store links (for mobile apps)
 * - Screenshots gallery (placeholder)
 * - Related information sections
 *
 * @component
 * @returns {JSX.Element} The rendered project detail page
 */
const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const isApp =
    project.category === 'Full-Stack' && project.id === 'web-canvas';
  const appStoreUrl = 'https://apps.apple.com/us/app/web-canvas/id6755220973';

  // Screenshots for Web Canvas app
  const screenshots = isApp
    ? [
        '/assets/projects/apps/webcanvas/iOS iPad  13-01.png',
        '/assets/projects/apps/webcanvas/iOS iPad  13-02.png',
        '/assets/projects/apps/webcanvas/iOS iPad  13-03.png',
        '/assets/projects/apps/webcanvas/iOS iPad  13-04.png',
        '/assets/projects/apps/webcanvas/iOS iPad  13-05.png',
      ]
    : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          to="/#projects"
          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Project Image */}
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden">
            <img
              src={project.imageUrl}
              alt={`${project.title} project preview`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-primary-600 text-white mb-3">
                    {project.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                    {project.title}
                  </h1>
                  <div className="flex items-center text-white/90 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.year}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Client Type
                </span>
                <p className="text-lg text-gray-800 dark:text-white mt-1">
                  {project.clientType}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Overview
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Features Section (for apps) */}
            {isApp && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Infinite Canvas
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Pan and zoom freely across your workspace. See all your
                      research and browsing at a glance.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Visual Browsing
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Add multiple browser windows to your canvas. Images show
                      in your workspace. See visual connections between related
                      content.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Natural Gestures
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Drag windows anywhere on the canvas. Pinch to zoom in and
                      out. Pan with two fingers to navigate.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Full Web Browsing
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Full web browsing with standard WebView. Search history
                      that remembers your journey. Dark mode support.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Screenshots Section */}
            {isApp && screenshots.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Screenshots
                </h2>
                {/* Horizontal scrolling gallery - App Store style */}
                <div className="relative">
                  <div
                    className="overflow-x-auto overflow-y-hidden pb-4 -mx-2 px-2"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: 'rgba(156, 163, 175, 0.5) transparent',
                      scrollBehavior: 'smooth',
                    }}
                  >
                    <style>{`
                      .screenshot-scroll::-webkit-scrollbar {
                        height: 8px;
                      }
                      .screenshot-scroll::-webkit-scrollbar-track {
                        background: transparent;
                      }
                      .screenshot-scroll::-webkit-scrollbar-thumb {
                        background-color: rgba(156, 163, 175, 0.5);
                        border-radius: 4px;
                      }
                      .screenshot-scroll::-webkit-scrollbar-thumb:hover {
                        background-color: rgba(156, 163, 175, 0.7);
                      }
                      .dark .screenshot-scroll::-webkit-scrollbar-thumb {
                        background-color: rgba(75, 85, 99, 0.5);
                      }
                      .dark .screenshot-scroll::-webkit-scrollbar-thumb:hover {
                        background-color: rgba(75, 85, 99, 0.7);
                      }
                    `}</style>
                    <div
                      className="flex gap-6 screenshot-scroll"
                      style={{ minWidth: 'max-content' }}
                    >
                      {screenshots.map((screenshot, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 group"
                          style={{ width: 'min(400px, 80vw)' }}
                        >
                          <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:border-primary-300 dark:group-hover:border-primary-700">
                            <img
                              src={screenshot}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="w-full h-auto object-contain"
                              style={{ maxHeight: '600px' }}
                              loading={index < 2 ? 'eager' : 'lazy'}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* App Store Links */}
            {isApp && appStoreUrl && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Download
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Available on:
                </p>
                <div className="space-y-3">
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center">
                      <Smartphone className="w-5 h-5 text-gray-600 dark:text-gray-300 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-800 dark:text-white">
                          iPhone
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          iOS 15.1+
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                  </a>
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center">
                      <Tablet className="w-5 h-5 text-gray-600 dark:text-gray-300 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-800 dark:text-white">
                          iPad
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          iPadOS 15.1+
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                  </a>
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center">
                      <Monitor className="w-5 h-5 text-gray-600 dark:text-gray-300 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-800 dark:text-white">
                          Mac
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          macOS 12.0+ (M1+)
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                  </a>
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 text-sm rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Link */}
            {project.link && project.linkType !== 'project' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-primary-600/25"
                >
                  {project.linkType === 'technology'
                    ? 'View Technology'
                    : project.linkType === 'client'
                    ? 'View Client'
                    : 'View Project'}
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
