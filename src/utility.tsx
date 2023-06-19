/**
 * @description Takes a string and an array, 
 * inserts string inbetween each item in array
 * 
 * @param delim Symbol to concatenate between each item in array
 * @param array List of items: any type
 * @returns new array with symbol inbetween each item of original array
 */
export const addArrayDelim = (delim: string, array: React.ReactNode[]) => {
  const newArr: typeof array = []
  const pushWithDelim = (el: React.ReactNode) => {
    newArr.push(el)
    newArr.push(delim)
  }
  array.forEach(pushWithDelim)
  console.log(newArr.slice(0, -1))
  return newArr.slice(0, -1)
}

/**
 * @description Checks if user input is a number, prevents default if true 
 * @param e Any type of keyboard/click event
 */
export const preventNumberInput = (e: any) => {
  let keyCode = e.keycode ? e.keycode : e.which;
  if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107) {
    console.log("preventing default")
    e.preventDefault()

  }
}

