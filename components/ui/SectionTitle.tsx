
import React from 'react';

interface SectionTitleProps {
  text: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, className = '' }) => {
  return (
    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary-dark mb-12 md:mb-16 leading-tight ${className}`}>
      {text}
    </h2>
  );
};

export default SectionTitle;
