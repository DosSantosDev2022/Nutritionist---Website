import { Process } from '../components/icons/processLogo'
import { process } from '../configs/processdata.json'

export function ProcessPage() {
  return (
    <main>
      <section className="lg:px-[162px] px-4 mt-[150px] bg-absolute_white ">
        <div className="w-full flex flex-col gap-20">
          <div className="flex flex-col gap-[10px] text-center">
            <Process />
            <h2 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
              {process.title}
            </h2>
            <span className="ext-GreyShades_800 text-lg leading-[27px] font-normal ">
              {process.description}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-7"></div>
        </div>
      </section>
    </main>
  )
}
