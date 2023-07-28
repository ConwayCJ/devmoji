import { LinkedIn, GitHub } from "@mui/icons-material"

export default function Socials({ socials }: any) {

  return (
    <div className="flex items-center">
      <p className="mr-2 underline underline-offset-4">Contributor Socials:</p>
      <a href={socials.LIurl} target="_blank" className="mr-1">
        <LinkedIn />
      </a>
      <a href={socials.GHurl} target="_blank">
        <GitHub />
      </a>
    </div>
  )
}
