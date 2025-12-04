import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

interface CocreationProps {
  isHistory?: boolean
}

export function CoCreation({ isHistory = false }: CocreationProps) {
  return (
    <section className={`${maxW(isHistory)} mx-auto mt-15`}>
      <div className="gradient w-full h-0.5"></div>
      <h2 className="text-2xl mt-7">未来を共に創る</h2>
      <p className="mt-4">
        実証実験に参画されたい方、寄付にご協力いただける方、開発・デザイン・改善・コミュニティ運営に興味のある方は、こちらから。
      </p>
      <div className="mt-4">
        <Link href="/co-creation" className={`${buttonVariants()} h-11`}>
          <span></span>
          もっと詳しく
          <NavigateNextIcon />
        </Link>
      </div>
    </section>
  )
}
function maxW(isH: boolean) {
  if (isH) {
    return 'max-w-[800px]'
  }
  return 'max-w-xl'
}
