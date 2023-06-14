
import Navigation from './Navigation'
import { BaseSyntheticEvent, FormEvent, InputHTMLAttributes, SyntheticEvent, useState } from 'react'

import styles from '../styles/Prompt.module.css'
import { Backspace } from '@mui/icons-material'

type Prompt = {
  question: any[]
  answer: string
  questionNumber: number
}

export default function Prompt({ question, answer, questionNumber }: Prompt) {
  console.log("answer: ", answer)
  console.log("question: ", question)

  const [userGuess, setUserGuess] = useState([])
  const [wonGame, setWonGame] = useState(false)



  function checkWin() {

    let userGuessStr = userGuess.join("")
    console.log(userGuessStr)
    userGuessStr.toLowerCase() == answer.replace(/\s/g, "").trim().toLowerCase() ? setWonGame(true) : setWonGame(false)
  }

  /**
   * @description Checks if user input is a number, prevents default if true 
   * @param e Any type of keyboard/click event
   */
  function preventNumberInput(e: any) {
    let keyCode = e.keycode ? e.keycode : e.which;
    if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107) {
      e.preventDefault()
    }
  }

  const combineGuess = (e: any, index: number) => {
    const updatedGuess: any = [...userGuess]
    updatedGuess[index] = e.currentTarget.value
    setUserGuess(updatedGuess)
  }

  const navigateInput = (e: BaseSyntheticEvent, eType: string) => {

    console.log(e)

    if (e.code == "Backspace") {
      console.log("hit backspace")
      e.currentTarget.previousElementSibling.focus()
    } else if (e.code !== "Backspace") {
      e.currentTarget.nextElementSibling.focus()
    }
  }

  // const navigateInput = (e: any, index: number) => {
  //   const nextElement = e.currentTarget.nextElementSibling;
  //   const previousElement = e.currentTarget.previousElementSibling

  //   if (e.key == "Backspace") {
  //     console.log("hit backspace")
  //     previousElement == null ? null : previousElement.focus()
  //   } else if (index !== answer.length) {
  //     e.target.value = e.key
  //     nextElement !== null ? nextElement.focus() : null;
  //   }
  //   console.log(userGuess)
  //   checkWin()
  // }

  const navigateInput = (e: any, currentIndex: number) => {
    const inputLength = answer.length;

    if (e.key === "Backspace") {
      // Navigate backwards
      if (currentIndex > 0 && e.target.value === "") {
        const previousIndex: number = currentIndex - 1;
        const previousInput: HTMLInputElement | null = document.querySelector(`input[tabindex="${previousIndex}"]`);

        if (previousInput) {
          previousInput.focus();
        }
      }
    } else {
      // Navigate forwards
      const inputValue: string = e.target.value;

      if (currentIndex < inputLength - 1 && inputValue && inputValue.trim().length > 0) {
        const nextIndex = currentIndex + 1;
        const nextInput: HTMLInputElement | null = document.querySelector(`input[tabindex="${nextIndex}"]`);

        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  return (
    <div className={styles.promptWrapper}>

      <h1>{wonGame ? "u win!" : "keep trying"}</h1>

      <span className={styles.questionContainer}>
        {
          addArrayDelim("+", question).map(((word, index) => (
            <p key={index}>{word}</p>
          )))
        }
      </span>

      <form className={styles.guessContainer} id="guessContainer">
        {answer.split("").map((character, index) => {

          if (character === " ") { return }

          return (
            <input
              type="text"
              style={{ marginLeft: answer[index - 1] === ' ' ? '10px' : "0px" }}
              maxLength={1}
              tabIndex={index}
              onKeyDown={e => {
                preventNumberInput(e)
                combineGuess(e, index)
              }}
              onKeyUp={(e) => navigateInput(e, index)}
              onChange={(e) => combineGuess(e, index)}
              key={index} />
          )

        })}
      </form>

      <Navigation
        questionNumber={questionNumber}

        answer={answer} />
    </div>
  )
}