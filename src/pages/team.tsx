import { AnimationDiv } from '../components/animations/animationsections'
import { Button } from '../components/button'
import { InfoTeam } from '../components/pages/team/InfoTeam'
import { ImageTeam } from '../components/pages/team/teamImage'
import { TitleTeam } from '../components/pages/team/titleTeam'
import { Team, team, action } from '../configs/teamdata.json'

export function TeamPage() {
  return (
    <main>
      <section className="lg:px-[162px] px-4  bg-absolute_white ">
        <AnimationDiv className="w-full flex flex-col  lg:p-[100px] p-[30px] ">
          <div className="flex flex-col gap-[10px] text-center">
            <h2 className="lg:text-5xl text-3xl text-GreyShades_900 font-bold lg:leading-[72px] ">
              {Team.title}
            </h2>
            <span className="text-GreyShades_800 text-lg leading-[27px] font-normal ">
              {Team.description}
            </span>
          </div>
        </AnimationDiv>
        <AnimationDiv>
          <TitleTeam team={team.ManagementTitle} />

          <div className="mt-[50px] flex gap-[30px] flex-col lg:flex-row ">
            {team.Management.map((card) => (
              <div key={card.id}>
                <img src={card.image} alt="" />
                <InfoTeam carrer={card.carrer} name={card.name} />
              </div>
            ))}
          </div>
        </AnimationDiv>
        <AnimationDiv>
          <TitleTeam team={team.NutritionistsTitle} />

          <div className="mt-[50px] flex gap-[30px] flex-col lg:flex-row ">
            {team.Nutritionists.map((card) => (
              <div key={card.id}>
                <ImageTeam imageURL={card.image} alt={card.name} />
                <InfoTeam carrer={card.carrer} name={card.name} />
              </div>
            ))}
          </div>
        </AnimationDiv>

        <AnimationDiv>
          <TitleTeam team={team.MarketingTitle} />

          <div className="mt-[50px] flex gap-[30px] flex-col lg:flex-row ">
            {team.Marketing.map((card) => (
              <div key={card.id}>
                <ImageTeam imageURL={card.image} alt={card.name} />
                <InfoTeam carrer={card.carrer} name={card.name} />
              </div>
            ))}
          </div>
        </AnimationDiv>

        <AnimationDiv>
          <TitleTeam team={team.SupportTitle} />

          <div className="mt-[50px] flex gap-[30px] flex-col lg:flex-row ">
            {team.Suport.map((card) => (
              <div key={card.id}>
                <ImageTeam imageURL={card.image} alt={card.name} />
                <InfoTeam carrer={card.carrer} name={card.name} />
              </div>
            ))}
          </div>
        </AnimationDiv>

        <AnimationDiv>
          <TitleTeam team={team.DevelopmentTitle} />

          <div className="mt-[50px] flex gap-[30px] flex-col lg:flex-row ">
            {team.Tech.map((card) => (
              <div key={card.id}>
                <ImageTeam
                  className={` w-[350px] h-[550px] `}
                  imageURL={card.image}
                  alt={card.name}
                />
                <InfoTeam carrer={card.carrer} name={card.name} />
              </div>
            ))}
          </div>
        </AnimationDiv>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-20 mt-[100px] rounded-md p-4 lg:p-20 bg-GreenShades_200 border border-GreenShades_300">
          <AnimationDiv className="flex flex-col gap-[14px] ">
            <h4 className="text-GreyShades_900 font-bold leading-[51px] text-[2.125rem] ">
              {action.title}
            </h4>
            <p className="text-lg font-medium leading-[27px] text-GreyShades_800 ">
              {action.description}
            </p>
          </AnimationDiv>
          <Button className="w-full lg:w-[350px] " variant="primary">
            Inscreva-se
          </Button>
        </div>
      </section>
    </main>
  )
}
