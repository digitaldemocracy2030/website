import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export type MatterResult = {
  title?: string
  date?: string
  excerpt?: string
}

/**
 * ディレクトリ内のファイル名を取得する
 * @param directoryPath ディレクトリパス
 * @returns ファイル名の配列
 */
export function getAllCaseIds(directoryPath: string) {
  const fileNames = fs.readdirSync(path.join(process.cwd(), directoryPath))
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

/**
 * マークダウンファイルを読み込んで、メタデータとHTMLを取得する
 * @param directoryPath ディレクトリパス
 * @param fileName ファイル名
 * @returns メタデータとHTML
 */
export async function getCaseData(directoryPath: string, fileName: string): Promise<MatterResult & { contentHtml: string }> {
  const fullPath = path.join(process.cwd(), directoryPath, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    contentHtml,
    ...matterResult.data,
  }
}
