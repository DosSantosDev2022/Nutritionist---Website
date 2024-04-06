const links = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Team',
    url: '/team',
  },
  {
    name: 'Process',
    url: '/process',
  },
  {
    name: 'Pricing',
    url: '/pricing',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
]

interface NavigationProps {
  className: string
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={`w-full mt-10 lg:mt-0 ${className}`}>
      <ul className="flex gap-[26px]  flex-col lg:flex-row items-center ">
        {links.map((link) => (
          <li key={link.name}>
            <a
              className="text-GreenShades_100 hover:text-GreenShades_700 duration-300 transition-all"
              href={link.url}
            >
              {link.name}{' '}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
