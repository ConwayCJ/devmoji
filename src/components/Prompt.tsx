import React from 'react'
import Navigation from './Navigation'
import { useState } from 'react'
import styles from '../styles/Prompt.module.css'

type Prompt = {
  question: string
  answer: string[]
  questionNumber: number
}

export default function Prompt({ question, answer, questionNumber }: Prompt) {
  console.log(answer)
  console.log(question)

  answer = answer.map(string => {
    return string.toLowerCase()
  })

  const [userGuess, setUserGuess] = useState('')
  const [userMadeGuess, setUserMadeGuess] = useState(false)
  const [result, setResult] = useState('')
  const [timeLeft, setTimeLeft] = useState(10)

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

    console.log(userGuess, answer)
  }

  {
    setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
  }

  return (
    <div className={styles.promptWrapper}>
      {/* <span>
        {timeLeft > 0 ?
            <p>You have {timeLeft} seconds left!</p> : <>
              <p>You're out of time, your mom is super disappointed</p>
              <button onClick={() => setTimeLeft(60)}>Reset time, make mom proud!</button>
            </>}
      </span> */}


      <h1>Question: {question}</h1>
      <h2>Possible answers: {answer.map((answer, index) => (
        <p key={index}>{answer}</p>
      ))}</h2>
      <h3>{userMadeGuess ? result : <></>}</h3>

      <p>Make your guess:</p>
      <input onChange={(e) => setUserGuess(e.target.value)}></input>

      <button onClick={(e) => makeGuess(e)}>Submit Guess</button>
      <Navigation questionNumber={questionNumber} handleState={handleUserMadeGuess} />
    </div>
  )
}