import React, { useEffect, useState } from 'react'
import skyLogo from '../assets/svg/skyFolio.svg';
import earth from '../assets/img/earth.png';
const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hidden, setHidden] = useState(false);


  function handleVisibility(e){
    e.preventDefault();
    setHidden(!hidden)
    setTimeout(()=>setIsVisible(!isVisible) , 2000);
  }
  return (

    <div className={`absolute inset-0 z-100 h-screen w-full bg-dark-color
    flex-col items-center justify-center ${isVisible ? "flex": "hidden"}`}>
        <div className=' relative h-max w-max flex flex-col justify-center items-center gap-4'>

              <img src={skyLogo} alt="logo" className={`${hidden ? "logo-animation":""}`}/>

              {!hidden && 
                <button 
                className={`popup-btn popup-btn-after gap-1 absolute bottom-0`} 
                onClick={handleVisibility}
                disabled={hidden}
                >
                  Enter Into my World
                </button>
              }
        </div>
    </div>

  )
}

export default Loader