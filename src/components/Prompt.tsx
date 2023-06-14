
import { ChangeEvent, ChangeEventHandler, useMemo, useState } from 'react'
import styles from '../styles/Prompt.module.css'
import { PromptData } from '../main'

/**
 * Todo: Change navigateInput function to new name
 *       Change wonGame wording to wonPrompt or correctAnswer or something
 * 
 */

type Prompt = {
  prompt: Array<string | React.ReactElement<JSX.Element> | null> // React.ReactNode[]
  answer: string
}

export default function Prompt({ prompt, answer, combineGuess }: {
  prompt: Array<string | React.ReactElement<JSX.Element> | null> // React.ReactNode[]
  answer: string
  combineGuess: any
}) {



  /**
   * @description Checks if user input is a number, prevents default if true 
   * @param e Any type of keyboard/click event
   */
  function preventNumberInput(e: any) {
    let keyCode = e.keycode ? e.keycode : e.which;
    if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107) {
      console.log("preventing default")
      e.preventDefault()

    }
  }

  // updateFocus function re-write..... navigate inputs



  return (
    <div className={styles.promptWrapper}>

      <h1>put win thing here</h1>


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
              onChange={(e) => combineGuess(e, index)}
              maxLength={1}
              key={index} />
          )
        })}
      </form>
    </div>
  )
}