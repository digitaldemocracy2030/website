import path from 'path'
import fs from 'fs'
import { marked } from 'marked'
import { Markdown } from '@/components/Markdown'
import Link from 'next/link'

export default async function Page() {
  const filePath = path.join(process.cwd(), 'markdown', 'kouchou-ai-v3.md')
  const markdown = fs.readFileSync(filePath, 'utf-8')
  const content = await marked(markdown)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: '広聴AI 安定版 v3.0.0 リリースのお知らせ',
    description: 'LocalLLM対応とコスト削減機能を搭載した広聴AI安定版v3.0.0をリリースしました。',
    datePublished: '2025-05-30T00:00:00+09:00',
    url: 'https://dd2030.org/news/kouchou-ai-v3',
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
