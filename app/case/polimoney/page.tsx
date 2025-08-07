
import { CoCreation } from '@/components/CoCreation'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { buttonVariants } from '@/components/ui/button'
export default async function Page() {
  return (
    <div>
      <section className="mx-auto max-w-xl mt-10">
        <h2 className="text-3xl">Polimoneyの活用事例</h2>
        <h3 className="text-2xl mt-8">2024年:安野たかひろさん(チームみらい)の活動</h3>
        <p className="mt-4">
          チームみらい党首の安野たかひろさんがPolimoneyを活用し、「2024年
          デジタル民主主義を考える会」での資金の収支を公開しました。
        </p>
        <div className="mt-4">
          <a
            href="https://polimoney.dd2030.org/takahiro-anno/2024"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({
              variant: 'outline',
            })} h-9 border-black inline-flex items-center gap-2`}
          >
            事例を見る
            <NavigateNextIcon />
          </a>
        </div>
        <h3 className="text-2xl mt-8">2024年:出井良輔さん(自由民主党)の活動</h3>
        <p className="mt-4">
          自由民主党の出井良輔さんがPolimoneyを活用し、「2024年
          自由民主党東京都中野区第二十支部」での資金収支を公開しました。
        </p>
        <div className="mt-4">
          <a
            href="https://polimoney.dd2030.org/ryosuke-idei/2024"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({
              variant: 'outline',
            })} h-9 border-black inline-flex items-center gap-2`}
          >
            事例を見る
            <NavigateNextIcon />
          </a>
        </div>
        <h3 className="text-2xl mt-8">2022~2024年:藤崎剛暉さん(自由民主党)の活動</h3>
        <p className="mt-4">
          自由民主党の藤崎剛暉さんがPolimoneyを活用し、「2022~2024年
          自由民主党東京都墨田区第十六支部」での資金収支を公開しました。
        </p>
        <div className="mt-4">
          <a
            href="https://polimoney.dd2030.org/koki-fujisaki/2024"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({
              variant: 'outline',
            })} h-9 border-black inline-flex items-center gap-2`}
          >
            事例を見る
            <NavigateNextIcon />
          </a>
        </div>
      </section>
      <CoCreation />
    </div>
  )
}
