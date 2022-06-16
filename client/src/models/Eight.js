/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'


export default function Model({ ...props }, onClick = () => {}) {

  const ref = useRef()
  const [hovered, hover] = useState(false)
  const { nodes, materials } = useGLTF('/raw/eight/eight.gltf')

  const mater = new THREE.MeshStandardMaterial({ 
    color: 0xffe74d,
  });
  
  return (
    <group ref={ref} {...props} dispose={null}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}
    rotation={[Math.PI, 0, Math.PI]} scale={[-0.27, -0.17, -0.25]}
    position={[-2, 0.2, 3.7]}>
            <mesh 
              geometry={nodes.Cube001_1.geometry}
              material={hovered ? mater : materials.Material}>
            </mesh>
            <mesh 
              geometry={nodes.Cube001_2.geometry}
              material={hovered ? mater : materials['Материал.001']}>
            </mesh>
            <mesh 
              geometry={nodes.Cube001_3.geometry}
              material={hovered ? mater : materials['Материал.002']}>
            </mesh>   
    </group>
  )
}
useGLTF.preload('/raw/eight/eight.gltf')