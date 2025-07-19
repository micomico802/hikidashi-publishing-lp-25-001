
import React from 'react';
import SectionTitle from './ui/SectionTitle';
import CallToActionButton from './ui/CallToActionButton';
import { getImagePath } from '../utils/imageUtils';

interface FutureScenarioProps {
  text: string;
  icon: React.ReactNode;
  imageSrc: string;
}

const FutureScenarioCard: React.FC<FutureScenarioProps> = ({ text, icon, imageSrc }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full min-h-[500px]">
    <div className="aspect-[16/9] bg-neutral-light rounded-t-xl overflow-hidden">
      <img src={imageSrc} alt="輝かしい未来" className="w-full h-full object-contain"/>
    </div>
    <div className="p-6 flex-grow flex flex-col text-center">
      <div className="h-16 flex items-center justify-center text-secondary mb-4 flex-shrink-0">{icon}</div>
      <div className="flex-grow">
        <p className="text-neutral-dark leading-relaxed text-lg">{text}</p>
      </div>
    </div>
  </div>
);

// Placeholder Icons
const HeartIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>;
const SmileIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75S9.75 9.336 9.75 9.75Zm4.5 0c0 .414-.168.75-.375.75S13.5 10.164 13.5 9.75s.168-.75.375-.75S14.25 9.336 14.25 9.75Z" /></svg>;
const GlobeIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-5.836A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74 1.1 7.843-2.918M3.986 8.253 5.864 6.375" /></svg>;
const NewWorldIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H9" />
  </svg>
);
const RocketIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
  </svg>
);
const NewYouIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);


const FutureVisionSection: React.FC = () => {
  const scenarios = [
    { text: "あなたの魂を込めた一冊が、誰かの心を動かし、誰かの人生を変える。そして、あなた自身の人生もまた、劇的に、そして鮮やかに好転していく。 そんな感動的な毎日が始まります。", icon: <HeartIcon />, imageSrc: getImagePath('future1-default.png') },
    { text: "経済的な不安や時間に追われる日々から解放され、本当にやりたいこと、情熱を注げる活動に思いっきり集中できる。心からの笑顔と、揺るぎない充実感に満ち溢れた「幸せな未来」 が、あなたのものになります。", icon: <SmileIcon />, imageSrc: getImagePath('future2-default.png') },
    { text: "あなたの言葉や価値観に強く共感し、「あなたから学びたい！」「あなたに会いたい！」と願う人々が、日本中、いや世界中から自然と集まってくる。あなたの周りがいつも活気と感謝の言葉で満たされる、そんな「理想の光景」 が、あなたの日常になるのです。", icon: <GlobeIcon />, imageSrc: getImagePath('future3-default.png') },
    { text: "これまで接点のなかった業界のトップランナーや、心から尊敬できる新しい仲間たちとの刺激的な出会いが次々と生まれ、あなたがまだ「知らなかった新しい世界」の扉が、音を立てて開かれていくでしょう。", icon: <NewWorldIcon />, imageSrc: getImagePath('future4-default.png') },
    { text: "たった一冊の本をきっかけに、思いもよらなかった講演の依頼が舞い込んだり、憧れのメディアから出演オファーが来たり、あるいは全く新しいビジネスチャンスが目の前に現れたり…あなたの可能性が無限に広がっていく「世界の雄大さ」 を、その手で掴むことになります。", icon: <RocketIcon />, imageSrc: getImagePath('future5-default.png') },
    { text: "「書けない」という長年のコンプレックスから解放され、「著者」という新たな自信と誇りを胸に、さらに大きな夢や目標に向かって、ワクワクしながら挑戦し続ける、新しいあなたに出会えます。", icon: <NewYouIcon />, imageSrc: getImagePath('future6-default.png') }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          【次はあなたの番！<br />
          書籍出版が拓く、輝かしい未来の一例】
        </SectionTitle>
        <p className="max-w-6xl mx-auto text-center text-lg text-neutral-dark leading-relaxed mb-12">
          hikidashi出版であなたの本が完成したとき、それは単なる「一冊の本」ではありません。 あなたの未来を、今よりもっと豊かで、もっとエキサイティングなものへと塗り替える、魔法のチケットを手にしたようなものなのです。 想像してみてください…こんな未来が、あなたを待っているかもしれません。
        </p>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {scenarios.map((scenario, index) => (
              <FutureScenarioCard key={index} text={scenario.text} icon={scenario.icon} imageSrc={scenario.imageSrc} />
            ))}
          </div>
        </div>
        <div className="mt-16 text-center max-w-6xl mx-auto">
          <p className="text-xl font-semibold text-neutral-dark leading-relaxed">これらは、けっして手の届かない夢物語ではありません。 実際に多くの方が、書籍出版を通じてこのような素晴らしい変化を、そして想像以上の未来を手にしています。</p>
          <p className="text-xl font-semibold text-neutral-dark leading-relaxed mt-4">hikidashi出版は、あなたのその輝かしい未来への、最も確実で、最もエキサイティングな一歩となることをお約束します。</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-dark my-6 break-words word-break-keep-all">
            次は、あなたがその輝かしい物語の主人公になる番です。
          </p>
          <CallToActionButton 
            text="未来への第一歩を踏み出す" 
            href="https://forms.gle/asaXZkD25iFwtkaG7" 
          />
        </div>
      </div>
    </section>
  );
};

export default FutureVisionSection;
