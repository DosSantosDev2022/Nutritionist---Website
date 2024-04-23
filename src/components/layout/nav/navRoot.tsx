import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavigationRootProps {
  className?: string
  children: ReactNode
}

export function NavigationRoot({ className, children }: NavigationRootProps) {
  return <nav className={twMerge(`w-full`, className)}>{children}</nav>
}
