import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import GitHubIcon from '@mui/icons-material/GitHub'
import { CoCreation } from '@/components/CoCreation'
export default async function Page() {
  return (
    <div>
      <section className="mx-auto max-w-xl mt-10">
        <hgroup>
          <h2 className="text-3xl">広聴AI</h2>
          <p className="font-bold mt-2">
            ブロードリスニングのさらなる進展： Talk to the Cityの実用化
          </p>
        </hgroup>
        <p className="max-w-xl mt-4">
          ブロードリスニングとは、多様な市民の声を広く収集・可視化し、意思決定に役立てようとする取り組みで、我々は「Talk
          to the
          City（TTTC）」というオープンソースのAI分析ツールを改良してこれを実現しようとしています。
        </p>
        <p className="max-w-xl mt-4">
          このソフトウェアは、アメリカのカリフォルニア州にあるAI Objective
          InstituteというNPOが最初に開発したものですが、台湾など世界中で実際に活用された実績があります。
        </p>
        <p className="max-w-xl mt-4">
          ブロードリスニングにより、これまでの手法よりもより多くの声を、膨大な手作業を要することなく効率的に分析し、有益なインサイトを提供でき、意思決定のスピードや質を大きく改善できる可能性を秘めています。{' '}
        </p>
        <Image
          src="/home__3project__kouchou-ai.webp"
          width={576}
          height={262.8}
          alt="広聴AIのイメージ画像"
          className="w-full"
          priority={true}
          quality={100}
        />
        <section>
          <h3 className="text-2xl mt-10">活用事例</h3>
          <h4 className="text-xl mt-8">選挙報道</h4>
          <p className="mt-4">
            衆議院選挙に関するX上の意見を分析・可視化し、報道の透明性を高める試みに活用されました。
          </p>
          <h4 className="text-xl mt-8">東京都の長期戦略「2050東京戦略（案）」の策定</h4>
          <p className="mt-4">
            東京都の長期戦略「2050東京戦略（案）」の策定において、市民の声を集める取り組みで活用されました。
          </p>
        </section>
        <section>
          <h3 className="text-2xl mt-20">リスクと課題</h3>
          <p className="mt-4">
            ただし、AIによる分析には注意点もあります。分析結果に過度に依存しないよう、背景や文脈を踏まえた慎重な運用が求められます。
          </p>
          <p className="mt-4">
            特に、ネット上の意見は偏りやすい側面もあるため、TTTCの結果を直接そのまま政策に反映することは想定していません。意思決定プロセスは別途、政府や自治体など導入主体が議論し、十分に検証したうえで方針を決定することが望まれます。
          </p>
          <p className="mt-4">
            また、ネット上のみで情報収集をするのではなく、タウンミーティングや直接的なヒアリングなど情報源を多様化することが有益です。ブロードリスニングの対象データとしても、電話やオフラインで寄せられる多様な声を集めることは重要であり、様々な声を集めた上で全体像を可視化することで、よりよい意思決定を支える仕組みになると考えています。
          </p>
        </section>
        <div className="flex gap-4 mt-20">
          <Link
            href="https://github.com/digitaldemocracy2030/kouchou-ai"
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
          <Link href="/activity" className={`${buttonVariants()} h-11`}>
            <span></span>
            直近の活動
            <NavigateNextIcon />
          </Link>
        </div>
      </section>
      <CoCreation />
    </div>
  )
}
