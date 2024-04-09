import { FaArrowUp } from 'react-icons/fa'
import { Button } from '../button'
import { Logo } from '../logo'
import { Navigation } from './navigation'
import { EmailIcon } from '../icons/email'
import { PhoneIcon } from '../icons/phone'
import { LocalIcon } from '../icons/map'

export function Footer() {
  return (
    <footer className="w-full px-[162px] py-[50px] bg-DarkGreen_500 h-[299px] flex flex-col gap-[50px]  ">
      <div className="flex items-center justify-between w-full">
        <Logo height={45} width={260} />
        <Navigation className="items-center flex justify-center" />

        <div className="flex gap-1 items-center">
          <Button variant="action2" className="rounded-full">
            <FaArrowUp />
          </Button>
        </div>
      </div>
      <div className="bg-DarkGreen_600 p-4 flex justify-between items-center rounded-sm">
        <div className="flex items-center gap-5">
          <div className="p-[14px] border border-DarkGreen_500 rounded-md ">
            <span className="text-GreyShades_200 text-md font-normal leading-[27px] flex gap-1 ">
              <EmailIcon />
              hello@squareup.com
            </span>
          </div>
          <div className="p-[14px] border border-DarkGreen_500 rounded-md ">
            <span className="text-GreyShades_200 text-md font-normal leading-[27px] flex gap-1 ">
              <PhoneIcon />
              +91 91813 23 2309
            </span>
          </div>
          <div className="p-[14px] border border-DarkGreen_500 rounded-md ">
            <span className="text-GreyShades_200 text-md font-normal leading-[27px] flex gap-1 ">
              <LocalIcon />
              Somewhere in the World
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-GreyShades_200 text-md font-normal leading-[27px] ">
            © 2023 Nutritionist. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
