'use client'
import HighLight from './HighLight'

export default function LatestWeekHeading({ week }: { week: number }) {
  return (
    <HighLight>
      {(highlight) => (
        <h3
          className={
            'text-2xl mt-8 mb-4 transition-all duration-500 px-0 py-0 rounded' +
            (highlight ? ' bg-blue-100 shadow' : ' bg-transparent')
          }
        >
          第{week}週の活動
        </h3>
      )}
    </HighLight>
  )
}
