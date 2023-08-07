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

