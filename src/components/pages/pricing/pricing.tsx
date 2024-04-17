import { Button } from '../../button'
import { cards } from '../../../configs/pricingdata.json'
import { useState } from 'react'

export function PricingComponent() {
  const [activeTab, setActiveTab] = useState('monthly')

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex flex-col items-center gap-[50px] mb-20 ">
      <div className="flex flex-col items-center w-full justify-center gap-3">
        <div className="flex items-center w-full justify-center">
          <Button
            onClick={() => handleTabChange('monthly')}
            className={`px-6 py-[10px] rounded-none ${activeTab === 'monthly' ? 'bg-DarkGreen_600 text-DarkGreen_50 hover:bg-DarkGreen_500' : ''}`}
            variant="action1"
          >
            Mensal
          </Button>
          <Button
            onClick={() => handleTabChange('annual')}
            className={`px-6 py-[10px] rounded-none ${activeTab === 'annual' ? 'bg-DarkGreen_600 text-DarkGreen_50' : ''}`}
            variant="action1"
          >
            Anual
          </Button>
        </div>
        <span className="text-lg font-bold leading-[27px] text-DarkGreen_300 ">
          Economize 50% anualmente
        </span>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1  gap-[30px]  ">
        {cards.map((card) => (
          <div
            key={card.title}
            className="w-full flex flex-col h-auto   gap-10 p-[30px]  rounded-lg bg-GreenShades_200 "
          >
            <div className="flex flex-col items-center justify-start ">
              <h4 className="text-[1.875rem] font-bold text-GreyShades_900 leading-[45px]  ">
                {card.title}{' '}
              </h4>
              <span className="text-md font-normal leading-[27px] text-GreyShades_700 ">
                {card.subtitle}
              </span>
            </div>
            <div className="text-md font-normal   text-GreyShades_700 flex flex-col gap-2  bg-GreenShades_300 rounded-md ">
              {card.list?.map((item) => (
                <span
                  className="px-6 py-5 text-sm border-t border-b "
                  key={item}
                >
                  {item}{' '}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-[33px] w-full mt-5  justify-between items-center ">
              <span className="flex items-center gap-1 ">
                {activeTab === 'monthly' ? (
                  <span className="font-bold text-3xl text-DarkGreen_500 ">
                    {card.monthPrice}
                  </span>
                ) : (
                  <span className="font-bold text-3xl text-DarkGreen_500">
                    {' '}
                    {card.AnnualPricing}
                  </span>
                )}

                {activeTab === 'monthly' ? (
                  <span className="font-normal text-lg text-DarkGreen_300">
                    / Mês
                  </span>
                ) : (
                  <span className="font-normal text-lg text-DarkGreen_300">
                    / ano
                  </span>
                )}
              </span>
              <Button className="w-full" variant="action3">
                Escolha o plano
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
