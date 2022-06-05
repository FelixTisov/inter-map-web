import '../styles/map.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { NavHashLink } from 'react-router-hash-link'
import * as THREE from 'three'
import Help from '../components/help'
import BldAbout from '../components/bld_about'

/* Модели */
import Squarecenter from '../../../models/Squarecenter'
import Two from '../../../models/Two'
import Five from '../../../models/Five'
import Four from '../../../models/Four'
import Three from '../../../models/Three'
import Midfield from '../../../models/Midfield'
import Eight from '../../../models/Eight'
import Seven from '../../../models/Seven'
import Six from '../../../models/Six'
import Nine from '../../../models/Nine'
import Longfield from '../../../models/Longfield'
import Thirteen from '../../../models/Thirteen'
import Twelve from '../../../models/Twelve'
import Twentyfour from '../../../models/Twentyfour'
import Trianglefield from '../../../models/Trianglefield'
import Ten from '../../../models/Ten'
import Twentysixtwentyseven from '../../../models/Twentysixtwentyseven'
import Fourteen from '../../../models/Fourteen'
import Oneone from '../../../models/Oneone'
import Twentyone from '../../../models/Twentyone'
import Twentyfive from '../../../models/Twentyfive'

/* Информация о постройках для карточек */ 
import Data from '../../common-data/buildings_data'
const dataList = [...Data]

let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.x = -7 //вокруг центра по плоскости
camera.position.y = 7 //по вертикали
camera.position.z = -7

const Map = () => {

    const offData = ['hidden', null, '', '', null, ''] // карточка выключена
    const [click, setClick] = useState(offData) // информация выводимая на карточку
    const [currentBuild, setCurrentBuild] = useState('') // текущее отображаемое на карточке здание

    /* Загрузить данные для карточки */
    function LoadData(data, index) {
        if(data!=null) 
        { 
            if (index!=currentBuild)
            {
                setClick([
                'visible', // включаем карточку
                data.mainImage,
                data.buildingName,
                data.date,
                null, //пока нет готовых иконок
                data.description
                ])
                setCurrentBuild(index)
            } 
            else
            {
                setClick(offData)
                setCurrentBuild('')
            }
        } 
        else // если дата пришла пустая, отображаем дефолтные данные
        {
            setClick(['visible']) 
            setCurrentBuild('')
        }
    }

    return (
        <div className='felx-block-map'>
            <header style={{position: 'fixed'}}>
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
                    <Link to="/"><a>Главная</a></Link>
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
            <Help/>
            
            {/* Инфо блок */}
            <BldAbout isVisible={click[0]} img={click[1]} thename={click[2]} date={click[3]} icon={click[4]} text={click[5]}/>

            {/* Карта */}
            <div className='map-cont'>
                
                <Canvas style={{position: 'fixed', height: '100%', width: '100%', overflowY: 'hidden', msOverflowY:'hidden'}}  camera={camera}>
                    {/* Настройки сцены */}
                    <OrbitControls minPolarAngle={Math.PI/3} maxPolarAngle={Math.PI/3} enabled={true} maxDistance={25} minDistance={5}/>
                    <ambientLight intensity={0.22}/>
                    <pointLight color={'#ffde8a'} intensity={0.5} position={[1, 5, -20]} />
                    <pointLight color={'#ffde8a'} intensity={0.1} position={[-9, 5, -5]} />
                    
                    {/* Площади */}
                    <Squarecenter/>
                    <Midfield/>
                    <Longfield/>
                    <Trianglefield/>

                    {/* Здания */}
                    <Two onClick={()=>LoadData(dataList[0], 1)}/> 
                    <Five onClick={()=>LoadData(dataList[1], 2)}/>
                    <Eight onClick={()=>LoadData(dataList[2], 3)}/>
                    <Six onClick={()=>LoadData(dataList[3], 4)}/>
                    <Four onClick={()=>LoadData([], 6)}/>
                    <Three onClick={()=>LoadData([], 7)}/>                    
                    <Seven onClick={()=>LoadData([], 8)}/>       
                    <Nine onClick={()=>LoadData([], 9)}/>               
                    <Thirteen onClick={()=>LoadData([], 10)}/>
                    <Twelve onClick={()=>LoadData([], 11)}/>
                    <Twentyfour onClick={()=>LoadData([], 12)}/>                  
                    <Ten onClick={()=>LoadData([], 13)}/>
                    <Twentysixtwentyseven onClick={()=>LoadData([], 14)}/>
                    <Fourteen onClick={()=>LoadData([], 15)}/>
                    <Twentyone onClick={()=>LoadData([], 16)}/>
                    <Oneone onClick={()=>LoadData([], 17)}/> 
                    <Twentyfive onClick={()=>LoadData([], 18)}/> 

                </Canvas>
            </div>                
        </div>
    )
}

export default Map