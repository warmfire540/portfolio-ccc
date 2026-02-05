import React, { ReactNode, useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  threshold?: number;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-right' | 'zoom-in';
  delay?: number;
}

/**
 * AnimatedSection is a reusable React component that animates its children when they enter the viewport.
 * It uses the Intersection Observer API to detect when the section becomes visible and applies a specified animation.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the animated section.
 * @param {string} [id] - Optional id for the section's root div.
 * @param {number} [threshold=0.1] - Intersection Observer threshold for triggering the animation.
 * @param {string} [className] - Additional CSS classes to apply to the section.
 * @param {'fade-in' | 'slide-up' | 'slide-right' | 'zoom-in'} [animation='fade-in'] - The animation type to apply when the section enters the viewport.
 * @param {number} [delay=0] - Delay in milliseconds before the animation starts after the section becomes visible.
 *
 * @example
 * <AnimatedSection animation="slide-up" delay={200}>
 *   <h2>My Animated Content</h2>
 * </AnimatedSection>
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id = '',
  threshold = 0.1,
  className = '',
  animation = 'fade-in',
  delay = 0,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply animation class based on the animation prop
          setTimeout(() => {
            switch (animation) {
              case 'fade-in':
                entry.target.classList.add('opacity-100');
                break;
              case 'slide-up':
                entry.target.classList.remove('translate-y-10');
                entry.target.classList.add('translate-y-0', 'opacity-100');
                break;
              case 'slide-right':
                entry.target.classList.remove('-translate-x-10');
                entry.target.classList.add('translate-x-0', 'opacity-100');
                break;
              case 'zoom-in':
                entry.target.classList.remove('scale-95');
                entry.target.classList.add('scale-100', 'opacity-100');
                break;
              default:
                entry.target.classList.add('opacity-100');
            }
            // Remove transitionDelay after animation completes so hover effects aren't delayed
            const element = entry.target as HTMLElement;
            element.style.transitionDelay = '';
          }, delay);

          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    observer.observe(currentSection);

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [animation, delay, threshold]);

  // Set initial classes based on animation type
  let animationClasses = 'opacity-0 transition-all duration-1000 ease-out';

  switch (animation) {
    case 'slide-up':
      animationClasses += ' transform translate-y-10';
      break;
    case 'slide-right':
      animationClasses += ' transform -translate-x-10';
      break;
    case 'zoom-in':
      animationClasses += ' transform scale-95';
      break;
    default:
      // fade-in is just opacity-0 -> opacity-100
      break;
  }

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`${animationClasses} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
