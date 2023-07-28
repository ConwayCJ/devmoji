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

  const getRandomColor = () => {
    const randomRgb: string = `rgb(${Math.random() * 100 + 155},${Math.random() * 100 + 155},${Math.random() * 100 + 155})`

    const colorArray: string[] = [
      "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FF4500",
      "#FFD700", "#FF1493", "#00FF7F", "#FF69B4", "#ADFF2F", "#8A2BE2", "#FFA500",
      "#7FFF00", "#FFC0CB", "#00FF00", "#DC143C", "#00CED1", "#BA55D3", "#7CFC00",
      "#FF00FF", "#87CEEB", "#FF69B4", "#FF6347", "#6A5ACD", "#FF8C00", "#20B2AA",
      "#FF4500", "#DDA0DD", "#FFFF00", "#32CD32", "#BA55D3", "#FFA07A", "#00FFFF",
      "#FFD700", "#8B008B", "#FF00FF", "#FF6347", "#FFC0CB"
    ];

    const randomHex = Math.floor(Math.random() * colorArray.length - 1)

    return colorArray[randomHex]

  }

  // .welcomeContainer p:hover {
  //   animation: wavy 0.5s infinite;
  //   animation-direction: alternate;
  //   animation-delay: 100ms;
  //   color: rgba(119, 48, 48, 0);
  // }

  // @keyframes wavy {
  //   from {
  //     transform: translate3d(0, 0, 0);
  //   }
  //   to {
  //     transform: translate3d(0, -20px, 0);
  //   }
  // }

  const newspaperSpinning = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];

  const newspaperTiming = {
    duration: 2000,
    iterations: 1,
  };

  return (
    <div className='w-full h-screen flex flex-col justify-between items-center'>

      <div></div>
      <div className='flex flex-col align-middle items-center'>

        <div className='welcomeContainer mb-12 flex flex-row flex-wrap justify-center'>
          <h6>Welcome</h6>
          <h6 className='ml-4'>to</h6>
          <span className='flex flex-row bg-slate-900 rounded-xl p-2 ml-2 shadow-md shadow-sky-800 opacity-80'>
            <p style={{ color: getRandomColor() }}>D</p>
            <p style={{ color: getRandomColor() }}>e</p>
            <p style={{ color: getRandomColor() }}>v</p>
            <p style={{ color: getRandomColor() }}>M</p>
            <p className='animate-bounce' style={{ color: getRandomColor() }}>ö</p>
            <p style={{ color: getRandomColor() }}>j</p>
            <p style={{ color: getRandomColor() }}>i</p>
          </span>
        </div>
        <span className=' text-center'>
          Wordle with Emoji's. Guess the phrase!
        </span>
      </div>
      <div>
        <div>
          <Link className=' text-5xl bg-cyan-900 rounded-lg px-6 py-2 ring ring-gray-300 hover:bg-cyan-700 transition delay-75' to={'/1'}>Play</Link>
        </div>
      </div>

      <Footer />


    </div>
  )
}
