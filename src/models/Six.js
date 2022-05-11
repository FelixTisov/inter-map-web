/* Пряничные ряды */

import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'


/* Инфа об объекте */ 
let isVisible = 'hidden'
const img = require('../images/infoImages/pryanichnye.jpg')
const thename = 'Пряничные ряды'
const date = 'Конец XVIII - начало XIX века'
const icon = require('../images/icons/krendel.png')
const text='Построены в стиле классицизма. Они сооружены на средства местных купцов на рубеже XVIII-XIX вв. (1800е) Кирпичный корпус расположен между Гостиным двором и Рыбными рядами. Внутреннюю структуру определяют поперечные капитальные стены, которые делят пространство на одинаковые ячейки – лавки.'

export default function Model({ ...props }, {onClick}) {

  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [visibility, setVisibility] = useState(true)

  const handleClick = (value) => {
    setVisibility(!visibility)
    if(visibility) isVisible = 'visible'
    else isVisible = 'hidden'
    onClick(isVisible)
  }

  const { nodes, materials } = useGLTF('/raw/six/six.gltf')
  return (
      <mesh 
        {...props}
        ref={ref}

        onClick={
          handleClick
          
        }

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