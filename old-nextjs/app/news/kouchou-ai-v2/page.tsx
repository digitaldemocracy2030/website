import path from 'path'
import fs from 'fs'
import { marked } from 'marked'
import { Markdown } from '@/components/Markdown'
import Link from 'next/link'

export default async function Page() {
  const filePath = path.join(process.cwd(), 'markdown', 'kouchou-ai-v2.md')
  const markdown = fs.readFileSync(filePath, 'utf-8')
  const content = await marked(markdown)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: '広聴AI 安定版 v2.0.0 リリースのお知らせ',
    description: '多くの改善と新機能を搭載した広聴AI安定版v2.0.0をリリースしました。',
    datePublished: '2025-04-29T00:00:00+09:00',
    url: 'https://dd2030.org/news/kouchou-ai-v2',
  }
  
  return (
    <div className="mx-auto max-w-xl mt-10 mb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/news" className="text-blue-600 hover:underline mb-6 inline-block">
        ← お知らせ一覧に戻る
      </Link>
      <Markdown content={content} />
    </div>
  )
}
