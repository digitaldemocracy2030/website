const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const markdownDir = path.join(process.cwd(), 'markdown')

const historyDir = path.join(markdownDir, 'history')
if (!fs.existsSync(historyDir)) {
  fs.mkdirSync(historyDir, { recursive: true })
}

const getDateFromGit = (filename) => {
  try {
    const dateStr = execSync(`git log --name-only --pretty=format:"%ad" --date=short -- ${path.join('markdown', filename)} | head -1`).toString().trim()
    return dateStr.replace(/-/g, '')
  } catch (error) {
    return '20250404'
  }
}

const getWeekFromFilename = (filename) => {
  if (filename.startsWith('slack') || filename.startsWith('github')) {
    const match = filename.match(/(?:slack|github)(\d+)w/)
    return match && match[1] ? parseInt(match[1], 10) : 0
  }
  return 0
}

const getProjectFromFilename = (filename) => {
  if (filename.startsWith('github')) {
    const match = filename.match(/github\d+w-(.+)\.md/)
    return match && match[1] ? match[1] : 'unknown'
  }
  return null
}

const moveFiles = () => {
  const files = fs.readdirSync(markdownDir)
  
  const weeklyFiles = {}
  
  files.forEach(file => {
    if ((file.startsWith('slack') || file.startsWith('github')) && file.endsWith('.md')) {
      const week = getWeekFromFilename(file)
      if (!weeklyFiles[week]) {
        weeklyFiles[week] = []
      }
      weeklyFiles[week].push(file)
    }
  })
  
  Object.keys(weeklyFiles).forEach(week => {
    if (week > 0) {
      const firstFile = weeklyFiles[week][0]
      const date = getDateFromGit(firstFile)
      
      const weekDir = path.join(historyDir, `week${week}_${date}`)
      if (!fs.existsSync(weekDir)) {
        fs.mkdirSync(weekDir, { recursive: true })
      }
      
      weeklyFiles[week].forEach(file => {
        const sourcePath = path.join(markdownDir, file)
        
        let targetFilename
        if (file.startsWith('slack')) {
          targetFilename = 'slack.md'
        } else if (file.startsWith('github')) {
          const project = getProjectFromFilename(file)
          targetFilename = `${project}.md`
        }
        
        if (targetFilename) {
          const targetPath = path.join(weekDir, targetFilename)
          fs.copyFileSync(sourcePath, targetPath)
          console.log(`Copied ${sourcePath} to ${targetPath}`)
        }
      })
    }
  })
  
  console.log('File reorganization completed.')
}

moveFiles()
