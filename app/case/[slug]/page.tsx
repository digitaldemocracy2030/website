import { getAllCaseIds, getCaseData } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import { CoCreation } from '@/components/CoCreation'

const directoryPath = 'markdown/_cases'

export async function generateStaticParams() {
  const paths = getAllCaseIds(directoryPath)
  return paths.map((path) => ({ slug: path.params.slug }))
}

export default async function CasePage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const caseData = await getCaseData(directoryPath, `${slug}.md`)

  if (!caseData) {
    notFound()
  }

  return (
    <>
      <section className="mx-auto mt-10 max-w-xl">
        <div
          className="markdown-content max-w-none"
          dangerouslySetInnerHTML={{ __html: caseData.contentHtml }}
        />
      </section>
      <section className='mx-auto mt-15 max-w-xl'>
        <CoCreation />
      </section>
    </>
  )
}
