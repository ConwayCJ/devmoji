import React from 'react'
import styles from '../styles/LandingPage.module.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className='w-full h-screen flex flex-col justify-between items-center'>
      <div></div>

      <div>
        <h1>Welcome to _appName_</h1>
        <section>
          <p>Instruction: Guess the phrase</p>
          <p>For Devs: consider contributing on <a href="https://github.com/ConwayCJ/opensourceproject" target="_blank">GitHub</a></p>
        </section>
      </div>

      <div>
        <Link className=' text-4xl uppercase border border-cyan-400 ring-2 shadow-lg p-1 rounded-xl' to={'/1'}>Get started</Link>
      </div>


      <Footer />


    </div>
  )
}
