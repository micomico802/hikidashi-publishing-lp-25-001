
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
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-md mb-4"/>
    <h3 className="text-xl font-semibold text-primary-dark mb-2">{title}</h3>
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
        <SectionTitle text="【理論だけじゃない！hikidashi出版がもたらした、輝かしい実績の数々】" />
        <div className="max-w-4xl mx-auto text-lg text-neutral-dark leading-relaxed space-y-6 mb-12">
          <p>私たちは、ただ「本が作れます」と言うだけではありません。hikidashi出版のサービスは、すでに具体的な、そして驚くべき成果を生み出し始めています。</p>
          <div className="bg-neutral-light p-8 rounded-xl shadow-lg my-8">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">すべては、一人の友人の挑戦から始まりました…</h3>
            <p>サービスを本格的にリリースする前、代表佐藤の親しい友人が「私の経験を本にしてほしい」と手を挙げてくれました。 当時、私たちの持てる最高のシステムと情熱を注ぎ込み、彼女の波乱万丈な人生と熱い想いを一冊の書籍にまとめ上げました。多少の修正は必要だったものの、完成した原稿は、まさに彼女の人生そのものが凝縮されたような、魂のこもった作品となりました。</p>
            <img src={getImage('achievement2Friend')} alt="友人の成功事例" className="my-6 rounded-lg shadow-md mx-auto"/>
            <p>彼女自身も、これがどんな結果を生むのかドキドキの挑戦。そして、いざKindleで出版してみると…！ なんと、わずか<HighlightText>2日間で延べ240冊以上がダウンロードされ、Amazon Kindleの特定カテゴリーで見事ランキング1位を獲得したのです！</HighlightText></p>
            <p className="mt-4">この最初の、しかし圧倒的な成功は、私たちに大きな勇気と「このサービスは本物だ」という確信を与えてくれました。そして、この“身内”での実績だけでなく、実際にお客様としてhikidashi出版をご利用いただいた方々の書籍も、次々と確かな成果を上げています。</p>
          </div>
          <p className="text-xl font-semibold text-primary-dark">hikidashi出版がもたらすのは、「出版」という結果だけではありません。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {achievements.map((item, index) => (
            <AchievementItem key={index} title={item.title} description={item.description} imageSrc={item.imageSrc} />
          ))}
        </div>
        
        <div className="text-sm mt-4 italic text-center max-w-2xl mx-auto">
             <p>（事実、代表佐藤の周りでも、印税だけで大きく稼いでいる人は一握りかもしれませんが、本をきっかけにビジネスチャンスを掴んだ人は数えきれないほどいます。）</p>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-neutral-dark leading-relaxed">これらの実績一つひとつが、私たちの貴重な財産です。そして、これらの経験を通じて、私たちは読者に響く本の作り方、効果的なブランディング戦略、さらにはKindleランキングで上位を獲得するためのノウハウを日々研究し、蓄積しています。 この進化したサポート体制で、次に出版されるあなたの成功を全力でバックアップできることを、心から楽しみにしています。</p>
          <p className="text-2xl font-bold text-secondary-dark mt-8">
            次は、あなたがこれらの実績を、そしてそれ以上の輝かしい成果を手にする番です。
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection2;
