//Material UI Imports: https://mui.com/material-ui/material-icons/
import { Coffee, AirplanemodeActive, Favorite } from '@mui/icons-material'
//FA React Icons Imports: https://react-icons.github.io/react-icons
import { FaStar, FaChessQueen, FaSpider } from 'react-icons/fa';
//GI React Icons Imports: https://react-icons.github.io/react-icons
import { GiTireTracks } from 'react-icons/gi'
import { PromptData } from '../main'

const data: PromptData[] = [{
  prompt: [<FaStar />, <GiTireTracks />],
  answer: "star trek",
  socials: {
    LIurl: 'https://www.linkedin.com/in/conwaycj/',
    GHurl: 'https://github.com/ConwayCJ',
  }
}, {
  prompt: [<Coffee />, "is", "life"],
  answer: 'coffee is life'
}, {
  prompt: [<AirplanemodeActive />, "mode"],
  answer: "airplane mode",
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
},
{
  prompt: [<FaSpider/>, "man"],
  answer: "spider man",
  socials: {
    LIurl: "",
    GHurl: "https://github.com/BipulLamsal"
  }
}]

export default data
