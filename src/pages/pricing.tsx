import { Button } from '../components/button'
import { Process } from '../components/icons/processLogo'
import { Acordion } from '../components/pages/pricing/acordion'
import { PricingComponent } from '../components/pages/pricing/pricing'
import TabelaPlanos from '../components/pages/pricing/table/table'
import { pricing, FAQ, Ask } from '../configs/pricingdata.json'

export function PricingPage() {
  return (
    <main>
      <section className="lg:px-[162px] px-4 mt-[150px] bg-absolute_white ">
        <div className="w-full flex flex-col gap-20">
          <div className="flex flex-col gap-[10px] text-center justify-center items-center">
            <Process />
            <h2 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
              {pricing.title}
            </h2>
            <span className="text-GreyShades_800 text-lg leading-[27px] font-normal ">
              {pricing.description}
            </span>
          </div>

          <PricingComponent />
          <TabelaPlanos />

          <div className="mt-[100px] flex items-center justify-center flex-col gap-2 ">
            <h4 className="text-5xl font-bold text-GreyShades_900 ">
              {FAQ.title}{' '}
            </h4>
            <p className="font-medium text-lg leading-[27px] text-center  text-GreyShades_700 lg:w-[780px] ">
              {FAQ.description}{' '}
            </p>

            <div className="flex flex-col lg:flex-row items-start gap-4  mt-20 w-full">
              <div className=" border w-full rounded-md">
                {FAQ.questions.map((item, index) => (
                  <Acordion
                    question={item.question}
                    answer={item.answer}
                    key={index}
                  />
                ))}
              </div>
              <div className="py-[60px]  px-6 flex flex-col items-center gap-4 border bg-GreenShades_300 rounded-lg">
                <Process />
                <h5 className="text-lg font-bold text-GreyShades_900">
                  {Ask.title}{' '}
                </h5>
                <p className="text-center font-medium text-base leading-[21px]  text-GreyShades_700">
                  {Ask.description}{' '}
                </p>
                <Button>Faça uma pergunta</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
