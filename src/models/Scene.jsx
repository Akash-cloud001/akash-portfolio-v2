/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import scene from '../assets/3D/scene.glb';
import { useFrame, useThree } from "@react-three/fiber";
import {a} from '@react-spring/three';

const Scene = ({isRotating, setIsRotating, currentStage, setCurrentStage, setIsTouched, ...props}) => {
  const { nodes, materials } = useGLTF(scene);
  

  const {gl, viewport} = useThree();
  const sceneRef = useRef();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

    const handlePointerDown = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsRotating(true);
        setIsTouched(true)
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        
        lastX.current = clientX;
    }

    const handlePointerMove = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        
        if(isRotating){
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX - lastX.current) / viewport.width;
            sceneRef.current.rotation.y += delta * 0.01 * Math.PI;
            
            lastX.current = clientX;
            
            rotationSpeed.current = delta * 0.0075 * Math.PI; 
        }
    }

    const handlePointerUp = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsRotating(false);
    }

    useEffect(()=>{
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointermove', handlePointerMove);
        canvas.addEventListener('pointerup', handlePointerUp);


        return()=>{
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointermove', handlePointerMove);
            canvas.removeEventListener('pointerup', handlePointerUp);
        }
    },[gl, handlePointerDown.handlePointerUp,handlePointerMove]);


    useFrame(()=>{

        //if not moving add damping factor to slow down the island
        if(!isRotating){
            rotationSpeed.current *= dampingFactor;

            if(Math.abs(rotationSpeed.current) < 0.005){
                rotationSpeed.current = 0;
            }
            sceneRef.current.y += rotationSpeed.current;
        }
        else{
            const rotation = sceneRef.current.rotation.y;
            const normalizedRotation =
            ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
          if(0.4 >= normalizedRotation && normalizedRotation >= 0.001 || 6.3>=normalizedRotation && normalizedRotation >= 6){
            setCurrentStage(4);
          }
          else if(1.5 >= normalizedRotation && normalizedRotation >= 1.1){
            setCurrentStage(3);
          }
          else if(3.1 >= normalizedRotation && normalizedRotation >= 2.7){
            setCurrentStage(2);
          }
          else if(4.3 >= normalizedRotation && normalizedRotation >= 3.8){
            setCurrentStage(1);
          }
          else{
            setCurrentStage(null);
          }
        }
    })

  return (
    <a.group {...props} ref={sceneRef}>
      <group
        position={[41.386, -4.791, -26.052]}
        rotation={[-Math.PI / 2, 0, 2.211]}
        scale={0.4}
      >
        <group position={[0, 0, 20]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials["VoxMaterial_59.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["VoxMaterial_2.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials["VoxMaterial_6.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials["VoxMaterial_9.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials["VoxMaterial_10.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials["VoxMaterial_39.001"]}
          />
        </group>
      </group>
      <group
        position={[-13.537, 3.104, -43.964]}
        rotation={[-Math.PI / 2, 0, 0.544]}
        scale={[2.347, 2.206, 2.323]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5001.geometry}
            material={materials.material_0}
            rotation={[0, 0, 0.567]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.material_0}
            position={[-0.006, 0, -0.031]}
            rotation={[-2.094, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.material_0}
            position={[-0.019, 0, 0]}
            rotation={[-Math.PI / 4, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_44.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_46.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_48.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_50.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_52.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_54.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_56.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_58.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_60.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_62.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9001.geometry}
            material={materials.material_0}
            rotation={[3.128, 1.536, 1.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.material_0}
            position={[0, 0, -0.053]}
            rotation={[-0.077, 1.562, -1.52]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7001.geometry}
            material={materials.material_0}
            rotation={[0, 0, -0.916]}
          />
        </group>
      </group>
      <group
        position={[-11.64, 3.054, -40.647]}
        rotation={[-1.859, 0, 1.476]}
        scale={[3.936, 3.293, 3.663]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5002.geometry}
            material={materials["material_0.001"]}
            rotation={[0, 0, 0.567]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13001.geometry}
            material={materials["material_0.001"]}
            position={[-0.006, 0, -0.031]}
            rotation={[-2.094, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11001.geometry}
            material={materials["material_0.001"]}
            position={[-0.019, 0, 0]}
            rotation={[-Math.PI / 4, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_44001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_46001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_48001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_50001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_52001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_54001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_56001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_58001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_60001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_62001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9002.geometry}
            material={materials["material_0.001"]}
            rotation={[3.128, 1.536, 1.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20001.geometry}
            material={materials["material_0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18001.geometry}
            material={materials["material_0.001"]}
            position={[0, 0, -0.053]}
            rotation={[-0.077, 1.562, -1.52]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7002.geometry}
            material={materials["material_0.001"]}
            rotation={[0, 0, -0.916]}
          />
        </group>
      </group>
      <group
        position={[-8.039, 2.837, -39.311]}
        rotation={[-Math.PI / 2, 0, -0.074]}
        scale={[3.488, 3.796, 4.218]}
      >
        <group scale={[0.245, 0.245, 0.22]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_0.geometry}
            material={materials.color}
            position={[-9.274, 1.917, 0]}
            rotation={[0, 0, 2.86]}
          />
        </group>
      </group>
      <group
        position={[-1.81, 3.158, 52.203]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.04}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.m_ca01000_bake_0.geometry}
            material={materials.bake}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
      <group
        position={[-4.148, 3.307, 51.58]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.003}
      >
        <group position={[0, -0.002, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0.004]}>
            <group position={[0, 0, 0.002]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_LPDog_M_0.geometry}
                material={materials.LPDog_M}
                position={[0, 0, 0.002]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[-3.943, 1.228, 64.781]}
        rotation={[-Math.PI / 2, 0, 1.472]}
        scale={[0.003, 0.003, 0.004]}
      >
        <group position={[0.001, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.001, 0, 0]}>
            <group
              position={[0.001, 0, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1474.242, 1906.561, 764.24]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Ca��onero_Material001_0"].geometry}
                material={materials["Material.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Ca��onero_Material002_0"].geometry}
                material={materials["Material.002"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Ca��onero_Material003_0"].geometry}
                material={materials["Material.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Ca��onero_Material004_0"].geometry}
                material={materials["Material.004"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Ca��onero_Material005_0"].geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Ca��onero_Material006_0"].geometry}
                material={materials["Material.006"]}
              />
              <group
                position={[0.015, -1.163, 3.644]}
                rotation={[Math.PI, 0, 0]}
                scale={[-5.163, -3.992, -8.366]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sails_1_Material002_0.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sails_1_Material004_0.geometry}
                  material={materials["Material.004"]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cannon_1_Material001_0.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cannon_1_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cannon_1_Material006_0.geometry}
                material={materials["Material.006"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cannon_2_Material001_0.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cannon_2_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cannon_2_Material006_0.geometry}
                material={materials["Material.006"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crew_1_Material001_0.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crew_1_Material002_0.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crew_1_Material003_0.geometry}
                material={materials["Material.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hull_1_Material006_0.geometry}
                material={materials["Material.006"]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[-38.056, 3.149, 12.662]}
        rotation={[-Math.PI / 2, 0, 0.082]}
        scale={[0.8, 0.9, 0.8]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18002.geometry}
            material={materials["Material.012"]}
            position={[-5.479, 3.35, 1.482]}
            rotation={[0, 0, -0.096]}
            scale={0.773}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20002.geometry}
            material={materials["Material.013"]}
            position={[-5.479, 3.35, 1.482]}
            rotation={[0, 0, -0.096]}
            scale={0.773}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials["Material.011"]}
            position={[0, 1.052, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22002.geometry}
            material={materials["Material.014"]}
            position={[0, 16.106, 0]}
            scale={3.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28002.geometry}
            material={materials["Material.018"]}
            position={[-5.479, 3.35, 1.482]}
            rotation={[0, 0, -0.096]}
            scale={0.773}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30002.geometry}
            material={materials["Material.019"]}
            position={[-5.479, 3.35, 1.482]}
            rotation={[0, 0, -0.096]}
            scale={0.773}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8001.geometry}
            material={materials["Material.008"]}
            position={[0, 1.052, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10001.geometry}
            material={materials["Material.009"]}
            position={[0, 1.052, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials["Material.010"]}
            position={[0, 1.052, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_44002.geometry}
            material={materials["Material.036"]}
            position={[0, 1.052, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24002.geometry}
            material={materials["Material.015"]}
            position={[0, 16.106, 0]}
            scale={3.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26002.geometry}
            material={materials["Material.017"]}
            position={[0, 16.106, 0]}
            scale={3.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Material.020"]}
            position={[0, 16.106, 0]}
            scale={3.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42002.geometry}
            material={materials["Material.024"]}
            position={[0, 1.052, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40002.geometry}
            material={materials["material_0.002"]}
            position={[0, 1.052, 0]}
          />
        </group>
      </group>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube24_Leaf_Green_0.geometry}
          material={materials.Leaf_Green}
          rotation={[0, Math.PI / 4, 0]}
        />
        <group position={[0, 0, -1484.577]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube19_Leaf_Green_0.geometry}
            material={materials.Leaf_Green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube20_Leaf_Green_0.geometry}
            material={materials.Leaf_Green}
          />
        </group>
        <group position={[0, 0, -2561.052]}>
          <group
            position={[-9122.605, 0, -5640.297]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <group position={[-0.001, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube14_Leaf_Green_0001.geometry}
                material={materials.Leaf_Green}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group position={[-0.001, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube15_Leaf_Green_0001.geometry}
                material={materials.Leaf_Green}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group position={[-0.001, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube22_Leaf_Green_0.geometry}
                material={materials.Leaf_Green}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group position={[-0.001, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.sweep3_Tree_0001.geometry}
                material={materials.Tree}
                position={[-0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[1964.783, 285.025, -5760.444]}
            rotation={[0, -1.571, 0]}
          >
            <group position={[0.001, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube14_Leaf_Green_0.geometry}
                material={materials.Leaf_Green}
                position={[0.001, 0, 0]}
              />
            </group>
            <group position={[0.001, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube15_Leaf_Green_0.geometry}
                material={materials.Leaf_Green}
                position={[0.001, 0, 0]}
              />
            </group>
            <group position={[0.001, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.sweep3_Tree_0.geometry}
                material={materials.Tree}
                position={[0.001, 0, 0]}
              />
            </group>
          </group>
        </group>
        <group position={[0, 0, -3732.915]}>
          <group
            position={[-11468.614, 0, -3380.582]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <group position={[0, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube12_Leaf_Green_0.geometry}
                material={materials.Leaf_Green}
                position={[0, 0, 0.001]}
              />
            </group>
            <group position={[0, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube16_Leaf_Green_0.geometry}
                material={materials.Leaf_Green}
                position={[0, 0, 0.001]}
              />
            </group>
            <group position={[0, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube23_Leaf_Green_0.geometry}
                material={materials.Leaf_Green}
                position={[0, 0, 0.001]}
              />
            </group>
            <group position={[0, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.sweep2_Tree_0.geometry}
                material={materials.Tree}
                position={[0, 0, 0.001]}
              />
            </group>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube21_Leaf_Green_0.geometry}
            material={materials.Leaf_Green}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube10_Stone_0.geometry}
          material={materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube5_Stone_0.geometry}
          material={materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube6_Stone_0.geometry}
          material={materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube7_Stone_0.geometry}
          material={materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube8_Stone_0.geometry}
          material={materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube9_Stone_0.geometry}
          material={materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pDisc1_Grass_2_0.geometry}
          material={materials.Grass_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pDisc1_Mountain_Stone_0.geometry}
          material={materials.Mountain_Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pDisc1_Pastel_Green_0.geometry}
          material={materials.Pastel_Green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pDisc1_Sand_0.geometry}
          material={materials.Sand}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pDisc1_Snow_0.geometry}
          material={materials.Snow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pDisc1_Stone_0.geometry}
          material={materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pDisc3_phong5_0.geometry}
          material={materials.phong5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pDisc4_phong5_0.geometry}
          material={materials.phong5}
        />
      </group>
    </a.group>
  );
}

export default Scene;