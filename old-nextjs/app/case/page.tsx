import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { CoCreation } from '@/components/CoCreation'
export default async function Page() {
  return (
    <div>
      <section className="mx-auto max-w-xl mt-10">
        <h2 className="text-3xl">活用事例</h2>
        <div className="mt-4 flex flex-col items-start gap-4">
          <Link href="/case/kouchou-ai" className={`${buttonVariants()} h-11 block`}>
            <span></span>
            広聴AI
            <NavigateNextIcon />
          </Link>
          <Link href="/case/idobata" className={`${buttonVariants()} h-11 block`}>
            <span></span>
            いどばた
            <NavigateNextIcon />
          </Link>
          <Link href="/case/polimoney" className={`${buttonVariants()} h-11 block`}>
            <span></span>
            Polimoney
            <NavigateNextIcon />
          </Link>
        </div>
      </section>
      <CoCreation />
    </div>
  )
}
