import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { CoCreation } from '@/components/CoCreation'
import { TopScrollButton } from '@/components/TopScrollButton'
import { ExternalLink } from 'lucide-react'

export default async function Page() {
  return (
    <div>
      <p className="text-4xl sm:text-5xl flex flex-col gap-5 items-start font-bold py-12 mx-auto max-w-xl">
        <span className="box-decoration-clone gradient block py-1 px-2">みんなで創る、</span>
        <span className="box-decoration-clone gradient block py-1 px-2">みんなの未来。</span>
      </p>
      <section className="mx-auto max-w-xl">
        <h2 className="text-3xl">デジタル民主主義2030とは</h2>
        <p className="max-w-xl mt-4">
          「デジタル民主主義2030」は、技術の力で市民の声を活かし、政治をより良い形に進化させることを目指したプロジェクトです。透明性と信頼を重視し、多くの人々が政策に参加できる未来を目指しています。
        </p>
        <div className="mt-4 flex gap-4 flex-wrap">
          <Link href="/about" className={`${buttonVariants()} h-11`}>
            <span></span>
            もっと詳しく
            <NavigateNextIcon />
          </Link>
          <Link href="/newcomer" className={`${buttonVariants()} h-11`}>
            <span></span>
            初めての方へ
            <NavigateNextIcon />
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-xl mt-20">
        <h2 className="text-3xl">3つの取り組み</h2>
        <section className="mt-8">
          <hgroup className="flex gap-2 flex-wrap">
            <div className="gradient w-1"></div>
            <div className="w-[calc(100%-12px)]">
              <h3 className="text-2xl">広聴AI</h3>
              <p className="font-bold mt-2">
                ブロードリスニングのさらなる進展：Talk to the City の実用化
              </p>
            </div>
          </hgroup>
          <Image
            src="/home__3project__kouchou-ai.webp"
            width={576}
            height={262.8}
            alt="広聴AIのイメージ画像"
            className="w-full"
            priority={true}
            quality={100}
          />
          <p>
            ブロードリスニングとは、多様な市民の声を広く収集・可視化し、意思決定に役立てようとする取り組みで、我々は「Talk
            to the
            City（TTTC）」というオープンソースのAI分析ツールを改良してこれを実現しようとしています。
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/case/kouchou-ai" className={`${buttonVariants()} h-11`}>
              <span></span>
              活用事例
              <NavigateNextIcon />
            </Link>
            <Link href="/kouchou-ai" className={`${buttonVariants()} h-11`}>
              <span></span>
              もっと詳しく
              <NavigateNextIcon />
            </Link>
          </div>
        </section>
        <section className="mt-16">
          <hgroup className="flex gap-2 flex-wrap">
            <div className="gradient w-1"></div>
            <div className="w-[calc(100%-12px)]">
              <h3 className="text-2xl">いどばた</h3>
              <p className="font-bold mt-2">
                民意による政策反映：デジタル上で大規模熟議が可能なプラットフォームの構築
              </p>
            </div>
          </hgroup>
          <Image
            src="/home__3project__idobata.webp"
            width={576}
            height={324.89}
            alt="いどばたのイメージ画像"
            className="w-full"
            priority={true}
            quality={100}
          />
          <p>
            「いどばた」は、台湾の先行事例「JOIN」や「vTaiwan」を参考に、日本でも政策決定プロセスへの市民参加の実現に向けて、大規模な熟議プラットフォームを開発するプロジェクトです。
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/case/idobata" className={`${buttonVariants()} h-11`}>
              <span></span>
              活用事例
              <NavigateNextIcon />
            </Link>
            <Link href="/idobata" className={`${buttonVariants()} h-11`}>
              <span></span>
              もっと詳しく
              <NavigateNextIcon />
            </Link>
          </div>
        </section>{' '}
        <section className="mt-16">
          <hgroup className="flex gap-2 flex-wrap">
            <div className="gradient w-1"></div>
            <div className="w-[calc(100%-12px)]">
              <h3 className="text-2xl">Polimoney</h3>
              <p className="font-bold mt-2">
                政治資金の透明化：政治資金の見える化ダッシュボードの開発
              </p>
            </div>
          </hgroup>
          <Image
            src="/home__3project__polimoney.webp"
            width={576}
            height={315}
            alt="Polimoneyのイメージ画像"
            className="w-full py-2"
            priority={true}
            quality={100}
          />
          <p>
            「Polimoney」プロジェクトは、政治とお金にまつわる課題をボトムから解決したいと考え、スウェーデンで運用されている透明性の高い政治運営の仕組みを参考に発足しました。
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <Link
              href="https://polimoney.dd2030.org/"
              className={`${buttonVariants()} h-11`}
              target="_blank"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Webサイトを見る
              <NavigateNextIcon />
            </Link>
            <Link href="/case/polimoney" className={`${buttonVariants()} h-11`}>
              <span></span>
              活用事例
              <NavigateNextIcon />
            </Link>
            <Link href="/polimoney" className={`${buttonVariants()} h-11`}>
              <span></span>
              もっと詳しく
              <NavigateNextIcon />
            </Link>
          </div>
        </section>
      </section>
      <section className="mx-auto max-w-xl mt-20">
        <div className="gradient w-full h-0.5"></div>
        <div className="flex gap-4 mt-4"></div>
        <h2 className="text-3xl mt-5 border-b pb-4">最新のお知らせ</h2>
        <ul className="space-y-4 mt-4">
          
          <li className="border-b pb-4">
            <Link href="/news/kouchou-ai-v3" className="text-xl text-blue-600 hover:underline">
              広聴AI 安定版 v3.0.0 リリースのお知らせ
            </Link>
            <p className="text-gray-600 mt-1">2025年5月30日</p>
            <p className="mt-2">
              LocalLLM対応とコスト削減機能を搭載した広聴AI安定版v3.0.0をリリースしました。API費用なしでの利用が可能になり、ソースリンク機能も追加されています。
            </p>
          </li>
          
        </ul>
        <div className="flex gap-4 mt-4">
          <Link href="/news" className={`${buttonVariants()} h-11`}>
            <span></span>
            お知らせ一覧へ
            <NavigateNextIcon />
          </Link>
        </div>
      </section>
      <CoCreation />
      {/* トップに戻るボタン */}
      <TopScrollButton />

    </div>
  )
}
