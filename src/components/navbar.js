import React from 'react'
import logo from "../Images/logo.png"
import { Link } from 'react-router-dom'

const navbar = () => {
  return (

    <div>
<nav className="navbar bg-black text-white flex justify-around w-screen ">
  <img src={logo} alt="" className='h-12 mt-2' />
  <a href="#" class="brand"></a>
  <ul className="nav-links flex gap-10 items-center">
  <Link to = "/"><li className=' cursor-pointer'> <button className='border-2 border-white
     rounded-sm pl-2 pr-2 '>Home</button> </li></Link>

    <Link to = "/Projects"><li className=' cursor-pointer'> <button className='border-2 border-white
     rounded-sm pl-2 pr-2 '>Projects</button> </li></Link>

     <li><a href="https://github.com/harshsharma-x" target='_blank'>Github</a></li>

     <Link to = "/About"><li className=' cursor-pointer'> <button className='border-2 border-white
     rounded-sm pl-2 pr-2 '>About</button> </li></Link>
    
    <Link to = "/Contact"><li className=' cursor-pointer'> <button className='border-2 border-white
     rounded-sm pl-2 pr-2 '>Contact</button> </li></Link>
    
  </ul>
</nav>
    </div>
  )
}

export default navbar
