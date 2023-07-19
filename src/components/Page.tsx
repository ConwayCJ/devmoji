import Navigation from './Navigation'
import { addArrayDelim, handleKeyDown } from '../utility'
import React, { useState, useEffect, useRef, MutableRefObject } from 'react'
import { PromptData } from '../main'
import Socials from './Socials'


interface PageProps extends PromptData {
  questionNumber: number
}

export default function Page({ answer, prompt, socials, questionNumber }: PageProps) {

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
    <div className={`w-full h-screen flex flex-col items-center justify-end`}>

      <div className="flex flex-col items-center absolute top-1/2 -translate-y-1/2">
        <span className={`promptContainer flex justify-around align-middle w-60 h-full mb-10`}>
          {promptArr.map((item, index) => <p
            key={index}
            className={item === "+" ? 'text-2xl' : 'text-4xl'}
          >{item}</p>)
          }
        </span >

        <form ref={formRef} className="">

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
                className=' border border-blue-500 mr-0.5'
                style={{
                  marginLeft: answer[index - 1] === ' ' ? '20px' : "0px",
                  width: "2.2em",
                  height: "2.2em",
                  textAlign: "center",
                }}
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
      </div >


      {/* Only show socials if contribute */}
      <div>
        {socials ? <Socials socials={socials} /> : <div></div>}
      </div >

    </div >
  )
}

