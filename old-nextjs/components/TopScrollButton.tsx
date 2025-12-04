'use client'

import { buttonVariants } from '@/components/ui/button'

export function TopScrollButton() {
  return (
    <div className="flex justify-center mt-10">
      <button
        type="button"
        className={`${buttonVariants({ variant: 'outline' })} h-11 border-black cursor-pointer`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        トップに戻る
      </button>
    </div>
  )
}
