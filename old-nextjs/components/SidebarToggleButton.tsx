'use client'
import { useSidebar } from '@/components/ui/sidebar'
import { PanelLeftIcon } from 'lucide-react'
export function SidebarToggleButton() {
  const { toggleSidebar } = useSidebar()
  return (
    <button
      onClick={toggleSidebar}
      className="fixed left-4 bottom-4 z-50 bg-primary h-11 w-11 flex justify-center items-center rounded-full shadow md:hidden"
    >
      <PanelLeftIcon className="text-white" />
    </button>
  )
}
