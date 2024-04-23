import { twMerge } from 'tailwind-merge'

interface ImageTeamProps {
  imageURL: string
  alt: string
  className?: string
}

export function ImageTeam({ imageURL, alt, className }: ImageTeamProps) {
  return (
    <div className="w-full  bg-GreenShades_700 rounded-md border">
      <img className={(twMerge(``), className)} src={imageURL} alt={alt} />
    </div>
  )
}
