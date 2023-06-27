import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LandingPage from './components/LandingPage';
import Page from './components/Page';
import Data from './assets/Data';
import Error from './components/Error'
import Exit from './components/Exit';

export interface PromptData {
  answer: string
  prompt: React.ReactElement[] | any[]
  socials?: {
    LIurl?: string,
    GHurl?: string,
  }
}

const initialRoutes = [{
  path: '/',
  element: <LandingPage />,
}]

/**
 * 
 * @param data 
 * @returns 
 */
const createRoutes = (data: any) => {
  // These routes have to come last
  const terminalRoutes = [{
    path: `${data.length + 1}`,
    element: <Exit />
  }, {
    path: '*',
    element: <Error />
  }]

  return initialRoutes.concat(data.map(({ answer, prompt }: PromptData, index: number) => (
    {
      path: `/${index + initialRoutes.length}`,
      element: <Page answer={answer} prompt={prompt} questionNumber={index + initialRoutes.length} />
    }
  ))).concat(terminalRoutes)
}

const router = createBrowserRouter(createRoutes(Data));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={router} />
  </>
)
