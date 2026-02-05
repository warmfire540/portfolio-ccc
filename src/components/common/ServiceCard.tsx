import React from 'react';

import { DynamicIcon, IconName } from 'lucide-react/dynamic';

import AnimatedSection from 'components/common/AnimatedSection';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: IconName;
  index: number;
  variant?: 'vertical' | 'horizontal';
  iconSize?: number;
  headingLevel?: 'h3' | 'h4';
}

/**
 * A reusable service card component with hover effects (blue outline and icon scaling).
 * Supports both vertical (icon above title) and horizontal (icon next to title) layouts.
 *
 * @param {ServiceCardProps} props - The properties for the ServiceCard component.
 * @param {string} props.title - The service title.
 * @param {string} props.description - The service description.
 * @param {IconName} props.iconName - The name of the icon to display.
 * @param {number} props.index - The index for animation delay.
 * @param {'vertical' | 'horizontal'} [props.variant='vertical'] - Layout variant.
 * @param {number} [props.iconSize=48] - Size of the icon.
 * @param {'h3' | 'h4'} [props.headingLevel='h3'] - HTML heading level.
 *
 * @returns {JSX.Element} The rendered ServiceCard component.
 */
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconName,
  index,
  variant = 'vertical',
  iconSize = 48,
  headingLevel = 'h3',
}) => {
  const baseClasses =
    'bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-primary-200 dark:hover:border-primary-500 group';

  const iconWrapperClasses =
    'w-fit transform group-hover:scale-110 transition-transform duration-300';

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
            <DynamicIcon
              name={iconName}
              size={iconSize}
              className="text-primary-600 dark:text-primary-400"
            />
          </div>
          <HeadingTag className={titleClasses}>{title}</HeadingTag>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </>
      ) : (
        <>
          <div className="flex items-center mb-4">
            <div className={iconWrapperClasses}>
              <DynamicIcon
                name={iconName}
                size={iconSize}
                className="text-primary-600 dark:text-primary-400"
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
