
import React from 'react';

interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({ children, className }) => {
  return (
    <span className={`font-bold text-secondary-dark ${className}`}>
      {children}
    </span>
  );
};

export default HighlightText;
