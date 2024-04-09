import { twMerge } from 'tailwind-merge'

interface NavigationItemProps {
  className: string
  url: string
  name: string
}

export function NavigationItem({ className, name, url }: NavigationItemProps) {
  return (
    <li>
      <a
        className={twMerge(
          `text-GreenShades_100 hover:text-GreenShades_700 duration-300 transition-all`,
          className,
        )}
        href={url}
      >
        {name}
      </a>
    </li>
  )
}
