import '../styles/main_mobile.css'
import SimpleImageSlider from 'react-simple-image-slider'
import {useNavigate} from 'react-router-dom'
import HistoryBlock from '../components/history_block_mobile'
import allInfo from '../../../common_data/all_info'
import React, { useRef } from 'react'

/* Фотографии для слайдера */
const images = [
    require("../../../images/slider/1.jpeg"),
    require("../../../images/slider/2.jpg"),
    require("../../../images/slider/3.jpg"),
    require("../../../images/slider/4.jpg"),
    require("../../../images/slider/5.jpg"),
    require("../../../images/slider/6.jpg"),
    require("../../../images/slider/7.jpg"),
  ]

const infoList = [...allInfo]

function MainMobile() {

    const navigate = useNavigate()
    
    return(
        <div>

            {/* Титульная часть */}
            <div className='cont' id='main' >
                <div class ="ryad_mobile" >
                    <div className='menu'></div>
                </div>
                <div class = "torg_mobile">
                    <p className = 'torg-text_mobile'>
                        <font color="#FFFFFF">ТОРГ</font>
                        <font color="#338672">ОВЫЕ<br/>РЯДЫ</font>
                    </p>
                </div>
                <div class = "text_mobile">
                    <div class = "line-box_mobile"><p class="side-line_mobile"/></div>
                    <div class = "desc_mobile"><p class="desc-text_mobile">Торговые ряды — торгово-складской комплекс конца XVIII—начала XIX веков, расположенный в самом центре Костромы. Это образцовый в памятник градостроительного искусства времени екатерининской городской реформы.</p></div>
                </div>
                <div class = "button_mobile">
                    <button onClick={()=>{navigate('/map_mobile')}} class="but-map_mobile">КАРТА</button>
                </div>
                <div class = "button_mobile">
                    <div className='strelka'></div>        
                </div>   
            </div>

            {/* Таймлайн */}
            <div className='cont'>
                <div className="timeline_mobile"></div>

                    {/* Скролл-блок */}
                    <div className="center-col_mobile">
                        <div className="block-new_mobile">
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
                        <div className="block-new_mobile"/>
                        <div className="block-new_mobile"/>
                    </div>

            </div>

            {/* Слайдер */}
            <div className='cont' id='slider'>
                <div className="slider">
                    <SimpleImageSlider autoPlayDelay={5.0} width={'100%'} height={'100%'} images={images} showBullets={true} showNavs={true} autoPlay={true}/>
                </div> 
            </div>

            {/* Подвал */}
            <div className='footer'>
                <p className='pod_mobile' style={{letterSpacing: '0.05em', fontWeight: 600, marginTop: '15%',}}>При поддержке</p>
                <p className='pod_mobile' style={{fontWeight: 400, paddingLeft: '12%', paddingRight: '12%'}}>Костромского государственного историко-архитектурного и художественного музея-заповедника</p>
                <div className='block_mobile'>
                    <div className='metka_mobile'></div>
                    <p className='pod_mobile' style={{fontWeight: 400, fontSize: '14px'}}>г. Кострома, проспект Мира, д. 7</p>
                </div>
            </div>

        </div>   
    )
}

export default MainMobile