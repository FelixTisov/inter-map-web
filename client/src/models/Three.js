/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'


export default function Model({ ...props }, onClick = () => {}) {

  const ref = useRef()
  const [hovered, hover] = useState(false)
  const { nodes, materials } = useGLTF('/raw/three/three.gltf')

  const mater = new THREE.MeshStandardMaterial({ 
    color: 0xffe74d,
  });
  
  return (
    <group ref={ref} {...props} dispose={null}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}
    scale={0.27}
    position={[3.5, 0.3, 1.3]}>
            <mesh 
              geometry={nodes.Cube_1.geometry}
              material={hovered ? mater : materials.Material}>
            </mesh>
            <mesh 
              geometry={nodes.Cube_2.geometry}
              material={hovered ? mater : materials['Material.002']}>
            </mesh>
            <mesh 
              geometry={nodes.Cube_3.geometry}
              material={hovered ? mater : materials['Material.003']}>
            </mesh> 
            <mesh 
              geometry={nodes.Cube_4.geometry}
              material={hovered ? mater : materials['Материал.001']}>
            </mesh>   
    </group>
  )
}
useGLTF.preload('/raw/three/three.gltf')