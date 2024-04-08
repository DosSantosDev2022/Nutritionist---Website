import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'highlight' | 'action1' | 'action2'
}

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: `bg-GreenShades_700 text-GreyShades_900 hover:bg-GreenShades_600 hover:scale-105 transition-all duration-300`,
    outline: `bg-GreyShades_200  text-GreyShades_900 hover:bg-GreyShades_300 hover:scale-105 transition-all duration-300 `,
    highlight: ``,
    action1: `bg-GreyShades_200  text-GreyShades_900`,
    action2: `bg-DarkGreen_600 text-DarkGreen_50 hover:bg-DarkGreen_500 duration-300`,
  }

  const _className = twMerge(
    variantClasses[variant],
    `appearance-none rounded-md px-5 py-4 text-md font-semibold shadow `,
    className,
  )

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  )
}
