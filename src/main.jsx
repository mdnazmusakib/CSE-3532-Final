import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './Components/All/Home.jsx';
import Music from './Components/Music/Music.jsx';
import Comedy from './Components/Comedy/Comedy.jsx';
import Drawing from './Components/Drawing/Drawing.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
         element: <Home></Home>,
        // element: <h1>all</h1>
      },
      {
        path: "/music",
        element: <Music></Music>,
      },
      {
        path: "/comedy",
        element: <Comedy></Comedy>,
      },
      {
        path: "/drawing",
        element: <Drawing/>
      },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
