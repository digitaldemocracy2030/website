import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import GitHubIcon from '@mui/icons-material/GitHub'
export default async function Page() {
  return (
    <div>
      <section className="mx-auto max-w-xl mt-10">
        <h2 className="text-3xl">未来を共に創る</h2>
        <section>
          <h3 className="text-2xl mt-10">実証実験に参画されたい方</h3>
          <p className="mt-4">
            自治体・政党・企業団体の方は、デジタル民主主義2030プロジェクトの取り組みを導入して、市民参加を促進できます。
          </p>
          <p className="mt-4">下のGoogleフォームよりご連絡下さい。 </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdAJojxjpIJnOMtydYTOhtsTkkKgDS22R-iHYDVMstYd2RUBA/viewform"
            className={`${buttonVariants()} h-11 mt-4`}
            target="_blank"
          >
            <span></span>
            Googleフォームはこちら
            <NavigateNextIcon />
          </Link>
        </section>
        <section>
          <h3 className="text-2xl mt-10">開発・デザイン・改善・コミュニティ運営に興味のある方</h3>
          <section className="rounded border-2 border-dashed p-4 mt-4">
            <h4 className="text-xl">Slackに参加する</h4>
            <p className="mt-4">参加して様子を見てみましょう。</p>
            <Link
              href="https://join.slack.com/t/w1740803485-clv347541/shared_invite/zt-32haul96s-Iopa_ET_YcqXWlpzpqABRA"
              className={`${buttonVariants()} h-11 mt-4`}
              target="_blank"
            >
              <span></span>
              Slackに参加
              <NavigateNextIcon />
            </Link>
          </section>
          <section className="rounded border-2 border-dashed p-4 mt-4">
            <h4 className="text-xl">Githubを覗く</h4>
            <p className="mt-4">まずはGithubの様子を覗きたい方はこちら。</p>
            <Link
              href="https://github.com/digitaldemocracy2030"
              className={`${buttonVariants({ variant: 'outline' })} h-11 border-black mt-4`}
              target="_blank"
            >
              <span></span>
              <div className="flex items-center">
                <GitHubIcon />
                <span className="ml-2">Githubを覗く</span>
              </div>
              <NavigateNextIcon />
            </Link>
          </section>
        </section>
      </section>
    </div>
  )
}
