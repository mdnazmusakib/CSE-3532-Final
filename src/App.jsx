
import './App.css'
import { Outlet,NavLink } from "react-router-dom";
import logo from './assets/Logo.png';
 

function App() {

  return (
    <>
    <div className='bg-white'>
      <div className='flex justify-between'>
        <img src={logo} alt="" />
        <div>
          <button>Sort By View</button>
        </div>
        <div>
          <button>Blog</button>
        </div>
      </div>
      <div>
        <ul className='flex justify-around'>
          <li>
            <NavLink to="/">All</NavLink>
          </li>
          <li>
            <NavLink to="music">Music</NavLink>
          </li>
          <li>
            <NavLink to="comedy">Comedy</NavLink>
          </li>
          <li>
            <NavLink to="drawing">Drawing</NavLink>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
      

    </>
  )
}

export default App
