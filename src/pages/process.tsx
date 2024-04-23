import { LuChevronRightCircle } from 'react-icons/lu'
import { Button } from '../components/button'
import { Process } from '../components/icons/processLogo'
import { process, cards, action } from '../configs/processdata.json'

export function ProcessPage() {
  return (
    <main>
      <div className="lg:px-[162px] px-4 mt-[150px] bg-absolute_white ">
        <div className="w-full flex flex-col gap-20">
          <div className="flex flex-col gap-[10px] text-center justify-center items-center">
            <Process />
            <h2 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
              {process.title}
            </h2>
            <span className="text-GreyShades_800 text-lg leading-[27px] font-normal ">
              {process.description}
            </span>
          </div>

          <section className="fle flex-col gap-20 mt-[100px] ">
            <div className=" text-center space-y-2 ">
              <h3 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
                {process.subtitle}{' '}
              </h3>
              <p className="text-GreyShades_800 text-lg leading-[27px] font-normal ">
                {process.subDescription}{' '}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
              {cards.map((card) => (
                <div key={card.number} className="h-[318px] ">
                  <span className="text-[9.375rem] font-bold  text-DarkGreen_300 relative ">
                    {card.number}
                  </span>

                  <div className="relative -top-24  flex flex-col items-start self-stretch gap-3 p-[30px] lg:h-[234px] h-[274px] bg-GreenShades_300 rounded-md ">
                    <div className="flex items-center justify-start gap-[14px]  w-full ">
                      <LuChevronRightCircle
                        size={38}
                        className="bg-GreenShades_700 p-1 text-DarkGreen_400 rounded-full"
                      />

                      <h4 className="lg:text-2xl text-md font-semibold  leading-[21px]  text-GreyShades_900">
                        {card.title}
                      </h4>
                    </div>
                    <p className="text-lg leading-[21px] flex items-center font-medium text-GreyShades_700 w-full  lg:h-[105px] ">
                      {card.description}{' '}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-20 mt-[100px] rounded-md p-4 lg:p-20 bg-GreenShades_200 border border-GreenShades_300">
            <div className="flex flex-col gap-[14px]  ">
              <h4 className="text-GreyShades_900 font-bold leading-[41px] text-[2.125rem] ">
                {action.title}
              </h4>
              <p className="text-lg font-medium leading-[27px] text-GreyShades_800 ">
                {action.description}
              </p>
            </div>
            <Button
              asChild
              className=" w-[250px] text-center  "
              variant="primary"
            >
              <a href="/pricing">Faça parte</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
