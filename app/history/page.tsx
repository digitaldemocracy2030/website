import path from 'path'
import fs from 'fs'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { marked } from 'marked'
import { Markdown } from '@/components/Markdown'

export default async function Page() {
  const markdownDir = path.join(process.cwd(), 'markdown')
  const historyDir = path.join(markdownDir, 'history')

  const weekDirs = fs.existsSync(historyDir)
    ? fs.readdirSync(historyDir).filter((dir: string) => dir.startsWith('week'))
    : []

  const getWeekFromDirname = (dirname: string) => {
    const match = dirname.match(/week(\d+)_/)
    return match && match[1] ? parseInt(match[1], 10) : 0
  }

  const getProjectDisplayName = (projectName: string) => {
    switch (projectName) {
      case 'kouchou-ai':
        return '広聴AI'
      case 'idobata':
        return 'いどばた'
      case 'polimoney':
        return 'Polimoney'
      case 'website':
        return 'Webサイト'
      default:
        return projectName.charAt(0).toUpperCase() + projectName.slice(1)
    }
  }

  const weeklyActivities = {} as Record<
    number,
    { slack: string[]; github: Record<string, string[]> }
  >

  const weeklyDigests = {} as Record<number, string>

  weekDirs.forEach((weekDir: string) => {
    const week = getWeekFromDirname(weekDir)
    if (week === 0) return

    if (!weeklyActivities[week]) {
      weeklyActivities[week] = { slack: [], github: {} }
    }

    const weekDirPath = path.join(historyDir, weekDir)
    const weekFiles = fs.readdirSync(weekDirPath)

    if (weekFiles.includes('digest.md')) {
      const digestPath = path.join(weekDirPath, 'digest.md')
      const digestContent = fs.readFileSync(digestPath, 'utf-8')
      weeklyDigests[week] = digestContent
    }

    if (weekFiles.includes('slack.md')) {
      weeklyActivities[week].slack.push(`${weekDir}/slack`)
    }

    weekFiles.forEach((file: string) => {
      if (file !== 'slack.md' && file !== 'digest.md' && file.endsWith('.md')) {
        const project = file.replace('.md', '')
        
        if (!weeklyActivities[week].github[project]) {
          weeklyActivities[week].github[project] = []
        }
        
        weeklyActivities[week].github[project].push(`${weekDir}/${project}`)
      }
    })
  })

  const sortedWeeks = Object.keys(weeklyActivities)
    .map((week: string) => parseInt(week, 10))
    .sort((a, b) => a - b)

  return (
    <section className="mx-auto max-w-xl">
      <h2 className="text-3xl">プロジェクトの歴史</h2>

      {/* 週ごとの活動記録（時系列順） */}
      {sortedWeeks.map((week: number) => (
        <section key={week}>
          <h3 className="text-2xl mt-8 mb-4">第{week}週の活動</h3>

          {/* 週のダイジェスト表示 */}
          {weeklyDigests[week] && (
            <div className="mb-6">
              <Markdown content={marked.parse(weeklyDigests[week]) as string} />
            </div>
          )}

          {/* Slack活動 */}
          {weeklyActivities[week].slack.map((file: string) => (
            <Link key={file}
              href={`/history/${file}`}
              className={`${buttonVariants({ variant: 'link' })} h-11 mt-4`}
            >
              Slack
            </Link>
          ))}
          {
            Object.entries(weeklyActivities[week].github).map(
              ([project, files]: [string, string[]]) => (

                files.map((file: string) => (
                  <Link key={file}
                    href={`/history/${file}`}
                    className={`${buttonVariants({ variant: 'link' })} h-11 mt-4`}
                  >
                    {getProjectDisplayName(project)}
                  </Link>
                )))
            )
          }
        </section >
      ))
      }


    </section >
  )
}
