import React from 'react';
import CallToActionButton from './ui/CallToActionButton';
import HighlightText from './ui/HighlightText';
import { useImages } from '../contexts/ImageContext';

const FinalCallToActionSection: React.FC = () => {
  const { getImage } = useImages();
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-secondary-light">
          【追伸：あなたの物語が始まるのを、私たちは待っています。】
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed mb-12">
          <p>
            P.S. ここまで読んでくださったあなたは、きっと心の中に「伝えたい何か」を強く持っているはずです。 そして、もしかしたら「でも、私に本当に書けるのかな…」というほんの少しの不安も、まだ残っているかもしれません。
          </p>
          <p className="font-semibold">
            大丈夫。 かつて私自身が「書けない」と悩み、チャンスを逃した経験があるからこそ、断言できます。 あなたのその素晴らしい経験や熱い想いは、決してあなた一人のものではなく、誰かの人生を照らし、勇気づける<HighlightText className="text-secondary-light">「光」</HighlightText>になる可能性を秘めています。
          </p>
          <p>
            もう、「書けない」という理由で、その貴重な光を眠らせておくのは終わりにしませんか？
          </p>
          <p>
            hikidashi出版は、あなたのその「声」を最高の形で引き出し、多くの人に届けるための、あなたの最強のパートナーです。私たちが提供するのは、単なる出版サービスではありません。あなたの人生の新たな章を開き、あなたがまだ見ぬ可能性へと羽ばたくための<HighlightText className="text-secondary-light">「滑走路」</HighlightText>です。
          </p>
          <p className="text-yellow-300 font-semibold">
            でも、忘れないでください。私たちが生きるこの「時間」だけは、誰にも平等で、そして決して巻き戻すことはできません。 あなたが「いつかやろう」と思っているその「いつか」は、もしかしたら永遠に来ないかもしれないのです。 あなたのその素晴らしいアイデアや、胸に秘めた情熱をカタチにする最高のタイミングは、他の誰でもない、あなた自身が「今だ！」と決めた、まさにこの瞬間なのかもしれません。
          </p>
          <p className="font-semibold">
            そして、私たちのサポートにも限りがあります。（今月の残り枠も、あなたの決断を待たずに刻一刻と減っています…！） この特別なチャンスを、本当に逃してしまってもいいのですか？
          </p>
          <p className="text-xl font-bold">
            一歩踏み出す勇気。 それさえあれば、あとは私たちに任せてください。
          </p>
          <p>
            あなたの物語が、誰かの心を動かし、そしてあなた自身の未来を大きく変える瞬間を、私たちはすぐそばで、全力でサポートします。
          </p>
        </div>
        <img src={getImage('finalCta')} alt="未来への扉" className="my-10 mx-auto rounded-lg shadow-xl"/>
        <p className="text-2xl sm:text-3xl font-bold mb-8">
          さあ、次はあなたの番です。<br />
          まずは、あなたの想いを私たちに聞かせてください。
        </p>
        <CallToActionButton 
          text="無料「目次作成セッション」で最初のページをめくる" 
          href="https://forms.gle/asaXZkD25iFwtkaG7"
          className="text-xl px-10 py-5" 
        />
        <p className="mt-6 text-gray-300">お会いできる日を、心から楽しみにしています！</p>
      </div>
    </section>
  );
};

export default FinalCallToActionSection;
