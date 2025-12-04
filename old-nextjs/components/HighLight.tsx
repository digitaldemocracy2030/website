'use client'
import { useEffect, useState } from 'react'

export default function HighLight({ children }: { children: (highlight: boolean) => React.ReactNode }) {
  const [highlight, setHighlight] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setHighlight(false), 1500)
    return () => clearTimeout(timer)
  }, [])
  return <>{children(highlight)}</>
}
