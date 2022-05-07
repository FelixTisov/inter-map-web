import '../styles/map.css'
import React, { useState } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

//----МОДЕЛИ----//
import Squarecenter from '../models/Squarecenter'
import Two from '../models/Two'
import Five from '../models/Five'
import Four from '../models/Four'
import Three from '../models/Three'
import Midfield from '../models/Midfield'
import Eight from '../models/Eight'
import Seven from '../models/Seven'
import Six from '../models/Six'
import Nine from '../models/Nine'
import Longfield from '../models/Longfield'
import Theerten from '../models/Theerten'
import Twelve from '../models/Twelve'
import Twentyfour from '../models/Twentyfour'
import Twentysixseven from '../models/Twentysixseven'
import Trianglefield from '../models/Trianglefield'
import Ten from '../models/Ten'
import Twentyone from '../models/Twentyone'
//-------------//


function Map() {
    return (
        <div className='felx-block-map'>
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
                    <Three/>
                    <Midfield/>
                    <Eight/>
                    <Seven/>
                    <Six/>
                    <Nine/>
                    <Longfield/>
                    <Theerten/>
                    <Twelve/>
                    <Twentyfour/>
                    <Trianglefield/>
                    <Ten/>
                </Canvas>
            </div>     
        </div> 
    )
}

export default Map