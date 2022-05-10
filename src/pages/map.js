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
import Thirteen from '../models/Thirteen'
import Twelve from '../models/Twelve'
import Twentyfour from '../models/Twentyfour'
import Trianglefield from '../models/Trianglefield'
import Ten from '../models/Ten'
import Twentysixtwentyseven from'../models/Twentysixtwentyseven'
import Fourteen from '../models/Fourteen'
import Oneone from '../models/Oneone'
import Twentyone from '../models/Twentyone'
import Twentyfive from '../models/Twentyfive'
//-------------//


function Map() {
    return (
        <div className='container'>
            <div className='felx-block-map'>
              <header>
                <nav>
                  <div className = "nav-item">
                    <a >История</a>
                  </div>
                  <div className = "nav-item">
                    <a >Галерея</a>
                  </div>
                  <div className = "nav-item">
                    <a href="/">Главная</a>
                  </div>                                           
                </nav>
              </header>

                {/* Карта */}
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
                        <Thirteen/>
                        <Twelve/>
                        <Twentyfour/>
                        <Trianglefield/>
                        <Ten/>
                        <Twentysixtwentyseven/>
                        <Fourteen/>
                        <Twentyone/>
                        <Oneone/> 
                        <Twentyfive/> 
                    </Canvas>
                </div>                
            </div>

        </div>    
    )
}

export default Map