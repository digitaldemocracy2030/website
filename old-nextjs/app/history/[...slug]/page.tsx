import path from 'path'
import fs from 'fs'
import { marked } from 'marked'
import { Markdown } from '@/components/Markdown'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { CoCreation } from '@/components/CoCreation'

export async function generateStaticParams() {
  // markdownディレクトリのパス
  const markdownDir = path.join(process.cwd(), 'markdown')
  const historyDir = path.join(markdownDir, 'history')
  
  const slugs: { slug: string[] }[] = []
  
  if (fs.existsSync(historyDir)) {
    const weekDirs = fs.readdirSync(historyDir).filter(dir => dir.startsWith('week'))
    
    weekDirs.forEach(weekDir => {
      const weekDirPath = path.join(historyDir, weekDir)
      const weekFiles = fs.readdirSync(weekDirPath)
      
      weekFiles.forEach(file => {
        if (file.endsWith('.md')) {
          const slug = [weekDir, file.replace(/\.md$/, '')]
          slugs.push({ slug })
        }
      })
    })
  }
  
  return slugs
}

type PageProps = {
  params: Promise<{
    slug: string[]
  }>
}

export default async function Page({ params }: PageProps) {
  const slug = (await params).slug
  let filePath = ''
  
  if (Array.isArray(slug) && slug.length >= 2) {
    const weekDir = slug[0]
    const fileBase = slug[1]
    filePath = path.join(process.cwd(), 'markdown', 'history', weekDir, `${fileBase}.md`)
  }

  // ファイルが存在するか確認
  if (!fs.existsSync(filePath)) {
    // ファイルが存在しない場合はデフォルトのabout.mdを表示
    return (
      <section>
        <p>ファイルが存在しません。</p>
        <Link href="/">トップページへ</Link>
      </section>
    )
  }

  // ファイルが存在する場合はそのファイルを表示
  const markdown = fs.readFileSync(filePath, 'utf-8')
  const content = await marked(markdown)

  // ナビゲーションリンクの生成
  const navigation = generateNavigationLinks(slug)

  return (
    <div>
      <Markdown content={content} />
      <CoCreation isHistory />
      {/* ナビゲーションリンク */}
      <div className="mt-2 mb-1 flex justify-center items-center gap-4">
        {navigation.prev ? (
          <Link
            href={`/history/${navigation.prev.join('/')}`}
            passHref
            className={`${buttonVariants()} h-11`}
          >
            <NavigateBeforeIcon />
            前へ
            <span></span>
          </Link>
        ) : (
          <div></div>
        )}

        <Link href="/history" passHref>
          一覧に戻る
        </Link>

        {navigation.next ? (
          <Link
            href={`/history/${navigation.next.join('/')}`}
            passHref
            className={`${buttonVariants()} h-11`}
          >
            <span></span>次へ
            <NavigateNextIcon />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

// ナビゲーションリンクを生成する関数
function generateNavigationLinks(currentSlug: string[]): {
  prev: string[] | null
  next: string[] | null
} {
  const result = {
    prev: null as string[] | null,
    next: null as string[] | null,
  }

  // markdownディレクトリのパス
  const markdownDir = path.join(process.cwd(), 'markdown')
  const historyDir = path.join(markdownDir, 'history')

  if (Array.isArray(currentSlug) && currentSlug.length >= 2) {
    const weekDir = currentSlug[0] // week1_20250404
    const fileBase = currentSlug[1] // slack または project
    
    const weekMatch = weekDir.match(/week(\d+)_/)
    if (weekMatch) {
      const currentWeek = parseInt(weekMatch[1], 10)
      const prevWeek = currentWeek - 1
      const nextWeek = currentWeek + 1
      
      if (fs.existsSync(historyDir)) {
        const weekDirs = fs.readdirSync(historyDir)
          .filter(dir => dir.startsWith('week'))
          .sort((a, b) => {
            const aMatch = a.match(/week(\d+)_/)
            const bMatch = b.match(/week(\d+)_/)
            const aWeek = aMatch ? parseInt(aMatch[1], 10) : 0
            const bWeek = bMatch ? parseInt(bMatch[1], 10) : 0
            return aWeek - bWeek
          })
          
        const prevDirIndex = weekDirs.findIndex(dir => {
          const match = dir.match(/week(\d+)_/)
          return match && parseInt(match[1], 10) === prevWeek
        })
        
        if (prevDirIndex >= 0) {
          const prevDir = weekDirs[prevDirIndex]
          const prevDirPath = path.join(historyDir, prevDir)
          
          if (fileBase === 'slack' && fs.existsSync(path.join(prevDirPath, 'slack.md'))) {
            result.prev = [prevDir, 'slack']
          } else if (fs.existsSync(path.join(prevDirPath, `${fileBase}.md`))) {
            result.prev = [prevDir, fileBase]
          }
        }
        
        const nextDirIndex = weekDirs.findIndex(dir => {
          const match = dir.match(/week(\d+)_/)
          return match && parseInt(match[1], 10) === nextWeek
        })
        
        if (nextDirIndex >= 0) {
          const nextDir = weekDirs[nextDirIndex]
          const nextDirPath = path.join(historyDir, nextDir)
          
          if (fileBase === 'slack' && fs.existsSync(path.join(nextDirPath, 'slack.md'))) {
            result.next = [nextDir, 'slack']
          } else if (fs.existsSync(path.join(nextDirPath, `${fileBase}.md`))) {
            result.next = [nextDir, fileBase]
          }
        }
      }
    }
  }

  return result
}
