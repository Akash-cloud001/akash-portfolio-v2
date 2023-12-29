import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Sky from '../models/Sky';
import { angleToRadians } from '../utils/angle';
import dragIcon from '../assets/svg/mouse.svg';
import IslandScene from '../models/IslandScene';
import { Environment, Stars } from '@react-three/drei';
import * as THREE from 'three'
const Home = () => {
  
  //? States
  const [isTouched, setIsTouched] = useState(false);


  //? Ref's
  const canvasRef = useRef(null);

  //? Function's
  const handleCanvas = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    setTimeout(()=>setIsTouched(true),250);
  }

  const handleScreenSize = ()=>{
    let screenPosition = [0,-1.5,-4];
    let screenRotation = [angleToRadians(5),angleToRadians(-150),0];
    let screenScale = 0.09;

    if(window.innerWidth < 768 && window.innerWidth > 575){
      // Todo
      screenScale = 0.08;
    }
    else if(window.innerWidth < 575 && window.innerWidth > 425){
      screenScale = 0.06;
      screenPosition = [0, -1.5, -2]
    }
    else if(window.innerWidth < 425){
      screenPosition = [0, -3, -7]

    }
    return [screenPosition, screenRotation, screenScale];
  }
  const [islandPosition, islandRotation, islandScale] = handleScreenSize();
  useEffect(()=>{
    if(canvasRef.current){
      window.addEventListener('click', handleCanvas);
      window.addEventListener('pointerdown', handleCanvas);
    }
    return ()=>{
      window.removeEventListener('click', handleCanvas);
      window.removeEventListener('pointerdown', handleCanvas);
    }
  },[])
  return (
    <section className='h-full w-full overflow-hidden'>

      {/* helper */}
      <div className={`${isTouched? 'hidden': 'block'} z-index absolute top-20 left-1/2 -translate-x-1/2 font-alegrerya font-bold text-xl text-gray-800  flex justify-items-center items-center`}>
        Drag to Move
        <img src={dragIcon} alt="Dragging Gif" className='relative h-6 w-6 drag_animation'/>
      </div>

      {/* pop up's */}

      <Canvas
        className=' w-full bg-transparent overflow-hidden'
        camera={{near:0.1, far:1000}}
        id="canvas"
        ref={canvasRef}
        shadows

      > 
        <Suspense fallback={<Loader/>}>

          {/* Lights */}
          <ambientLight intensity={0.5}  args={['white']}/>
          {/* <directionalLight args={['#35227A', 10]}  position={[-3,0,0]} />
          <directionalLight args={['#FFFFBC', 1]}  position={[0,1,0]} />
          <directionalLight args={['#FF4400', 1]}  position={[3,0,0]} /> */}

          <directionalLight args={['white', 1]}  position={[-3,0,0]} />
          <directionalLight args={['white', 1]}  position={[0,1,0]} />
          <directionalLight args={['white', 1]}  position={[3,0,0]} />

          {/* Scene */}
          <IslandScene 
            rotation = {islandRotation}
            position={islandPosition} 
            scale={islandScale}
          />
          <Stars factor={4} saturation={0} fade speed={0.5}/>
          <Environment background>
          <mesh>
            <sphereGeometry args={[50, 100, 100]} />
            <meshBasicMaterial side={THREE.BackSide} color="black" />
          </mesh>
          </Environment>
          {/* <Sky/> */}
        </Suspense>
      </Canvas>
    </section>    
  )
}

export default Home