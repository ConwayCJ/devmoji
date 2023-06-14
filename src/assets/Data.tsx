import { HourglassBottom, HouseSharp, WbSunny } from '@mui/icons-material'
import { PromptData } from '../main'

/**
 * Todo: Add credits, option for LinkedIn/GitHub/Socials links to contributor
 * 
 */

const data: PromptData[] = [{
  prompt: [<WbSunny />, "day"],
  answer: "sunny day",
}, {
  prompt: ["Out", "of", <HourglassBottom />],
  answer: "out of time"
}, {
  prompt: [<HouseSharp />, "party"],
  answer: "house party"
}]

export default data