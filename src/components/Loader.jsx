import React from 'react'
import {Html} from '@react-three/drei';

const Loader = () => {
  return (
    <Html>
    <div className='absolute inset-0'>
        <div className='Loader h-5 w-5 rounded-full border-2 border-cyan-700'></div>
        <p>
            Loading ...
        </p>
    </div>
    </Html>
  )
}

export default Loader