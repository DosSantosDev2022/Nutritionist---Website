import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavigationListProps {
  className?: string
  children: ReactNode
}

export function NavigationList({ className, children }: NavigationListProps) {
  return (
    <ul
      className={twMerge(
        `flex flex-wrap gap-[26px] items-center justify-center`,
        className,
      )}
    >
      {children}{' '}
    </ul>
  )
}
