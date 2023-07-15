import styles from '../styles/Page.module.css'
import Navigation from './Navigation'
import { addArrayDelim, handleKeyDown } from '../utility'
import React, { useState, useEffect, useRef, MutableRefObject } from 'react'
import { PromptData } from '../main'
import Socials from './Socials'

interface PageData extends PromptData {
  questionNumber: number
}

export default function Page({ answer, prompt, socials, questionNumber }: PageData) {

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
     * formRef.current.reset()
     * 
    */

    Array.from((formRef.current as HTMLFormElement).children).forEach((child) => {
      (child as HTMLInputElement).value = "";
    })

    const prevRef = (formRef as MutableRefObject<HTMLFormElement>).current;

    const firstInput = prevRef?.children[0] as HTMLInputElement

    firstInput.focus();

    //reset state
    setPromptArr(addArrayDelim("+", prompt))
    setPromptWon(false)

  }, [prompt])


  //Game State Logic

  function checkWin(userGuess: string[]) {
    const guess = userGuess.join("")

    console.log("checking win: ", guess, "+", answer.replace(/\s/g, "").trim().toLowerCase())
    if (guess.toLowerCase() == answer.replace(/\s/g, "").trim().toLowerCase()) {
      setPromptWon(true)
    }
  }

  return (
    <div className={styles.pageWrapper}>

      <h1>{promptWon ? "u win" : "keep trying"}</h1>

      <span className={styles.questionContainer}>
        {promptArr.map((item, index) => <p key={index}>{item}</p>)}
      </span>

      <form ref={formRef} className={styles.guessContainer} id="guessContainer">

        {answer.split("").map((character, index) => {

          const handleChange = (e: React.BaseSyntheticEvent) => {

            const nextInput = e.currentTarget.nextSibling
            const keyType = (e.nativeEvent as InputEvent).inputType

            const prevRef = (formRef as MutableRefObject<HTMLFormElement>).current;
            const inputs = [...prevRef.children] as HTMLInputElement[]
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
                handleKeyDown(e)
              }}
              onChange={handleChange}
              maxLength={1}
              key={index} />
          )
        })}
      </form>

      <Navigation
        questionNumber={questionNumber}
        answer={answer} />
      {socials ? <Socials socials={socials} /> : null}
    </div>
  )
}

