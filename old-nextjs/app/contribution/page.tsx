import { marked } from 'marked'
import path from 'path'
import fs from 'fs'

export default async function Page() {
  const filePath = path.join(process.cwd(), 'markdown', 'contribution.md')
  const markdown = fs.readFileSync(filePath, 'utf-8')
  const content = await marked(markdown)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'デジタル民主主義2030（DD2030）貢献者向けガイドライン',
    description:
      'DD2030の貢献者向けガイドライン。政治活動・選挙活動・プロジェクト活動における注意点を記載。',
    url: 'https://dd2030.org/contribution',
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* JSON-LD構造化データを埋め込み */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
