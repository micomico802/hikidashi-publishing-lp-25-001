
import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { getImagePath } from '../utils/imageUtils';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "この執筆プロセスは、私にとって大きな気づきの機会になりました。頭の中を言語化していただける作業はとても貴重で、自分がどういうふうに生きたいのか、進むべき方向性が明確になったんです。何より自分の考えを振り返ることができて、とても価値のある時間でした。",
    name: "Y.Y様",
    title: "エステサロン経営",
    imageSrc: getImagePath('testimonial1-default.png')
  },
  {
    quote: "とても面白かったです。インタビュー形式だったからこそ、自分では伝えようと思っていなかったことも話すことができました。 もし自分一人で執筆していたら、おそらく自分が伝えたいことだけに焦点を当てていたと思います。でも、質問に答える形で話を進めていくうちに、「そういえば、これも話せたら面白いかも」と思いつくことがたくさんありました。一緒に作り上げていく感覚があって、とても楽しかったです。",
    name: "Y.K様",
    title: "占い師・コンサルタント",
    imageSrc: getImagePath('testimonial2-default.png')
  },
  {
    quote: "自分の体験を振り返りながら言葉にしていくプロセスは、思っていた以上に深い気づきがありました。 自分が大切にしてきたことや乗り越えてきた道のりを形にできて、とても嬉しいです。",
    name: "Y.U様",
    title: "コミュニティ運営",
    imageSrc: getImagePath('testimonial3-default.png')
  },
  {
    quote: "自分の過去を振り返って話してみると、「こんなことあったな」という記憶だけでなく、「こんなこともしてきたんだ」と新たな発見がありました。 それが不思議と繋がり合って、自分自身のマップを作っている感覚なんです。「なぜ今、こういう活動をしているのか」という理由も、自分の中で整理できた気がします。",
    name: "R.A様",
    title: "ファッションデザイナー",
    imageSrc: getImagePath('testimonial4-default.png')
  },
  {
    quote: "思った以上に楽しくできて、スピードも驚くほど早くできてむしろ良かったです。このインタビュー形式で本を作るというのは、一人で書くよりもずっと良いと思います。私は商業出版の経験もあるのですが、結構孤独なんですよね。自分で永遠に考え続けなきゃいけないのって結構苦痛なんですよ。 あと、インタビュアーの方がいてくれることで自分の中の引き出しを開けてくれる感覚は面白かったですね。途中で質問してくれたり、一緒に笑いながら聞いてくれる人がいると、話が広がっていいなって思いました。",
    name: "N.T様",
    title: "ソーシャルワーカー・ヨガ講師",
    imageSrc: getImagePath('testimonial5-default.png')
  },
  {
    quote: "インタビュアーの方が上手に合いの手を入れてくれたり、聞きたいところをちゃんと掘り下げてくれたから、すごく話しやすかったです。セッションやライブでも話すことが多いけど、やっぱり話せば話すほど、私自身のためにもなるなって改めて思いました。 自分の振り返りになったり、何が大事かなっていうところを再認識できたり、気持ちの整理ができたり。めちゃくちゃいい時間でした！",
    name: "U.E様",
    title: "メンタルコーチ",
    imageSrc: getImagePath('testimonial6-default.png')
  }
];

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, title, imageSrc }) => (
  <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center h-full transform hover:scale-105 transition-transform duration-300">
    <img 
      src={imageSrc} 
      alt={name} 
      className="w-24 h-24 rounded-full mb-6 shadow-md"
    />
    <p className="text-neutral-dark leading-relaxed mb-6 italic flex-grow">"{quote}"</p>
    <div>
        <p className="font-bold text-primary-dark text-lg">{name}</p>
        <p className="text-sm text-neutral-DEFAULT">{title}</p>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          【喜びの声、続々！<br />
          実際にhikidashi出版を体験された方々のリアルな感想】
        </SectionTitle>
        <p className="max-w-6xl mx-auto text-center text-lg text-neutral-dark leading-relaxed mb-12">
        「本当に話すだけで本になるの？」「どんな体験ができるの？」 そんなあなたの疑問や期待に、実際にhikidashi出版で書籍を完成された先輩たちが、感動の声で応えてくれます。 ここでは、そのほんの一部をご紹介します。
        </p>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
        <div className="mt-16 text-center max-w-6xl mx-auto">
            <p className="text-lg text-neutral-dark leading-relaxed">いかがでしたでしょうか？ これらは、hikidashi出版を通じて、ご自身の想いをカタチにされた方々の、ほんの一部の声です。 このような喜びと感動を、あなたにも体験していただきたいと心から願っています。</p>
            <p className="text-xl sm:text-2xl font-bold text-secondary-dark mt-6 break-words word-break-keep-all">
                次は、あなたがこの感動と喜びを体験する番です。
            </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
