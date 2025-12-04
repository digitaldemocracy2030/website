import React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { DocsSidebarNav } from '@/components/DocsSidebarNav'
import { getDocTree } from '@/lib/docs'
import { SidebarToggleButton } from '@/components/SidebarToggleButton'

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const tree = await getDocTree() // ドキュメントツリーを取得
  return (
    <SidebarProvider>
      <SidebarToggleButton />
      <DocsSidebarNav items={tree} />
      <div className="md:pl-6 min-w-0 w-full">
        {/* 右側コンテンツ */}
        {children}
      </div>
    </SidebarProvider>
  )
}
