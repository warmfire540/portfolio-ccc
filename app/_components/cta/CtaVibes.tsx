'use client';

import AnimatedSection from '@/app/_components/ui/AnimatedSection';

export default function CtaVibes() {
  return (
    <section className="py-16 bg-primary-800 dark:bg-primary-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&rsquo;s discuss how Curious Cat Consulting can help bring your
            ideas to life with thoughtful, well-architected solutions.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-white dark:bg-primary-200 text-primary-800 font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-primary-300 transition-colors text-lg"
          >
            Get In Touch
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
