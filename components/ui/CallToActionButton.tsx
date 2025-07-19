
import React from 'react';

interface CallToActionButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string; 
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({ text, onClick, className = '', type = 'button', href }) => {
  const commonClasses = `bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 sm:py-3 sm:px-8 md:py-4 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 text-sm sm:text-base lg:text-lg text-center leading-tight whitespace-normal break-words ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={commonClasses}
        target="_blank" // Assuming external links, or adjust as needed
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={commonClasses}
    >
      {text}
    </button>
  );
};

export default CallToActionButton;
