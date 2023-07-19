import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from 'react-use/lib/useWindowSize'
import ReactConfetti from 'react-confetti'
import Footer from './Footer'


export default function Exit() {
  const { width, height } = useWindowSize()

  return (
    <div className='container flex flex-col w-full h-screen justify-around items-center'>
      <ReactConfetti
        width={width}
        height={height}
        numberOfPieces={350}
        initialVelocityY={50}
      >
      </ReactConfetti>
      <div></div>

      <p>You're out of questions! Click to return to the main Page</p>
      <Link to="/">Go to Home</Link>
      <Footer />
    </div>
  )
}
