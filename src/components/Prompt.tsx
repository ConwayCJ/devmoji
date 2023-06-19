import styles from '../styles/Prompt.module.css'
import { preventNumberInput } from '../utility'
import { KeyboardEvent } from 'react'

/**
 * Todo: Change navigateInput function to new name
 *       Change wonGame wording to wonPrompt or correctAnswer or something
 * 
 */

type Prompt = {
  prompt: React.ReactNode[] //Array<string | React.ReactElement<JSX.Element> | null>
  answer: string
}

export default function Prompt({ prompt, answer, combineGuess }: {
  prompt: React.ReactNode[]
  answer: string
  combineGuess: (e: KeyboardEvent<HTMLInputElement>, index: number) => void
}) {

  // updateFocus function re-write..... navigate inputs
  const updateInputFocus = (e: any, index: number) => {
    preventNumberInput(e)

    console.log(e.key)

    const nextInput = e.currentTarget.nextElementSibling
    const previousInput = e.currentTarget.previousElementSibling

    if (e.key === "Backspace" && previousInput !== null) {
      previousInput.focus()
    } else if (nextInput !== null) {
      nextInput.focus()
    }

  }



  return (
    <div className={styles.promptWrapper}>

      <span className={styles.questionContainer}>
        {prompt.map((item, index) => <p key={index}>{item}</p>)}
      </span>

      <form className={styles.guessContainer} id="guessContainer">
        {answer.split("").map((character, index) => {

          if (character === " ") { return }

          return (
            <input
              type="text"
              style={{ marginLeft: answer[index - 1] === ' ' ? '10px' : "0px" }}
              onKeyUp={(e) => {
                combineGuess(e, index)
                updateInputFocus(e, index)
              }}
              maxLength={1}
              key={index} />
          )
        })}
      </form>
    </div>
  )
}