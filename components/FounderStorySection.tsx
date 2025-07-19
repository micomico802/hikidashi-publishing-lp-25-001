import React from 'react';
import SectionTitle from './ui/SectionTitle';
import HighlightText from './ui/HighlightText';
import { useImages } from '../contexts/ImageContext';

const FounderStorySection: React.FC = () => {
  const { getImage } = useImages();
  
  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          【なぜ、私がこのサービスをあなたにお届けしたいのか？<br />
          ～hikidashi出版 代表・佐藤達矢の物語～】
        </SectionTitle>
        <div className="max-w-6xl mx-auto mt-8">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
              <img 
                src={getImage('founderProfile')} 
                alt="佐藤達矢代表" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8 flex-shrink-0"
              />
              <div>
                <p className="text-lg text-neutral-dark leading-relaxed mb-4">
                  「素晴らしい経験や、誰かの役に立つ知識、そして熱い想いはあるのに、どうしても"書く"ことができない…」
                </p>
                <p className="text-lg text-neutral-dark leading-relaxed">
                  もしあなたが今、そう感じているのなら、私はその気持ちが痛いほどよくわかります。 なぜなら、かつての私が、まさにそうだったからです。
                </p>
              </div>
            </div>

            <div className="space-y-6 text-neutral-dark leading-relaxed text-lg">
              <p>
                私の周りには、書籍を出版し、それを通じてビジネスを大きく飛躍させ、時間にも経済的にも自由を謳歌している友人がいました。 彼から「佐藤も本を書けばいいのに」と勧められ、その成功を間近で見ていた私は、確かに「自分もいつかは…」という憧れを抱きました。 彼の話を聞けば、出版のやり方も、それがもたらす価値も理解できました。ハードルは、かつてよりずっと下がっているはずでした。
              </p>
              <p>
                しかし、どうしても「書く」という行為への抵抗感が消えず、私の筆は一向に進まなかったのです。
              </p>
              <p>
                SNSで比較的長い文章を発信することには慣れており、自分はまだ「書ける」人間のはずだと思っていました。 それでも、いざ「本を一冊書き上げる」という高い壁を前にすると、途端にアイデアが枯渇し、自分の本当に伝えたいことが読者にきちんと伝わるのか、果てしない不安に襲われました。
              </p>
              <p>
                恥ずかしながら、実は一度、出版社の方からお声がけをいただいた貴重なチャンスすら、自分の考えをうまくまとめ上げることができず、棒に振ってしまった経験もあるのです。
              </p>
              <p className="font-semibold text-primary-dark">
                「書けない…でも、伝えたいことは山ほどある…」
              </p>
              <p>
                そんな葛藤の中で、ふと、こう思いました。 「もし、誰かが私の話を丁寧に、そして深く引き出してくれて、その内容が自然と本になったとしたら…？」 「もし、最新のAI技術のようなものを上手く活用して、今まで膨大にかかっていた執筆や編集の作業を超高速で進めることができたら…？」
              </p>
              <p>
                あの時の私のように、「書けない」というだけで、その人の中に眠る素晴らしい価値が世に出ないなんて、あまりにもったいない。そんな人を一人でも減らしたい。 その強い想いが、すべての始まりでした。
              </p>
              <p>
                それから私は、システム開発ができる友人にこの構想を打ち明けました。幸いにも彼は強い興味を示してくれ、二人三脚での無謀とも思える挑戦がスタートしたのです。
              </p>
              <p>
                正直に告白します。最初は、本当にダメダメでした。 AIが出力する文章はどこか機械的で、同じ内容が何度も繰り返される。 しかし、失敗を重ねる中で、AIが得意なこと、そして苦手なことが明確になってきました。 それを元に、システムの改修に改修を重ね、ようやく一つの形が見えてきたのです。
              </p>
              <div className="my-8 p-6 bg-secondary-light rounded-lg shadow-md text-neutral-dark">
                <p className="font-bold text-xl text-center">
                  そして、この初期システムで作り上げた私たちの最初の書籍をKindleに投稿したところ… なんと、見事Kindleの特定カテゴリーで<HighlightText>三冠・ランキング1位を獲得することができたのです！</HighlightText>
                </p>
                <div className="max-w-6xl mx-auto mt-8">
                    <img src={getImage('founderSuccess')} alt="佐藤代表の書籍成功" className="rounded-lg shadow-lg mx-auto max-w-full h-auto"/>
                </div>
              </div>
              <p>
                この瞬間、私は心の底から確信しました。「この方法なら、かつての私のように『書けない』と悩む多くの方々を、本当に救うことができるかもしれない」と。
              </p>
              <p>
                それからは、モニターの方々にもご協力いただきながら、AIの仕組みを徹底的に改善。 最初はまだ拙かったアウトプットも、試行錯誤の末、驚くほど少ない工数で質の高いものが出来上がるようになってきました。 もちろん、どうしてもAIだけではカバーしきれない、人の温もりや深い洞察が必要な部分（例えば、あなたの心の奥底にある想いを引き出すインタビューや、細やかなニュアンスの調整など）は、経験豊富なプロの人間が担当します。
              </p>
              <p>
                そうして、ついに完成したのが、この「インタビューを受けるだけで、あなたの書籍が出来上がる」という、hikidashi出版のサービスなのです。
              </p>
              <p className="font-semibold mt-8">
                私がこのサービスをあなたに自信を持ってお届けできる理由。 それは、誰よりも「書けない」苦しみと、「伝えたい」情熱の狭間でもがき、その壁を乗り越えるための一つの「答え」を見つけ出したと自負しているからです。
              </p>
              <p className="text-xl text-center font-bold text-secondary-dark mt-8">
                あなたのその素晴らしい「一部」を、今度は私たちが引き出す番です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStorySection;
