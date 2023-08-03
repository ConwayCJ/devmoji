//Material UI Imports: https://mui.com/material-ui/material-icons/
import { HouseSharp, WbSunny, Coffee, AirplanemodeActive, Favorite } from '@mui/icons-material'
//React Icons Imports: https://react-icons.github.io/react-icons
import { FaChessQueen } from 'react-icons/fa';
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
}, {
  prompt: [<FaChessQueen/>, "of", <Favorite/>],
  answer: "queen of hearts",
  socials: {
    LIurl: "https://www.linkedin.com/in/rachelkvanhorn/",
    GHurl: "https://github.com/RKVanHorn"
  }
}

]

export default data