import { Link } from 'react-router-dom';

export default function Navbar() 
{
  return (
    <nav className="bg-gray-800 px-2 pt-10 pb-5">
      <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center font-fredoka">
        <div className="text-center md:text-left">
          <div className="text-white text-3xl font-bold hover:text-gray-300">
            <Link to="/">Wayne Yip</Link>
          </div>
          <div className="text-gray-400 text-lg font-normal pt-2">
            3D Developer
          </div>
        </div>
        <div className="mt-10 space-x-4">
          <button className="text-white px-4 py-2 hover:text-gray-300">
            <Link to="/">Work</Link>
          </button>
          <button className="text-white px-4 py-2 hover:text-gray-300">
              <Link to="/about">About</Link>
          </button>
        </div>
      </div>
    </nav>
  )
}