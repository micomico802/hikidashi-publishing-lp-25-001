import React from 'react';
import SectionTitle from './ui/SectionTitle';
import HighlightText from './ui/HighlightText';
import { useImages } from '../contexts/ImageContext';
import { getImagePath } from '../utils/imageUtils';

interface ReasonCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ title, description, icon, imageSrc }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
    <img src={imageSrc} alt={title} className="w-full md:w-1/3 h-48 md:h-auto object-cover"/>
    <div className="p-6 md:p-8 flex-1">
      <div className="flex items-center mb-3">
        {icon && <span className="mr-3 text-secondary">{icon}</span>}
        <h3 className="text-xl font-bold text-primary-dark">{title}</h3>
      </div>
      <p className="text-neutral-dark leading-relaxed">{description}</p>
    </div>
  </div>
);

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);


const WhyPublishNowSection: React.FC = () => {
  const { getImage } = useImages();

  // ImageContextにpublishNowの個別画像キーを追加する必要があります
  const reasons = [
    {
      title: "出版のハードルは、驚くほど低くなりました。",
      description: "かつて書籍出版は、一部の選ばれた専門家や有名人の特権のようなものでした。しかし時代は変わり、特に電子書籍の登場によって、あなたの熱い想いを世界に発信するハードルは劇的に下がったのです。",
      imageSrc: getImagePath('publishnow1-default.png')  // 一時的に直接参照
    },
    {
      title: "あなたの価値が正当に評価される「高印税率」という現実。",
      description: "従来の商業出版では印税が5～10％程度であるのに対し、Kindle電子書籍では最大で35～70％もの印税率が可能です。 これは、あなたの時間と労力、そして何よりその貴重な経験が生み出す価値が、よりダイレクトに、そして正当にあなたに還元されることを意味します。最大で14倍もの差があるこのチャンスを、見逃す手はありません。",
      imageSrc: getImagePath('publishnow2-default.png')  // 一時的に直接参照
    },
    {
      title: "成長し続ける「電子書籍市場」という追い風。",
      description: "スマートフォンやタブレットで手軽に書籍を読むスタイルはますます広がり、電子書籍の市場は着実に拡大を続けています。あなたのメッセージを求める潜在的な読者は、今この瞬間も増え続けているのです。",
      imageSrc: getImagePath('publishnow3-default.png')  // 一時的に直接参照
    },
    {
      title: "ライバルと一線を画す「著者」という圧倒的なブランディング。",
      description: "情報が民主化され、誰もが発信者になれる現代だからこそ、「著者」という肩書きは、あなたの専門性や信頼性を際立たせる強力な武器となります。あなたの経験や知識を体系的にまとめた一冊は、競合との明確な差別化を生み出し、市場におけるあなたの優位性を揺るぎないものにするでしょう。もはや、これは「あったら良いな」ではなく「必須レベル」の戦略と言えるかもしれません。",
      imageSrc: getImagePath('publishnow4-default.jpg')
    },
    {
      title: "成功の鍵は「市場での優位性」。そして、それは早い者勝ちの側面も。",
      description: "残念ながら、どんなに素晴らしいアイデアや経験も、もし他の誰かが先にそれを魅力的な形で世に出してしまえば、あなたの声が届く範囲は限定されてしまう可能性があります。 市場であなたの存在感を確固たるものにするためにも、「今、行動する」ことが極めて重要なのです。",
      imageSrc: getImagePath('publishnow5-default.jpg')
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle text="【あなたの「声」を、なぜ今こそカタチにすべきなのか？】" />
        <div className="max-w-4xl mx-auto text-lg text-neutral-dark leading-relaxed space-y-6 mb-12">
          <p>私たちは、これまで本当に多くの素晴らしい方々に出会い、その輝かしい経験や深い洞察に触れてきました。 あなたのように、他の誰かの人生を豊かにするような、唯一無二の物語や知識、そして熱い想をお持ちの方々です。</p>
          <p>しかし同時に、その貴重な「声」の多くが、日々の忙しさの中で十分に語られることなく、あるいは「私なんかが…」という謙遜の中で、まるでダイヤモンドの原石のように埋もれてしまっている現実も目の当たりにしてきました。</p>
          <p>私たちは、それがたまらなく<HighlightText>「もったいない」</HighlightText>と感じたのです。 「この方のユニークな価値観や経験がもっと世に広まれば、どれだけ多くの人が勇気づけられ、救われ、そして幸せになれるだろうか…」 そんな強い想いが、この「hikidashi出版」を立ち上げる原動力となりました。あなたの内なる「一部」には、誰かの「全て」を変えるほどの力が秘められていると、私たちは信じています。</p>
          <p className="font-semibold text-xl text-primary-dark">そして、なぜ「今」なのでしょうか？ それは、かつてないほどのチャンスが、あなたの目の前に広がっているからです。</p>
        </div>
        
        <div className="space-y-10">
          {reasons.map((reason, index) => (
            <ReasonCard 
              key={index} 
              title={reason.title} 
              description={reason.description} 
              icon={<CheckCircleIcon className="text-secondary" />}
              imageSrc={reason.imageSrc}
            />
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-xl font-semibold text-primary-dark leading-relaxed">
            だからこそ、私たちはあなたに心から伝えたい。
          </p>
          <p className="text-2xl md:text-3xl font-bold text-secondary-dark my-4">
            あなたのその素晴らしい経験と、胸に秘めた熱い想いを、今こそ「本」というカタチにして、世界へ解き放ちませんか？
          </p>
          <p className="text-xl text-neutral-dark">
            眠らせておくには、あまりにももったいないのですから。
          </p>
          <img src={getImage('futureVision')} alt="世界へ発信するイメージ" className="mt-8 mx-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default WhyPublishNowSection;
