import React from 'react';
import CallToActionButton from './ui/CallToActionButton';
import HighlightText from './ui/HighlightText';
import { useImages } from '../contexts/ImageContext';

const HeroSection: React.FC = () => {
  const { getImage } = useImages();
  
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 md:py-32 min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${getImage('hero')})`
      }}
    >
      {/* 暗いオーバーレイでテキストの可読性を向上 */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
          「想いは溢れるのに、<span className="text-secondary-light">書けない…？</span><br className="hidden md:block" />大丈夫！話すだけで、あなたの本ができます。」
        </h1>
        <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-white drop-shadow-md">
          書く手間なし！<HighlightText className="text-secondary-light">428時間</HighlightText>を"生み出す"秘策、教えます。
        </p>
        <CallToActionButton text="無料目次作成セッションに申し込む" href="https://forms.gle/asaXZkD25iFwtkaG7" className="text-xl px-10 py-4 shadow-xl" />
      </div>
    </section>
  );
};




export default HeroSection;
