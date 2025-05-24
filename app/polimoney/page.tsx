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
          <h2 className="text-3xl">Polimoney</h2>
          <div className="flex gap-4 mt-20">
          {/* <Link href="" className={`${buttonVariants()} h-11`}>
            <span></span>
            使い方を見てみる
            <NavigateNextIcon />
          </Link>
          <Link href="" className={`${buttonVariants()} h-11`}>
            <span></span>
            実際に使ってみる
            <NavigateNextIcon />
            </Link> */}
          </div>
          <div className="my-8" />
          <p className="font-bold mt-2">
            政治資金の透明化：政治資金の見える化ダッシュボードの開発
          </p>
        </hgroup>
        <div className="my-8" />
        <Image
          src="/home__3project__polimoney.webp"
          width={576}
          height={315}
          alt="Polimoneyのイメージ画像"
          className="w-full py-4"
          priority={true}
          quality={100}
        />
        <p className="max-w-xl mt-4">
          「Polimoney」プロジェクトは、政治とお金にまつわる課題をボトムから解決したいと考え、スウェーデンで運用されている透明性の高い政治運営の仕組みを参考に発足しました。{' '}
        </p>
        <section>
          <h3 className="text-2xl mt-10">スウェーデンの事例</h3>
          <p className="mt-4">
            スウェーデンでは、政治家や官僚に対して公用のクレジットカードが支給されており、これを利用して公的な支出を行うことが求められています。このシステムは透明性を高めるために設計されており、すべての支出は記録され、一般市民やメディアがアクセスできるようになっています。{' '}
          </p>
          <p className="mt-4">
            このような仕組みを日本にも取り入れることで、政治資金に関する事務コストを削減し、透明で信頼できる政治運営をボトムアップで実現することを目指します。{' '}
          </p>
        </section>
        <section>
          <h3 className="text-2xl mt-10">今後の展開</h3>
          <p className="mt-4">
            現在、具体的な仕様を固めている段階ですが、導入条件などが整い次第、詳細を公開いたします。
          </p>
        </section>
        <div className="flex gap-4 mt-20">
          <Link
            href="https://github.com/digitaldemocracy2030/polimoney"
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
          <Link href="/history" className={`${buttonVariants()} h-11`}>
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
