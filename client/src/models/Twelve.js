/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'


export default function Model({ ...props }, onClick = () => {}) {

  const ref = useRef()
  const [hovered, hover] = useState(false)
  const { nodes, materials } = useGLTF('/raw/twelve/twelve.gltf')

  const mater = new THREE.MeshStandardMaterial({ 
    color: 0xffe74d,
  });
  
  return (
    <group ref={ref} {...props} dispose={null}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}
    scale={[1.32, 0.17, 0.25]}
    position={[3.44, 0.2, 5.77]}>
            <mesh 
              geometry={nodes.Cube029.geometry}
              material={hovered ? mater : materials['Материал.006']}>
            </mesh>
            <mesh 
              geometry={nodes.Cube029_1.geometry}
              material={hovered ? mater : materials.Материал}>
            </mesh>
            <mesh 
              geometry={nodes.Cube029_2.geometry}
              material={hovered ? mater : materials['Материал.002']}>
            </mesh>   
    </group>
  )
}
useGLTF.preload('/raw/twelve/twelve.gltf')
