import { ReactNode } from 'react'

export function TableHead({ children }: { children: ReactNode }) {
  return (
    <thead className=" border p-2  text-absolute_white rounded-md whitespace-nowrap">
      {children}{' '}
    </thead>
  )
}
