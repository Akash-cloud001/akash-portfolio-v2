import React from 'react';
import { NavLink } from 'react-router-dom';

const TextInfo = ({title,text,url})=>{
    return(
        <div className='popup-container'>
            <p className='popup-paragraph-style'>
                {text}
            </p>
            <NavLink to={url} className='popup-btn popup-btn-after'>
                {title}
            </NavLink>
        </div>
    )
}

const Popup = ({currentStage}) => {
    const pages = {
        1:(
            <div className='popup-container'>
                <h1>
                    Hi, I'm <span className=' font-bold text-orange-color text-lg md:text-xl'>Akash Parmar</span>👋
                </h1>
                <p className='popup-paragraph-style'>
                    A Software Developer from <span className='font-just font-bold text-orange-color text-base md:text-xl'>India</span>
                </p>
                <NavLink to={'/about'} className='popup-btn popup-btn-after'>
                    More about me 
                </NavLink>
            </div>
        ),
        2:(<TextInfo 
            title='Treasure way' 
            url='/skills' 
            text={`My skills are my Treasure, a versatile trove honed through dedication.`} 
            />
        ),
        3:(
            <TextInfo 
                title='View More'
                url='/project'
                text={'Explore my diverse projects showcasing Creativity and Expertise.'}
            />
        ),
        4:(
            <TextInfo 
                title="Let's connect"
                url = '/contact'
                text = {'Communication happens through this platform.'}
            />
        )

    }
  return (
        <div className='popup absolute top-1/4  lg:top-1/4 -translate-y-1/4 left-15/2 -translate-x-15/2 sm:left-1/8 sm:-translate-x-1/8  z-50'>
            {pages[currentStage]}
        </div>
    
  )
}

export default Popup