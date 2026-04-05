'use client';

import { type ReactNode, useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  threshold?: number;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-right' | 'zoom-in';
  delay?: number;
}

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
