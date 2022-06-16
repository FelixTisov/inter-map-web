/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'


export default function Model({ ...props }, onClick = () => {}) {

  const ref = useRef()
  const [hovered, hover] = useState(false)
  const { nodes, materials } = useGLTF('/raw/oneone/oneone.gltf')

  const mater = new THREE.MeshStandardMaterial({ 
    color: 0xffe74d,
  });
  
  return (
    <group ref={ref} {...props} dispose={null}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}
    scale={[0.0125, 0.1125, 0.0165]}
    position={[6.09, 0.2, 1.91]} >
            <mesh 
              geometry={nodes.Cylinder118.geometry}
              material={hovered ? mater : materials['Material.001']}>
            </mesh>
            <mesh 
              geometry={nodes.Cylinder118_1.geometry}
              material={hovered ? mater : materials.Material}>
            </mesh>
            <mesh 
              geometry={nodes.Cylinder118_2.geometry}
              material={hovered ? mater : materials['Материал.002']}>
            </mesh>   
    </group>
  )
}
useGLTF.preload('/raw/oneone/oneone.gltf')
