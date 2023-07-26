import { Link } from 'react-router-dom'
import Footer from './Footer'
import { FormEvent, FormEventHandler } from 'react'
import axios from 'axios'


export default function LandingPage() {


  // const handlePost = () => {
  //   const handlePost = () => {
  //     axios.post('/api/data', postData)
  //       .then((response) => {
  //         console.log('Data successfully saved:', response.data);
  //       })
  //       .catch((error) => {
  //         console.error('Error saving data:', error);
  //       });
  //   };
  // }

  const handleNewMessage: FormEventHandler = (e: FormEvent) => {

  }
  return (
    <div className='w-full h-screen flex flex-col justify-between items-center'>

      <div></div>
      <div>
        <h1>Welcome to DevMoji</h1>
        <section>
          <p>Instruction: Guess the phrase</p>
          <p>For Devs: consider contributing on <a href="https://github.com/ConwayCJ/opensourceproject" target="_blank">GitHub</a></p>
        </section>
      </div>

      <div>
        <Link className=' text-4xl uppercase border border-cyan-400 ring-2 shadow-lg p-1 rounded-xl' to={'/1'}>Get started</Link>
      </div>

      {/* 
      <form onSubmit={handleNewMessage} className='flex flex-col'>
        <label>Leave your mark~</label>
        <span>
          <input></input>
          <button>✔</button>
        </span>
      </form>
       */}


      <Footer />


    </div>
  )
}
