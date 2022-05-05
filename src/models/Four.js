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
      position={[3.8, 0.2, 0]}
      scale={[0.3, 0.17, 0.15]}>
      <meshStandardMaterial color={hovered ? '#ffe74d' : '#e8e8e8'} />
    </mesh>
  )
}

useGLTF.preload('/raw/four/four.gltf')