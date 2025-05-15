import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-right' | 'zoom-in';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  threshold = 0.1,
  className = '',
  animation = 'fade-in',
  delay = 0
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply animation class based on the animation prop
          setTimeout(() => {
            switch(animation) {
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
          }, delay);
          
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    
    observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animation, delay, threshold]);
  
  // Set initial classes based on animation type
  let animationClasses = 'opacity-0 transition-all duration-1000 ease-out';
  
  switch(animation) {
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
    <div ref={sectionRef} className={`${animationClasses} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default AnimatedSection;