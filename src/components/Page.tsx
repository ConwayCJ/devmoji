import React from 'react'
import styles from '../styles/Page.module.css'
import Navigation from './Navigation'
import Prompt from './Prompt'

/**
 * Todo: Import type for prompt/answer/questionNumber, consolidate
 */

export default function Page({ prompt, answer, questionNumber }:
  { prompt: string[], answer: string, questionNumber: number }) {
  console.log(questionNumber)
  return (
    <div className={styles.pageWrapper}>
      <Prompt
        question={prompt}
        answer={answer}
        questionNumber={questionNumber}
      />
    </div>
  )
}
