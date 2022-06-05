/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useTexture } from "@react-three/drei"
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {

  const ref = useRef()
  const [hovered, hover] = useState(false)


  const { nodes, materials } = useGLTF('/raw/icons/тест_знач/test9.gltf')
  return (
    <mesh 
      geometry={nodes.Куб002.geometry}
      rotation={[Math.PI / 2, 0, 0]}
      textures={['one.png']}
      position={[-5.1, 0.2, 0.5]}
      scale={[0.44, 0, 0.44]} >
    </mesh>
  )
}

useGLTF.preload('/raw/icons/тест_знач/test9.gltf')
