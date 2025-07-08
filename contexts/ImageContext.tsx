import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getImagePath } from '../utils/imageUtils';

// デフォルトのローカル画像パス（LPの表示順序に合わせて番号付け）
const defaultImages: Record<string, string> = {
  hero: 'hero-default.png',                    // 001_ヒーロー
  problem: 'problem-default.jpg',              // 002_問題提起
  achievement: 'achievement-default.png',      // 003_実績
  kindleRank: 'kindle-rank-default.jpg',      // 003_Kindleランキング
  publishNow: 'publishnow1-default.png',      // 004_今出版すべき理由
  founderProfile: 'founder-profile-default.jpg', // 005_創設者プロフィール
  founderSuccess: 'founder-success-default.jpg', // 005_創設者成功事例
  friendSuccess: 'friend-success-default.jpg',   // 005_友人成功事例
  achievementSection2: 'future3-default.jpg',        // 006_実績セクション2
  achievement2Friend: 'founder-profile-default.jpg', // 006_友人成功事例
  achievement2Item1: 'future2-default.jpg',          // 006_実績アイテム1
  achievement2Item2: 'publishnow1-default.png',      // 006_実績アイテム2
  achievement2Item3: 'future4-default.jpg',          // 006_実績アイテム3
  achievement2Item4: 'whychoose2-default.jpg',       // 006_実績アイテム4
  whyChoose: 'whychoose1-default.jpg',           // 007_選ばれる理由
  transformation: 'transformation-default.jpg',  // 008_変革
  futureVision: 'future-vision-default.jpg',    // 009_未来ビジョン
  plans: 'plan1-default.jpg',                    // 010_料金プラン
  bonuses: 'whychoose3-default.jpg',             // 011_ボーナス
  testimonials: 'publishnow2-default.png',       // 012_お客様の声
  limitedOffer: 'limited-offer-default.jpg',    // 013_限定オファー
  faq: 'publishnow3-default.png',                // 014_よくある質問
  commitment: 'commit1-default.jpg',             // 015_コミットメント
  finalCta: 'final-cta-default.jpg',            // 016_最終CTA
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
      console.log(`🎨 カスタム画像を使用: ${key} => ${customImages[key]}`);
      return customImages[key];
    }
    // デフォルト画像を使用
    const defaultFilename = defaultImages[key];
    const imagePath = defaultFilename ? getImagePath(defaultFilename) : '';
    console.log(`🖼️ デフォルト画像: ${key} => ${defaultFilename} => ${imagePath}`);
    return imagePath;
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