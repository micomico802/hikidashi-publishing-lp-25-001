
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center text-primary-dark mb-12 md:mb-16 leading-none tracking-tighter break-words word-break-keep-all px-1 sm:px-2 md:px-4 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
