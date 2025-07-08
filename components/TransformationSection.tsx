import React from 'react';
import SectionTitle from './ui/SectionTitle';
import HighlightText from './ui/HighlightText';
import { useImages } from '../contexts/ImageContext';

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard: React.FC<BenefitProps> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-center mb-4 text-secondary">{icon}</div>
    <h3 className="text-xl font-semibold text-primary-dark mb-3 text-center">{title}</h3>
    <p className="text-neutral-dark leading-relaxed text-center">{description}</p>
  </div>
);

// Placeholder Icons
const VoiceIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a.75.75 0 0 0 .75-.75V6.038a.75.75 0 0 0-.75-.75S11.25 5.25 11.25 6v12a.75.75 0 0 0 .75.75Zm-3.75-2.625a.75.75 0 0 0-.75.75v.038a.75.75 0 0 0 .75.75S8.25 18 8.25 17.25v-5.504a.75.75 0 0 0-.75-.75S6.75 11 6.75 11.75v5.503a.75.75 0 0 0 .75.75S8.25 18 8.25 17.25v-5.503M15.75 16.125a.75.75 0 0 0 .75-.75V9.038a.75.75 0 0 0-.75-.75S15 8.25 15 9v6.375a.75.75 0 0 0 .75.75S15.75 16.125 15.75 16.125Z" /></svg>;
const ChosenIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.822.672l-4.684-2.492a.563.563 0 0 0-.652 0l-4.684 2.492a.562.562 0 0 1-.822-.672l1.285-5.385a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>;
const StageIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>;
const CommunityGrowthIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.243-3.72a9.094 9.094 0 0 1-.479 3.741M18 18.72v-2.28a2.25 2.25 0 0 0-.659-1.591l-4.682-4.682a2.25 2.25 0 0 0-1.591-.659H10.5M18 18.72H5.28c-.168 0-.336.032-.5.094A9.095 9.095 0 0 0 1 18.72M5.28 18.72H18m-3.97-10.339a2.25 2.25 0 0 0-3.182-3.182m3.182 3.182L12 12.72m3.182-3.182A2.25 2.25 0 0 0 12.01 6.31M6.311 12.01a2.25 2.25 0 0 0 3.182 3.182m-3.182-3.182L12 11.28m-3.182 3.182A2.25 2.25 0 0 0 11.99 17.69" /></svg>;


const TransformationSection: React.FC = () => {
  const { getImage } = useImages();
  
  const benefits = [
    {
      title: "あなたの内なる声が、明確な「カタチ」と「強さ」をまとう。",
      description: "まず、私たちとの濃密なインタビューを通じて、あなた自身も気づいていなかったかもしれない経験の価値や、心の奥底にあった熱い想いが、驚くほどクリアに言語化されていきます。 あなたの半生が再構築され、大切な価値観が力強いメッセージへと昇華するのです。そして、それが一冊の書籍という揺るぎない「実績」となり、これまでの名刺だけでは伝えきれなかったあなたの深みや魅力を雄弁に物語る、「最強のパーソナルツール」を手に入れることになります。",
      icon: <VoiceIcon />
    },
    {
      title: "あなたの価値が正しく伝わり、「その他大勢」から「選ばれる存在」へ。",
      description: "書籍という形であなたの専門性やストーリーが体系的に示されることで、あなたのビジネスへの信頼度は飛躍的に高まります。これまでのようにあなたが必死に自分をアピールしなくても、書籍があなたに代わってその価値を証明し、「あなたにお願いしたい」という質の高い仕事の依頼が、自然と舞い込んでくるようになるでしょう。 もう、価格競争に巻き込まれることもありません。あなたは、数多くの選択肢の中から、自信を持って「選ばれる人」へとステージアップするのです。",
      icon: <ChosenIcon />
    },
    {
      title: "周囲のあなたを見る目が変わり、新たなステージの扉が次々と開かれる。",
      description: "「著者」という新たな肩書きは、あなたの言葉に重みと影響力を与え、クライアント、ビジネスパートナー、そして社会全体からのあなたを見る目を確実に変化させます。 それは、より大きなビジネスチャンス、これまで出会えなかったレベルの人々との繋がり、さらにはテレビや雑誌、ウェブメディアといった各種メディアから「専門家として話を聞きたい」と声がかかる可能性さえも、グッと引き寄せることになるかもしれません。",
      icon: <StageIcon />
    },
    {
      title: "刺激的な成功者コミュニティが、あなたの意識をアップデートし続ける。",
      description: "そして、hikidashi出版が誇る特別なコミュニティへの参加は、あなたの成長をさらに加速させます。そこでは、すでに大きな成功を収めている先輩経営者やベストセラー著者たちとの活発な交流が待っています。彼らの思考法、行動力、そして未来を見据える視点に触れることで、あなたのビジネスや人生に対する意識そのものが大きく変革され、常にアップデートされ続けるのを感じるはずです。",
      icon: <CommunityGrowthIcon />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle text="【hikidashi出版で、あなたはどんな「新しい自分」と出会いますか？】" />
        <p className="max-w-3xl mx-auto text-center text-lg text-neutral-dark leading-relaxed mb-12">
          hikidashi出版のサービスをご利用いただくことで、あなたは単に「一冊の本が完成する」という結果だけを手にするのではありません。それは、あなたの人生とビジネスに、想像を超えるような素晴らしい変化をもたらす、まさに<HighlightText>「革命の始まり」</HighlightText>なのです。
        </p>
        <p className="max-w-3xl mx-auto text-center text-lg text-neutral-dark leading-relaxed mb-16">
          具体的に、あなたはどのような未来を手にすることができるのでしょうか？
        </p>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              title={benefit.title} 
              description={benefit.description} 
              icon={benefit.icon} 
            />
          ))}
        </div>
        <div className="mt-16 text-center">
            <img src={getImage('transformation')} alt="新しい自分との出会い" className="mx-auto rounded-lg shadow-xl" />
            <p className="mt-8 text-xl font-semibold text-neutral-dark leading-relaxed">これらは、決して遠い夢物語ではありません。 実際に多くの方が体験している、書籍出版がもたらすほんの一部の変化です。</p>
            <p className="text-2xl font-bold text-secondary-dark mt-4">
                hikidashi出版は、あなたのその輝かしい未来への、最も確実で、最もエキサイティングな一歩となることをお約束します。
            </p>
            <p className="text-xl font-semibold text-primary-dark mt-8">
                さあ、次はあなたが、この素晴らしい変化を体験する番です。
            </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
