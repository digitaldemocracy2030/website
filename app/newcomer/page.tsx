import { marked } from 'marked'
import fs from 'fs'
import path from 'path'

export const metadata = {
  title: 'はじめての方へ | デジタル民主主義2030',
  description:
    'DD2030 に新しく参加する人向けに、全体像・最近の雰囲気・参加入口・初めのステップをまとめたオンボーディングガイド',
}

export default async function Page() {
  const filePath = path.join(process.cwd(), 'markdown', 'newcomer.md')
  const markdown = fs.readFileSync(filePath, 'utf-8')
  const html = await marked(markdown)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'DD2030 新規参加ガイド',
    description: metadata.description,
    url: 'https://dd2030.org/newcomer',
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
