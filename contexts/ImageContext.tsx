import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getImagePath } from '../utils/imageUtils';

// デフォルトのローカル画像パス（LPの表示順序に合わせて番号付け）
const defaultImages: Record<string, string> = {
  hero: 'hero-default.png',                    // 001_ヒーロー
  problem: 'problem-default.png',              // 002_問題提起
  achievement: 'achievement-default.png',      // 003_実績
  kindleRank: 'kindle-rank-default.png',      // 003_Kindleランキング
  publishNow: 'publishnow1-default.png',      // 004_今出版すべき理由
  founderProfile: 'founder-profile-default.jpg', // 005_創設者プロフィール
  founderSuccess: 'founder-success-default.png', // 005_創設者成功事例
  friendSuccess: 'friend-success-default.png',   // 005_友人成功事例
  achievementSection2: 'future3-default.png',        // 006_実績セクション2
  achievement2Friend: 'friend-success-default.png', // 006_友人成功事例
  achievement2Item1: 'achievement1-default.png',       // 006_実績アイテム1
  achievement2Item2: 'achievement2-default.png',       // 006_実績アイテム2
  achievement2Item3: 'achievement3-default.png',       // 006_実績アイテム3
  achievement2Item4: 'achievement4-default.png',       // 006_実績アイテム4
  whyChoose: 'whychoose1-default.png',           // 007_選ばれる理由
  transformation: 'transformation-default.png',  // 008_変革
  futureVision: 'future-vision-default.png',    // 009_未来ビジョン
  plans: 'plan1-default.png',                    // 010_料金プラン
  bonuses: 'bonus1-default.png',                 // 011_ボーナス
  testimonials: 'testimonial1-default.png',      // 012_お客様の声
  limitedOffer: 'limited-offer-default.png',    // 013_限定オファー
  faq: 'publishnow3-default.png',                // 014_よくある質問
  commitment: 'commit1-default.png',             // 015_コミットメント
  finalCta: 'final-cta-default.png',            // 016_最終CTA
};

interface ImageContextType {
  getImage: (key: string) => string;
  updateImage: (key: string, filename: string) => void;
  uploadCustomImage: (key: string, file: File) => Promise<void>;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customImages, setCustomImages] = useState<Record<string, string>>({});

  const getImage = (key: string): string => {
    // カスタム画像が設定されている場合はそれを使用
    if (customImages[key]) {
      return customImages[key];
    }
    // デフォルト画像を使用
    const defaultFilename = defaultImages[key];
    return defaultFilename ? getImagePath(defaultFilename) : '';
  };

  const updateImage = (key: string, filename: string) => {
    setCustomImages(prev => ({
      ...prev,
      [key]: getImagePath(filename)
    }));
  };

  const uploadCustomImage = async (key: string, file: File): Promise<void> => {
    try {
      const url = URL.createObjectURL(file);
      setCustomImages(prev => ({
        ...prev,
        [key]: url
      }));
    } catch (error) {
      console.error('ファイルのアップロードに失敗しました:', error);
      throw error;
    }
  };

  return (
    <ImageContext.Provider value={{ getImage, updateImage, uploadCustomImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = (): ImageContextType => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  return context;
}; 