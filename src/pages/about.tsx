import coverHero from '../assets/about/aboutHero.webp'
import { Button } from '../components/button'
import { welcome, Story, Company, action } from '../configs/aboutdata.json'

export function AboutPage() {
  return (
    <main>
      <section className="lg:px-[162px] px-4 mt-[100px] bg-absolute_white ">
        <img src={coverHero} alt="" />

        <div className="lg:p-24 p-[30px] flex flex-col gap-[50px] ">
          <h1 className="text-GreyShades_900 text-5xl leading-[72px] font-normal   ">
            {welcome.title}{' '}
          </h1>
          <p className="text-lg leading-[27px] font-normal text-GreyShades_800 ">
            {welcome.content}{' '}
          </p>
        </div>

        <div className="w-full flex flex-col gap-20 mt-[100px]">
          <div className="flex flex-col gap-[10px] text-center">
            <h2 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
              {Story.title}{' '}
            </h2>
            <span className="ext-GreyShades_800 text-lg leading-[27px] font-normal ">
              {Story.description}{' '}
            </span>
          </div>
        </div>

        <div className="flex flex-col mt-[60px] ">
          {Story.cards.map((card, index) => (
            <div
              key={card.title}
              className={`flex  w-full items-center justify-center lg:h-[420px] ${index % 2 === 0 ? 'lg:flex-row flex-col' : 'lg:flex-row-reverse flex-col'}`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full lg:h-[320px] rounded-md"
              />
              <div className="flex flex-col items-start justify-center gap-[30px] p-4 lg:p-[30px] w-full ">
                <h3 className="text-2xl font-bold leading-normal text-DarkGreen_700">
                  {card.title}
                </h3>
                <p className="text-base font-normal leading-6 text-GreyShades_800">
                  {card.description}
                </p>
                <span className="text-base font-bold leading-6 text-DarkGreen_700">
                  {card.data}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-20 mt-[100px]">
          <div className="flex flex-col gap-[10px] text-center">
            <h2 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
              {Company.title}{' '}
            </h2>
            <span className="ext-GreyShades_800 text-lg leading-[27px] font-normal ">
              {Company.description}{' '}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] ">
            {Company.cards.map((card) => (
              <div
                className="flex flex-col items-start gap-6 p-10 bg-GreenShades_200 rounded-xl"
                key={card.title}
              >
                <div className="flex items-center gap-2 w-full">
                  <div className=" bg-GreenShades_700 rounded-md flex items-center justify-center ">
                    <img src={card.icon} alt={card.title} />
                  </div>
                  <h3 className="text-GreyShades_900 font-bold leading-9 text-xl w-full">
                    {card.title}
                  </h3>
                </div>
                <p className="text-GreyShades_800 font-medium leading-[27px] text-md ">
                  {card.description}{' '}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-20 mt-[100px] rounded-md p-4 lg:p-20 bg-GreenShades_200 border border-GreenShades_300">
            <div className="flex flex-col gap-[14px] ">
              <h4 className="text-GreyShades_900 font-bold leading-[51px] text-[2.125rem] ">
                {action.title}
              </h4>
              <p className="text-lg font-medium leading-[27px] text-GreyShades_800 ">
                {action.description}
              </p>
            </div>
            <Button
              asChild
              className="w-full lg:w-[154px] text-center "
              variant="primary"
            >
              <a href="/contact">Agendar</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
