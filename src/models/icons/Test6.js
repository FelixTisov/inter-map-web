/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {

  const ref = useRef()
  const [hovered, hover] = useState(false)

  const { nodes, materials } = useGLTF('/raw/icons/тест_знач/test6.gltf')
  return (
    <mesh 
      {...props}
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      geometry={nodes.Куб002.geometry}
      rotation={[Math.PI / 2, 0, 0]}
      material={materials['Материал.008']} 
      textures={[('one.png')]} 
      position={[-5.1, 0.2, 0]}
      scale={[0.44, 0, 0.44]} >
      <meshStandardMaterial color={hovered ? '#ffe74d' : '#e8e8e8'} />
    </mesh>
  )
}

useGLTF.preload('/raw/icons/тест_знач/test6.gltf')
