
import React from 'react';
import SectionTitle from './ui/SectionTitle';
import HighlightText from './ui/HighlightText';
import CallToActionButton from './ui/CallToActionButton';
import { getImagePath } from '../utils/imageUtils';

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  imageSrc: string;
  href?: string;
}

const PlanCard: React.FC<PlanProps> = ({ name, price, description, features, isFeatured = false, imageSrc, href }) => (
  <div className={`rounded-xl p-8 flex flex-col relative min-h-[600px] ${isFeatured ? 'bg-primary-dark text-white shadow-2xl border-4 border-secondary' : 'bg-white text-neutral-dark shadow-xl'}`}>
    {isFeatured && (
      <div className="absolute -top-4 left-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
        おすすめ
      </div>
    )}
    <div className="aspect-[16/9] bg-neutral-light rounded-md mb-6">
      <img src={imageSrc} alt={name} className="w-full h-full object-contain" />
    </div>
    <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center break-words ${isFeatured ? 'text-secondary-light' : 'text-primary-dark'}`}>{name}</h3>
    <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-4 break-words ${isFeatured ? 'text-white' : 'text-neutral-dark'}`}>{price}</p>
    <p className={`text-sm text-center mb-6 ${isFeatured ? 'text-gray-300' : 'text-neutral-DEFAULT'}`}>{description}</p>
    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${isFeatured ? 'text-secondary-light' : 'text-secondary'}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span className="text-sm sm:text-base">{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-auto">
      <CallToActionButton 
          text="プランを選択" 
          href={href}
          className={`${isFeatured ? 'bg-secondary hover:bg-secondary-dark' : 'bg-primary hover:bg-primary-dark text-white'} !w-full h-12 flex items-center justify-center mx-0`} />
    </div>
  </div>
);

