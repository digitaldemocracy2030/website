import path from 'path'
import fs from 'fs'
import { marked } from 'marked'
import { Markdown } from '@/components/Markdown'
import { CoCreation } from '@/components/CoCreation'
import { TopScrollButton } from '@/components/TopScrollButton'

export default async function Page() {
  const filePath = path.join(process.cwd(), 'markdown', 'about.md')
  const markdown = fs.readFileSync(filePath, 'utf-8')
  const content = await marked(markdown)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'デジタル民主主義2030とは',
    description: 'デジタル民主主義の概要やミッションについてのページ',
    url: 'https://dd2030.org/about',
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* JSON-LD構造化データを埋め込み */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Markdown content={content} />
      <CoCreation />
      {/* トップに戻るボタン */}
      <TopScrollButton />
    </div>
  )
}
