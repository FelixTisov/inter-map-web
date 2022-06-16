/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useTexture } from "@react-three/drei"


export default function Model({ ...props }) {

  const ref = useRef()
  const [hovered, hover] = useState(false)

  const colorMap = useTexture({
    map: '/raw/icons/test/textures/krest.png'
  })

  const { nodes, materials } = useGLTF('/raw/icons/test/test9.gltf')
  return (
    <mesh 
      geometry={nodes.Куб002.geometry}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 1, 4.45]}
      scale={[0.44, 0, 0.44]} >
      <meshBasicMaterial {...colorMap} />
    </mesh>
  )
}

useGLTF.preload('/raw/icons/test/test9.gltf')