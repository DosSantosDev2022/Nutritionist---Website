import { Button } from '../components/button'
import { blog } from '../configs/blogdata.json'

export function BlogsPage() {
  const navLinks = [
    {
      name: 'Todos',
      url: '',
    },
    {
      name: 'Dicas para perder peso',
      url: '',
    },
    {
      name: 'Alimentação saudável',
      url: '',
    },
    {
      name: 'Fitness e exercício',
      url: '',
    },
    {
      name: 'Mentalidade e Motivação',
      url: '',
    },
    {
      name: 'Receitas e planejamento',
      url: '',
    },
  ]
  return (
    <main>
      <section className="lg:px-[162px] px-4 mt-[100px] bg-absolute_white ">
        <div className="w-full flex flex-col gap-20 mt-[100px] bg-GreenShades_200 rounded-t-lg lg:p-[100px] p-[30px] ">
          <div className="flex flex-col gap-[10px] text-center">
            <h2 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
              {blog.title}{' '}
            </h2>
            <span className="ext-GreyShades_800 text-lg leading-[27px] font-normal ">
              {blog.description}{' '}
            </span>
          </div>
        </div>
        <div className="bg-DarkGreen_600 h-28 w-full overflow-auto rounded-b-lg flex p-2 items-center self-stretch justify-center">
          {navLinks.map((link) => (
            <Button
              className="text-[12px] border-none flex items-center justify-between w-full h-[42px] "
              key={link.name}
              variant="action2"
            >
              {link.name}
            </Button>
          ))}
        </div>

        <div className="mt-[50px] grid lg:grid-cols-2 grid-cols-1 gap-6 ">
          {blog.cards.map((card) => (
            <div
              className="lg:p-[50px] p-[30px] border border-GreenShades_300 rounded-md "
              key={card.title}
            >
              <div className="flex flex-col gap-10">
                <span className="text-2xl font-bold leading-9 text-GreyShades_800 ">
                  {card.tag}
                </span>

                <img
                  className="lg:w-[531px] w-full  lg:h-[228px] h-[131px] "
                  src={card.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start gap-2 ">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold leading-9 text-GreyShades_900 ">
                    {card.title}
                  </h3>
                  <p className="text-GreyShades_800 font-normal text-lg leading-6">
                    {card.description}
                  </p>
                </div>
                <Button
                  className=" flex items-center justify-center mt-5"
                  variant="primary"
                >
                  Ler mais...
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
