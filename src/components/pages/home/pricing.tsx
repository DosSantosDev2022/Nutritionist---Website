import { Button } from '../../button'
import { Pricing } from '../../../configs/homedata.json'
import { useState } from 'react'

export function PricingComponent() {
  const [activeTab, setActiveTab] = useState('monthly')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }
  const cards = Pricing.cards
  return (
    <div className="flex flex-col items-center gap-[50px] ">
      <div className="flex flex-col items-center w-full justify-center gap-3">
        <div className="flex items-center w-full justify-center">
          <Button
            onClick={() => handleTabChange('monthly')}
            className="px-6 py-[10px] rounded-none hover:none"
            variant="action1"
          >
            Mensal
          </Button>
          <Button
            onClick={() => handleTabChange('annual')}
            className="px-6 py-[10px] rounded-none"
            variant="action2"
          >
            Anual
          </Button>
        </div>
        <span className="text-lg font-bold leading-[27px] text-DarkGreen_300 ">
          Economize 50% anualmente
        </span>
      </div>

      <div className="flex items-center gap-[30px] ">
        {cards.map((card) => (
          <div
            key={card.title}
            className="w-full flex flex-col gap-10  items-start justify-between p-[30px] border rounded-xl border-GreyShades_200 "
          >
            <div className="flex flex-col">
              <h4 className="text-[1.875rem] font-bold text-GreyShades_900 leading-[45px]  ">
                {card.title}{' '}
              </h4>
              <span className="text-lg font-normal leading-[27px] text-GreyShades_700 ">
                {card.subtitle}
              </span>
            </div>
            <p className="text-md font-normal  text-GreyShades_700 h-[108px] ">
              {card.description}
            </p>
            <div className="flex flex-col gap-[33px] w-full mt-28 ">
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
              <Button className="w-full" variant="action1">
                Escolha o plano
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
