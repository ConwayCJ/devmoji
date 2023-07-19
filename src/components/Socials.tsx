import { LinkedIn, GitHub } from "@mui/icons-material"

export default function Socials({ socials }: any) {

  return (
    <div className="flex mb-3">
      <p className="mr-2">Contributor Socials:</p>
      <a href={socials.LIurl} target="_blank">
        <LinkedIn />
      </a>
      <a href={socials.GHurl} target="_blank">
        <GitHub />
      </a>
    </div>
  )
}
