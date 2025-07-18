'use client'

import { CoCreation } from '@/components/CoCreation'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { buttonVariants } from '@/components/ui/button'
import { XEmbed } from 'react-social-media-embed'

export default function Page() {
  return (
    <div>
      <section className="mx-auto max-w-xl mt-10">
        <h2 className="text-3xl">いどばたの活用事例</h2>
        
        <h3 className="text-2xl mt-8">いどばたビジョン</h3>
        
        <h4 className="text-xl mt-6">チームみらい「みらいいどばた会議」</h4>
        <p className="mt-4">
          チームみらいが運営する「みらいいどばた会議」では、いどばたビジョンを活用して市民の意見収集とAIによる論点整理を行っています。
        </p>
        <div className="mt-4">
          <a
            href="https://kaigi.team-mir.ai/top"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({
              variant: 'outline',
            })} h-9 border-black inline-flex items-center gap-2`}
          >
            みらいいどばた会議を見る
            <NavigateNextIcon />
          </a>
        </div>

        <h5 className="text-lg mt-6">ユーザーの反響</h5>
        <div className="mt-4 space-y-4">
          <div>
            <XEmbed url="https://x.com/kazuneiwasa/status/1924801224198783367" width={325} />
          </div>
          <div>
            <XEmbed url="https://x.com/kazuneiwasa/status/1924802106164429304" width={325} />
          </div>
          <div>
            <XEmbed url="https://x.com/nishio/status/1923636525365068238" width={325} />
          </div>
          <div>
            <XEmbed url="https://x.com/kanamehamada530/status/1923658285917335988" width={325} />
          </div>
          <div>
            <XEmbed url="https://x.com/yoshifuji_tokyo/status/1924808491249893702" width={325} />
          </div>
        </div>

        <h4 className="text-xl mt-8">立憲民主党</h4>
        <p className="mt-4">
          立憲民主党でもいどばたビジョンの活用が発表されており、今後運用開始予定です。
        </p>
        <div className="mt-4">
          <a
            href="https://cdp-japan.jp/news/20250422_9145"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({
              variant: 'outline',
            })} h-9 border-black inline-flex items-center gap-2`}
          >
            発表会見を見る
            <NavigateNextIcon />
          </a>
        </div>

        <h3 className="text-2xl mt-8">いどばた政策</h3>
        
        <h4 className="text-xl mt-6">チームみらい マニフェスト</h4>
        <p className="mt-4">
          チームみらいでは、いどばた政策を活用して政策集の策定と改善を行っています。市民からの意見を反映した政策立案プロセスを実現しています。
        </p>
        <div className="mt-4">
          <a
            href="https://policy.team-mir.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({
              variant: 'outline',
            })} h-9 border-black inline-flex items-center gap-2`}
          >
            政策集を見る
            <NavigateNextIcon />
          </a>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <XEmbed url="https://x.com/takahiroanno/status/1923253426747736186" width={325} />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">有志による解説漫画：</p>
            <div>
              <XEmbed url="https://x.com/0Sbd6vJNiC7619/status/1939166957200384035" width={325} />
            </div>
          </div>
        </div>

        <h3 className="text-2xl mt-8">チームみらいによる政策提案のプラッシュアップ</h3>
        <p className="mt-4">
          政策集に対して変更提案を広く募集するためにいどばた政策立案が使われています。
          詳細は<a href="https://policy.team-mir.ai/view/" className="text-blue-600 hover:underline">こちら</a>
        </p>
      </section>
      <CoCreation />
    </div>
  )
}
