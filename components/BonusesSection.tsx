
import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { getImagePath } from '../utils/imageUtils';

interface BonusItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  badge?: string;
}

const BonusCard: React.FC<BonusItemProps> = ({ title, description, icon, imageSrc, badge }) => (
  <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
    <div className="relative aspect-[16/9] bg-neutral-light">
      <img src={imageSrc} alt={title} className="w-full h-full object-contain"/>
      {badge && <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">{badge}</span>}
    </div>
    <div className="p-6 md:p-8 flex-grow flex flex-col">
      <div className="flex items-start mb-4">
        <span className="text-primary mr-4 mt-1 flex-shrink-0">{icon}</span>
        <div>
          <h3 className="text-xl font-bold text-primary-dark break-words word-break-keep-all">{title}</h3>
        </div>
      </div>
      <p className="text-neutral-dark leading-relaxed flex-grow">{description}</p>
    </div>
  </div>
);

// Placeholder Icons
const IdeaIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);
const ProfileIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>;
const FlyerIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>;
const ResortIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 5h12l-1.5 9h-9L6 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 5c0-1.5 1-2 2-2h8c1 0 2 .5 2 2" />
    <line x1="12" y1="14" x2="12" y2="20" strokeLinecap="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 20h8" />
    <circle cx="9" cy="8" r="0.5" />
    <circle cx="15" cy="10" r="0.5" />
  </svg>
);


const BonusesSection: React.FC = () => {
  const bonuses = [
    {
      title: "【無料】あなたの\"書きたい\"がカタチになる！「書籍イメージ具体化＆魔法の目次作成セッション」",
      description: "まず、お申し込みいただく前に、あなたがどんな本を作りたいのか、その胸に秘めた熱い想いをじっくりとお聞かせください。その内容を元に、私たちのプロの視点から、あなたの書籍の骨子となる「目次案」を無料で作成します。 このセッションを体験するだけで、ぼんやりとしていた書籍の全体像が驚くほどクリアになるだけでなく、あなた自身の考えや経験が深く整理され、新たな気づきが生まれるのを実感できるはずです。",
      icon: <IdeaIcon />,
      imageSrc: getImagePath('bonus1-default.png'),
      badge: "特典１"
    },
    {
      title: "AIがあなたの隠れた魅力を丸裸に！？「パーソナルAIプロファイリングデータ」特別進呈！",
      description: "私たちの最新AI技術が、インタビュー中のあなたの言葉遣いや話し方の特徴、さらにはご自身でも気づいていないかもしれない潜在的な強みやユニークな魅力を徹底分析。その興味深い結果を、あなただけの「AIプロファイリングデータ」としてフィードバックいたします。 これからの自己ブランディングや情報発信に、きっと役立つはずです。",
      icon: <ProfileIcon />,
      imageSrc: getImagePath('bonus2-default.png'),
      badge: "特典２"
    },
    {
      title: "書籍の価値を無限大に！あなたの講座ビジネスを加速させる「オリジナル講座チラシ」をプレゼント！",
      description: "完成したあなたの書籍は、まさに知識とノウハウの宝庫。その貴重なコンテンツを元に、あなたが将来的に講座やセミナーを開催される際に効果を発揮する、「講座用オリジナルチラシ」をプレゼントいたします。 あなたのビジネス展開を後押しさせてください。",
      icon: <FlyerIcon />,
      imageSrc: getImagePath('bonus3-default.png'),
      badge: "特典３"
    },
    {
      title: "【特別なあなたへ贈る、極上のご褒美】会員制リゾートクラブ「エクシブ」ペアご招待券！",
      description: "特定のコミュニティプランにご参加いただいた方には、さらにワンランク上の新たなステージへと踏み出すきっかけになるよう、 私たちからのささやかな感謝の気持ちを込めて、国内有数の会員制リゾートクラブ『エクシブ』のペアご招待券をプレゼントいたします。 最高のリフレッシュと、次なる飛躍への活力を養ってください。",
      icon: <ResortIcon />,
      imageSrc: getImagePath('bonus4-default.png'),
      badge: "特典４"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          【まだあります！あなたの成功を加速させる、hikidashi出版だけの"常識破り"の豪華特典！】
        </SectionTitle>
        <p className="max-w-6xl mx-auto text-center text-lg text-neutral-dark leading-relaxed mb-12">
          hikidashi出版は、あなたの貴重な経験と思いを一冊の本にするお手伝いをするだけでは終わりません。 あなたのその本が、そしてあなた自身が、出版後さらに大きく羽ばたき、輝き続けることを心から願っています。 そこで、私たちだからこそできる、他ではまずありえない、特別な4つの特典をご用意いたしました！
        </p>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {bonuses.map((bonus, index) => (
              <BonusCard 
                key={index} 
                title={bonus.title} 
                description={bonus.description} 
                icon={bonus.icon}
                imageSrc={bonus.imageSrc}
                badge={bonus.badge}
              />
            ))}
          </div>
        </div>
        <div className="mt-16 text-center max-w-6xl mx-auto">
            <p className="text-lg text-neutral-dark leading-relaxed">正直にお伝えします。これだけの充実した特典をご用意できるのは、あなたの成功を本気で、心の底から願っている、私たちhikidashi出版だからこそ。 おそらく、これらの手厚いサポートは、通常の出版会社ではまず考えられないレベルだと自負しています。</p>
            <p className="mt-4 text-xl font-semibold text-primary-dark">私たちは、あなたの一生の財産となる書籍作りと、その先の輝かしい未来を、どこまでも全力で応援し続けます。</p>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
