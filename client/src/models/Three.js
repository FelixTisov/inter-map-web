import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {

  const ref = useRef()
  const [hovered, hover] = useState(false)

  const { nodes, materials } = useGLTF('/raw/three/three.gltf')
  return (
    <mesh 
      {...props}
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      geometry={nodes.Cylinder003.geometry}
      position={[3.8, 0.45, 1.4]}
      scale={-0.16}>
      <meshStandardMaterial color={hovered ? '#ffe74d' : '#e8e8e8'} />
    </mesh>
  )
}

useGLTF.preload('/raw/three/three.gltf')