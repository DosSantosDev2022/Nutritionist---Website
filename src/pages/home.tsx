import {
  hero,
  Features,
  blog,
  Testimonials,
  Pricing,
} from '../configs/homedata.json'
import image from '../assets/home/frame_00.webp'
import frame12 from '../assets/home/framer_12.webp'
import { Button } from '../components/button'
import { SvgAspas } from '../components/icons/aspas'
import { PricingComponent } from '../components/pages/home/pricing'

export function HomePage() {
  const data = hero
  const Featuresdata = Features
  const blogdata = blog
  const Testimonialsdata = Testimonials
  const Pricingdata = Pricing
  return (
    <main>
      <div className=" flex flex-col lg:flex-row items-center justify-between gap-12">
        <img className="lg:w-[749px] w-full lg:h-[632px] " src={image} alt="" />

        <div className="w-full p-4">
          <span className="text-[1.75rem] leading-normal font-medium text-DarkGreen_700 ">
            {data.subtitle}
          </span>
          <h1 className="text-DarkGreen_700 text-[3.625rem] leading-tight font-bold ">
            {data.title}{' '}
          </h1>
          <p className="text-GreyShades_700 text-lg  font-normal leading-[27px] ">
            {data.description}{' '}
          </p>

          <div className="flex gap-5 mt-[50px] mb-8 ">
            <Button className="w-[187px] font-bold ">Comece hoje</Button>
            <Button className="w-[187px] font-bold " variant="outline">
              Agendar
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <img src={frame12} alt="" />

            <span className="text-DarkGreen_700 font-semibold">
              <span className="font-bold text-xl text-DarkGreen_400">430+</span>{' '}
              Clientes satisfeitos
            </span>
          </div>
        </div>
      </div>

      <section className="lg:px-[162px] px-4 mt-[150px] bg-absolute_white ">
        <div className="w-full flex flex-col gap-20">
          <div className="flex flex-col gap-[10px] text-center">
            <h2 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
              {Featuresdata.title}{' '}
            </h2>
            <span className="ext-GreyShades_800 text-lg leading-[27px] font-normal ">
              {Featuresdata.subtitle}{' '}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
            {Featuresdata.cards.map((card) => (
              <div
                className="flex flex-col gap-3 bg-GreenShades_200 rounded-md lg:px-[50px] lg:py-[40px] p-7 "
                key={card.id}
              >
                <div className="flex items-center gap-2">
                  <div className="w-[68px] flex items-center justify-center h-[68px] p-[14px] bg-GreenShades_700  rounded-lg   ">
                    <img className="" src={card.icon} alt="" />
                  </div>

                  <h3 className="text-DarkGreen_700 font-bold text-2xl leading-[36px] ">
                    {card.title}
                  </h3>
                </div>
                <p className="text-DarkGreen_600 font-normal leading-[27px] text-lg ">
                  {card.description}{' '}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-20 mt-[150px]">
          <div className="flex flex-col gap-[10px] text-center">
            <h2 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
              {blogdata.title}{' '}
            </h2>
            <span className="ext-GreyShades_800 text-lg leading-[27px] font-normal ">
              {blogdata.desccription}{' '}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 ">
            {blogdata.posts.map((post) => (
              <div
                key={post.id}
                className="lg:p-10 p-4  flex flex-col justify-between gap-2 border border-GreyShades_100 rounded-b-md "
              >
                <img src={post.image} alt="" />

                <div className="flex flex-col gap-2 ">
                  <span className="text-lg font-normal leading-[27px] text-GreyShades_800 ">
                    {post.tag}
                  </span>
                  <h4 className="text-[1.625rem] font-bold leading-[39px] text-GreyShades_900   ">
                    {post.title}
                  </h4>
                  <p className="text-md font-normal leading-[27px] text-GreyShades_700 ">
                    {post.description}
                  </p>
                </div>

                <div className="flex gap-4 items-center bg-GreenShades_300 p-5 rounded-md">
                  <img
                    className="w-[60px] h-[60px] "
                    src={post.authorImage}
                    alt={post.authorName}
                  />
                  <div className="flex flex-col ">
                    <h6 className="text-xl font-bold text-DarkGreen_700  ">
                      {post.authorName}{' '}
                    </h6>
                    <span className="font-normal text-md leading-[27px] text-GreyShades_600 ">
                      {post.creatAd}{' '}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-20 mt-[150px]">
          <div className="flex flex-col gap-[10px] text-center">
            <h2 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
              {Testimonialsdata.title}{' '}
            </h2>
            <span className="text-GreyShades_800 text-md leading-[27px] font-normal ">
              {Testimonialsdata.description}{' '}
            </span>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1  gap-4 ">
            {Testimonialsdata.cards.map((card) => (
              <div
                className="bg-GreenShades_200 rounded-md w-full flex flex-col items-start justify-between p-5 h-[400px] "
                key={card.id}
              >
                <div className="flex flex-col gap-8  ">
                  <SvgAspas />
                  <p className="text-lg font-normal leading-[27px] text-GreyShades_800 ">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    className="w-[60px] h-[60px] "
                    src={card.clientImage}
                    alt={card.clientName}
                  />
                  <h6 className="text-lg font-bold leading-[27px] text-DarkGreen_700 ">
                    {card.clientName}{' '}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-20 mt-[150px]">
          <div className="flex flex-col gap-[10px] text-center">
            <h2 className="text-5xl text-GreyShades_900 font-bold leading-[72px] ">
              {Pricingdata.title}{' '}
            </h2>
            <span className="text-GreyShades_800 text-md leading-[27px] font-normal ">
              {Pricingdata.description}{' '}
            </span>
          </div>

          <PricingComponent />
        </div>
      </section>
    </main>
  )
}
