type PromptData = {
  prompt: any[]
  answer: string
}

import { HourglassBottom, WbSunny } from '@mui/icons-material'

/**
 * Idea:
 * 
 * Let answer be a list of answers, check in prompt if userGuess.includes(answer)
 * 
 */

const data: PromptData[] = [{
  prompt: [<WbSunny />, "day"],
  answer: "sunny day",
}, {
  prompt: ["Out", "of", <HourglassBottom />],
  answer: "out of time"
}]

export default data