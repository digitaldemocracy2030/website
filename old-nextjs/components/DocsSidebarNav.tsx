'use client'
import { buttonVariants } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar'
import { DocNavItem } from '@/lib/docs'
import { cn } from '@/lib/utils'

interface DocsSidebarNavProps {
  items: DocNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()

  if (!items?.length) {
    return null
  }

  return (
    <Sidebar className="sticky top-14">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => {
                if (item.isIndex) {
                  return null
                } else {
                  return (
                    <SidebarMenuItem key={index} className={cn('pb-4')}>
                      {item.items ? (
                        <div className="font-bold py-1">{item.title}</div>
                      ) : (
                        <SidebarMenuButton asChild>
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : ''}
                            rel={item.href.startsWith('http') ? 'noreferrer' : ''}
                            className="h-auto"
                          >
                            {item.title}
                          </a>
                        </SidebarMenuButton>
                      )}
                      {item.items?.length && (
                        <DocsSidebarNavItems items={item.items} pathname={pathname} />
                      )}
                    </SidebarMenuItem>
                  )
                }
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

interface DocsSidebarNavItemsProps {
  items: DocNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({ items, pathname }: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <SidebarMenuSub>
      {items.map((item, index) =>
        !item.items ? ( // ファイルのみ表示（ディレクトリは親でタイトル表示済みのため）
          <SidebarMenuSubItem key={index}>
            <SidebarMenuSubButton
              href={item.href}
              className={`${buttonVariants({ variant: 'ghost' })} ${cn(
                'whitespace-normal justify-start w-full h-auto',
                (pathname === item.href || pathname === `${item.href}/`) ? 'text-foreground bg-accent' : 'text-muted-foreground',
              )}`}
              target={item.href.startsWith('http') ? '_blank' : ''}
              rel={item.href.startsWith('http') ? 'noreferrer' : ''}
            >
              {item.title}
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        ) : (
          // 子ディレクトリがある場合、さらにネストして表示（必要ならスタイル調整）
          <div key={item.href} className="ml-4">
            <div className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{item.title}</div>
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          </div>
        ),
      )}
    </SidebarMenuSub>
  ) : null
}
