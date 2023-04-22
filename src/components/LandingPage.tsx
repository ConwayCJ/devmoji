import React from 'react'
import styles from '../styles/LandingPage.module.css'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <>
      <h1>welcome to page</h1>
      <Link to={'/1'}>Get started!</Link>
    </>
  )
}
