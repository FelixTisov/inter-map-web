import '../styles/map.css'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Car from '../models/Car'
import Testmodel from '../models/Testmodel'
import { OrbitControls } from '@react-three/drei'

function Map() {
    return (
        <div className='felx-block'>
            <div className='map-cont'>
                <Canvas  camera={{position: [-5, 2, 5], zoom: 2}}>
                    <OrbitControls/>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Testmodel/>                
                </Canvas>
            </div>     
        </div> 
    )
}

export default Map