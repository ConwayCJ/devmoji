import styles from '../styles/Page.module.css'
import Navigation from './Navigation'
import Prompt from './Prompt'
import { addArrayDelim } from '../utility'
import { useState, useEffect, KeyboardEvent, useRef } from 'react'

/**
 * Todo: Import type for prompt/answer/questionNumber, consolidate
 */


export default function Page({ answer, prompt, questionNumber }: {
  answer: string
  prompt: React.ReactNode[]
  questionNumber: number
}) {

  //State Management
  const [userGuess, setUserGuess] = useState<string[]>([])
  const [promptArr, setPromptArr] = useState<typeof prompt>([])
  const [promptWon, setPromptWon] = useState(false)
  const formRef = useRef(<form></form>)

  //reset state after new prompt renders
  useEffect(() => {
    setPromptArr(addArrayDelim("+", prompt))
    setPromptWon(false)
    setUserGuess([])

    const form = document.getElementById("guessContainer") as HTMLFormElement || <form></form>
    form.reset()
  }, [prompt])

  //checking for a win, every time there's a new input for the prompt guess
  useEffect(() => {
    checkWin()
  }, [userGuess])


  //Game State Logic

  const combineGuess = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    let updatedGuess: string[] = [...userGuess]
    updatedGuess[index] = e.currentTarget.value
    console.log("combining guess: ", updatedGuess)
    setUserGuess(updatedGuess)
  }

  function checkWin() {
    let userInput = userGuess.join("")
    console.log("checking win: ", userInput, "+", answer.replace(/\s/g, "").trim().toLowerCase())
    userInput.toLowerCase() == answer.replace(/\s/g, "").trim().toLowerCase() ? setPromptWon(true) : setPromptWon(false)
  }

  return (
    <div className={styles.pageWrapper}>

      <h1>{promptWon ? "u win" : "keep trying"}</h1>

      <Prompt
        prompt={promptArr}
        answer={answer}
        combineGuess={combineGuess}
      />
      <Navigation
        questionNumber={questionNumber}
        answer={answer} />
    </div>
  )
}

