import React from 'react';
import CallToActionButton from './ui/CallToActionButton';
import HighlightText from './ui/HighlightText';
import { useImages } from '../contexts/ImageContext';

const HeroSection: React.FC = () => {
  const { getImage } = useImages();
  
  return (
    <section className="relative w-full">
      {/* 16:9アスペクト比の画像コンテナ */}
      <div className="relative w-full aspect-video min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
        <img 
          src={getImage('hero')} 
          alt="hikidashi出版ヒーロー画像"
          className="w-full h-full object-cover"
        />
        {/* 暗いオーバーレイでテキストの可読性を向上 */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* コンテンツオーバーレイ */}
        <div className="absolute inset-0 flex items-center justify-center py-4 sm:py-6 md:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-lg break-words word-break-keep-all">
              「想いは溢れるのに、<span className="text-secondary-light">書けない…？</span><br className="block sm:hidden" />
              <br className="hidden sm:block md:hidden" />
              大丈夫！話すだけで、あなたの本ができます。」
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-6xl mx-auto drop-shadow-md px-2">
              書く手間なし！<HighlightText className="text-secondary-light">428時間</HighlightText>を"生み出す"秘策、教えます。
            </p>
            <div className="scale-90 sm:scale-95 md:scale-100">
              <CallToActionButton 
                text="無料目次作成セッションに申し込む" 
                href="https://forms.gle/asaXZkD25iFwtkaG7" 
                className="shadow-xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
