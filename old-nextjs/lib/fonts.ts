import { BIZ_UDGothic, Inter } from 'next/font/google'

export const biz_udGothic400 = BIZ_UDGothic({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-biz-udgothic400',
  display: 'swap',
})

export const biz_udGothic700 = BIZ_UDGothic({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-biz-udgothic700',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
})
