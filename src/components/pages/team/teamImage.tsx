interface ImageTeamProps {
  imageURL: string
  alt: string
}

export function ImageTeam({ imageURL, alt }: ImageTeamProps) {
  return (
    <div className="w-full bg-GreenShades_700 rounded-md border">
      <img className=" " src={imageURL} alt={alt} />
    </div>
  )
}
