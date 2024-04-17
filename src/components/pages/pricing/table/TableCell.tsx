import { ReactNode } from 'react'

export function TableCell({ children }: { children: ReactNode }) {
  return (
    <td className="border px-4 py-3 text-[1.25rem] w-full flex flex-row justify-center   text-GreyShades_900 font-medium text-start ">
      {children}{' '}
    </td>
  )
}
