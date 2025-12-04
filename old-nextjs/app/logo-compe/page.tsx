import path from 'path'
import fs from 'fs'
import { marked } from 'marked'
import { Markdown } from '@/components/Markdown'
import { CoCreation } from '@/components/CoCreation'

export default async function Page() {
  const filePath = path.join(process.cwd(), 'markdown', 'logo-compe.md')
  const markdown = fs.readFileSync(filePath, 'utf-8')
  const content = await marked(markdown)

  return (
    <div className="max-w-4xl mx-auto">
      <Markdown content={content} />
      <CoCreation />
    </div>
  )
}
