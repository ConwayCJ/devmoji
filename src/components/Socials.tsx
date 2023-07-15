import { LinkedIn, GitHub } from "@mui/icons-material"

export default function Socials({ socials }: any) {

  return (
    <div>
      <p>Contributor Socials</p>
      <a href={socials.LIurl} target="_blank">
        <LinkedIn />
      </a>
      <a href={socials.GHurl} target="_blank">
        <GitHub />
      </a>
    </div>
  )
}
