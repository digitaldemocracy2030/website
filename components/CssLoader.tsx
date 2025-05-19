'use client'

import { useEffect } from 'react'

export function CssLoader() {
  useEffect(() => {
    const loadCSS = (path: string) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = path
      document.head.appendChild(link)
    }
    
    const basePath = process.env.NEXT_PUBLIC_PR_NUMBER ? `/pr-preview/pr-${process.env.NEXT_PUBLIC_PR_NUMBER}` : ''
    loadCSS(`${basePath}/global.css`)
    loadCSS(`${basePath}/content.css`)
  }, [])

  return null
}
