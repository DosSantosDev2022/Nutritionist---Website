import { useState } from 'react'
import { Logo } from '../logo'

import { HiMiniBars3BottomRight } from 'react-icons/hi2'
import { AiOutlineClose } from 'react-icons/ai'
import { Navigation } from './nav/index'

export function Header() {
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
  const [isOpen, setIsOpen] = useState(false)

  const handleMobileMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="bg-DarkGreen_700 w-full flex flex-col lg:flex-row items-center justify-between lg:h-24 lg:px-20 px-4 lg:py-4 py-5">
      <div className="flex items-center justify-between w-full">
        <Logo width={195} height={45} />
        <button onClick={handleMobileMenu} type="button" className="lg:hidden">
          {isOpen ? (
            <AiOutlineClose size={50} className="text-GreenShades_700 " />
          ) : (
            <HiMiniBars3BottomRight
              size={50}
              className="text-GreenShades_700"
            />
          )}
        </button>
      </div>

      <Navigation.Root className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
        <Navigation.List className="flex-wrap">
          {links.map((link) => (
            <Navigation.Item
              className=""
              key={link.name}
              url={link.url}
              name={link.name}
            />
          ))}
        </Navigation.List>
      </Navigation.Root>
    </header>
  )
}
