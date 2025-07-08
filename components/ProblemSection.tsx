import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { useImages } from '../contexts/ImageContext';

const problems = [
  "熱い想いを伝えたいのに、文章で「自分らしさ」をどう表現すればいいかがわからない",
  "伝えたいことは山ほどあるのに、文章にすると想いが薄れてしまう…と感じる",
  "書籍出版は夢だけれど、「自分にはとても書けない…」と諦めかけている",
  "「本書いたらいいのに」と薦められても、「時間も才能もないから…」と行動できずにいる",
  "影響力を持ちたいと強く願うものの、具体的な「次の一手」が見えない",
  "想いを的確に文章で表現する難しさに悩んでいる"
];

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-6 h-6 text-secondary ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const ProblemSection: React.FC = () => {
  const { getImage } = useImages();
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle text="【このようなことでお悩みではありませんか？】" />
        <div className="max-w-3xl mx-auto space-y-6">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start p-4 bg-neutral-light rounded-lg shadow">
              <CheckIcon className="mr-3 mt-1 flex-shrink-0" />
              <p className="text-neutral-dark text-lg">{problem}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
            <img src={getImage('problem')} alt="悩みを抱える人のイメージ" className="mx-auto rounded-lg shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
