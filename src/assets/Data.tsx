import { HourglassBottom, HouseSharp, WbSunny, HeartBroken, Coffee, AirplanemodeActive } from '@mui/icons-material'
import AppleIcon from '@mui/icons-material/Apple';

import { PromptData } from '../main'

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
}, {
  prompt: ["snakes", "on", "a", <AirplanemodeActive />],
  answer: "snakes on a plane",
  socials: {
    LIurl: "https://www.linkedin.com/in/nereidarondon/",
    GHurl: "https://github.com/NereidaRondon"
  }
},
{
  prompt: [<AppleIcon />, "seed", "plant"],
  answer: "apple seed plant",
  socials: {
    LIurl: "https://www.linkedin.com/in/movarnell/",
    GHurl: "https://github.com/movarnell"
  }
}

]

export default data