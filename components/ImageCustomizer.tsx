import React, { useState } from 'react';
import { useImages } from '../contexts/ImageContext';
import { availableImages, getImagePath, AvailableImage } from '../utils/imageUtils';

const ImageCustomizer: React.FC = () => {
  const { getImage, updateImage, uploadCustomImage } = useImages();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('hero');

  // LPページの表示順序に合わせて番号付けされたカテゴリー
  const imageCategories = [
    { key: 'hero', label: '001_ヒーロー画像' },
    { key: 'problem', label: '002_問題セクション' },
    { key: 'achievement', label: '003_実績セクション' },
    { key: 'kindleRank', label: '003_Kindleランキング' },
    { key: 'publishNow', label: '004_今出版すべき理由' },
    { key: 'founderProfile', label: '005_創設者プロフィール' },
    { key: 'founderSuccess', label: '005_創設者成功事例' },
    { key: 'friendSuccess', label: '005_友人成功事例' },
    { key: 'whyChoose', label: '007_選ばれる理由' },
    { key: 'transformation', label: '008_変革セクション' },
    { key: 'futureVision', label: '009_未来ビジョン' },
    { key: 'plans', label: '010_料金プラン' },
    { key: 'limitedOffer', label: '013_限定オファー' },
    { key: 'commitment', label: '015_コミットメント' },
    { key: 'finalCta', label: '016_最終CTA' },
  ];

  const handleImageSelect = (categoryKey: string, image: AvailableImage) => {
    updateImage(categoryKey, image.filename);
  };

  const handleFileUpload = async (categoryKey: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        await uploadCustomImage(categoryKey, file);
      } catch (error) {
        alert('ファイルのアップロードに失敗しました');
      }
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        画像設定
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">画像設定</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* カテゴリー選択 */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-3">カテゴリー（LP表示順）</h3>
            <div className="space-y-2">
              {imageCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors text-sm ${
                    selectedCategory === category.key
                      ? 'bg-blue-100 text-blue-700 border border-blue-300'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* 画像選択 */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-3">
              {imageCategories.find(cat => cat.key === selectedCategory)?.label}の画像
            </h3>
            
            {/* 現在の画像 */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">現在の画像:</h4>
              <img
                src={getImage(selectedCategory)}
                alt="現在の画像"
                className="w-32 h-24 object-cover rounded border"
              />
            </div>

            {/* プリセット画像 */}
            {availableImages[selectedCategory] && (
              <div className="mb-6">
                <h4 className="font-medium mb-3">プリセット画像:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableImages[selectedCategory].map((image, index) => (
                    <div key={index} className="border rounded overflow-hidden">
                      <img
                        src={getImagePath(image.filename)}
                        alt={image.description}
                        className="w-full h-24 object-cover cursor-pointer hover:opacity-75 transition-opacity"
                        onClick={() => handleImageSelect(selectedCategory, image)}
                      />
                      <div className="p-2">
                        <p className="text-sm font-medium">{image.name}</p>
                        <p className="text-xs text-gray-600">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* カスタム画像アップロード */}
            <div>
              <h4 className="font-medium mb-2">カスタム画像をアップロード:</h4>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(selectedCategory, e)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCustomizer; 