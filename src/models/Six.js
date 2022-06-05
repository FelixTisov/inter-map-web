/* Пряничные ряды */

import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }, onClick = () => {}) {

  const ref = useRef()
  const [hovered, hover] = useState(false)
  const { nodes, materials } = useGLTF('/raw/six/six.gltf')
  
  return (
      <mesh 
        {...props}
        ref={ref}

        // onClick={(value) => {
        //     setVisibility(!visibility)
        //     if(visibility) isVisible = 'visible'
        //     else isVisible = 'hidden'
        //   }  
        // }

        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        geometry={nodes.Cube020.geometry}
        material={materials['Материал.002']}
        position={[2.9, 0.2, 3.75]} 
        scale={[1.81, 0.17, 0.25]} >
        <meshStandardMaterial color={hovered ? '#ffe74d' : '#e8e8e8'} />
      </mesh>
  )
}
useGLTF.preload('/raw/six/six.gltf')