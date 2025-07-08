
import React from 'react';
import SectionTitle from './ui/SectionTitle';
import HighlightText from './ui/HighlightText';
import { useImages } from '../contexts/ImageContext';


const AchievementSection1: React.FC = () => {
  const { getImage } = useImages();
  
  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle text="【常識を覆すスピード出版！その輝かしい実績がここに】" />
        <div className="max-w-4xl mx-auto space-y-8 text-lg text-neutral-dark leading-relaxed">
          <p>「本当に、話すだけで本が完成するの？」 「文章が苦手な私でも、本当に著者になれるの？」</p>
          <p>そんなあなたの疑問や不安にお答えするため、私たちは先行モニター（約10名）の方々にご協力をいただき、サービスの有効性を検証いたしました。</p>
          <div className="bg-white p-8 rounded-xl shadow-xl my-8">
            <h3 className="text-2xl font-bold text-primary-dark mb-4 text-center">その結果…</h3>
            <p className="text-center text-xl">
              驚くべきことに、モニターの多くの方が、通常であれば半年以上かかると言われる書籍の本文作成を、
              なんと、平均してたったの<HighlightText>「1ヶ月」</HighlightText>で完了されたのです！
            </p>
            <img src={getImage('achievement')} alt="スピーディーな出版プロセス" className="my-6 rounded-lg shadow-md mx-auto"/>
            <p>
              これは、あなたが「書けない…」と悩む時間を大幅に短縮し、貴重な経験や知識を、よりスピーディーに世に届けられることを意味しています。
            </p>
          </div>
          
          <p>そして、それだけではありません！</p>
          <p>
            このサービスを通じて出版された書籍の中には、見事<HighlightText>Kindleの特定カテゴリーでランキング1位を獲得する作品も複数誕生しているのです！</HighlightText>
            この輝かしい成果は、著者の方々の素晴らしいコンテンツはもちろんのこと、私たちの出版サポートが確かな結果に繋がることを力強く証明しています。
          </p>
          <img src={getImage('kindleRank')} alt="Kindleランキング1位の証" className="my-6 rounded-lg shadow-lg mx-auto"/>
          <p>
            さらに、これらの成功事例は私たちにとっても貴重な学びとなり、「どうすればより多くの方に書籍を手に取っていただき、カテゴリーランキングで上位を目指せるのか」という実践的なノウハウを日々研究し、蓄積することができました。
            これにより、これから出版されるあなたの書籍に対しても、より強力なブランディング戦略と、読者に届けるための効果的なアプローチをご提案できる体制が整っています。
          </p>
          <div className="mt-10 p-6 bg-primary-light text-white rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-3">なぜ、このような成果が生まれるのか？</h4>
            <p>
              それは、あなたが「書く」のではなく、情熱を持って<HighlightText className="text-secondary-light">「話す」</HighlightText>ことに集中できるからです。あなたの頭の中にある素晴らしいアイデアや経験を、私たちがインタビューを通して丁寧に引き出し、プロの技術で書籍という形に磨き上げていきます。
            </p>
          </div>
          <p className="text-sm mt-4 italic">
            （もちろん、モニターの中には、溢れ出る素晴らしいアイデアをじっくりと吟味するために、あえて時間をかけて構想を練られた方や、戦略的に最適な出版タイミングを見据えて調整された方もいらっしゃいました。しかし、集中して取り組めば、1ヶ月での完成と、その先の大きな反響も十分に現実的な目標です。）
          </p>
          <p className="mt-6 font-semibold">
            この実績は、あなたが「時間がないから…」「書くのが苦手だから…」と諦めかけていた書籍出版の夢を、現実のものにするだけでなく、その影響力を最大化する大きな可能性を示しています。
          </p>
          <p className="text-center text-2xl font-bold text-secondary-dark mt-8">
            次は、あなたがこの驚きと喜びを体験する番です。
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection1;
