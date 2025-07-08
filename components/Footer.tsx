
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-neutral-light py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4 text-xl font-semibold">hikidashi出版</p>
        <nav className="mb-4">
          <ul className="flex justify-center space-x-6">
            <li><a href="#pricing" className="hover:text-secondary-light transition-colors">料金プラン</a></li>
            <li><a href="#faq" className="hover:text-secondary-light transition-colors">よくある質問</a></li>
            <li><a href="#contact" className="hover:text-secondary-light transition-colors">お問い合わせ</a></li> 
            {/* Replace #contact with actual link or remove if not applicable */}
          </ul>
        </nav>
        <p className="text-sm text-neutral-DEFAULT">
          &copy; {new Date().getFullYear()} hikidashi出版. All rights reserved.
        </p>
        {/* Potentially add links to privacy policy, terms of service if available */}
      </div>
    </footer>
  );
};

export default Footer;
