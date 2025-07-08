
import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import AchievementSection1 from './components/AchievementSection1';
import WhyPublishNowSection from './components/WhyPublishNowSection';
import FounderStorySection from './components/FounderStorySection';
import AchievementSection2 from './components/AchievementSection2';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TransformationSection from './components/TransformationSection';
import FutureVisionSection from './components/FutureVisionSection';
import PricingSection from './components/PricingSection';
import BonusesSection from './components/BonusesSection';
import TestimonialsSection from './components/TestimonialsSection';
import LimitedOfferSection from './components/LimitedOfferSection';
import FaqSection from './components/FaqSection';
import CommitmentSection from './components/CommitmentSection';
import FinalCallToActionSection from './components/FinalCallToActionSection';
import Footer from './components/Footer';
import { ImageProvider } from './contexts/ImageContext';
import ImageCustomizer from './components/ImageCustomizer';

const App: React.FC = () => {
  return (
    <ImageProvider>
      <div className="flex flex-col min-h-screen bg-gray-50 text-neutral-dark">
        <main className="flex-grow">
          <HeroSection />
          <ProblemSection />
          <AchievementSection1 />
          <WhyPublishNowSection />
          <FounderStorySection />
          <AchievementSection2 />
          <WhyChooseUsSection />
          <TransformationSection />
          <FutureVisionSection />
          <PricingSection />
          <BonusesSection />
          <TestimonialsSection />
          <LimitedOfferSection />
          <FaqSection />
          <CommitmentSection />
          <FinalCallToActionSection />
        </main>
        <Footer />
        <ImageCustomizer />
      </div>
    </ImageProvider>
  );
};

export default App;
