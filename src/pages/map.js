import '../styles/map.css'
import React, { useState, useContext } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { NavHashLink } from 'react-router-hash-link'
import * as THREE from "three";
import BuildingAbout from '../components/building_about'

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

let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000 );

camera.position.x = -7 //вокруг центра по плоскости
camera.position.y = 7 //по вертикали
camera.position.z = -7

function Map() {

    const [click, setClick] = useState('hidden')

    const [visibility, setVisibility] = useState(true)

    return (
        <div className='container'>
            <div className='felx-block-map'>
              <header>
                <nav>
                  <div className = "nav-item">
                    <NavHashLink smooth to="/#timeline">
                        <a >История</a>
                    </NavHashLink>
                  </div>
                  <div className = "nav-item">
                    <NavHashLink smooth to="/#gallery">
                        <a >Галерея</a>
                    </NavHashLink>
                  </div>
                  <div className = "nav-item">
                    <a href="/">Главная</a>
                  </div>                                           
                </nav>
              </header>

                {/* Масштабирование */}
                <div id='zoomCont'>
                    <div id='zoomTools'>
                        <div className='tool' onClick={()=>{
                            if(camera.fov > 20) {
                                camera.fov -=5;
                                camera.updateProjectionMatrix();
                            }
                        }}>
                            <p>+</p>                           
                        </div>

                        <div id='toolLine'/>

                        <div className='tool' 
                            style={{marginBottom: '10px'}} 
                            onClick={()=>{
                                if(camera.fov < 70) {
                                    camera.fov +=5;
                                    camera.updateProjectionMatrix();
                                }                       
                        }}>
                            <p>-</p>
                        </div>
                    </div>
                </div>

                {/* Помощь */}
                {/* <div id='help'>
                    <p>?</p>
                </div> */}
                
                {/* Инфо блок */}
                <BuildingAbout isVisible={click}/>

                {/* Карта */}
                <div className='map-cont'>
                    
                    <Canvas  camera={camera}>
                        <OrbitControls enabled={false} maxDistance={25} minDistance={5}/>
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
                        <Six onClick={()=>{
                                setVisibility(!visibility)
                                if(visibility) setClick('visible')
                                else setClick('hidden')
                            }}/>
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