const PricingSection: React.FC = () => {
  const plans: PlanProps[] = [
    { 
      name: "スピードプラン", 
      price: "12万8000円", 
      description: "手軽に始めたい方向けのプラン", 
      features: ["基本的なインタビュー", "AIによる原稿作成補助", "簡易表紙デザイン"],
      imageSrc: getImagePath('plan1-default.png'),
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeY8WvQ-Y1nA7B-3-UuopqxZHH4Il2HoYJcCgdv-PkmtFGzHg/viewform?usp=pp_url&entry.588393791=%E3%82%B9%E3%83%94%E3%83%BC%E3%83%89%E3%83%97%E3%83%A9%E3%83%B3"
    },
    { 
      name: "ハイスペックプラン", 
      price: "34万8000円", 
      description: "私たちの基準となるプランです", 
      features: ["詳細インタビュー", "プロライターによる編集", "高品質表紙デザイン", "約6万文字のボリューム"],
      isFeatured: true,
      imageSrc: getImagePath('plan2-default.png'),
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeY8WvQ-Y1nA7B-3-UuopqxZHH4Il2HoYJcCgdv-PkmtFGzHg/viewform?usp=pp_url&entry.588393791=%E3%83%8F%E3%82%A4%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF%E3%83%97%E3%83%A9%E3%83%B3"
    },
    { 
      name: "ハイスペSNSプラン", 
      price: "54万8000円", 
      description: "出版後のSNS展開までサポート", 
      features: ["ハイスペックプラン全内容", "100日分SNS投稿コンテンツ作成", "コミュニティ優先参加権"],
      imageSrc: getImagePath('plan3-default.png'),
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeY8WvQ-Y1nA7B-3-UuopqxZHH4Il2HoYJcCgdv-PkmtFGzHg/viewform?usp=pp_url&entry.588393791=%E3%83%8F%E3%82%A4%E3%82%B9%E3%83%9ASNS%E3%83%97%E3%83%A9%E3%83%B3"
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          【私たちの価格に込めた想いと、<br />
          あなたが手にする"価格以上の価値"】
        </SectionTitle>
        <p className="max-w-6xl mx-auto text-center text-lg text-neutral-dark leading-relaxed mb-12">
          まず、hikidashi出版の各プランの価格をご覧ください。この価格をご覧になって、あなたはどのように感じられたでしょうか？ ここでは、私たちがこの価格設定に至った背景と、そこに込めた熱い想い、そして何よりもあなたがこの投資によって手にするであろう、計り知れない価値について、正直にお話しさせてください。
        </p>
        
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {plans.map(plan => <PlanCard key={plan.name} {...plan} />)}
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 text-lg text-neutral-dark leading-relaxed">
          <div className="bg-neutral-light p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">なぜ、この価格なのか？私たちの「覚悟」と「こだわり」</h3>
            <p>私たちの基準となる「ハイスペックプラン（34万8000円）」 の内訳を包み隠さずお伝えすると、最新AIシステムを最適な状態で稼働させるための費用、プロのインタビュアーやあなたの書籍を彩るデザイナーへの適正な報酬、そして出版後もあなたをサポートするコミュニティ運営や各種サポートのための人件費が、その大部分を占めています。</p>
            <p className="mt-4">正直にお伝えすると、この価格で私たちが得ている利益は、決して大きなものではありません。</p>
            <p className="mt-4">それでも、私たちがこの価格帯、そしてこのサービス内容にこだわったのには、明確な理由があります。 それは、「金額的な問題が、あなたの素晴らしい経験や知識を世に出すためのハードルになってほしくない」 という強い願い。そして、「他社の同様のサービスと比較しても、明らかに手に取りやすく、かつ最高のクオリティとサポートを提供したい」 という、私たちの譲れない「こだわり」があったからです。</p>
            <p className="mt-4">もちろん、この価格を「それでも安くはない」と感じる方がいらっしゃるかもしれません。 しかし、私たちが目指しているのは、単に「安価なだけのサービス」では断じてありません。あなたの貴重な経験や熱い想いを、一冊の「売れる本」「読まれる本」として、しっかりと読者に届くクオリティで形にするためには、どうしても必要なコストというものが存在します。 この価格は、その品質を維持し、あなたにご満足いただくための、いわば私たちの<HighlightText>「覚悟」</HighlightText>の表れだとご理解いただければ幸いです。</p>
          </div>

          <div className="bg-primary-light text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-secondary-light mb-4">あなたが手にするのは、「書籍」だけではありません。それは「未来を変える力」です。</h3>
            <p>最終的に、このサービスがあなたにとって「高い」か「安い」かを判断するのは、あなたが支払った金額に対して、どれだけの価値を感じていただけるか、という一点に尽きるでしょう。 そして私たちは、その点において、絶対的な自信を持っています。</p>
            <p className="mt-4">考えてみてください。 あなたが一冊の書籍を出版することで、何が起こるでしょうか？</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>あなたのブランド力は飛躍的に向上し、社会的な信頼度は格段に増します。</li>
              <li>それは、あなたのプロフィールを輝かせる、<HighlightText className="text-secondary-DEFAULT">揺るぎない「実績」</HighlightText>となります。</li>
              <li>メディアからの注目を集めたり、思いがけない場所から講演依頼が舞い込む可能性も格段に高まります。</li>
              <li>そして何よりも、これら全てが複合的に作用し、あなたのビジネスの売上や影響力を、これまでとは比較にならないレベルへ押し上げることにつながるのです。</li>
            </ul>
            <p className="mt-4">これらは、決して一部の特別な人にだけ起こる奇跡ではありません。書籍を出版した多くの方が、ごく当たり前のこととして体験されている、再現性のある変化なのです。</p>
          </div>
          
          <p className="font-semibold">ただし、正直にお伝えしなければならないこともあります。</p>
          <p>もしあなたが、まだご自身の商品やサービスを明確にお持ちでなかったり、誰かに対して具体的な価値を提供できるものがまだ見つかっていないという段階であれば、このサービスは高額に感じられるかもしれません。 書籍は万能の魔法ではなく、あなたの持つ「何か」を増幅させる強力なブースターだからです。</p>
          <p>しかし、大変ありがたいことに、これまでhikidashi出版のサービスをご利用くださった起業家や専門家の方々からは、 「支払った費用以上の価値を、すでに取り戻しています！」 「書籍がきっかけで、人生のステージが明らかに変わりました！」 といった、喜びと感謝の声を多数いただいています。</p>
          <p>結局のところ、このサービスを最大限に活かせるかどうかは、あなたが既にお持ちの素晴らしい経験や情熱、そしてこれから出版するあなたの本を、どのようにご自身の活動やビジネスに戦略的に結びつけていくか。 その一点にかかっているのです。 そして、私たちはその戦略立案から、あなたと二人三脚で、全力でサポートさせていただきます。</p>
          <p className="text-center text-xl font-bold text-secondary-dark mt-8">
            これは、単なる「出費」ではありません。 あなたの未来を、そしてあなたが影響を与える人々の未来をも大きく変える可能性を秘めた、<HighlightText>最高の「自己投資」</HighlightText>だと、私たちは確信しています。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
