'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import {
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  HatenaShareButton,
  XIcon,
  FacebookIcon,
  LineIcon,
  HatenaIcon,
} from 'react-share'

import { motion, AnimatePresence } from 'framer-motion'

const titleMap: Record<string, string> = {
  '/about': 'デジタル民主主義2030とは',
  '/activity': '活動記録',
  '/case': '活用事例',
  '/case/idobata': 'いどばたの活用事例',
  '/case/kouchou-ai': '広聴AIの活用事例',
  '/case/polimoney': 'Polimoneyの活用事例',
  '/co-creation': '未来を共に創る',
  '/contribution': 'デジタル民主主義2030（DD2030）貢献者向けガイドライン',
  '/history': 'プロジェクトの歴史',
  '/idobata': 'いどばた',
  '/kouchou-ai': '広聴AI',
  '/logo-compe': 'デジタル民主主義 2030 ロゴデザインコンペ',
  '/news': 'お知らせ',
  '/policies/privacy': 'プライバシーポリシー',
  '/policies/terms': '利用規約',
  '/polimoney': 'Polimoney',
}

export default function SNSSharePanel({ className = '' }: { className?: string }) {
  const pathname = usePathname()
  const [origin, setOrigin] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin)
    }
  }, [])

  const siteTitle = 'デジタル民主主義2030プロジェクトポータルサイト'
  const title = titleMap[pathname]
  const shareTitle = title ? `${siteTitle} - ${title}` : siteTitle
  const url = `${origin}${pathname}`

  const SNSButtons = () => (
    <>
      <HatenaShareButton url={url} title={shareTitle}>
        <HatenaIcon size={32} round />
      </HatenaShareButton>
      <LineShareButton url={url} title={shareTitle}>
        <LineIcon size={32} round />
      </LineShareButton>
      <FacebookShareButton url={url} title={shareTitle}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={shareTitle}>
        <XIcon size={32} round />
      </TwitterShareButton>
    </>
  )

  const [visible, setVisible] = useState(false)

  return (
    <div className={`relative flex items-center gap-2 ${className}`}>
      {/* SNSボタン：PC表示（横） */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="hidden sm:flex gap-3 mr-1"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <SNSButtons />
          </motion.div>
        )}
      </AnimatePresence>

      {/* SHAREボタン */}
      <button
        className={`text-sm font-normal px-3 py-0.5 rounded-none transition z-10
    ${visible ? 'bg-white text-black border border-black' : 'bg-black text-white border border-black hover:bg-gray-700 hover:text-white'
    }`}
        onClick={() => setVisible((v) => !v)}
      >
        SHARE
      </button>

      {/* SNSボタン：スマホ表示（下に表示） */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="sm:hidden absolute top-full mt-2 right-0 flex gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <SNSButtons />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
