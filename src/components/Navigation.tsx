import { Link } from 'react-router-dom'
import { ArrowBack, ArrowForward, HouseRounded } from '@mui/icons-material'

export default function Navigation({ questionNumber }: any) {

  const navigateLeft = questionNumber -= 1
  const navigateRight = questionNumber += 2

  return (
    <nav className='mt-5'>
      <ul className='navContainer flex flex-row'>
        <li className='mr-2'>
          {navigateLeft == 0 ?
            <Link to={"/"}><HouseRounded /></Link> :
            <Link to={`../${navigateLeft}`}><ArrowBack /></Link>}
        </li>
        <li className='ml-2'>
          <Link to={`../${navigateRight}`}><ArrowForward /></Link>
        </li>
      </ul>
    </nav>
  )
}
