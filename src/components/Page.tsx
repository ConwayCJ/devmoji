// @ts-nocheck
import Navigation from './Navigation'
import { addArrayDelim, handleKeyDown } from '../utility'
import React, { useState, useEffect, useRef, useReducer, MutableRefObject, Reducer, ReducerAction } from 'react'
import { PromptData } from '../main'
import Socials from './Socials'
import { CheckCircleOutline, CloseOutlined } from '@mui/icons-material'

interface PageProps extends PromptData {
  questionNumber: number
}

export default function Page({ answer, prompt, socials, questionNumber }: PageProps) {
  const formRef = useRef<HTMLFormElement>(null)

  const initialState = {
    promptArr: addArrayDelim("+", prompt),
    userGuess: Array.from(answer.split(" "), () => [])
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

    //focus first input on prompt change
    formRef.current[0].focus()

    //Reset value inputs to empty
    formRef.current?.childNodes[0].childNodes.forEach(inputContainer => {
      inputContainer.childNodes.forEach(input => {
        input.value = ""
      })
    })

    dispatch({ type: 'resetPromptWon' })
    dispatch({ type: 'resetPromptArr' })
    dispatch({ type: 'resetUserGuess' })

  }, [prompt])

  return (
    <div className={`transition ease-in-out delay-300 w-full h-screen flex flex-col items-center justify-end 
    ${state.userGuess.flat().join("").toLowerCase() === answer.replace(/\s/g, "").trim().toLowerCase() ?
        'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-blue-900 to-violet-800' :
        'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900'}
        `}>

      < div className="flex flex-col items-center absolute top-1/2 -translate-y-1/2 h-72" >

        <span className={`promptContainer flex justify-center align-middle w-60 h-full mb-2`}>
          {initialState.promptArr.map((item, index) => <p
            key={index}
            className={item === "+" ? 'text-2xl flex items-center ml-3 mr-4' : 'text-4xl flex items-center'}
          >{item}</p>)}
        </span >

        <div className=''>
          <form ref={formRef} className='flex flex-row mb-2'>
            <div className='flex flex-wrap justify-center'>

              {answer.split(" ").map((word, wordIndex) => (

                <div key={wordIndex} className={wordIndex !== 0 ? 'ml-5 mb-2' : ''}>

                  {word.split("").map((character, charIndex) => {

                    const handleChange = (e: React.BaseSyntheticEvent) => {

                      dispatch({
                        type: 'updateUserGuess',
                        inputValue: e.target.value,
                        charIndex: charIndex,
                        wordIndex: wordIndex
                      })

                      const formChildren = formRef.current?.childNodes[0]

                      //Navigate Forward
                      if (formChildren?.childNodes[wordIndex].childNodes[charIndex + 1]) {
                        formChildren?.childNodes[wordIndex].childNodes[charIndex + 1].focus()
                      }
                      //Skip to next word
                      if (e.target.nextElementSibling == null && wordIndex + 1 !== formChildren?.childNodes.length) {
                        console.log(formChildren?.childNodes)
                        formChildren?.childNodes[wordIndex + 1].childNodes[0].focus()
                      }
                    }

                    return (
                      <input
                        className='border border-blue-500 w-9 h-9 text-center mr-0.5'
                        onKeyDown={e => handleKeyDown(e, wordIndex, charIndex, formRef)}
                        onChange={e => handleChange(e, wordIndex, charIndex)}
                        maxLength={1}
                        key={charIndex}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
            {/* Win/Lose Checkbox */}
            <div className='ml-1 flex items-center'>
              {state.userGuess.flat().join("").toLowerCase() === answer.replace(/\s/g, "").trim().toLowerCase() ?
                <CheckCircleOutline color="success" /> : "❌"}
            </div>
          </form>
        </div>
        <Navigation
          questionNumber={questionNumber}
          answer={answer} />
      </div >

      {socials ?
        <div className=" w-full flex justify-center bg-slate-800 opacity-90 p-4">
          <Socials socials={socials} />
        </div >
        : <></>}
    </div >
  )
}
