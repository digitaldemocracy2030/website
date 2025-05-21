import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { CoCreation } from '@/components/CoCreation'

export default function CaseListPage() {
  const caseOrder = [
    { id: 'kouchou-ai', title: '広聴AI' },
    { id: 'idobata', title: 'いどばた' },
    { id: 'polimoney', title: 'Polimoney' },
  ]

  return (
    <div>
      <section className="mx-auto mt-10 max-w-xl">
        <h2 className="text-3xl">活用事例</h2>
        <div className="mt-4 flex flex-col items-start gap-4">
          {caseOrder.map(({ id, title }) => (
            <Link key={id} href={`/case/${id}`} className={`${buttonVariants()} h-11 block`}>
              <span></span>
              {title}
              <NavigateNextIcon />
            </Link>
          ))}
        </div>
      </section>
      <CoCreation />
    </div>
  )
}
