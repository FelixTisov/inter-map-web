import '../styles/map.css'
import React, { useCallback, useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { NavHashLink } from 'react-router-hash-link'
import * as THREE from 'three'
import Help from '../components/help'
import BldAbout from '../components/bld_about'
import { useHttp } from "../../../hooks/http.hook"

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

/* Значки */ 
import Muka from '../../../models/icons/Muka'
import Hleb from '../../../models/icons/Hleb'
import Bublik from '../../../models/icons/Bublik'
import Admin from '../../../models/icons/Admin'
import Kvas from '../../../models/icons/Kvas'
import Maslo from '../../../models/icons/Maslo'
import Maso from '../../../models/icons/Maso'
import Milo from '../../../models/icons/Milo'
import Ovochi from '../../../models/icons/Ovochi'
import Pechene from '../../../models/icons/Pechene'
import Riba from '../../../models/icons/Riba'
import Chai from '../../../models/icons/Chai'
import Muka_mal from '../../../models/icons/Muka_mal'
import Krest from '../../../models/icons/Krest'
import Sum from '../../../models/icons/Sum'
import Nit from '../../../models/icons/Nit'
import Krest_ch from '../../../models/icons/Krest_ch'

/* Информация о постройках для карточек */ 
import Data from '../../common-data/buildings_data'
const dataList = [...Data]

/* Настройки камеры */
let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.x = -7 //вокруг центра по плоскости
camera.position.y = 7 //по вертикали
camera.position.z = -7

const Map = () => {

    const offData = ['hidden', null, '', '', null, ''] // карточка выключена
    const [click, setClick] = useState(offData) // информация выводимая на карточку
    const [currentBuild, setCurrentBuild] = useState('') // текущее отображаемое на карточке здание

    const {request} = useHttp()
    const [dataAbout, setDataAbout] = useState([])

    /* Получение данных карточек с сервера */
    const fetchDataAbout = useCallback( async () => {
        try {
            const fetched = await request('/api/data/cards', 'GET', null)
            setDataAbout(fetched)
            console.log(dataAbout)
        } catch (error) { console.log(error) }
    }, [request])

    /* Загрузка данных карточек при рендере страницы */
    useEffect(() => {
        fetchDataAbout()
    }, [])

    /* Отобразить данные для карточки при нажатии */
    function LoadData(index, buildId) {
        if(dataAbout!=null)
        {
            let dataIndex
            /* Проверяем есть ли такое здание в БД */ 
            for(let i = 0; i < dataAbout.length; i++) {
                if(dataAbout[i].buildingId === buildId)
                    dataIndex = i
            }

            /* Если нажато другое здание, изменить карточку*/ 
            if (index!=currentBuild)
            {
                try {
                    setClick([
                    'visible', // включаем карточку
                    dataAbout[dataIndex].image, // картинка в шапке
                    dataAbout[dataIndex].cardName, // название
                    dataAbout[dataIndex].date, // даты
                    null, //пока нет готовых иконок
                    dataAbout[dataIndex].description, // описание
                    ])
                    setCurrentBuild(index)
                    
                } catch (error) {
                    setClick(['visible']) 
                    setCurrentBuild(index)
                }          
            } 
            else // Если то же самое, закрыть карточку
            {
                setClick(offData)
                setCurrentBuild('')
            }

        } else {// если дата с сервера пришла пустая, отображаем дефолтные данные
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
                    <Two onClick={()=>LoadData(1, 'Two')}/> 
                    <Five onClick={()=>LoadData(2, 'Five')}/>
                    <Eight onClick={()=>LoadData(3, 'Eight')}/>
                    <Six onClick={()=>LoadData(4, 'Six')}/>
                    <Four onClick={()=>LoadData(6, 'Four')}/>
                    <Three onClick={()=>LoadData(7, 'Three')}/>                    
                    <Seven onClick={()=>LoadData(8, 'Seven')}/>       
                    <Nine onClick={()=>LoadData(9, 'Nine')}/>               
                    <Thirteen onClick={()=>LoadData(10, 'Thirteen')}/>
                    <Twelve onClick={()=>LoadData(11, 'Twelve')}/>
                    <Twentyfour onClick={()=>LoadData(12, 'Twentyfour')}/>                  
                    <Ten onClick={()=>LoadData(13, 'Ten')}/>
                    <Twentysixtwentyseven onClick={()=>LoadData(14, 'Twentysixtwentyseven')}/>
                    <Fourteen onClick={()=>LoadData(15, 'Fourteen')}/>
                    <Twentyone onClick={()=>LoadData(16, 'Twentyone')}/>
                    <Oneone onClick={()=>LoadData(17, 'Oneone')}/> 
                    <Twentyfive onClick={()=>LoadData(18, 'Twentyfive')}/> 

                    {/* Значки */}
                    {/* <Muka/>
                    <Tabak/>
                    <Muka/>
                    <Hleb/>
                    <Bublik/>
                    <Kvas/>
                    <Maslo/>
                    <Maso/>
                    <Milo/>
                    <Ovochi/>
                    <Pechene/>
                    <Riba/>
                    <Sol/>
                    <Muka_mal/>
                    <Chai/>
                    <Admin/>
                    <Krest/>
                    <Sum/>
                    <Nit/>
                    <Krest_ch/> */}

                </Canvas>
            </div>                
        </div>
    )
}

export default Map