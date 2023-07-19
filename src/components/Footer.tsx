import { GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex mb-6'>

      {/*  
              CREATOR SOCIALS      CONTRIBUTING
                 LI                   readme
                 GH                   GH
                 portfolio
      
      */}

      <div className='container flex flex-col items-center mr-5'>
        <h1 className='border-b-2 border-slate-50'>SOCIALS:</h1>

        <span className='mt-3'>
          <a href="https://www.linkedin.com/in/conwaycj/" className='mr-1' target="_blank"><LinkedIn /></a>
          <a href="https://github.com/ConwayCJ/opensourceproject" target="_blank"><GitHub /></a>
        </span>
      </div>

      <div className='container flex flex-col items-center ml-5'>
        <h1 className='border-b-2 border-slate-50'>CONTRIBUTING:</h1>

        <span className='mt-3'>
          <a href="https://github.com/ConwayCJ/opensourceproject/blob/main/README.md" target="_blank">Documentation</a>
        </span>
      </div>



    </div>
  )
}
