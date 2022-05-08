/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)

  const { nodes, materials } = useGLTF('/raw/fourteen/fourteen.gltf')
  return (
    <mesh 
      {...props}
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      rotation={[0, 0.05, 0]}
      geometry={nodes.Cube015.geometry}
      material={materials['Material.001']}
      position={[0.3, 0.2, 8]} 
      scale={[0.37, 0.17, 1.6]}>
      <meshStandardMaterial color={hovered ? '#ffe74d' : '#e8e8e8'} />
    </mesh>
  )
}

useGLTF.preload('/raw/fourteen/fourteen.gltf')