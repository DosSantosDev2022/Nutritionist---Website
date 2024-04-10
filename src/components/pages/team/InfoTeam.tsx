interface InfoTeamProps {
  name: string
  carrer: string
}

export function InfoTeam({ name, carrer }: InfoTeamProps) {
  return (
    <div className="relative lg:w-[200px] w-[280px] flex flex-col items-start justify-center p-4 border -top-8  rounded-r-md bg-absolute_white ">
      <span className="text-xl font-bold text-GreyShades_900">{name}</span>
      <span className="text-sm font-medium text-GreyShades_700">{carrer}</span>
    </div>
  )
}
