import { ReactNode } from 'react'

export function TableHeaderCell({ children }: { children: ReactNode }) {
  return (
    <th className="text-[1.375rem] leading-[33px] px-4 bg-DarkGreen_600 h-[74px]  border-2  text-absolute_white font-medium ">
      {children}{' '}
    </th>
  )
}
