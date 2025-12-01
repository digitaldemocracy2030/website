'use client'
import { useEffect } from 'react'

export default function AutoScrollToLatestWeek({ latestWeek }: { latestWeek: number }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && latestWeek) {
      const el = document.getElementById(`week-${latestWeek}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [latestWeek])

  return null
}
