import fs from 'fs'
import path from 'path'
import {marked} from 'marked'
import {Markdown} from '@/components/Markdown'

export default async function Page() {
  const filePath = path.join(process.cwd(), 'markdown', 'privacy.md')
  const markdown = fs.readFileSync(filePath, 'utf-8')
  const content = await marked(markdown)
  return <Markdown content={content}/>
}
