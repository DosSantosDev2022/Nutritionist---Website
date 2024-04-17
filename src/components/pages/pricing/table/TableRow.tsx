import { ReactNode } from 'react'

export function TableRow({ children }: { children: ReactNode }) {
  return <tr className=" h-14 ">{children}</tr>
}
