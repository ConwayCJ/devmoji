import { Link } from 'react-router-dom'
import styles from "../styles/Navigation.module.css"
import { ArrowBack, ArrowForward, HouseRounded } from '@mui/icons-material'

export default function Navigation({ questionNumber, answer }: any) {
  console.log(questionNumber)

  const navigateLeft = questionNumber -= 1
  const navigateRight = questionNumber += 2

  const clearInputs = () => {
    const form: HTMLFormElement | any = document.querySelector("#guessContainer")
    form.reset()
    console.log(answer)
  }


  return (
    <nav className={styles.navWrapper}>
      <ul>
        <li>
          {navigateLeft == 0 ?
            <Link to={"/"} onClick={clearInputs}><HouseRounded /></Link> :
            <Link to={`../${navigateLeft}`} onFocus={clearInputs}><ArrowBack /></Link>}
        </li>
        <li>
          <Link to={`../${navigateRight}`} onFocus={clearInputs}><ArrowForward /></Link>
        </li>
      </ul>
    </nav>
  )
}
