import '../styles/main_mobile.css'
import SimpleImageSlider from "react-simple-image-slider"
import {useNavigate} from "react-router-dom";
import HistoryBlock from '../components/history_block_mobile';
import allInfo from '../components/all_info';
import React, { useRef } from 'react';

const images = [
    require("../images/slider/1.jpeg"),
    require("../images/slider/2.jpg"),
    require("../images/slider/3.jpg"),
    require("../images/slider/4.jpg"),
    require("../images/slider/5.jpg"),
    require("../images/slider/6.jpg"),
    require("../images/slider/7.jpg"),
]

const infoList = [...allInfo]

function MainMobile() {
    const navigate = useNavigate()
    const historyRef = useRef(null);
    const scrollToHistory= () => historyRef.current.scrollIntoView({behavior: 'smooth'});
    const sliderRef = useRef(null);
    const scrollToSlider = () => sliderRef.current.scrollIntoView({behavior: 'smooth'});
    const mainRef = useRef(null);
    const scrollToMain = () => mainRef.current.scrollIntoView({behavior: 'smooth'});
    return(
        <div className='mainMobile'>

            {/* Титульная часть */}
            <div className='cont' id='cont1' >
                <div class = "ob" style={{display: 'flex', zIndex: 1}}>
                <div class ="ryad_mobile" >
                    <div className='kartinka' id="ph5"></div>
                </div>
                <div class = "torg_mobile">
                    <p className = 'torg-text_mobile'><font color="#FFFFFF">ТОРГ</font><font color="#338672">ОВЫЕ<br/>РЯДЫ</font></p>
                </div>
                <div class = "text_mobile">
                    <div class = "line-box_mobile"><p class="line_mobile" id='lineText'></p></div>
                    <div class = "new_mobile"><p class="line-text_mobile">Торговые ряды — торгово-складской комплекс конца XVIII—начала XIX веков, расположенный в самом центре Костромы. Это образцовый в памятник градостроительного искусства времени екатерининской городской реформы.</p></div>
                </div>
                <div class = "button_kart_mobile">
                    <button onClick={()=>{navigate('/map_mobile')}} class="button_mobile">КАРТА</button>
                </div>
                <div class = "button_kart_mobile">
                    <div className='strelka'></div>        
                </div>
                </div>
            </div>

            {/* Таймлайн */}
            <div className='cont' id='cont2'>
                <div className="model_mobile"></div>
                 {/* Скролл-блок */}
                 <div className="center-col_mobile">
                        
                        <div className="blocknew_mobile">
                            <div className="dot_mobile"/>         
                        </div>
                    
                        {
                            infoList.map((item, index) => {
                            console.log(item)
                            return (
                                <HistoryBlock style={{height:'25%'}}
                                img={item.img} 
                                date={item.date} 
                                text={item.text} 
                                />
                            )                 
                            })
                        }    

                        <div className="blocknew_mobile"/>
                        <div className="blocknew_mobile"/>
                        
                    </div>
            </div>

            {/* Слайдер */}
            <div className='cont' id='slider'>
                <SimpleImageSlider width={'100%'} height={'100vh'} images={images} showBullets={true} showNavs={true} autoPlay={true} /> 
            </div>

            {/* Подвал */}
            <div className='block_mobile' style={{flexDirection: 'column'}}>
                <p className='pod_mobile' style={{letterSpacing: '0.05em', fontWeight: 600, marginTop: '15%',}}>При поддержке</p>
                <p className='pod_mobile' style={{fontWeight: 400, paddingLeft: '12%', paddingRight: '12%'}}>Костромского государственного историко-архитектурного и художественного музея-заповедника</p>
                <div className='block_mobile' style={{marginBottom: '15%'}}>
                    <div className='metka_mobile'></div>
                    <p className='pod_mobile' style={{fontWeight: 400, fontSize: '14px'}}>г. Кострома, проспект Мира, д. 7</p>
                </div>
            </div>

        </div>   
    )
}

export default MainMobile