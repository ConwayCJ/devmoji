import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from 'react-use/lib/useWindowSize'
import ReactConfetti from 'react-confetti'


export default function Exit() {
  const { width, height } = useWindowSize()


  return (
    <div>
      <ReactConfetti
        width={width}
        height={height}
        numberOfPieces={500}
        initialVelocityY={20}
      >

      </ReactConfetti>

      <p>You're out of questions! Click to return to the main Page</p>
      <Link to="/">Home</Link>
    </div>
  )
}
