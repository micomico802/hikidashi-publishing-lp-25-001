
import React from 'react';
import SectionTitle from './ui/SectionTitle';
import HighlightText from './ui/HighlightText';
import { useImages } from '../contexts/ImageContext';

interface AchievementItemProps {
  title: string;
  description: string;
  imageSrc: string;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ title, description, imageSrc }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="aspect-[16/9] bg-neutral-light rounded-md mb-4">
      <img src={imageSrc} alt={title} className="w-full h-full object-contain"/>
    </div>
    <h3 className="text-xl font-semibold text-primary-dark mb-2 break-words word-break-keep-all">{title}</h3>
    <p className="text-neutral-dark leading-relaxed">{description}</p>
  </div>
);

const AchievementSection2: React.FC = () => {
  const { getImage } = useImages();
  
  const achievements = [
    {
      title: "劇的な時間短縮、そしてその先の価値",
      description: "書籍が完成するまでの時間は、従来の常識を覆すほど短縮されました。 あなたが本来費やすはずだった膨大な執筆時間を、他の重要なビジネス活動や、ご自身のさらなる成長のために使うことができるのです。",
      imageSrc: getImage('achievement2Item1')
    },
    {
      title: "出版プロセス中に起こる、予想外のポジティブな連鎖",
      description: "驚くべきことに、多くの方が書籍の出版が決まったその瞬間から、あるいは制作を進めているその最中にも、素晴らしい変化を体験されています。「大手企業との新しい仕事が決定した！」「今まで繋がれなかった層からの案件が舞い込んできた！」「自分の過去や想いを言葉にする中で、バラバラだった点と点が繋がり、確固たる自信が生まれた！」など、ビジネス面だけでなく、ご自身の内面にも劇的な変化が起きているのです。",
      imageSrc: getImage('achievement2Item2')
    },
    {
      title: "出版が生み出す、具体的な経済効果と影響力",
      description: "さらに、出版後には「半年も経たないうちに、自分の給与（収入）が25％もアップした！」という方や、印税収入に加えて「書籍が強力な名刺代わりとなり、新しい仕事の依頼が絶え間なく舞い込んでくるようになった」という方が続出しています。私たちが改めて「書籍の持つ計り知れない力」を目の当たりにした瞬間であり、これは決して印税収入だけで測れるものではありません。",
      imageSrc: getImage('achievement2Item3')
    },
    {
      title: "プロも認める、革新的な出版体験",
      description: "そして何よりも心強く、私たちの自信となっているのは、すでに商業出版を経験されたプロの著者の方々からも、「hikidashi出版のサービスは、従来の商業出版のプロセスと比較しても、著者にとって非常に効率的でメリットが大きい」と、高い評価をいただいていることです。",
      imageSrc: getImage('achievement2Item4')
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          【理論だけじゃない！hikidashi出版がもたらした、輝かしい実績の数々】
        </SectionTitle>
        <div className="max-w-6xl mx-auto text-lg text-neutral-dark leading-relaxed space-y-6 mb-12">
          <p>私たちは、ただ「本が作れます」と言うだけではありません。hikidashi出版のサービスは、すでに具体的な、そして驚くべき成果を生み出し始めています。</p>
          <div className="bg-primary-light text-white p-8 rounded-xl shadow-xl my-8">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">すべては、一人の友人の挑戦から始まりました…</h3>
            <p className="text-lg leading-relaxed">
              実は、私たちが書籍出版サービスを本格的に構築するきっかけとなったのは、代表の佐藤の友人のひとりの成功体験でした。彼は、私たちのサービスの前身となるシステムを活用して、お試しで書籍を制作・出版。 見事、印税収入だけでも、毎月数万円という継続収入の獲得に成功したのです。
            </p>
            <div className="max-w-6xl mx-auto mt-6">
                <img src={getImage('friendSuccess')} alt="友人の成功事例" className="rounded-lg shadow-lg mx-auto max-w-full h-auto"/>
            </div>
            <p className="text-lg leading-relaxed mt-4">
              この成功事例は、その規模の大小に関わらず、私たちにとって非常に大きな意味を持ちました。なぜなら、「技術」と「人の深い洞察」を組み合わせることで、従来の執筆プロセスの常識を覆し、より多くの方が書籍出版という扉を開けることが可能になることを、実際に証明してくれたからです。
            </p>
          </div>
          <p className="text-xl font-semibold text-primary-dark">hikidashi出版がもたらすのは、「出版」という結果だけではありません。</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {achievements.map((item, index) => (
              <AchievementItem key={index} title={item.title} description={item.description} imageSrc={item.imageSrc} />
            ))}
          </div>
        </div>
        
        <div className="text-sm mt-4 italic text-center max-w-6xl mx-auto">
             <p>（事実、代表佐藤の周りでも、印税だけで大きく稼いでいる人は一握りかもしれませんが、本をきっかけにビジネスチャンスを掴んだ人は数えきれないほどいます。）</p>
        </div>

        <div className="mt-16 text-center max-w-6xl mx-auto">
          <p className="text-neutral-dark leading-relaxed">これらの実績一つひとつが、私たちの貴重な財産です。そして、これらの経験を通じて、私たちは読者に響く本の作り方、効果的なブランディング戦略、さらにはKindleランキングで上位を獲得するためのノウハウを日々研究し、蓄積しています。 この進化したサポート体制で、次に出版されるあなたの成功を全力でバックアップできることを、心から楽しみにしています。</p>
          <p className="text-xl sm:text-2xl font-bold text-secondary-dark mt-8 break-words word-break-keep-all">
            次は、あなたがこれらの実績を、そしてそれ以上の輝かしい成果を手にする番です。
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection2;
