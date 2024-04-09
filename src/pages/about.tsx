import coverHero from '../assets/about/aboutHero.webp'
import { welcome, Story } from '../configs/aboutdata.json'

export function AboutPage() {
  const welcomeData = welcome
  const StoryData = Story
  return (
    <main>
      <section className="lg:px-[162px] px-4 mt-[100px] bg-absolute_white ">
        <img src={coverHero} alt="" />

        <div className="lg:p-24 p-[30px] flex flex-col gap-[50px] ">
          <h1 className="text-GreyShades_900 text-5xl leading-[72px] font-normal   ">
            {welcomeData.title}{' '}
          </h1>
          <p className="text-lg leading-[27px] font-normal text-GreyShades_800 ">
            {welcomeData.content}{' '}
          </p>
        </div>

        <div className="w-full flex flex-col gap-20 mt-[100px]">
          <div className="flex flex-col gap-[10px] text-center">
            <h2 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
              {StoryData.title}{' '}
            </h2>
            <span className="ext-GreyShades_800 text-lg leading-[27px] font-normal ">
              {StoryData.description}{' '}
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
      </section>
    </main>
  )
}
