import styles from '../styles/Page.module.css'
import Navigation from './Navigation'
import { addArrayDelim, preventNumberInput } from '../utility'
import React, { useState, useEffect, useRef, ChangeEvent } from 'react'

/**
 * Todo: Fix types: const formRef<any>
 *                  onKeyDown<any> ??
 *   
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
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    /**question: --------- 
     * 
     * why can I not reset the form this way? inputs persist,
     * 
     * but aren't shown in the input field
     * forcing every input to an empty string on prompt update works
     * 
     *  formRef.current.reset()
    */
    console.log(formRef)
    Array.from(formRef.current?.children || []).forEach((child) => {
      if (child instanceof HTMLInputElement) {
        child.value = ""
      }
    })

    //set focus to first input
    const firstInput = formRef.current?.querySelector("input") as HTMLInputElement | null
    firstInput?.focus()

    //reset state
    setPromptArr(addArrayDelim("+", prompt))
    setPromptWon(false)
    setUserGuess([])
  }, [prompt])


  //Game State Logic

  function checkWin(userGuess: string[]) {
    const guess = userGuess.join("")

    console.log("checking win: ", guess, "+", answer.replace(/\s/g, "").trim().toLowerCase())
    if (guess.toLowerCase() == answer.replace(/\s/g, "").trim().toLowerCase()) {
      setPromptWon(true)
    }
  }

  //Prompt logic

  return (
    <div className={styles.pageWrapper}>

      <h1>{promptWon ? "u win" : "keep trying"}</h1>

      <span className={styles.questionContainer}>
        {promptArr.map((item, index) => <p key={index}>{item}</p>)}
      </span>

      <form ref={formRef} className={styles.guessContainer} id="guessContainer">

        {answer.split("").map((character, index) => {

          const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {

            const nextInput = e.target.nextSibling as HTMLInputElement
            const previousInput = e.target.previousSibling as HTMLInputElement
            const keyType = (e.nativeEvent as InputEvent).inputType

            const inputs = Array.from(formRef.current?.children || []) as HTMLInputElement[]
            const guess = inputs.map((input) => input.value)

            if (nextInput !== null && keyType !== "deleteContentBackward") {
              nextInput.focus()
            }

            checkWin(guess)
          }

          if (character === " ") { return }

          return (
            <input
              type="text"
              // value={userGuess[index]}
              style={{ marginLeft: answer[index - 1] === ' ' ? '10px' : "0px" }}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.currentTarget.value = ""
                  const previousInput = e.currentTarget.previousElementSibling as HTMLInputElement
                  previousInput.focus()
                }
                preventNumberInput(e)
              }}
              onChange={(e) => {
                handleChange(e, index)
              }}
              maxLength={1}
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

