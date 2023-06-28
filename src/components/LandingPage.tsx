import React from 'react'
import styles from '../styles/LandingPage.module.css'
import { Link } from 'react-router-dom'

/**
 * Todo: Style
 *       Add credits for each user
 */

export default function LandingPage() {
  return (
    <>
      <h1>welcome!!</h1>
      <Link to={'/1'}>Get started!</Link>
    </>
  )
}
