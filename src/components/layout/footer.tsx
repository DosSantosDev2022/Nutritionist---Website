import { FaArrowUp } from 'react-icons/fa'
import { Button } from '../button'
import { Logo } from '../logo'

import { EmailIcon } from '../icons/email'
import { PhoneIcon } from '../icons/phone'
import { LocalIcon } from '../icons/map'
import { Navigation } from './nav/index'

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

export function Footer() {
  return (
    <footer className="w-full  lg:px-[162px] lg:py-[50px] p-4 bg-DarkGreen_500 lg:h-[299px] flex flex-col gap-[50px] mt-[50px]  ">
      <div className="flex flex-col lg:flex-row gap-5  items-center justify-between ">
        <Logo height={45} width={290} />
        <Navigation.Root className="">
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

        <div className="flex gap-1 items-center">
          <Button variant="action2" className="rounded-full animate-bounce">
            <FaArrowUp />
          </Button>
        </div>
      </div>
      <div className="bg-DarkGreen_600 p-4 flex flex-col gap-4 lg:flex-row w-full justify-between items-center rounded-sm">
        <div className="flex flex-col lg:flex-row items-center gap-5 w-full">
          <div className="p-[14px] border border-DarkGreen_500 rounded-md w-full flex items-center justify-center lg:justify-start ">
            <span className="text-GreyShades_200 text-md font-normal leading-[27px] flex gap-1 ">
              <EmailIcon />
              hello@squareup.com
            </span>
          </div>
          <div className="p-[14px] border border-DarkGreen_500 rounded-md w-full flex items-center justify-center lg:justify-start  ">
            <span className="text-GreyShades_200 text-md font-normal leading-[27px] flex gap-1 ">
              <PhoneIcon />
              +91 91813 23 2309
            </span>
          </div>
          <div className="p-[14px] border border-DarkGreen_500 rounded-md w-full flex items-center justify-center lg:justify-start  ">
            <span className="text-GreyShades_200 text-md font-normal leading-[27px] flex gap-1 ">
              <LocalIcon />
              Somewhere in the World
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-GreyShades_200 text-sm font-normal leading-5 text-center ">
            © 2023 Nutritionist. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
