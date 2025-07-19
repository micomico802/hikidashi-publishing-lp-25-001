
import React from 'react';
import SectionTitle from './ui/SectionTitle';
import HighlightText from './ui/HighlightText';
import { getImagePath } from '../utils/imageUtils';

interface CommitmentPledgeProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  imageSrc: string;
}

const PledgeCard: React.FC<CommitmentPledgeProps> = ({ title, description, icon, imageSrc }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:shadow-2xl transition-shadow duration-300">
        <div className="aspect-[16/9] bg-neutral-light">
            <img src={imageSrc} alt={title} className="w-full h-full object-contain"/>
        </div>
        <div className="p-6 md:p-8">
            <div className="flex items-center mb-4 text-secondary">
                {icon}
                <h3 className="text-xl font-bold text-primary-dark ml-3">{title}</h3>
            </div>
            <div className="text-neutral-dark leading-relaxed">{description}</div>
        </div>
    </div>
);

// Placeholder Icons
const QualityIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>;
const EditIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>;
const AssetIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 0 1-2.25 2.25H5.25a2.25 2.25 0 0 1-2.25-2.25v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>;
const SupportIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" /></svg>;


const commitments = [
  {
    title: "１．「あなたらしさ」にとことん寄り添う！【初稿クオリティ保証】",
    description: (<>インタビューを通じて作成した初稿の方向性が、あなたのイメージと大きくかけ離れていたり、「これでは私の想いが伝わらない…」と感じられたりした場合には、ご遠慮なくお申し付けください。私たちは、追加のヒアリングや再構成を無料で行い、あなたが心から「これこそ私の本だ！」とご納得いただけるクオリティになるまで、誠心誠意サポートいたします。 あなたの「伝えたい」という情熱を、最高の形で書籍に反映させることをお約束します。</>),
    icon: <QualityIcon />,
    imageSrc: getImagePath('commit1-default.png')
  },
  {
    title: "２．「これで本当に大丈夫？」そんな不安を残しません！【納得いくまで修正サポート】",
    description: (<>原稿の細かな表現やニュアンスなど、あなたが「これで完璧！」と思えるまで、修正のご要望には柔軟に対応させていただきます。（※ただし、全体の構成を根本から変更するような大幅な修正は、別途ご相談させていただく場合がございます。） あなたの大切なメッセージが、誤解なく、そして最も魅力的に読者に伝わるよう、最後まで伴走します。</>),
    icon: <EditIcon />,
    imageSrc: getImagePath('commit2-default.png')
  },
  {
    title: "３．万が一、期待通りの「売上」に繋がらなくても、必ず手に入る「生涯の財産」をお約束します！",
    description: (
      <>
        <p>私たちは、あなたの書籍が多くの人に読まれ、ビジネス的な成功に繋がることを全力でサポートします。しかし、正直にお伝えすると、書籍の売れ行きは様々な要因に左右されるため、100%の成果をお約束することはできません。</p>
        <p className="mt-2">ですが、たとえ万が一、書籍からの直接的な経済的リターンがあなたの期待に届かなかったとしても、このhikidashi出版のプロセスを通じて、あなたは以下の<HighlightText>「かけがえのない価値」</HighlightText>を確実に手にすることができます。</p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
          <li><HighlightText>深い自己理解と、思考の明確化:</HighlightText> インタビューを通じてご自身の経験や想いを語ることで、自分でも気づかなかった強みや価値観が明確になり、今後の人生やビジネスの羅針盤が得られます。</li>
          <li><HighlightText>「伝える力」の向上:</HighlightText> 複雑な考えや感情を、相手に分かりやすく言語化するスキルが格段に向上します。これは、あらゆるコミュニケーションにおいて強力な武器となるでしょう。</li>
          <li><HighlightText>「著者」という揺るぎない社会的信用と実績:</HighlightText> あなたのプロフィールに「著者」という肩書きが加わることで、専門家としての信頼性が増し、新たなチャンスを引き寄せます。これは、お金では買えない無形の資産です。</li>
        </ul>
        <p className="mt-2">これらの価値は、あなたの今後の活動において、必ずや大きなプラスとなると私たちは確信しています。</p>
      </>
    ),
    icon: <AssetIcon />,
    imageSrc: getImagePath('commit3-default.png')
  },
  {
    title: "４．出版はゴールじゃない！あなたの「その後」も続く【継続サポート宣言】",
    description: (<>私たちは、本が完成したら「はい、おしまい」という関係ではありません。hikidashi出版が提供する特別なコミュニティや、必要に応じたアドバイスを通じて、あなたの書籍出版後の活動や、さらなるステップアップもサポートし続けます。あなたの成功が、私たちの喜びでもあるのです。</>),
    icon: <SupportIcon />,
    imageSrc: getImagePath('commit4-default.png')
  }
];

const CommitmentSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle text="【あなたの挑戦を、私たちは決して無駄にはさせません！hikidashi出版だけの「安心コミットメント」】" />
        <p className="max-w-3xl mx-auto text-center text-lg text-neutral-dark leading-relaxed mb-12">
          新しいことに一歩踏み出すとき、期待と同時に不安がよぎるのは当然のことです。 「本当に私でも質の高い本が作れるのだろうか？」 「もし、思ったような成果が出なかったら…？」 そんなあなたの不安な気持ちに、私たちhikidashi出版は真正面から向き合い、安心して最初の一歩を踏み出していただけるよう、独自の「安心コミットメント」をご用意しました。
        </p>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {commitments.map((commitment, index) => (
            <PledgeCard 
              key={index} 
              title={commitment.title} 
              description={commitment.description} 
              icon={commitment.icon}
              imageSrc={commitment.imageSrc}
            />
          ))}
        </div>
        <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-xl font-semibold text-neutral-dark leading-relaxed">私たちは、あなたの勇気ある一歩を、そしてその先に広がる素晴らしい可能性を、心から信じています。 だからこそ、あなたが安心して、そしてワクワクしながらこの挑戦に臨めるよう、全力でサポートすることをお約束します。</p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
