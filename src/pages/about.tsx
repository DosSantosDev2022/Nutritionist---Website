import coverHero from '../assets/about/aboutHero.webp'
import { welcome } from '../configs/aboutdata.json'

export function AboutPage() {
  const welcomeData = welcome
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
      </section>
    </main>
  )
}
