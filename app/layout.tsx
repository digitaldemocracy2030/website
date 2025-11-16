import { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './global.css'
import './content.css'
import { biz_udGothic400, inter } from '@/lib/fonts'
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
  title: 'デジタル民主主義2030',
  description: 'デジタル民主主義2030プロジェクトポータルサイト',
  openGraph: {
    title: 'デジタル民主主義2030',
    description: 'デジタル民主主義2030プロジェクトポータルサイト',
    url: 'https://dd2030.org',
    siteName: 'デジタル民主主義2030',
    images: [
      {
        url: 'https://dd2030.org/ogp.png',
        width: 1200,
        height: 840,
        alt: 'デジタル民主主義2030',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'デジタル民主主義2030',
    description: 'デジタル民主主義2030プロジェクトポータルサイト',
    images: ['https://dd2030.org/ogp.png'],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'デジタル民主主義2030',
      url: 'https://dd2030.org',
      description:
        '技術の力で市民の声を活かし、政治をより良い形に進化させることを目指したプロジェクトです。',
      inLanguage: 'ja',
      // publisher: {
      //   '@type': 'Organization',
      //   name: 'デジタル民主主義2030運営事務局',
      //   url: 'https://example.com/about',
      //   logo: {
      //     '@type': 'ImageObject',
      //     url: 'https://example.com/logo.png',
      //   },
      // },
      sameAs: [
        'https://github.com/digitaldemocracy2030',
        'https://join.slack.com/t/dd2030/shared_invite/zt-3bg5nmxiv-CB9LXLpvxH_JvJil_EPa_w',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'デジタル民主主義2030とは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '技術の力で市民の声を活かし、政治をより良い形に進化させることを目指したプロジェクトです。',
          },
        },
        {
          '@type': 'Question',
          name: '誰がこのプロジェクトを運営していますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '特定の団体が運営を担うのではなく、 一人ひとりが対等な立場で関わり、協力してプロジェクトを前進させることを目指した、緩やかにつながる参加型のコミュニティを志向します。',
          },
        },
        {
          '@type': 'Question',
          name: '一般市民も参加できますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい、どなたでもご参加いただけます。<br/ ><a href="https://join.slack.com/t/dd2030/shared_invite/zt-3bg5nmxiv-CB9LXLpvxH_JvJil_EPa_w">こちらのSlack</a>からご参加下さい。',
          },
        },
      ],
    },
  ]
  return (
    <html
      lang="ja"
      className={`${biz_udGothic400.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <GoogleTagManager gtmId="GTM-KJVBDN9P" />
      <body>
        <NextTopLoader showSpinner={false} />
        {/* JSON-LD構造化データを埋め込み */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>
          <div className="max-w-7xl mx-auto px-4 py-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
