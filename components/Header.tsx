import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black bg-opacity-80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴセクション */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/hikidashi-logo.png" 
              alt="hikidashi出版ロゴ" 
              className="h-8 w-auto drop-shadow-lg"
            />
            <span className="text-xl font-bold text-white drop-shadow-lg">hikidashi出版</span>
          </div>
          
          {/* 右側のスペース（必要に応じて追加のナビゲーションリンクなど） */}
          <div className="flex items-center space-x-4">
            {/* 将来的にナビゲーションリンクを追加する場合はここに */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 