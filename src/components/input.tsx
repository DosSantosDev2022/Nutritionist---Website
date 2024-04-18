import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface InputRootProps {
  children: ReactNode
}

function InputRoot({ children }: InputRootProps) {
  return (
    <div className="flex items-center gap-3 h-10 w-full rounded focus-within:ring-2 focus:ring-GreenShades_700 border border-GreenShades_500 bg-GreenShades_300 px-3 py-4 ">
      {children}
    </div>
  )
}

interface InputIconProps {
  children: ReactNode
}

function InputIcon({ children }: InputIconProps) {
  return <i>{children} </i>
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          'bg-transparent flex-1 text-GreyShades_500 placeholder:text-zinc-400 outline-none ',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
TextInput.displayName = 'Input'

export const Input = {
  Root: InputRoot,
  Icon: InputIcon,
  Input: TextInput,
}
