/**
 * @description Takes a string and an array, 
 * inserts string inbetween each item in array
 * 
 * @param delim Symbol to concatenate between each item in array
 * @param array List of items: any type
 * @returns new array with symbol inbetween each item of original array
 */
export const addArrayDelim = (delim: string, array: any[]) => {
  const newArr: any[] = []
  const pushWithDelim = (el: any) => {
    newArr.push(el)
    newArr.push(delim)
  }
  array.forEach(pushWithDelim)
  console.log(newArr.slice(0, -1))
  return newArr.slice(0, -1)
}