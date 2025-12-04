import { promises as fs } from 'fs' // promises API をインポート
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'content/docs')

export interface DocNavItem {
  title: string
  href: string
  items?: DocNavItem[] // 子要素
  isIndex?: boolean
}

// ディレクトリを再帰的に探索し、ナビゲーションツリーを構築する関数
async function readDirectory(dir: string, relativePath: string = ''): Promise<DocNavItem[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const items: DocNavItem[] = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const currentRelativePath = path.join(relativePath, entry.name).replace(/\\/g, '/') // Windows パス区切り文字対応
    const sectionTitle = entry.name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    if (entry.isDirectory()) {
      // ディレクトリの場合、再帰的に探索
      const children = await readDirectory(fullPath, currentRelativePath)
      // ディレクトリに対応するインデックスファイル (index.mdx など) を探す
      const indexFile = children.find(
        (item) =>
          item.href === `/docs${currentRelativePath === '' ? '' : '/' + currentRelativePath}`,
      )
      const title = indexFile ? indexFile.title : sectionTitle // indexがあればそのタイトル、なければディレクトリ名

      items.push({
        title: title,
        href: `/docs${currentRelativePath === '' ? '' : '/' + currentRelativePath}`, // ディレクトリへのリンク（暫定）
        items: children.filter((item) => item !== indexFile), // index ファイル以外を子要素に
      })
    } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      // Markdown ファイルの場合
      const fileContents = await fs.readFile(fullPath, 'utf8')
      const { data } = matter(fileContents)
      const slug = entry.name.replace(/\.(md|mdx)$/, '')
      const href = `/docs${relativePath === '' ? '' : '/' + relativePath}${
        slug === 'index' ? '' : '/' + slug
      }`

      // index.mdx は親ディレクトリの項目として処理するため、ここでは追加しない場合もある
      // 今回は index.mdx もリストに含めるが、ディレクトリの項目と統合することも検討
      if (slug !== 'index') {
        // index 以外を追加
        items.push({
          title: data.title || slug, // Front Matter の title を優先
          href: href,
        })
      } else {
        // index ファイルの情報は親ディレクトリの処理で使うために一時的に保持
        items.push({
          title: data.title || 'Overview', // Front Matter の title を優先
          href: href,
          isIndex: true, // 目印をつけても良い
        })
      }
    }
  }

  // 並び順を調整（例: index を先頭に、など。必要に応じて実装）
  items.sort((a, b) => {
    // 簡単なソート例: index を含むパスを上に
    const aIsIndex = a.href.endsWith('/docs' + (relativePath === '' ? '' : '/' + relativePath))
    const bIsIndex = b.href.endsWith('/docs' + (relativePath === '' ? '' : '/' + relativePath))
    if (aIsIndex) return -1
    if (bIsIndex) return 1
    // ディレクトリをファイルより上に（オプション）
    const aIsDir = !!a.items
    const bIsDir = !!b.items
    if (aIsDir && !bIsDir) return -1
    if (!aIsDir && bIsDir) return 1
    // アルファベット順
    return a.title.localeCompare(b.title)
  })

  return items
}

export async function getDocTree(): Promise<DocNavItem[]> {
  return await readDirectory(docsDirectory)
}

// 指定されたslug配列からMarkdownファイルのパスを取得する関数
// export function getDocPath(slug: string[] | undefined): string | null {
//   const slugPath = slug ? slug.join('/') : 'index'
//   let filePath = path.join(docsDirectory, `${slugPath}.mdx`)

//   // .mdx がなければ .md を試す
//   if (!fs.existsSync(filePath)) {
//     filePath = path.join(docsDirectory, `${slugPath}.md`)
//     if (!fs.existsSync(filePath)) {
//       // それでもなければ、ディレクトリの index.mdx を試す
//       filePath = path.join(docsDirectory, slugPath, 'index.mdx')
//       if (!fs.existsSync(filePath)) {
//         filePath = path.join(docsDirectory, slugPath, 'index.md')
//         if (!fs.existsSync(filePath)) {
//           return null // ファイルが見つからない
//         }
//       }
//     }
//   }
//   return filePath
// }

export async function getDocPathAsync(slug: string[] | undefined): Promise<string | null> {
  const slugPath = slug ? slug.join('/') : 'index'

  // 非同期でファイルの存在を確認するヘルパー関数
  const checkFile = async (filePath: string): Promise<boolean> => {
    try {
      await fs.access(filePath) // fs.promises.access を使用
      return true
    } catch {
      return false
    }
  }

  let filePath = path.join(docsDirectory, `${slugPath}.mdx`)
  if (await checkFile(filePath)) return filePath

  filePath = path.join(docsDirectory, `${slugPath}.md`)
  if (await checkFile(filePath)) return filePath

  // ディレクトリの index.mdx
  filePath = path.join(docsDirectory, slugPath, 'index.mdx')
  if (await checkFile(filePath)) return filePath

  // ディレクトリの index.md
  filePath = path.join(docsDirectory, slugPath, 'index.md') // タイプミスも修正済み
  if (await checkFile(filePath)) return filePath

  return null // ファイルが見つからない
}

// Markdownファイルの内容とメタデータを読み込む関数
export async function getDocContent(filePath: string) {
  const fileContents = await fs.readFile(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    frontmatter: data,
    content: content,
  }
}
