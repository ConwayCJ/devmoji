import { AccountCircle, GitHub, LinkedIn } from '@mui/icons-material'
import { Link } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <div className=' mt-20 footer w-full flex flex-col items-center bg-sky-950 p-4'>
      <span className='mt-1 border-b-2 pb-1'>
        <a href="https://github.com/ConwayCJ" className='text-blue-400 ml-1 mr-1 hover:text-blue-600 transition-colors'><GitHub /></a>
        <a href="https://www.linkedin.com/in/conwaycj/" className='text-blue-400 ml-1 mr-1 hover:text-blue-600 transition-colors'><LinkedIn /></a>
        <a href="https://christopherjconway.netlify.app/" className='text-blue-400 ml-1 mr-1 hover:text-blue-600 transition-colors'><AccountCircle /></a>
      </span>
      <span className='mt-1'>
        <a href="https://github.com/ConwayCJ/devmoji" className='font-medium text-blue-600 dark:text-blue-500 hover:underline hover:text-blue-600 transition-colors'>
          Contribute</a>
      </span>
      <span>
        <p>@2023 Christopher Conway</p>
      </span>
    </div>
  )
}
