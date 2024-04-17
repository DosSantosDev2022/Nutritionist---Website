import { useState } from 'react'

interface Acordion {
  question: string
  answer: string
}

export function Acordion({ answer, question }: Acordion) {
  const [acordionOpen, setAcordionOpen] = useState(false)
  return (
    <div className="p-4 border">
      <button
        onClick={() => setAcordionOpen(!acordionOpen)}
        className="flex justify-between items-center gap-2 w-full mb-4"
      >
        <span className="text-GreyShades_900 font-bold lg:text-xl text-base w-full text-start">
          {question}
        </span>
        {acordionOpen ? (
          <span
            className="p-2 bg-DarkGreen_600 rounded-md text-absolute_white w-[40px] h-[40px] text-2xl flex items-center justify-center
        "
          >
            x
          </span>
        ) : (
          <span
            className="p-2 bg-DarkGreen_600 rounded-md text-absolute_white w-[40px] h-[40px] text-2xl flex items-center justify-center
          "
          >
            +
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-GreyShades_500 font-medium
        ${acordionOpen ? 'grid-rows-[1fr] opacity-100 ' : 'grid-rows-[0fr] opacity-0'}
        
        `}
      >
        <div className="overflow-hidden text-lg text-GreyShades_600 font-normal leading-[21px] text-start">
          {answer}{' '}
        </div>
      </div>
    </div>
  )
}
