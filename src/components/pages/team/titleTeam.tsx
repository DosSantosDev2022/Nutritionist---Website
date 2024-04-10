interface TitleTeamProps {
  team: string
}

export function TitleTeam({ team }: TitleTeamProps) {
  return (
    <div className="h-[75px]  rounded-md bg-DarkGreen_600 flex items-center gap-4 justify-center w-full lg:px-[150px] lg:py-[30px] p-5  ">
      <h3 className="text-4xl font-bold leading-[27px] text-GreenShades_50 ">
        {team}
      </h3>
    </div>
  )
}
