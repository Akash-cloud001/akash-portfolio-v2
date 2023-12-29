import React from 'react';
import { NavLink } from 'react-router-dom';

const TextInfo = ({title,text,url})=>{
    return(
        <div className='text-white text-2xl w-72 h-auto backdrop-blur-md '>
            <p className='font-medium sm:text-xl text-left font-alegrerya'>
                {text}
            </p>
            <NavLink to={url} className=' h-max w-1/2 text-center text-base text-gray-300 bg-logo-color py-1 rounded-lg mt-6 font-bold flex justify-center items-center gap-1'>
                {title}
            </NavLink>
        </div>
    )
}

const Popup = ({currentStage}) => {
    console.log(currentStage)
    const pages = {
        1:(
            <div className='w-72 h-auto backdrop-blur-md text-white text-2xl font-alegrerya'>
                <h1>
                    Hi, I'm <span className=' font-bold text-logo-color text-2xl'>Akash Parmar</span>👋
                </h1>
                <p className='text-xl'>
                    A Software Developer from <span className='font-alegrerya font-bold text-logo-color text-2xl'>India</span>
                </p>
                <NavLink to={'/about'} className=' h-max w-1/2 text-center text-base font-bold text-gray-300 bg-logo-color py-1 rounded-lg mt-6 flex justify-center gap-1 items-center'>
                    More about me 
                </NavLink>
            </div>
        ),
        2:(<TextInfo 
            title='Treasure way' 
            url='/skills' 
            text={`My skills are my Treasure, a rich and versatile trove honed through dedication and experience`} 
            />
        ),
        3:(
            <TextInfo 
                title='View More'
                url='/project'
                text={'Explore my diverse projects showcasing Creativity and Expertise'}
            />
        ),
        4:(
            <TextInfo 
                title="Let's connect"
                url = '/contact'
                text = {'Connect with me easily-your gateway to collaboration, inquiries, and communication'}
            />
        )
        // 2:{
        //     title:'Skills',
        //     url: '/skills',
        //     text: 'Hi There I\'m Akash Parmar👋 from India. Welcome to my 3D world'
        // },
        // 3:{
        //     title:'Project',
        //     url: '/project',
        //     text: 'Hi There I\'m Akash Parmar👋 from India. Welcome to my 3D world'
        // },
        // 4:{
        //     title:'Contact',
        //     url: '/about',
        //     text: 'Hi There I\'m Akash Parmar👋 from India. Welcome to my 3D world'
        // }
    
    }
  return (
        <div className='popup absolute top-1/4 left-1/8 -translate-x-1/4 z-index'>
            {pages[currentStage]}
        </div>
    
  )
}

export default Popup