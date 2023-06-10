import React, { BaseSyntheticEvent, SyntheticEvent } from 'react'
import Navigation from './Navigation'
import { useState } from 'react'
import styles from '../styles/Prompt.module.css'

type Prompt = {
  question: any[]
  answer: string
  questionNumber: number
}

export default function Prompt({ question, answer, questionNumber }: Prompt) {
  console.log(answer)
  console.log(question)

  const [userGuess, setUserGuess] = useState('')
  const [userMadeGuess, setUserMadeGuess] = useState(false)
  const [result, setResult] = useState('')




  function handleUserMadeGuess() {
    setUserMadeGuess(false)
    setResult('')
  }

  function makeGuess(e: any) {
    e.preventDefault()
    setUserMadeGuess(true)

    answer.includes(userGuess.toLowerCase()) ?
      setResult("Correct!") :
      setResult("Wrong :(")

    setUserGuess('')
  }

  console.log(answer.split(""))

  return (
    <div className={styles.promptWrapper}>

      <h1>{question.reduce((acc, curr) => {
        acc.push(curr, "+")
        return acc
      }, []).slice(0, -1)}</h1>
      <h3>{userMadeGuess ? result : <></>}</h3>

      <p>Make your guess:</p>


      <form className={styles.guessContainer}>
        {answer.split("").map((character, index) => {

          if (character === " ") { return }

          return (
            <input
              type="text"
              style={{ marginLeft: answer[index - 1] === ' ' ? '10px' : "0px" }}
              maxLength={1}
              onKeyUp={(e: BaseSyntheticEvent) => e.currentTarget.nextElementSibling.focus()}
              tabIndex={index}
              key={index} />
          )

        })}
      </form>
      <button onClick={(e) => makeGuess(e)}>Submit Guess</button>


      <Navigation
        questionNumber={questionNumber}
        handleState={handleUserMadeGuess}
      />
    </div>
  )
}