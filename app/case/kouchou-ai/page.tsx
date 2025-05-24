import { CoCreation } from '@/components/CoCreation'
import { buttonVariants } from '@/components/ui/button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
export default async function Page() {
  return (
    <div>
      <section className="mx-auto max-w-xl mt-10">
        <h2 className="text-3xl">広聴AIの活用事例</h2>
        <h3 className="text-2xl mt-8">選挙報道</h3>
        <p className="mt-4">
          衆議院選挙に関するX上の意見を分析・可視化し、報道の透明性を高める試みに活用されました。
        </p>
        <h3 className="text-2xl mt-8">東京都の長期戦略「2050東京戦略（案）」の策定</h3>
        <p className="mt-4">
          東京都の長期戦略「2050東京戦略（案）」の策定において、市民の声を集める取り組みで活用されました。
        </p>
        <h3 className="text-2xl mt-8">宇多津町のブロードリスニング</h3>
        <p className="mt-4">
          「第2次宇多津町総合計画」の策定のための町民アンケート（自由記述396件）をAIで分析・整理する先進的なトライアルで活用されました。従来は多くの時間を要していた意見のとりまとめ作業をAIが10分程度で処理し、町民の声をより政策に反映しやすくしました。
        </p>
        <div className="mt-4">
          <a 
            href="https://www.town.utazu.lg.jp/page/4114.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${buttonVariants({ variant: 'outline' })} h-9 border-black inline-flex items-center gap-2`}
          >
            宇多津町での取り組み
            
            <NavigateNextIcon />

          </a>
        </div>
      </section>
      <CoCreation />
    </div>
  )
}
