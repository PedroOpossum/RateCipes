import { Link, Routes, Route} from 'react-router-dom'
import SignIn from "./Sign-In";
import Login from "./Login";
import './App.css'

function App() {


  return (
    <>
      <nav className="relative bg-red-400 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end ">
            <div className="hidden sm:ml-6 sm:block sm:mr-1">
              <div className="flex space-x-4">
                <Link to="/Login" aria-current="page" className="rounded-md px-3 py-2 text-lg font-medium text-white hover:bg-red-800">Login</Link>
                <Link to="/Sign-up" className="rounded-md px-3 py-2 text-lg font-medium text-white hover:bg-red-800">Sign Up</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
    </nav>


    
    
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Sign-up" element={<SignIn/>} />
    </Routes>
      </>
  )
}

export default App
