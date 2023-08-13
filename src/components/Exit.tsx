import { useState } from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from 'react-use/lib/useWindowSize'
import ReactConfetti from 'react-confetti'
import Footer from './Footer'
import { Switch, FormControlLabel } from '@mui/material'

export default function Exit() {
  const { width, height } = useWindowSize()
  const [wantsConfetti, setWantsConfetti] = useState(false)

  return (
    <div className=' bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black h-screen w-full flex flex-col items-center justify-between'>


      {wantsConfetti ? <ReactConfetti
        width={width}
        height={height}
        numberOfPieces={350}
        initialVelocityY={50}
      /> : <></>}

      <FormControlLabel
        className='mt-4'
        control={<Switch size="medium" onChange={() => setWantsConfetti(!wantsConfetti)} />}
        label="Toggle Confetti"
      />
      <div></div>
      <div></div>



      <div className="flex flex-col w-3/4 text-center items-center">
        <p className=' text-2xl'>You're out of questions!</p>
        <Link to="/" className=' mt-4 transition-colors text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
          Go to Home
        </Link>
        <div className=' text-2xl mt-6 text-center w-10/12'>
          <p>
            Want to help?
          </p>
          Consider
          <a href="https://github.com/ConwayCJ/devmoji" className=' ml-1 mr-1 font-medium text-blue-600 dark:text-blue-500 hover:underline hover:text-blue-600 transition-colors'>
            contributing
          </a>
          or starring the GitHub repository in the link. Thank you!
        </div>
      </div>

      <Footer />

    </div>
  )
}
