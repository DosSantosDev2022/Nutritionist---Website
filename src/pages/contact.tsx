import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { EmailIcon } from '../components/icons/email'
import { LocalIcon } from '../components/icons/map'
import { PhoneIcon } from '../components/icons/phone'
import { Process } from '../components/icons/processLogo'
import { contact, action } from '../configs/contactdata.json'
import { Button } from '../components/button'
import { Form } from '../components/pages/contact/form'

export function ContactPage() {
  const contacts = [
    {
      icon: <EmailIcon />,
      contact: 'support@nutritionist.com',
    },
    {
      icon: <PhoneIcon />,
      contact: '+91 00000 00000',
    },
    {
      icon: <LocalIcon />,
      contact: 'Bairro Aurora, Cidade Fantasia',
    },
  ]

  return (
    <main>
      <section className="lg:px-[162px] px-4 mt-[150px] bg-absolute_white ">
        <div className="w-full flex flex-col gap-20">
          <div className="flex flex-col gap-[10px] text-center justify-center items-center">
            <Process />
            <h2 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
              {contact.title}
            </h2>
            <span className="text-GreyShades_800 text-lg leading-[27px] font-normal ">
              {contact.description}
            </span>
          </div>

          <div className="w-full lg:h-[240px] bg-DarkGreen_700 flex lg:flex-row flex-col p-10 rounded gap-5 ">
            {contacts.map((item, index) => (
              <div
                key={index}
                className="p-2 bg-DarkGreen_600 w-full flex flex-col items-center justify-center rounded-md gap-2 "
              >
                {item.icon}{' '}
                <span className="text-absolute_white text-center">
                  {item.contact}{' '}
                </span>{' '}
              </div>
            ))}
          </div>

          <div className="lg:p-[80px] rounded-md p-[30px] flex flex-col lg:flex-row gap-[50px] bg-GreenShades_200  ">
            <Form />
            <div className="w-full ">
              <img
                src="src/assets/contact/map.webp"
                className="w-full rounded-md "
                alt="mapa do endereço"
              />
              <div className="flex gap-3 items-center justify-center mt-[30px] ">
                <span className="text-xl leading-5  font-normal text-DarkGreen_700">
                  Fique conectado
                </span>
                <a
                  className="bg-GreenShades_700 p-2 rounded-full hover:bg-GreenShades_600 duration-300 transition-all"
                  href=""
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  className="bg-GreenShades_700 p-2 rounded-full hover:bg-GreenShades_600 duration-300 transition-all"
                  href=""
                >
                  <FaInstagramSquare size={20} />
                </a>
                <a
                  className="bg-GreenShades_700 p-2 rounded-full hover:bg-GreenShades_600 duration-300 transition-all"
                  href=""
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-20 mt-[100px] rounded-md p-4 lg:p-20 bg-GreenShades_200 border border-GreenShades_300">
            <div className="flex flex-col gap-[14px] ">
              <h4 className="text-GreyShades_900 font-bold  text-xl ">
                {action.title}
              </h4>
              <p className="text-lg font-medium leading-[27px] text-GreyShades_800 ">
                {action.description}
              </p>
            </div>
            <Button className="w-full lg:w-[154px] " variant="primary">
              Agendar
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
