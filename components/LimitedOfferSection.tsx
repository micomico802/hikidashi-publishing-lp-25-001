import React from 'react';
import CallToActionButton from './ui/CallToActionButton';
import HighlightText from './ui/HighlightText';
import { useImages } from '../contexts/ImageContext';

const LimitedOfferSection: React.FC = () => {
  const { getImage } = useImages();
  
  return (
    <section className="py-16 md:py-24 bg-secondary-light text-neutral-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            最高のクオリティでお届けしたいから。
          </h2>
          <p className="text-2xl md:text-3xl font-semibold mb-4">
            hikidashi出版の各プラン、今月の新規お申し込みは
            <HighlightText className="text-5xl block my-2">【残り8枠】</HighlightText>
            です！
          </p>
          <img src={getImage('limitedOffer')} alt="限定オファーイメージ" className="my-8 mx-auto rounded-lg shadow-lg"/>
          <p className="text-xl md:text-2xl font-semibold mt-10 mb-4">
            大好評！あなたの本の"設計図"が見える'無料目次作成セッション'。
          </p>
          <p className="text-2xl md:text-3xl font-semibold mb-8">
            代表・佐藤が直接担当するため、今週の予約枠は
            <HighlightText className="text-5xl block my-2">【残り3枠】</HighlightText>
            です。
          </p>
          <CallToActionButton text="今すぐ無料セッションに申し込む" href="https://forms.gle/asaXZkD25iFwtkaG7" className="text-base sm:text-lg lg:text-xl px-6 sm:px-10 py-3 sm:py-4 max-w-xs sm:max-w-none mx-auto" />
          <p className="mt-6 text-neutral-DEFAULT">まずはお気軽にご相談ください！</p>
        </div>
      </div>
    </section>
  );
};

export default LimitedOfferSection;
