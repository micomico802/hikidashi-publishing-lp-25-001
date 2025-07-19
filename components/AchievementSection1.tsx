
import React from 'react';
import SectionTitle from './ui/SectionTitle';
import HighlightText from './ui/HighlightText';
import { useImages } from '../contexts/ImageContext';


const AchievementSection1: React.FC = () => {
  const { getImage } = useImages();
  
  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>【常識を覆すスピード出版！その輝かしい実績がここに】</SectionTitle>
        <div className="max-w-6xl mx-auto space-y-8 text-lg text-neutral-dark leading-relaxed">
          <p>「本当に、話すだけで本が完成するの？」 「文章が苦手な私でも、本当に著者になれるの？」</p>
          <p>そんなあなたの疑問や不安にお答えするため、私たちは先行モニター（約10名）の方々にご協力をいただき、サービスの有効性を検証いたしました。</p>
          <div className="bg-white p-8 rounded-xl shadow-xl my-8">
            <h3 className="text-2xl font-bold text-primary-dark mb-4 text-center">その結果…</h3>
            <p className="text-center text-xl">
              驚くべきことに、モニターの多くの方が、通常であれば半年以上かかると言われる書籍の本文作成を、
              なんと、平均してたったの<HighlightText>「1ヶ月」</HighlightText>で完了されたのです！
            </p>
            <div className="max-w-6xl mx-auto">
                <img src={getImage('achievement')} alt="スピーディーな出版プロセス" className="my-6 rounded-lg shadow-md mx-auto max-w-full h-auto"/>
            </div>
            <p>
              これは、あなたが「書けない…」と悩む時間を大幅に短縮し、貴重な経験や知識を、よりスピーディーに世に届けられることを意味しています。
            </p>
          </div>
          
          <p>そして、それだけではありません！</p>
          
          <p className="mt-6 font-semibold">
            （もちろん、モニターの中には、溢れ出る素晴らしいアイデアをじっくりと吟味するために、あえて時間をかけて構想を練られた方や、戦略的に最適な出版タイミングを見据えて調整された方もいらっしゃいました。しかし、集中して取り組めば、1ヶ月での完成と、その先の大きな反響も十分に現実的な目標です。）
          </p>
          
          <div className="bg-secondary-light text-white p-8 rounded-xl shadow-xl my-8">
            <h4 className="text-2xl font-semibold mb-3">さらに、驚きの実績が…！</h4>
            <p className="text-xl">
              実際に当サービスを利用いただいたクライアント様の書籍が、
              なんと<HighlightText>「Kindleランキング1位」</HighlightText>を獲得いたしました！
            </p>
            <div className="max-w-6xl mx-auto">
                <img src={getImage('kindleRank')} alt="Kindleランキング1位の証" className="my-6 rounded-lg shadow-lg mx-auto max-w-full h-auto"/>
            </div>
            <p>
              この実績は、あなたが「時間がないから…」「書くのが苦手だから…」と諦めかけていた書籍出版の夢を、現実のものにするだけでなく、その影響力を最大化する大きな可能性を示しています。
            </p>
          </div>
          
          <h4 className="text-2xl font-semibold mb-3">なぜ、このような成果が生まれるのか？</h4>
          
          <p>
            その理由は、私たちのオリジナルメソッド<HighlightText>「インタビュー式書籍制作」</HighlightText>にあります。 これは、あなたの知識や経験を、じっくりと丁寧にお聞きし、それを文字にして構成していく手法です。 話すことで頭の中がクリアになり、論理的な構成が自然と生まれ、そして何より「書く」という負担から完全に解放されるからこそ、多くの方がこれほどまでに短期間で、そして質の高い書籍を完成させることができるのです。
          </p>
          
          <p className="text-center text-xl sm:text-2xl font-bold text-secondary-dark mt-8 break-words word-break-keep-all">
            次は、あなたがこの「奇跡」を体験する番です。
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection1;
