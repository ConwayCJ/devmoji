import { key } from "localforage"
import { ChangeEvent } from "react"

/**
 * @description Takes a string and an array, 
 *              inserts string inbetween each item in array
 * 
 * @param delim Symbol to concatenate between each item in array
 * @param array List of items: any type
 * @returns     new array with symbol inbetween each item of original array
 */
export const addArrayDelim = (delim: string, array: React.ReactNode[]) => {
  const newArr: typeof array = []
  const pushWithDelim = (el: React.ReactNode) => {
    newArr.push(el)
    newArr.push(delim)
  }
  array.forEach(pushWithDelim)
  return newArr.slice(0, -1)
}

/**
 * @description Checks if user input is a number, prevents default if true. 
 *              Also handles deleting + backwards navigation
 * @param e     Any type of keyboard/click event
 */
export const handleKeyDown = (e: any, wordIndex: number, charIndex: number, formRef: HTMLFormElement) => {

  let keyCode = e.key.charCodeAt()

  console.log(keyCode)

  //if input is NOT a-z or A-Z prevent default
  if (!(keyCode < 123 && keyCode > 96 || keyCode > 64 && keyCode < 91)) {
    e.preventDefault()
  }

  //if backspace, delete + navigate
  if (keyCode === 66) {
    e.preventDefault()
    e.target.value = ""

    const prevWordContainer = formRef.current?.childNodes[0].childNodes[wordIndex - 1]

    if (e.target.previousElementSibling == null) {
      if (prevWordContainer !== undefined) {
        prevWordContainer.childNodes[prevWordContainer.childNodes.length - 1].focus()
      }
    } else {
      e.target.previousElementSibling.focus()
    }
  }


}

