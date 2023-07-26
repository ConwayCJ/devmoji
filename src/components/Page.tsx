// @ts-nocheck
import Navigation from './Navigation'
import { addArrayDelim, handleKeyDown } from '../utility'
import React, { useState, useEffect, useRef, useReducer, MutableRefObject, Reducer, ReducerAction } from 'react'
import { PromptData } from '../main'
import Socials from './Socials'

// memoize values like guessWon

interface PageProps extends PromptData {
  questionNumber: number
}

export default function Page({ answer, prompt, socials, questionNumber }: PageProps) {
  const formRef = useRef<HTMLFormElement>(null)

  const initialState = {
    promptArr: addArrayDelim("+", prompt), //this is line 14
    userGuess: Array.from(answer.split(" "), () => []) //line 17
  }

  function reducer(prevState: typeof initialState, action: ReducerAction) {

    switch (action.type) {
      case 'resetPromptArr':
        return {
          ...prevState,
          promptArr: initialState.promptArr
        }
        break;
      case 'resetUserGuess':
        return {
          ...prevState,
          userGuess: initialState.userGuess
        }
        break;
      case 'updateUserGuess':

        let newGuess = prevState.userGuess
        newGuess[action.wordIndex][action.charIndex] = action.inputValue

        return {
          ...prevState,
          userGuess: newGuess
        }
        break;
      default:
        return prevState
    }
  }

  const [state, dispatch] = useReducer<Reducer<typeof initialState, ReducerAction>>(reducer, initialState)

  useEffect(() => {

    dispatch({ type: 'resetPromptWon' })
    dispatch({ type: 'resetPromptArr' })
    dispatch({ type: 'resetUserGuess' })

  }, [prompt])

  return (
    <div className={`transition ease-in-out delay-300 w-full h-screen flex flex-col items-center justify-end 
    ${state.userGuess.flat().join("") === answer.replace(/\s/g, "").trim().toLowerCase() ?
        'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-blue-900 to-violet-800' :
        'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900'}
        `}>


      < div className="flex flex-col items-center absolute top-1/2 -translate-y-1/2" >

        <span className={`promptContainer flex justify-around align-middle w-60 h-full mb-10`}>
          {initialState.promptArr.map((item, index) => <p
            key={index}
            className={item === "+" ? 'text-2xl' : 'text-4xl'}
          >{item}</p>)}
        </span >

        <div className='flex flex-row'>
          <form ref={formRef}>
            <div className='flex flex-wrap justify-center'>

              {answer.split(" ").map((word, wordIndex) => (
                // Container for all inputs PER WORD

                <div key={wordIndex} className={wordIndex !== 0 ? 'ml-5' : ''}>

                  {word.split("").map((character, charIndex) => {

                    const handleChange = (e: React.BaseSyntheticEvent) => {
                      dispatch({
                        type: 'updateUserGuess',
                        inputValue: e.target.value,
                        charIndex: charIndex,
                        wordIndex: wordIndex
                      })
                    }

                    return (
                      <input
                        className=' border border-blue-500 w-9 h-9 text-center mr-0.5'
                        onKeyDown={(e) => {
                          handleKeyDown(e)
                        }}
                        onChange={handleChange}
                        maxLength={1}
                        key={charIndex} />
                    )
                  })}
                </div>
              ))}
            </div>
          </form>
          {/* Win/Lose Checkbox */}
          <div className='ml-1'>
            {state.userGuess.flat().join("") === answer.replace(/\s/g, "").trim().toLowerCase() ?
              '✔' : '❌'}
          </div>

        </div>

        <Navigation
          questionNumber={questionNumber}
          answer={answer} />
      </div >

      {/* Only show socials if contribute */}
      <div>
        {socials ? <Socials socials={socials} /> : <div></div>}
      </div >

    </div >
  )
}

