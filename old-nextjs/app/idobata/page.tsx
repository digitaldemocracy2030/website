import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import GitHubIcon from '@mui/icons-material/GitHub'
import { CoCreation } from '@/components/CoCreation'
import { TopScrollButton } from '@/components/TopScrollButton'

export default async function Page() {
  return (
    <div>
      <section className="mx-auto max-w-xl mt-10">
        <hgroup>
          <h2 className="text-3xl">いどばた</h2>
          <div className="flex gap-4 mt-20">
            <Link href="/case/idobata" className={`${buttonVariants()} h-11`}>
              <span></span>
              活用事例を見る
              <NavigateNextIcon />
            </Link>
            {/* <Link href="https://github.com/digitaldemocracy2030/idobata/blob/main/README.md" className={`${buttonVariants()} h-11`}>
              <span></span>
              使い方を見てみる
              <NavigateNextIcon />
            </Link> */}
            {/* <Link href="" className={`${buttonVariants()} h-11`}>
              <span></span>
              実際に使ってみる
              <NavigateNextIcon />
            </Link> */}
          </div>
          <div className="my-8" />
          <p className="font-bold mt-2">
            民意による政策反映：デジタル上で大規模熟議が可能なプラットフォームの構築
          </p>
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
        <p className="max-w-xl mt-4">
          いどばたは、台湾の先行事例「JOIN」や「vTaiwan」を参考に、日本でも政策決定プロセスへの市民参加の実現に向けて、大規模な熟議プラットフォームを開発するプロジェクトです。
        </p>
        <p className="max-w-xl mt-4">
          具体的には、以下の3ステップのそれぞれでAI技術を活用することで、単純な多数決に留まらず多面的な視点で議論の論点を整理し、建設的な合意形成・政策立案プロセスを実現することを目指しています：
        </p>
        <ol className="max-w-xl mt-4 list-decimal pl-8">
          <li>議論すべき課題の抽出</li>
          <li>解決策の検討と議論</li>
          <li>解決策の評価と合意形成</li>
        </ol>
        <section>
          <h3 className="text-2xl mt-10">今後の展開</h3>
          <p className="mt-4">
            我々は、議論や合意形成を支えるツールを自治体や政党に広く提供し、実際の導入や運用については、実証実験を希望される自治体・政党ごとにご検討いただく形を想定しています。
          </p>
          <p className="mt-4">
            現在、具体的な仕様を固めている段階ですが、導入条件などが整い次第、詳細を公開いたします。{' '}
          </p>
        </section>
        <div className="flex gap-4 mt-20">
          <Link
            href="https://github.com/digitaldemocracy2030"
            className={`${buttonVariants({ variant: 'outline' })} h-11 border-black`}
            target="_blank"
          >
            <span></span>
            <div className="flex items-center">
              <GitHubIcon />
              <span className="ml-2">Githubを覗く</span>
            </div>
            <NavigateNextIcon />
          </Link>
          <Link href="/history?scroll=latest" className={`${buttonVariants()} h-11`}>
            <span></span>
            直近の活動
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
