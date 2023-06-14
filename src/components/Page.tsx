import styles from '../styles/Page.module.css'
import Navigation from './Navigation'
import Prompt from './Prompt'
import { addArrayDelim } from '../utility'
import { useState, useMemo, useEffect } from 'react'
/**
 * Todo: Import type for prompt/answer/questionNumber, consolidate
 */


export default function Page({ answer, prompt, questionNumber }: {
  answer: string
  prompt: React.ReactElement[] | any[]
  questionNumber: number
}) {

  //State Management

  const [userGuess, setUserGuess] = useState([])
  const [promptArr, setPromptArr]: any[] = useState([])
  const [promptWon, setPromptWon] = useState(false)

  useEffect(() => {
    setPromptArr(addArrayDelim("+", prompt))
    setPromptWon(false)
    setUserGuess([])
    const form = document.getElementById("guessContainer") as HTMLFormElement || <form></form>
    form.reset()
  }, [prompt])

  useMemo(() => {
    checkWin()
  }, [userGuess])

  //Game State Logic

  const combineGuess = (e: any, index: any) => {
    let updatedGuess: any = [...userGuess]
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
