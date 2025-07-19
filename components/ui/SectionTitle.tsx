
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center text-primary-dark mb-12 md:mb-16 leading-tight tracking-tight break-words word-break-keep-all px-1 sm:px-2 md:px-4 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
