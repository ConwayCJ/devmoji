import styles from '../styles/Page.module.css'
import Navigation from './Navigation'
import Prompt from './Prompt'
import { addArrayDelim } from '../utility'
import { useState, useMemo } from 'react'
/**
 * Todo: Import type for prompt/answer/questionNumber, consolidate
 */


export default function Page({ answer, prompt, questionNumber }: {
  answer: string
  prompt: React.ReactElement[] | any[]
  questionNumber: number
}) {
  console.log(questionNumber)

  //State Management

  const [userGuess, setUserGuess] = useState([])
  const [promptArr, setPromptArr]: any[] = useState([])

  useMemo(() => {
    setPromptArr(addArrayDelim("+", prompt))
  }, [prompt])


  //Game State Logic

  const combineGuess = (e: any, index: any) => {
    console.log("combining guess: ")
    let updatedGuess: any = [...userGuess]
    updatedGuess[index] = e.currentTarget.value
    setUserGuess(updatedGuess)
  }

  function checkWin() {

    //   let userInput = userGuess.join("")
    //   console.log(userGuessStr)
    //   userInput.toLowerCase() == answer.replace(/\s/g, "").trim().toLowerCase() ? setWonGame(true) : setWonGame(false)
    // 
  }



  return (
    <div className={styles.pageWrapper}>
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
