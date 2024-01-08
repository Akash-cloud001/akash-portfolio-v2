import React from 'react';
import { NavLink } from 'react-router-dom';
import rightArrow from '../assets/svg/rightArrow.svg';
const TextInfo = ({title,text,url})=>{
    return(
        <div className='popup-container'>
            <p className='popup-paragraph-style'>
                {text}
            </p>
            <NavLink to={url} className='popup-btn popup-btn-after'>
                {title} <img src={rightArrow} alt="right arrow" />
            </NavLink>
        </div>
    )
}

const Popup = ({currentStage}) => {
    const pages = {
        1:(
            <div className='popup-container'>
                <h1 className='sm:text-center'>
                    Hi, I'm <span className=' font-bold text-orange-color text-lg md:text-xl'>Akash Parmar</span>👋
                </h1>
                <p className='popup-paragraph-style'>
                    A Software Developer from <span className='font-just font-bold text-orange-color text-base md:text-xl'>India</span>
                </p>
                <NavLink to={'/about'} className='popup-btn popup-btn-after'>
                    More about me <img src={rightArrow} alt="right arrow" />
                </NavLink>
            </div>
        ),
        2:(<TextInfo 
            title='Skills' 
            url='/skills' 
            text={`My skills are my Treasure, a versatile trove honed through dedication.`} 
            />
        ),
        3:(
            <TextInfo 
                title='Projects'
                url='/project'
                text={'Explore my diverse projects showcasing Creativity and Expertise.'}
            />
        ),
        4:(
            <TextInfo 
                title="Let's Connect"
                url = '/contact'
                text = {'Communication happens through this platform.'}
            />
        )

    }
  return (
        <div className='popup absolute top-16 left-1/2 -translate-x-1/2 z-50'>
            {pages[currentStage]}
        </div>
    
  )
}

export default Popup