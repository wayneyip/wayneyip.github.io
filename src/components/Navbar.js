import { Link } from 'react-router-dom';
import Work from './Work.js';
import About from './About.js';

export default function Navbar() 
{
  return (
    <nav className="bg-gray-800 px-2 pt-10 pb-5">
      <div className="container max-w-screen-lg mx-auto flex justify-between items-center">
        <div className="text-left">
          <div className="text-white text-3xl font-bold">
            Wayne Yip
          </div>
          <div className="text-gray-400 text-lg font-normal pt-2">
            3D Developer
          </div>
        </div>
        <div className="space-x-4">
          <button className="text-white px-4 py-2 hover:bg-blue-700 transition duration-300">
            <Link to="/">Work</Link>
          </button>
          <button className="text-white px-4 py-2 hover:bg-blue-700 transition duration-300">
              <Link to="/about">About</Link>
          </button>
        </div>
      </div>
    </nav>
  )
}