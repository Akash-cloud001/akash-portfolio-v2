import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/svg/skyFolio.svg'

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e)=>{
        setIsClicked(isClicked=>!isClicked);
    }

    const navigations = [
        {to:'/about', name:'about'},
        {to:'/project', name:'project'},
        {to:'/skills', name: 'skills'},
        {to:'/contact', name: 'contact'}
    ]

  return (
    <header className='relative header w-full h-16 flex justify-between items-start  pt-2 sm:pt-4 m-0 display-transition px-8'>
        <figure className='home h-8 w-8 sm:h-12 sm:w-12  overflow-hidden '>
           <NavLink to={'/'}>
            <img src={logo} alt="sky logo" className='h-full w-full'/>
           </NavLink>
        </figure>
        {!isClicked && <button className={`text-3xl text-white h-6 flex flex-col justify-between text-center`} onClick={(e)=>handleClick(e)}>
            <div className='h-3px w-8 bg-logo-color rounded'></div>
            <div className='h-3px w-4 bg-logo-color rounded'></div>
            <div className='h-3px w-8 bg-logo-color rounded'></div>
        </button>}
        <nav className={`${isClicked ? "nav_show": "nav_hide"} overflow-hidden w-60 absolute top-0 right-0  h-screen pt-16 backdrop-blur-sm display-transition `}>
            <div className={`flex flex-col h-1/2 w-full text-center justify-around font-alegrerya font-bold text-2xl capitalize relative`}>
                {isClicked && <button className={`absolute -top-10 right-0 text-3xl text-white pr-4 h-6`} onClick={(e)=>handleClick(e)}>
                    <div className='h-3px w-8 bg-logo-color rounded relative top-0 left-0 rotate-45'></div>
                    <div className='h-3px w-8 bg-logo-color rounded relative top-0 left-0 -rotate-45'></div>
                </button>}
                    {navigations.map((ele)=>{
                        return(
                            <NavLink to={ele.to} className={({isActive})=>isActive?"logo_color":'text-white hover:text-logo-color transition-colors'} onClick={handleClick}>
                                {ele.name}
                            </NavLink>
                        )
                    })}
                    
            </div>  
        </nav>
    </header>
    
  )
}

export default Navbar;