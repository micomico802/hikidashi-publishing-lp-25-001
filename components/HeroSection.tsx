import React from 'react';
import CallToActionButton from './ui/CallToActionButton';
import HighlightText from './ui/HighlightText';
import { useImages } from '../contexts/ImageContext';

const HeroSection: React.FC = () => {
  const { getImage } = useImages();
  
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat text-white py-8 sm:py-12 md:py-16 lg:py-20 min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] lg:min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${getImage('hero')})`
      }}
    >
      {/* 暗いオーバーレイでテキストの可読性を向上 */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-lg break-words word-break-keep-all">
          「想いは溢れるのに、<span className="text-secondary-light">書けない…？</span><br className="block sm:hidden" />
          <br className="hidden sm:block md:hidden" />
          大丈夫！話すだけで、あなたの本ができます。」
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-6xl mx-auto text-white drop-shadow-md px-2">
          書く手間なし！<HighlightText className="text-secondary-light">428時間</HighlightText>を"生み出す"秘策、教えます。
        </p>
        <CallToActionButton 
          text="無料目次作成セッションに申し込む" 
          href="https://forms.gle/asaXZkD25iFwtkaG7" 
          className="shadow-xl" 
        />
      </div>
    </section>
  );
};

export default HeroSection;
