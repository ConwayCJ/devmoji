import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from 'react-use/lib/useWindowSize'
import ReactConfetti from 'react-confetti'
import Footer from './Footer'


export default function Exit() {
  const { width, height } = useWindowSize()

  return (
    <div className='h-screen w-full flex flex-col items-center justify-end'>
      <ReactConfetti
        width={width}
        height={height}
        numberOfPieces={350}
        initialVelocityY={50}
      >
      </ReactConfetti>

      <div className="flex flex-col w-3/4 text-center items-center absolute top-1/2 -translate-y-1/2">
        <p>You're out of questions!</p>
        <br></br>
        <Link to="/">Go to Home</Link>
      </div>


      <Footer />

    </div>
  )
}
