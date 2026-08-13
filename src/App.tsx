import { Link, Routes, Route} from 'react-router-dom'
import Authentication from "./Authentication";
import './App.css'

function App() {


  return (
    <>
      <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/Login" aria-current="page" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-950/50 hover:text-white">Login</Link>
                <Link to="/Sign-up" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-950/50 hover:text-white">Sign Up</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
    </nav>


    
    
    <Routes>
      <Route path="/Login" element={<Authentication />} />
      <Route path="/Sign-up" element={<Authentication />} />
    </Routes>
      </>
  )
}

export default App
