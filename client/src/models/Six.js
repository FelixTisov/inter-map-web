/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'


export default function Model({ ...props }, onClick = () => {}) {

  const ref = useRef()
  const [hovered, hover] = useState(false)
  const { nodes, materials } = useGLTF('/raw/six/six.gltf')

  const mater = new THREE.MeshStandardMaterial({ 
    color: 0xffe74d,
  });
  
  return (
    <group ref={ref} {...props} dispose={null}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}
    position={[2.9, 0.2, 3.75]} 
    scale={[1.81, 0.17, 0.25]}>
            <mesh 
              geometry={nodes.Cube024.geometry}
              material={hovered ? mater : materials['Материал.002']}>
            </mesh>
            <mesh 
              geometry={nodes.Cube024_1.geometry}
              material={hovered ? mater :  materials.Материал}>
            </mesh>
            <mesh 
              geometry={nodes.Cube024_2.geometry}
              material={hovered ? mater : materials['Материал.042']}>
            </mesh>   
    </group>
  )
}
useGLTF.preload('/raw/six/six.gltf')
