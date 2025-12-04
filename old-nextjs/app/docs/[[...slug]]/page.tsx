import { notFound, redirect } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc' // RSC 用のコンポーネント
import { getDocPathAsync, getDocContent, getDocTree, DocNavItem } from '@/lib/docs'
import { Metadata } from 'next'
// rehype-pretty-code の設定（オプション）
import rehypePrettyCode from 'rehype-pretty-code'
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code'
import type { Element } from 'hast'

// rehype-pretty-code のオプション (例: GitHub Dark テーマ)
const prettyCodeOptions: RehypePrettyCodeOptions = {
  theme: 'github-dark', // or 'github-light', etc.
  onVisitLine(node: Element) {
    node.properties = node.properties || {}
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node: Element) {
    node.properties = node.properties || {}
    const className = node.properties.className
    if (Array.isArray(className)) {
      className.push('line--highlighted')
    } else {
      // 既存が文字列や undefined の場合も考慮して配列にする
      node.properties.className = [String(className || ''), 'line--highlighted'].filter(Boolean)
    }
  },
  onVisitHighlightedChars(node: Element) {
    node.properties = node.properties || {}
    // className を配列で上書き
    node.properties.className = ['word--highlighted']
  },
}

interface DocPageProps {
  params: Promise<{
    slug?: string[]
  }>
}

// メタデータを生成する関数
export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { slug } = await params
  const filePath = await getDocPathAsync(slug)
  if (filePath === null) {
    return { title: 'Not Found' }
  }
  try {
    const { frontmatter } = await getDocContent(filePath)
    return {
      // title など、frontmatter のプロパティがない場合に備える
      title: frontmatter?.title ?? 'Docs',
      description: frontmatter?.description ?? '',
    }
  } catch (error) {
    console.error('Error getting doc content in generateMetadata:', error)
    return { title: 'Error', description: 'Could not load content' }
  }
}

// 静的パスを生成する関数 (ビルド時にページを事前生成)
export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const tree = await getDocTree() // ナビゲーションツリーを取得

  function extractSlugs(items: DocNavItem[]): string[] {
    let slugs: string[] = []
    items.forEach((item) => {
      if (item.href) {
        const slugParts = item.href
          .split('/')
          .filter((part: string) => part !== '' && part !== 'docs')
        
        const slug = slugParts.join('/')
        if (slug) {
          slugs.push(slug)
        }
      }
      if (item.items) {
        slugs = slugs.concat(extractSlugs(item.items))
      }
    })
    return Array.from(new Set(slugs))
  }

  const allSlugs = extractSlugs(tree)
  
  const result = allSlugs.map((slug) => ({
    slug: slug.split('/'),
  }))
  
  result.push({ slug: ['getting-started', 'introduction'] })
  
  return result
}

// ページコンポーネント
export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params
  
  if (!slug || slug.length === 0) {
    return redirect('/docs/getting-started/introduction')
  }
  
  const filePath = await getDocPathAsync(slug)

  if (filePath === null) {
    console.error(`Doc file not found for slug: ${slug ?? 'index'}`)
    notFound() // ファイルが見つからない場合は 404
  }

  try {
    const { content } = await getDocContent(filePath)

    return (
      <article className="markdown-body max-w-none">
        {/* Markdownコンテンツのレンダリング */}
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [],
              rehypePlugins: [
                [rehypePrettyCode, prettyCodeOptions], // コードハイライトを適用
              ],
            },
          }}
          // ここでカスタムコンポーネントを渡すことも可能
          // components={{ Button: YourCustomButton }}
        />
      </article>
    )
  } catch (error) {
    console.error(`Error processing doc file: ${filePath}`, error)
    notFound() // 処理中にエラーが発生した場合も 404
  }
}
