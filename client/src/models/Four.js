import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {

  const ref = useRef()
  const [hovered, hover] = useState(false)

  const { nodes, materials } = useGLTF('/raw/four/four.gltf')
  return (
    <mesh 
      {...props}
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      geometry={nodes.Cube003.geometry}
      position={[3.1, 0.5, 0]}
      scale={[0.375, 0.25, 0.1875]}>
      <meshStandardMaterial color={hovered ? '#ffe74d' : '#e8e8e8'} />
    </mesh>
  )
}

useGLTF.preload('/raw/four/four.gltf')