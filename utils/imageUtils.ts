export interface AvailableImage {
  name: string;
  filename: string;
  description: string;
}

export const availableImages: Record<string, AvailableImage[]> = {
  hero: [
    { name: '001_ヒーロー画像', filename: 'hero-default.png', description: '001_ヒーローセクション用のデフォルト画像' },
  ],
  problem: [
    { name: '002_問題提起画像', filename: 'problem-default.jpg', description: '002_問題提起セクション用のデフォルト画像' },
  ],
  achievement: [
    { name: '003_実績画像', filename: 'achievement-default.jpg', description: '003_実績セクション用のデフォルト画像' },
  ],
  kindleRank: [
    { name: '003_Kindleランキング', filename: 'kindle-rank-default.jpg', description: '003_Kindleランキング用のデフォルト画像' },
  ],
  transformation: [
    { name: '008_変革イメージ', filename: 'transformation-default.jpg', description: '008_変革セクション用のデフォルト画像' },
  ],
  founderProfile: [
    { name: '005_創設者プロフィール', filename: 'founder-profile-default.jpg', description: '005_創設者プロフィール用のデフォルト画像' },
  ],
  founderSuccess: [
    { name: '005_創設者成功事例', filename: 'founder-success-default.jpg', description: '005_創設者成功事例用のデフォルト画像' },
  ],
  friendSuccess: [
    { name: '005_友人成功事例', filename: 'friend-success-default.jpg', description: '005_友人成功事例用のデフォルト画像' },
  ],
  achievementSection2: [
    { name: '006_友人成功事例', filename: 'founder-profile-default.jpg', description: '006_AchievementSection2の友人成功事例用画像' },
    { name: '006_実績1', filename: 'future2-default.jpg', description: '006_劇的な時間短縮の実績画像' },
    { name: '006_実績2', filename: 'publishnow1-default.jpg', description: '006_ポジティブな連鎖の実績画像' },
          { name: '006_実績3', filename: 'future4-default.jpg', description: '006_経済効果の実績画像' },
    { name: '006_実績4', filename: 'whychoose2-default.jpg', description: '006_プロも認める実績画像' },
  ],
  limitedOffer: [
    { name: '013_限定オファー', filename: 'limited-offer-default.jpg', description: '013_限定オファー用のデフォルト画像' },
  ],
  finalCta: [
    { name: '016_最終CTA', filename: 'final-cta-default.jpg', description: '016_最終CTA用のデフォルト画像' },
  ],
  futureVision: [
    { name: '009_未来ビジョン', filename: 'future-vision-default.jpg', description: '009_未来ビジョン用のデフォルト画像' },
    { name: '009_未来1', filename: 'future1-default.jpg', description: '009_未来ビジョン画像1' },
    { name: '009_未来2', filename: 'future2-default.jpg', description: '009_未来ビジョン画像2' },
    { name: '009_未来3', filename: 'future3-default.jpg', description: '009_未来ビジョン画像3' },
    { name: '009_未来4', filename: 'future4-default.jpg', description: '009_未来ビジョン画像4' },
    { name: '009_未来5', filename: 'future5-default.jpg', description: '009_未来ビジョン画像5' },
    { name: '009_未来6', filename: 'future6-default.jpg', description: '009_未来ビジョン画像6' },
  ],
  publishNow: [
    { name: '004_今出版1', filename: 'publishnow1-default.jpg', description: '004_今出版すべき理由画像1' },
    { name: '004_今出版2', filename: 'publishnow2-default.jpg', description: '004_今出版すべき理由画像2' },
    { name: '004_今出版3', filename: 'publishnow3-default.jpg', description: '004_今出版すべき理由画像3' },
    { name: '004_今出版4', filename: 'publishnow4-default.jpg', description: '004_今出版すべき理由画像4' },
    { name: '004_今出版5', filename: 'publishnow5-default.jpg', description: '004_今出版すべき理由画像5' },
  ],
  whyChoose: [
    { name: '007_選ばれる理由1', filename: 'whychoose1-default.jpg', description: '007_選ばれる理由画像1' },
    { name: '007_選ばれる理由2', filename: 'whychoose2-default.jpg', description: '007_選ばれる理由画像2' },
    { name: '007_選ばれる理由3', filename: 'whychoose3-default.jpg', description: '007_選ばれる理由画像3' },
    { name: '007_選ばれる理由4', filename: 'whychoose4-default.jpg', description: '007_選ばれる理由画像4' },
  ],
  plans: [
    { name: '010_料金プラン1', filename: 'plan1-default.jpg', description: '010_料金プラン1画像' },
    { name: '010_料金プラン2', filename: 'plan2-default.jpg', description: '010_料金プラン2画像' },
    { name: '010_料金プラン3', filename: 'plan3-default.jpg', description: '010_料金プラン3画像' },
  ],
  bonuses: [
    { name: '011_ボーナス1', filename: 'whychoose3-default.jpg', description: '011_ボーナスセクション用画像1' },
    { name: '011_ボーナス2', filename: 'whychoose4-default.jpg', description: '011_ボーナスセクション用画像2' },
    { name: '011_ボーナス3', filename: 'publishnow4-default.jpg', description: '011_ボーナスセクション用画像3' },
  ],
  testimonials: [
    { name: '012_お客様の声1', filename: 'publishnow2-default.jpg', description: '012_お客様の声用画像1' },
    { name: '012_お客様の声2', filename: 'publishnow5-default.jpg', description: '012_お客様の声用画像2' },
    { name: '012_お客様の声3', filename: 'future1-default.jpg', description: '012_お客様の声用画像3' },
  ],
  faq: [
    { name: '014_FAQ', filename: 'publishnow3-default.jpg', description: '014_よくある質問セクション用画像' },
  ],
  commitment: [
    { name: '015_コミットメント1', filename: 'commit1-default.jpg', description: '015_コミットメント画像1' },
    { name: '015_コミットメント2', filename: 'commit2-default.jpg', description: '015_コミットメント画像2' },
    { name: '015_コミットメント3', filename: 'commit3-default.jpg', description: '015_コミットメント画像3' },
    { name: '015_コミットメント4', filename: 'commit4-default.jpg', description: '015_コミットメント画像4' },
  ],
};

export const getImagePath = (filename: string): string => {
  return `/images/${filename}`;
};

// カテゴリ別に画像を取得
export const getImagesByCategory = (category: string): AvailableImage[] => {
  return availableImages[category] || [];
};

// すべての画像を取得
export const getAllImages = () => {
  return availableImages;
}; 