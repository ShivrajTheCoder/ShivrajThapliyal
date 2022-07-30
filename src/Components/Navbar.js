import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <header>
        <nav className='flex border-b-2  border-zinc-50'>
            <div className="container h-12 bg-[#7e22ce] flex items-center">
                {/* this will be at the startign  */}
            <button className="bg-[#7e22ce] m-3 p-2 hover:bg-[#1e3a8a] text-white"><Link to="/" >Home</Link> </button>
            <button className="bg-[#7e22ce] m-3 p-2 hover:bg-[#1e3a8a] text-white"><Link to="/projects" >Projects</Link> </button>
            <button className="bg-[#7e22ce] m-3 p-2 hover:bg-[#1e3a8a] text-white"><Link to="/hireme" >Hire Me</Link> </button>
            </div>
            <div className="container h-12 bg-[#7e22ce] flex items-center">
                {/* this will be the ending flex container */}
                {/* will contain the icons and link to contacts */}
            </div>
        </nav>        
    </header>
  )
}
