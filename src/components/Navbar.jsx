import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const navLinkRef = useRef();


    const handleClick = (e)=>{
        setIsClicked(isClicked=>!isClicked);
    }

    const navigations = [
        {to:'/about', name:'about'},
        {to:'/project', name:'project'},
        {to:'/skills', name: 'skills'},
        {to:'/contact', name: 'contact'}
    ]

    const socials = [
        {to:'', icon:'',name:'github'},
        {to:'', icon:'',name:'linkedIn'},
        {to:'', icon:'',name:'twitter'},
        
    ]

    let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const handleMouseOver = (event)=>{
        if(window.innerWidth < 768){
            return ;
        }
        console.log(event.target.innerText, event.target.getAttribute('data-value'));
        let iterationCount = 0;
        
        const interval =  setInterval(()=>{
            event.target.innerText = event.target.innerText
            .split("")
            .map((alphabet,index)=>{
                if(index < iterationCount){
                    return event.target.dataset.value[index];
                }
                return alphabets[Math.floor(Math.random() * 26)]
            })
            .join('');

            if(iterationCount >= event.target.innerText.length){
                clearInterval(interval);
            }

            iterationCount += 1 / 3;

        }, 40);
        
    }


  return (
    <header className='absolute bg-transparent w-full h-16 flex justify-between items-start  pt-3 px-4 sm:px-4 md:px-12 lg:px-16 sm:pt-4  display-transition  z-100 right-0 left-0 top-0'>
        <figure className='home h-8 w-max   overflow-hidden '>
           <NavLink to={'/'}>
            {/* <img src={logo} alt="sky logo" className='h-full w-full'/> */}
            <span className='font-xl text-white font-bold font-just'>AKASH </span>
            <span className='font-xl  text-orange-color font-bold font-just'>WORLD</span>
           </NavLink>
        </figure>
        {!isClicked && <button className={`text-3xl text-white h-6 flex flex-col justify-between text-center`} onClick={(e)=>handleClick(e)}>
            <div className='h-3px w-6 sm:w-8 bg-orange-color rounded'></div>
            <div className='h-3px w-3 sm:w-4 bg-orange-color rounded'></div>
            <div className='h-3px w-6 sm:w-8 bg-orange-color rounded'></div>
        </button>}
        <nav className={`${isClicked ? "nav_show": "nav_hide"} overflow-hidden w-60 absolute top-0 right-0  h-screen pt-16  bg-dark-color display-transition z-100`}>
            <div className={`flex flex-col h-1/2 w-full text-center justify-around font-just font-bold text-2xl capitalize relative`}>
                {isClicked && <button className={`absolute -top-10 right-4 sm:right-4 md:right-12 lg:right-16 text-3xl text-white pr-4 h-6`} onClick={(e)=>handleClick(e)}>
                    <div className='h-3px w-8 bg-orange-color rounded relative top-0 left-0 rotate-45'></div>
                    <div className='h-3px w-8 bg-orange-color rounded relative top-0 left-0 -rotate-45'></div>
                </button>}
                    {navigations.map((ele)=>{
                        return(
                            <NavLink 
                                to={ele.to} 
                                className={({isActive})=>isActive?"nav-list-style-active":'nav-list-style'} 
                                onClick={handleClick}
                                data-value = {ele.name.toUpperCase()}
                                ref={navLinkRef}
                                key={ele.name}
                                onMouseOver={handleMouseOver}
                                
                            >
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