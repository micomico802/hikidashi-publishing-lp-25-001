
import React from 'react';

interface CallToActionButtonProps {
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string; 
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({ text, children, onClick, className = '', type = 'button', href }) => {
  const commonClasses = `bg-secondary hover:bg-secondary-dark text-white font-bold 
    py-3 px-4 sm:py-4 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10
    min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem]
    rounded-lg shadow-lg hover:shadow-xl 
    transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 
    text-sm sm:text-base md:text-lg lg:text-xl 
    text-center leading-relaxed
    whitespace-normal break-words word-break-keep-all
    flex items-center justify-center
    max-w-md mx-auto w-full
    ${className}`;

  // テキストの改行文字を<br />に変換
  const renderText = () => {
    if (children) return children;
    if (!text) return null;
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  if (href) {
    return (
      <a
        href={href}
        className={commonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {renderText()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={commonClasses}
    >
      {renderText()}
    </button>
  );
};

export default CallToActionButton;
