import shrek from '../../public/shrek_over_wall.png'

export default function Error() {

  const imageLoaded = false


  return (
    <div className="flex flex-col justify-between align-middle overflow-hidden exitPage w-full h-screen">
      <div></div>
      <div></div>




      <div className='container'>
        <div className='bubble flex flex-row flex-wrap items-center justify-center'>
          <p className="mr-4">
            D o n k e y
          </p>
          <p>
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
