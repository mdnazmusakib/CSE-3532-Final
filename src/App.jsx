
import './App.css'
import { Outlet,NavLink } from "react-router-dom";
import logo from './assets/Logo.png';
 

function App() {

  return (
    <>
    <div className='container mx-auto px-4 py-6'>
      <div className='flex justify-between items-center mb-8'>
        <img src={logo} alt="" />
        <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">
          Sort by view
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
          Blog
        </button>
      </div>

      <nav className="mb-8">
        <ul className='flex justify-center gap-6'>
          <li>
            <NavLink 
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`
              }
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/music"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`
              }
            >
              Music
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/comedy"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`
              }
            >
              Comedy
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/drawing"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`
              }
            >
              Drawing
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
      

    </>
  )
}

export default App
