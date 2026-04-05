'use client';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from './AnimatedSection';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconDefinition;
  index: number;
  variant?: 'vertical' | 'horizontal';
  iconSize?: 'sm' | 'lg';
  headingLevel?: 'h3' | 'h4';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  index,
  variant = 'vertical',
  iconSize = 'lg',
  headingLevel = 'h3',
}) => {
  const baseClasses =
    'bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-primary-200 dark:hover:border-primary-500 group';

  const iconWrapperClasses =
    'w-fit transform group-hover:scale-110 transition-transform duration-300';

  const iconClasses =
    iconSize === 'lg'
      ? 'w-12 h-12 text-primary-600 dark:text-primary-400'
      : 'w-6 h-6 text-primary-600 dark:text-primary-400';

  const HeadingTag = headingLevel;
  const titleClasses =
    headingLevel === 'h3'
      ? 'text-xl font-bold text-gray-800 dark:text-white mb-2'
      : 'text-lg font-bold text-gray-800 dark:text-white ml-3';

  return (
    <AnimatedSection
      animation="zoom-in"
      delay={index * 100}
      className={baseClasses}
    >
      {variant === 'vertical' ? (
        <>
          <div className={`mb-4 ${iconWrapperClasses}`}>
            <FontAwesomeIcon icon={icon} className={iconClasses} aria-hidden />
          </div>
          <HeadingTag className={titleClasses}>{title}</HeadingTag>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </>
      ) : (
        <>
          <div className="flex items-center mb-4">
            <div className={iconWrapperClasses}>
              <FontAwesomeIcon
                icon={icon}
                className={iconClasses}
                aria-hidden
              />
            </div>
            <HeadingTag className={titleClasses}>{title}</HeadingTag>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </>
      )}
    </AnimatedSection>
  );
};

export default ServiceCard;
