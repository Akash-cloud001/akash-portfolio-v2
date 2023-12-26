import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/svg/skyFolio.svg'

const Navbar = () => {
  return (
    <header className='header w-full h-16 flex justify-between items-center px-2 pt-2 sm:pt-4 sm:px-4 md:px-8 lg:px-16 '>
        <figure className='home h-12 w-12 overflow-hidden '>
           <NavLink to={'/'}>
            <img src={logo} alt="sky logo" className='h-full w-full'/>
           </NavLink>
        </figure>
        <nav className='w-2/4 flex justify-between items-center font-alegrerya font-bold text-xl'>

            <NavLink 
                to={'/about'} 
                className={({isActive})=>isActive?"text-cyan-700" : "text-gray-700"}
            >
                About
            </NavLink>

            <NavLink 
                to={'/project'}
                className={({isActive})=>isActive?"text-cyan-700" : "text-gray-700"}
            >
                Project
            </NavLink>
            <NavLink 
                to={'/skills'}
                className={({isActive})=>isActive?"text-cyan-700" : "text-gray-700"}
            >
                Skills
            </NavLink>
            <NavLink 
                to={'/contact'}
                className={({isActive})=>isActive?"text-cyan-700" : "text-gray-700"}
            >
                Contact
            </NavLink>
            
        </nav>
    </header>
    
  )
}

export default Navbar;