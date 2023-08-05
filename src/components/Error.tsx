import shrek from '../assets/shrek_over_wall.png'
import donkey from '../assets/yikes-oops.gif'

export default function Error() {

  return (
    <div className="flex flex-col justify-between align-middle overflow-hidden exitPage w-full h-screen">
      <div></div>
      <div></div>

      <div className='container'>
        <div className='bubble flex flex-row flex-wrap items-center justify-center'>
          <img src={donkey} className="rounded-lg w-20 m-2" />
          <p className="mr-4">
            404.
          </p>
          <p>
            The swamp couldn't be found.
          </p>
        </div>

      </div>

      <div className='shrekContainer self-center'>
        <img
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "900px"
          }}
          src={shrek}
        ></img>

      </div>
    </div>
  )
}
