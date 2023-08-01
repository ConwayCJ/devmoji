import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function LandingPage() {

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

  return (
    <div className='w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 h-screen flex flex-col items-center justify-end'>

      <div className='flex flex-col items-center'>

        <div className='welcomeContainer'>
          <span className='flex flex-row justify-center'>
            <p style={{ color: getRandomColor() }}>D</p>
            <p style={{ color: getRandomColor() }}>e</p>
            <p style={{ color: getRandomColor() }}>v</p>
            <p style={{ color: getRandomColor() }}>M</p>
            <p className='animate-bounce' style={{ color: getRandomColor() }}>ö</p>
            <p style={{ color: getRandomColor() }}>j</p>
            <p style={{ color: getRandomColor() }}>i</p>
          </span>
        </div>
        <span className='cta text-center text-2xl'>
          <p>
            Wordle with emojis.
          </p>
          <p>
            Guess the phrase!
          </p>
        </span>
      </div>


      <Link className='text-5xl mt-28 bg-cyan-900 rounded-lg px-6 py-2 ring ring-gray-300 hover:bg-cyan-700 transition delay-75' to={'/1'}>Play</Link>



      <Footer />



    </div>
  )
}
