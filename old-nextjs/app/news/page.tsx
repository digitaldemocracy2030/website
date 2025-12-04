import Link from 'next/link'

export default function NewsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'お知らせ',
    description: 'デジタル民主主義2030プロジェクトからのお知らせ',
    url: 'https://dd2030.org/news',
  }

  return (
    <div className="mx-auto max-w-xl mt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-3xl font-bold mb-8">お知らせ</h1>
      <ul className="space-y-4">
        <li className="border-b pb-4">
          <Link href="/news/kouchou-ai-v3" className="text-xl text-blue-600 hover:underline">
            広聴AI 安定版 v3.0.0 リリースのお知らせ
          </Link>
          <p className="text-gray-600 mt-1">2025年5月30日</p>
          <p className="mt-2">
            LocalLLM対応とコスト削減機能を搭載した広聴AI安定版v3.0.0をリリースしました。API費用なしでの利用が可能になり、ソースリンク機能も追加されています。
          </p>
        </li>
        <li className="border-b pb-4">
          <Link href="/news/kouchou-ai-v2" className="text-xl text-blue-600 hover:underline">
            広聴AI 安定版 v2.0.0 リリースのお知らせ
          </Link>
          <p className="text-gray-600 mt-1">2025年4月29日</p>
          <p className="mt-2">
            多くの改善と新機能を搭載した広聴AI安定版v2.0.0をリリースしました。使いやすさの向上、新機能の追加、表示の改善など、様々な点が強化されています。
          </p>
        </li>
      </ul>
    </div>
  )
}
