import React from 'react';
import CallToActionButton from './ui/CallToActionButton';
import { useImages } from '../contexts/ImageContext';

const HeroSection: React.FC = () => {
  const { getImage } = useImages();
  
  return (
    <section className="bg-gradient-to-br from-primary-light via-primary to-primary-dark text-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          「想いは溢れるのに、<span className="text-secondary-light">書けない…？</span><br className="hidden md:block" />大丈夫！話すだけで、あなたの本ができます。」
        </h1>
        <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto">
          書く手間なし！<HighlightText>428時間</HighlightText>を"生み出す"秘策、教えます。
        </p>
        <CallToActionButton text="無料目次作成セッションに申し込む" className="text-xl px-10 py-4" />
        <div className="mt-16">
          <img 
            src={getImage('hero')} 
            alt="出版された本のイメージ" 
            className="rounded-lg shadow-2xl mx-auto" 
          />
        </div>
      </div>
    </section>
  );
};

interface HighlightTextProps {
    children: React.ReactNode;
}
const HighlightText: React.FC<HighlightTextProps> = ({children}) => {
    return <span className="text-secondary-light font-bold">{children}</span>
}


export default HeroSection;
