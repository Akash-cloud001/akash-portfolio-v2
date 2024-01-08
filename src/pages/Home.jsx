import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import { angleToRadians } from '../utils/angle';
import dragIcon from '../assets/svg/mouse.svg';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three'
import Scene from '../models/Scene';
import Popup from '../components/Popup';
import Plane from '../models/Plane';
import Music from '../components/Music';
const Home = () => {
  
  //? States
  const [canvasHeight] = useState(window.innerHeight);
  const [isTouched, setIsTouched] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [isRotating, setIsRotating] = useState(false);

  //? Ref's
  const orbitRef = useRef();


  //? Function's
  const handleCanvas = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    setTimeout(()=>setIsTouched(true),250);
  }

  const handleScreenSize = ()=>{
    let screenPosition = [0,-1.5,-3.5];
    let screenRotation = [angleToRadians(5),angleToRadians(-90),0];
    let screenScale = 0.09;

    if(window.innerWidth <= 768 && window.innerWidth > 575){
      // Todo
      screenPosition = [0 , -2 , -4]
      screenScale = 0.08;
    }
    else if(window.innerWidth < 575 && window.innerWidth > 425){
      screenScale = 0.06;
      screenPosition = [0, -2, -2]
    }
    else if(window.innerWidth < 425){
      screenPosition = [0, -2.5, -7]

    }
    return [screenPosition, screenRotation, screenScale];
  }

  const handlePlaneSize = ()=>{
    let planePosition = [-1, 0, 2];
    let planeRotation = [0, angleToRadians(90), 0];
    let planeScale = 0.2;

    if(window.innerWidth <= 768 && window.innerWidth > 575){
      // Todo
      planePosition = [-0.5, 0, 2];
      planeScale = 0.17;
    }
    else if(window.innerWidth < 575 && window.innerWidth > 425){
      planePosition = [-0.5, 0, 2];
      planeScale = 0.15;
    }
    else if(window.innerWidth < 425){
      planePosition = [-0.4, -0.6, 2];
      planeScale = 0.15;

    }
    return [planePosition, planeRotation, planeScale];
  }

  const [islandPosition, islandRotation, islandScale] = handleScreenSize();
  const [planePosition, planeRotation, planeScale] = handlePlaneSize();

  useEffect(()=>{
    if(orbitRef.current){
      orbitRef.current.dampingFactor = 0.09;
      orbitRef.current.update();
    }
  },[])

  return (
    <section className='h-screen w-full overflow-hidden'>
      <Loader />
      {/* helper */}
      <div className={`${isTouched? 'hidden': 'block'} z-50 absolute top-20 left-1/2 -translate-x-1/2 font-just font-bold text-xl text-orange-color  flex justify-items-center items-center`}>
        Drag to Move
        <img src={dragIcon} alt="Dragging Gif" className='relative h-6 w-6 drag_animation'/>
      </div>

      {/* pop up's */}
      {currentStage && <Popup currentStage={currentStage} />}

      <Canvas
        className={`w-full bg-transparent overflow-hidden ${isRotating ? "cursor-grabbing": "cursor-grab"}`}
        camera={{near:0.1, far:1000}}
        id="canvas"
        shadows
      > 

          {/* Orbital Controls */}
          <OrbitControls maxDistance={10} maxZoom={1} ref={orbitRef}/>


          {/* Lights */}
          <ambientLight intensity={0.5}  args={['white']}/>
          <directionalLight args={['#35227A', 1]}  position={[-3,0,0]} />
          <directionalLight args={['white', 0.5]}  position={[0,1,0]} />
          <directionalLight args={['white', 2]}  position={[3,0,0]} />

          {/* Scene */}
          <Scene 
            rotation = {islandRotation}
            position={islandPosition} 
            scale={islandScale}
            setCurrentStage = {setCurrentStage}
            currentStage = {currentStage}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setIsTouched = {setIsTouched}
          />
          <Stars factor={4} saturation={0} fade speed={0.5}/>

          <Plane 
            position={planePosition} 
            rotation={planeRotation} 
            scale={planeScale} 
            isRotating={isRotating}
          />
          <Environment background>
          <mesh>
            <sphereGeometry args={[50, 100, 100]} />
            <meshBasicMaterial side={THREE.BackSide} color="#0f0f0f" />
          </mesh>
          </Environment>
      </Canvas>
      <Music />
    </section>    
  )
}

export default Home