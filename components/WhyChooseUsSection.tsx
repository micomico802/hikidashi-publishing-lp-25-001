import React from 'react';
import SectionTitle from './ui/SectionTitle';
import HighlightText from './ui/HighlightText';
import { getImagePath } from '../utils/imageUtils';

interface FeatureCardProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  imageSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, imageSrc }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <div className="aspect-[16/9] bg-neutral-light">
      <img src={imageSrc} alt={title} className="w-full h-full object-contain"/>
    </div>
    <div className="p-6 md:p-8">
      <div className="flex items-center mb-4">
        <span className="text-secondary mr-3">{icon}</span>
        <h3 className="text-xl font-bold text-primary-dark">{title}</h3>
      </div>
      <div className="text-neutral-dark leading-relaxed">{description}</div>
    </div>
  </div>
);

// Example Icons (replace with actual SVGs or a library if available)
const CostIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>;
const TimeIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>;
const SnsIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm0 0v-.106c0-.414.336-.75.75-.75h4.5a.75.75 0 0 1 .75.75v.106c0 .414-.336.75-.75.75h-4.5a.75.75 0 0 1-.75-.75Z" /></svg>; // Placeholder, better icon needed
const CommunityIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.243-3.72a9.094 9.094 0 0 1-.479 3.741M18 18.72v-2.28a2.25 2.25 0 0 0-.659-1.591l-4.682-4.682a2.25 2.25 0 0 0-1.591-.659H10.5M18 18.72H5.28c-.168 0-.336.032-.5.094A9.095 9.095 0 0 0 1 18.72M5.28 18.72H18m1.372-6.076a3 3 0 1 1-4.243-4.243 3 3 0 0 1 4.243 4.243Z" /></svg>;

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      title: "圧倒的なコストパフォーマンス！",
      description: (
        <>
          より深く、より濃密なあなたの物語を、驚きの価格で。 一般的な出版サポートサービスでは、例えば40万円のご予算で約3万文字程度の書籍が目安とされています。しかし、hikidashi出版の主力プラン（ハイスペックプラン）では、それを大きく下回る<HighlightText>29万8000円</HighlightText>という価格で、その倍以上となる<HighlightText>約6万文字前後</HighlightText>の、あなたの貴重な経験や熱い想いがより深く、より豊かに表現された書籍を手にすることが可能です。 単に安いだけではありません。あなたの伝えたいことの本質を、余すところなく形にするためのボリュームを、私たちは大切にしています。
        </>
      ),
      icon: <CostIcon />,
      imageSrc: getImagePath('whychoose1-default.png')
    },
    {
      title: "あなたの手間は最小限。本当に大切な「あなたらしさ」の追求に、時間を集中できます。",
      description: (
        <>
          インタビュー形式を採用しているため、あなたは「書く」という膨大な作業に追われる必要は一切ありません。私たちがあなたの言葉を丁寧にヒアリングし、構成し、文章化していきます。あなたが最終的に行うのは、その内容が本当に「あなたらしいか」「伝えたいニュアンスと寸分の狂いもなく合致しているか」という、書籍の魂を込めるための本質的な部分のチェックと、ご自身の言葉による加筆修正のみ。 これにより、あなたは貴重な時間を、本来のビジネスや創造的な活動、大切な人との時間に充てることができるのです。
        </>
      ),
      icon: <TimeIcon />,
      imageSrc: getImagePath('whychoose2-default.png')
    },
    {
      title: "出版して終わり、ではありません！ あなたのメッセージを広げるSNS戦略まで徹底サポート（上位プラン限定）。",
      description: (
        <>
          せっかく丹精込めて作り上げたあなたの書籍。その価値を一人でも多くの人に届けるために、上位プランでは特別なサポートをご用意しています。書籍の核心的なメッセージや、読者の心を掴むエッセンスを私たちが抽出し、なんと<HighlightText>100日分のSNS投稿用コンテンツ（画像含む）</HighlightText>を戦略的に作成します。 これにより、あなたがもしSNS発信に苦手意識があったとしても、スムーズに情報発信をスタートでき、より多くの潜在的な読者やファンに、あなたの声が効率的に届くようになります。
        </>
      ),
      icon: <SnsIcon />,
      imageSrc: getImagePath('whychoose3-default.png')
    },
    {
      title: "成功者たちが集う、特別なコミュニティへの扉。あなたの未来を加速させる出会いが待っています。",
      description: (
        <>
          hikidashi出版を通じて書籍を出版された方には、私たちが運営する特別なクローズドコミュニティへの参加資格をご提供いたします。そこでは、すでにビジネスで<HighlightText>10億円、あるいは100億円といった単位で目覚ましい成果を上げている先輩経営者や、影響力のある著者の方々</HighlightText>との、他では得られない貴重な接点が生まれます。 これは、単なる人脈作りを超え、あなたのビジネスや人生観に新たなインスピレーションを与え、次のステージへと飛躍するための、計り知れないチャンスをもたらすかもしれません。
        </>
      ),
      icon: <CommunityIcon />,
      imageSrc: getImagePath('whychoose4-default.png')
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle text="【なぜ、多くの方が他の選択肢ではなく「hikidashi出版」を選ぶのか？】" />
        <p className="max-w-3xl mx-auto text-center text-lg text-neutral-dark leading-relaxed mb-16">
          書籍出版をサポートするサービスは、世の中に数多く存在します。その中で、なぜ多くの方が私たちhikidashi出版を選んでくださるのでしょうか？ そこには、他にはない明確な理由と、あなたにとっての大きなメリットがあるのです。
        </p>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon}
              imageSrc={feature.imageSrc}
            />
          ))}
        </div>
        <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-xl text-neutral-dark leading-relaxed">私たちは、ただ「本を作る」お手伝いをするだけではありません。 あなたの価値を最大限に引き出し、それを効果的に世に届け、さらにその先のあなたの成長と成功までもを見据えた、トータルなサポートをお約束します。 だからこそ、多くの方がhikidashi出版を選んでくださるのです。</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
