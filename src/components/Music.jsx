import React, { useEffect, useRef, useState } from 'react'
import music from '../assets/music/sakura-music.mp3';
import pause from '../assets/svg/pause.svg';
import play from '../assets/svg/play.svg';


const Music = () => {
    const [isPlay,setIsPlay] = useState(false);
    const playerRef = useRef();
    
    function playMusic(){
        playerRef.current.play();
    }

    function pauseMusic(){
        playerRef.current.pause();
    }

    useEffect(()=>{
        playerRef.current.load();
        playerRef.current.volume = 0.2;
    }, []);

  return (
    <div className='music-player w-max h-max z-50 absolute bottom-4 flex gap-4 items-center justify-center   right-4 sm:right-6 md:right-8 lg:right-12'>

        <audio 
            ref={playerRef} 
            src={music} 
            className='bg-transparent'
            loop
        />

        {isPlay &&
         <button className='z-50 w-max h-max rounded-2xl border px-4 py-2' onClick={()=>{setIsPlay(!isPlay); pauseMusic();}}>
            <img src={pause} alt="pause icon" />
        </button>}

        {!isPlay && 
        <button className='z-50 w-max h-max rounded-2xl border px-4 py-2' onClick={()=>{setIsPlay(!isPlay); playMusic();}}>
            <img src={play} alt="play icon" />
        </button>}
    </div>
  )
}

export default Music