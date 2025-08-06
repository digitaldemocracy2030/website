import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const inputDir = './webp-converter'
const outputDir = './public'

// 入力フォルダの中身を全部読み込む
fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return // 対応画像だけ処理

  const inputPath = path.join(inputDir, file)
  const outputPath = path.join(outputDir, path.parse(file).name + '.webp')

  sharp(inputPath)
    .webp({ quality: 100, lossless: true, nearLossless: false }) // 品質調整可能
    .toFile(outputPath)
    .then(() => {
      console.log(`変換成功: ${file} → ${path.basename(outputPath)}`)
    })
    .catch((err) => {
      console.error(`変換失敗: ${file}`, err)
    })
})
