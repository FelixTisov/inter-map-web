import '../styles/main.css'
import SimpleImageSlider from "react-simple-image-slider"
import {useNavigate} from "react-router-dom";
import HistoryBlock from '../components/history_block';
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

function Main() {

  const navigate = useNavigate()
  const historyRef = useRef(null);
  const scrollToHistory= () => historyRef.current.scrollIntoView({behavior: 'smooth'});
  const sliderRef = useRef(null);
  const scrollToSlider = () => sliderRef.current.scrollIntoView({behavior: 'smooth'});
  const mainRef = useRef(null);
  const scrollToMain = () => mainRef.current.scrollIntoView({behavior: 'smooth'});

  return (
    <div >
        <div id='upButton' onClick={scrollToMain}>
          {/* Сюда стрелку */}
          <div className='strel_top'></div>
        </div>

        {/* Титульная часть */}
        <div className='container' ref={mainRef}>
          <div className='flex-block'>
            <header>
              <nav>
                <div className = "nav-item">
                  <a  onClick={scrollToHistory}>История</a>
                </div>
                <div className = "nav-item">
                  <a  onClick={scrollToSlider}>Галерея</a>
                </div>
                <div className = "nav-item">
                  <a href="/map">Карта</a>
                </div>                                           
              </nav>
            </header>

            <div style={{display: 'flex', zIndex: 1, height: '100vh'}}>
              <div className ="ryad" >
                <div className = "torg">
                  <p className = "torg-text">ТОРГ</p>
                </div>
                <div className = "text">
                  <div className = "line-box"><p class="line"></p></div>
                  <div className = "description"><p class="line-text">Торговые ряды — торгово-складской комплекс конца XVIII—начала XIX веков, расположенный в самом центре Костромы. Это образцовый в памятник градостроительного искусства времени екатерининской городской реформы.</p></div>
                </div>
                <div className = "button_kart">
                  <button onClick={()=>{navigate('/map')}} class="button">КАРТА</button>
                </div>
              </div>
              <div className="ryad" style={{ position: 'relative'}}>
                  <div className = "del">
                    <p className ="ove-text">ОВЫЕ<br/>РЯДЫ</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Таймлайн */}
        <div className="felx-block" id='timeline' ref={historyRef} >

          <div className="ryad" style={{width: '65%'}}>
            <div className="model"></div>
          </div>

          {/* Скролл-блок */}
          <div className="center-col">
          
              <div className="block">
                  <div className="dot"/>         
              </div>
           
              {
                infoList.map((item, index) => {
                  console.log(item)
                  return (
                    <HistoryBlock 
                      img={item.img} 
                      date={item.date} 
                      text={item.text} 
                    />
                  )                 
                })
              }    

              <div className="block"/>
              <div className="block"/>
              <div className="block"/>
             
          </div>
        </div>

        {/* Слайдер */}
        <div className='felx-block' id='gallery' ref={sliderRef}>
          <div className="slider">
            <SimpleImageSlider width={'100%'} height={'100%'} images={images} showBullets={true} showNavs={true} autoPlay={true}/>
          </div>     
        </div>

        {/* Подвал */}
        <div className='felx-block'>
          <div className='text-block'>
            
            <div className='text-column'>
              <h1 >При поддержке</h1>
              <h2>Костромского государственного историко-архитектурного</h2>
              <br/><h2>и художественного музея-заповедника</h2>
            </div>
            
            <div className='text-row' >
              <div id='metka'></div>
              <h3 className='text-column'>г. Кострома, проспект Мира, д. 7</h3>
            </div>

          </div>
        </div>
        
    </div>

  )
}

export default Main
