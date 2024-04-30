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
    name: 'Sobre nós',
    url: '/sobre',
  },
  {
    name: 'Nosso Time',
    url: '/time',
  },
  {
    name: 'Processo',
    url: '/processo',
  },
  {
    name: 'Preços',
    url: '/preços',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Contato',
    url: '/contato',
  },
]

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export function Footer() {
  return (
    <footer className="w-full  lg:px-[162px] lg:py-[50px] p-4 bg-DarkGreen_500 lg:h-[299px] flex flex-col  gap-[50px] mt-[50px]  ">
      <div className="flex flex-col lg:flex-row gap-5  items-center justify-between mt-4 lg:mt-0 ">
        <div className="w-full lg:w-auto flex gap-10 items-center justify-start">
          <Logo height={45} width={290} />
          <Button
            onClick={handleScrollToTop}
            variant="action3"
            className=" lg:hidden p-3 rounded-[73px] "
          >
            <FaArrowUp />
          </Button>
        </div>
        <Navigation.Root className="mt-[30px] lg:mt-0 ">
          <Navigation.List>
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
        <Button
          aria-label="botão para ir para o topo da página"
          onClick={handleScrollToTop}
          variant="action3"
          className="hidden lg:flex p-3 rounded-[73px] "
        >
          <FaArrowUp />
        </Button>
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
            <span className="text-GreyShades_200 text-md font-normal leading-[27px] flex gap-1 text-center ">
              <LocalIcon />
              Bairro Aurora
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-GreyShades_200 text-sm font-normal leading-5 text-center ">
            © 2023 Nutritionist. todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}
