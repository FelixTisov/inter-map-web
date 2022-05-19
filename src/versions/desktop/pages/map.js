import '../styles/map.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { NavHashLink } from 'react-router-hash-link'
import * as THREE from 'three'
import BuildingAbout from '../components/building_about'
import Help from '../components/help'

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

    const offData = ['hidden', null, '', '', null, ''] // когда карточка не отображается
    const [click, setClick] = useState(offData) // информация выводимая на карточку
    const [visibility, setVisibility] = useState(true) // отображение блока с карточкой

    /* Загрузить данные для карточки */
    function LoadData(data) {
        setVisibility(!visibility)
        if(visibility) 
            if(data==null) // если дата пришла пустая, отображаем дефолтные данные
                setClick(['visible'])
            else
                setClick([
                    'visible',
                    data.mainImage,
                    data.buildingName,
                    data.date,
                    null, //пока нет готовых иконок
                    data.description
                ])
        else 
            setClick(offData)
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
            <BuildingAbout isVisible={click[0]} img={click[1]} thename={click[2]} date={click[3]} icon={click[4]} text={click[5]}/>

            {/* Карта */}
            <div className='map-cont'>
                
                <Canvas style={{position: 'fixed', height: '100%', width: '100%', overflowY: 'hidden', msOverflowY:'hidden'}}  camera={camera}>
                    {/* Настройки сцены */}
                    <OrbitControls enabled={false} maxDistance={25} minDistance={5}/>
                    <ambientLight intensity={0.22}/>
                    <pointLight color={'#ffde8a'} intensity={0.5} position={[1, 5, -20]} />
                    <pointLight color={'#ffde8a'} intensity={0.1} position={[-9, 5, -5]} />
                    
                    {/* Площади */}
                    <Squarecenter/>
                    <Midfield/>
                    <Longfield/>
                    <Trianglefield/>

                    {/* Здания */}
                    <Two onClick={()=>LoadData(dataList[0])}/> 
                    <Five onClick={()=>LoadData(dataList[1])}/>
                    <Eight onClick={()=>LoadData(dataList[2])}/>
                    <Six onClick={()=>LoadData(dataList[3])}/>
                    <Four onClick={()=>LoadData()}/>
                    <Three onClick={()=>LoadData()}/>                    
                    <Seven onClick={()=>LoadData()}/>       
                    <Nine onClick={()=>LoadData()}/>               
                    <Thirteen onClick={()=>LoadData()}/>
                    <Twelve onClick={()=>LoadData()}/>
                    <Twentyfour onClick={()=>LoadData()}/>                  
                    <Ten onClick={()=>LoadData()}/>
                    <Twentysixtwentyseven onClick={()=>LoadData()}/>
                    <Fourteen onClick={()=>LoadData()}/>
                    <Twentyone onClick={()=>LoadData()}/>
                    <Oneone onClick={()=>LoadData()}/> 
                    <Twentyfive onClick={()=>LoadData()}/> 

                </Canvas>
            </div>                
        </div>
    )
}

export default Map