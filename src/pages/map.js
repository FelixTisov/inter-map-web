import '../styles/map.css'
import React, { useState } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

//----МОДЕЛИ----//
import Squarecenter from '../models/Squarecenter'
import Two from '../models/Two'
import Five from '../models/Five'
import Four from '../models/Four'
//-------------//


function Map() {
    return (
        <div className='felx-block-map'>
            <header>
              <nav>
                <a href="#история" className = "nav-item">История</a>
                <a href="#галерея" className = "nav-item">Галерея</a>
                <a href="" className = "nav-item">Карта</a>
              </nav>
            </header>
            
            <div className='map-cont'>
                <Canvas  camera={{position: [-5, 2, 5], zoom: 1}}>
                    <OrbitControls/>
                    <ambientLight intensity={0.22}/>
                    <pointLight color={'#ffde8a'} intensity={0.5} position={[1, 5, -20]} />
                    <Two/> 
                    <Squarecenter/>
                    <pointLight color={'#ffde8a'} intensity={0.1} position={[-9, 5, -5]} />
                    <Five/>
                    <Four/>
                </Canvas>
            </div>     
        </div> 
    )
}

export default Map