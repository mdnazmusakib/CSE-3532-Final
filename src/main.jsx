import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './Components/All/Home.jsx';

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
        // element: <Home></Home>,
        element: <h1>all</h1>
      },
      {
        path: "/music",
        element: <h1>Music</h1>,
      },
      {
        path: "/comedy",
        element: <h1>Comedy</h1>
      },
      {
        path: "/drawing",
        element: <h1>Drawing</h1>
      },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
