'use client'

import { useState } from 'react'
import Link from 'next/link'
import SNSSharePanel from './SNSSharePanel'
import { usePathname } from 'next/navigation'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'

export function Header() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false) // ページ遷移前にドロワーを閉じる
  }
  const path = usePathname()
  const isNotH1 = () => {
    if (
      path.indexOf('/history/') === 0 ||
      path.indexOf('/policies/') === 0 ||
      path.indexOf('/docs/') === 0
    ) {
      return false
    } else {
      return true
    }
  }
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-center h-14 px-4">
          {isNotH1() ? (
            <h1 className="flex-1">
              <Link href="/" className="inline-block font-bold text-xl">
                デジタル民主主義2030
              </Link>
            </h1>
          ) : (
            <div className="flex-1">
              <Link href="/" className="inline-block font-bold text-xl">
                デジタル民主主義2030
              </Link>
            </div>
          )}
          <SNSSharePanel className="mr-4" />
          <Drawer direction="right" open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button className="cursor-pointer w-11 h-11">
                <MenuIcon />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="hidden">
                <DrawerTitle>グローバルナビゲーション</DrawerTitle>
                <DrawerDescription>ここから各ページへ遷移できます。</DrawerDescription>
              </DrawerHeader>
              <DrawerClose asChild>
                <Button variant="outline" className="my-4 mx-4 cursor-pointer">
                  <CloseIcon />
                  閉じる
                </Button>
              </DrawerClose>
              <div className="flex flex-col space-y-3 justify-center px-4">
                <Link
                  href="/"
                  className="w-full h-11 flex gap-2 flex-wrap"
                  onClick={handleLinkClick}
                >
                  <div className="gradient w-1"></div>
                  <div className="w-[calc(100%-12px)] flex items-center">
                    <div>ホーム</div>
                  </div>
                </Link>
                <Link
                  href="/about"
                  className="w-full h-11 flex gap-2 flex-wrap"
                  onClick={handleLinkClick}
                >
                  <div className="gradient w-1"></div>
                  <div className="w-[calc(100%-12px)] flex items-center">
                    <div>デジタル民主主義2030とは</div>
                  </div>
                </Link>
                <Link
                  href="/kouchou-ai"
                  className="w-full h-11 flex gap-2 flex-wrap"
                  onClick={handleLinkClick}
                >
                  <div className="gradient w-1"></div>
                  <div className="w-[calc(100%-12px)] flex items-center">
                    <div>広聴AI</div>
                  </div>
                </Link>
                <Link
                  href="/idobata"
                  className="w-full h-11 flex gap-2 flex-wrap"
                  onClick={handleLinkClick}
                >
                  <div className="gradient w-1"></div>
                  <div className="w-[calc(100%-12px)] flex items-center">
                    <div>いどばた</div>
                  </div>
                </Link>
                <Link
                  href="/polimoney"
                  className="w-full h-11 flex gap-2 flex-wrap"
                  onClick={handleLinkClick}
                >
                  <div className="gradient w-1"></div>
                  <div className="w-[calc(100%-12px)] flex items-center">
                    <div>Polimoney</div>
                  </div>
                </Link>
                <Link
                  href="/case"
                  className="w-full h-11 flex gap-2 flex-wrap"
                  onClick={handleLinkClick}
                >
                  <div className="gradient w-1"></div>
                  <div className="w-[calc(100%-12px)] flex items-center">
                    <div>活用事例</div>
                  </div>
                </Link>
                <Link
                  href="/history"
                  className="w-full h-11 flex gap-2 flex-wrap"
                  onClick={handleLinkClick}
                >
                  <div className="gradient w-1"></div>
                  <div className="w-[calc(100%-12px)] flex items-center">
                    <div>プロジェクトの歴史</div>
                  </div>
                </Link>
                <Link
                  href="/news"
                  className="w-full h-11 flex gap-2 flex-wrap"
                  onClick={handleLinkClick}
                >
                  <div className="gradient w-1"></div>
                  <div className="w-[calc(100%-12px)] flex items-center">
                    <div>お知らせ</div>
                  </div>
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div className="gradient h-0.5"></div>
    </header>
  )
}
