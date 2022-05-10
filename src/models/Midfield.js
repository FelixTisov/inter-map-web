import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)

  const { nodes, materials } = useGLTF('/raw/midfield/midfield.gltf')
  return (
    <group>
      <mesh 
        material={materials['Материал.010']}
        geometry={nodes.Цилиндр007.geometry}
        position={[-1, 0.12, 0]}
        scale={[0.07, 0.19, 0.07]}>
      </mesh>
      <mesh 
        material={materials['Материал.011']}
        geometry={nodes.Cube028.geometry}
        position={[-1, -0.12, 0]}
        scale={[0.52, 0.08, 1.02]}>
      </mesh>
      <mesh 
        material={materials['Материал.008']}
        geometry={nodes.Икосфера013.geometry}
        position={[-1, 0.12, 0]}
        scale={[0.06, 0.05, 0.03]}>
      </mesh>
    </group>
  )
}

useGLTF.preload('/raw/midfield/midfield.gltf')
