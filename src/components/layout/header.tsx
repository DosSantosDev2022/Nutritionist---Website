import { useState } from 'react'
import { Logo } from '../logo'
import { Navigation } from './navigation'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMobileMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="bg-DarkGreen_700 w-full flex flex-col lg:flex-row items-center justify-between h-24 px-20 py-4">
      <div className="flex items-center justify-between w-full">
        <Logo />
        <button onClick={handleMobileMenu} type="button" className="lg:hidden">
          <HiMiniBars3BottomRight size={50} className="text-GreenShades_700" />
        </button>
      </div>

      {isOpen && <Navigation />}
    </header>
  )
}
