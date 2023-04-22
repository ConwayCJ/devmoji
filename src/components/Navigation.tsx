import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({ questionNumber, handleState }: any) {
  console.log(questionNumber)

  const navigateLeft = questionNumber -= 1
  const navigateRight = questionNumber += 2



  return (
    <>
      <ul>
        <li>
          {navigateLeft == 0 ?
            <Link to={"/"} onClick={handleState}>Home</Link> :
            <Link to={`../${navigateLeft}`} onClick={handleState}>Left</Link>}
        </li>
        <li>
          <Link to={`../${navigateRight}`} onClick={handleState}>Right</Link>
        </li>
      </ul>
    </>
  )
}
