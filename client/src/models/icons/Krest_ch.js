/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


export default function Model({ ...props }) {

  const ref = useRef()
  const [hovered, hover] = useState(false)
  const colorMap = useLoader(TextureLoader, '/raw/icons/тест_знач/textures/krest.png')

  const { nodes, materials } = useGLTF('/raw/icons/тест_знач/test9.gltf')
  return (
    <mesh 
      geometry={nodes.Куб002.geometry}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 1, 4.45]}
      scale={[0.44, 0, 0.44]} >
        <meshBasicMaterial
        map={colorMap}
        />
    </mesh>
  )
}

useGLTF.preload('/raw/icons/тест_знач/test9.gltf')
