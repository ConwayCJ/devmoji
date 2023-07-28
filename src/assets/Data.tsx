import { HourglassBottom, HouseSharp, WbSunny, HeartBroken, Coffee, AirplanemodeActive } from '@mui/icons-material'
import AppleIcon from '@mui/icons-material/Apple';
import { PromptData } from '../main'

/**
 * Todo: Add credits, option for LinkedIn/GitHub/Socials links to contributor
 * Consideration: Use SVG Sprites for emojis, import using a generic component
 */


const data: PromptData[] = [{
  prompt: [<WbSunny />, "day"],
  answer: "sunny day",
  socials: {
    LIurl: 'https://www.linkedin.com/in/conwaycj/',
    GHurl: 'https://github.com/ConwayCJ',
  }
}, {
  prompt: [<Coffee />, "is", "life"],
  answer: 'coffee is life'
}, {
  prompt: ["Welcome", <HouseSharp />],
  answer: 'welcome home'
},






{
  prompt: ["snakes", "on", "a", <AirplanemodeActive />],
  answer: "snakes on a plane",
  socials: {
    LIurl: "https://www.linkedin.com/in/nereidarondon/",
    GHurl: "https://github.com/NereidaRondon"
  }
},
{
  prompt: ["The", "best", "company", "on", "earth", "is", <AppleIcon />],
  answer: "The best company on earth is Apple",
  socials: {
    LIurl: "https://www.linkedin.com/in/movarnell/",
    GHurl: "https://github.com/movarnell"
  }
}

]

export default data