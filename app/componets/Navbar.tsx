import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="navbar bg-back text-white font-bold font-mono p-5 size-200 align-text-top content-stretch flex justify-center " >
  <a href="/" className="btn btn-ghost text-2xl flex-1 ">Home
    </a>
    <a href="#about" className="btn btn-ghost text-xl flex-1 ">About  
    </a>
    
    <a href="/new" className="btn btn-ghost text-xl flex-1">Resume 
    </a>
    <a href="/contact" className="btn btn-ghost text-xl flex-1">Contact
    </a>
   
   
</div>
  )
}

export default Navbar