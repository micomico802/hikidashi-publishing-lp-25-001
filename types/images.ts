export interface ImageConfig {
  heroImage: string;
  problemSection: string;
  achievement1: string;
  kindleRank: string;
  transformation: string;
  founderProfile: string;
  founderSuccess: string;
  friendSuccess: string;
  limitedOffer: string;
  finalCta: string;
  futureVision: string;
}

export interface ImageContextType {
  images: ImageConfig;
  updateImage: (key: keyof ImageConfig, url: string) => void;
  resetToDefaults: () => void;
} 