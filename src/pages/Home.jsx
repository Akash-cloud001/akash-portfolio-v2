import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import Island from '../models/Island';
import Sky from '../models/Sky';
import { angleToRadians } from '../utils/angle';

const Home = () => {
  return (
    <section>
      {/* pop up's */}
      <div className='z-index absolute top-20 left-1/2 -translate-x-1/2'>
        Drag to Move
      </div>
      <Canvas
        className='h-screen w-full bg-transparent'
        camera={{near:0.1, far:1000}}
        id="canvas"
        shadows
      > 
        <Suspense fallback={<Loader/>}>
          <ambientLight intensity={0.5}  args={['white']}/>
          {/* Scene */}
          {/* <FolioSceneOne /> */}
          {/* <Low_poly_island /> */}
          <directionalLight args={['#35227A', 30]}  position={[-3,0,0]} />
          <directionalLight args={['#FFFFBC', 1]}  position={[0,100,0]} />
          <directionalLight args={['#FF4400', 1]}  position={[3,0,0]} />
          {/* <directionalLight args={['white', 1]} position={[0,0,-2.5]}/> */}
          <Island 
            rotation = {[0,angleToRadians(-150),0]}
            position={[0,-1.5,-2.5]} 
            scale={0.095}
          />

          {/* <Environment background>
            <mesh>
              <sphereGeometry args={[50, 100, 100]} />
              <meshBasicMaterial side={THREE.BackSide} color="#212568" />
            </mesh>
          </Environment> */}
          <Sky/>
        </Suspense>
      </Canvas>
    </section>    
  )
}

export default Home