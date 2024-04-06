import { hero } from '../configs/homedata.json'
import image from '../assets/home/frame_00.webp'
import frame12 from '../assets/home/framer_12.webp'
import { Button } from '../components/button'

export function HomePage() {
  const data = hero
  return (
    <main>
      <div className=" flex flex-col lg:flex-row items-center justify-between gap-12">
        <img className="lg:w-[749px] w-full lg:h-[632px] " src={image} alt="" />

        <div className="w-full p-4">
          <span className="text-[1.75rem] leading-normal font-medium text-DarkGreen_700 ">
            {data.subtitle}
          </span>
          <h1 className="text-DarkGreen_700 text-[3.625rem] leading-tight font-bold ">
            {data.title}{' '}
          </h1>
          <p className="text-GreyShades_700 text-lg  font-normal leading-[27px] ">
            {data.description}{' '}
          </p>

          <div className="flex gap-5 mt-[50px] mb-8 ">
            <Button className="w-[187px] font-bold ">Comece hoje</Button>
            <Button className="w-[187px] font-bold " variant="outline">
              Agendar
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <img src={frame12} alt="" />

            <span className="text-DarkGreen_700 font-semibold">
              <span className="font-bold text-xl text-DarkGreen_400">430+</span>{' '}
              Clientes satisfeitos
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
