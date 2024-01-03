import React, { useEffect, useState } from 'react'

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(()=>{
    setTimeout(()=>setIsVisible(!isVisible) , 2000);
  },[])

  return (

    <div className={`absolute inset-0 z-100 h-screen w-full backdrop-blur-2xl
    flex-col items-center justify-center ${hidden ? "hidden": "flex"} `}>
        <div className='relative h-max w-max px-4 py-2 bg-orange-color popup-btn-after'>
            <p>
              <span className='text-2xl font-bold text-white'>WELCOME</span>
              <br />
              <span className='text-xl text-white font-semibold'>
                I look forward to discovering something that captivates your interest.
              </span>
              <button className=' h-max w-1/2 font-bold text-white bg-logo-color py-1 mt-6 flex justify-center gap-1 items-center border border-orange-color disabled:bg-gray-300' disabled={isVisible} onClick={()=>setHidden(!hidden)}>
                Enter in my World
              </button>
            </p>
        </div>
        
    </div>

  )
}

export default Loader