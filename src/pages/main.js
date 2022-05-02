import '../styles/main.css'
import SimpleImageSlider from "react-simple-image-slider"
import {useNavigate} from "react-router-dom";

const images = [
  require("../images/slider/1.jpeg"),
  require("../images/slider/2.jpg"),
  require("../images/slider/3.jpg"),
  require("../images/slider/4.jpg"),
  require("../images/slider/5.jpg"),
  require("../images/slider/6.jpg"),
  require("../images/slider/7.jpg"),
]

const items = [...Array(100)].map((val, i) => `Item ${i}`);

function Main() {
  const navigate = useNavigate()
  return (
    <div >
    
        {/* Титульная часть */}
        <div className='container'>
          <div className='flex-block'>
            <header>
              <nav>
                <a href="#история" class = "nav-item">История</a>
                <a href="#галерея" class = "nav-item">Галерея</a>
                <a href="#карта" class = "nav-item">Карта</a>
              </nav>
            </header>

            <div style={{display: 'flex', zIndex: 1, height: '100vh'}}>
              <div class ="ryad" >
                <div class = "torg">
                  <p class = "torg-text">ТОРГ</p>
                </div>
                <div class = "text">
                  <div class = "line-box"><p class="line"></p></div>
                  <div class = "description"><p class="line-text">Торговые ряды — торгово-складской комплекс конца XVIII—начала XIX веков, расположенный в самом центре Костромы. Это образцовый в памятник градостроительного искусства времени екатерининской городской реформы.</p></div>
                </div>
                <div class = "button_kart">
                  <button onClick={()=>{navigate('/map')}} class="button">КАРТА</button>
                </div>
              </div>
              <div class="ryad" style={{ position: 'relative'}}>
                  <div class = "del">
                    <p class ="ove-text">ОВЫЕ<br/>РЯДЫ</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Таймлайн */}
        <div className="felx-block" >

          <div className="ryad" style={{width: '65%'}}>
            <div className="model"></div>
          </div>

          {/* Скролл-блок */}
          <div className="center-col">
          
              <div className="block">
                  <div className="dot"/>         
              </div>
              
              <div className="block">
                <div className='img-box'>
                  <div className="foto1"/>
                </div>
                <div className="line"/>
                <div className="info">
                  <div className="date">
                    <div className="linedate"><hr></hr></div>
                    <div className="number">1766</div>
                  </div>
                  <div className="textdate">Церковь Спаса на средства костромского купца С.С.Белова</div>
                </div>
              </div>

              <div className="block">
                <div className='img-box'>
                  <div className="foto1"/>
                </div>
                <div className="line"/>
                <div className="info">
                  <div className="date">
                    <div className="linedate"><hr></hr></div>
                    <div className="number">1791</div>
                  </div>
                  <div className="textdate">Начало строительства дворовой галереи гостинного двора у церкви под руководством зодчего С.А.Воротилова</div>
                </div>
              </div>

              <div className="block">
                <div className='img-box'>
                  <div className="foto1"/>
                </div>
                <div className="line"/>
                <div className="info">
                  <div className="date">
                    <div className="linedate"><hr></hr></div>
                    <div className="number">1796</div>
                  </div>
                  <div className="textdate">Завершение строительства под руководством губернского архитектора И.Гове</div>
                </div>
              </div>

              <div className="block">
                <div className='img-box'>
                  <div className="foto1"/>
                </div>
                <div className="line"/>
                <div className="info">
                  <div className="date">
                    <div className="linedate"><hr></hr></div>
                    <div className="number">1820-e</div>
                  </div>
                  <div className="textdate">К дворовой галерее Гостинного двора сделаны пристройки Рукавичного и Холщового рядов</div>
                </div>
              </div>

              <div className="block">
                <div className='img-box'>
                  <div className="foto1"/>
                </div>
                <div className="line"/>
                <div className="info">
                  <div className="date">
                    <div className="linedate"><hr></hr></div>
                    <div className="number">1820-e</div>
                  </div>
                  <div className="textdate">К дворовой галерее Гостинного двора сделаны пристройки Рукавичного и Холщового рядов</div>
                </div>
              </div>

              <div className="block">
                <div className='img-box'>
                  <div className="foto1"/>
                </div>
                <div className="line"/>
                <div className="info">
                  <div className="date">
                    <div className="linedate"><hr></hr></div>
                    <div className="number">1820-e</div>
                  </div>
                  <div className="textdate">К дворовой галерее Гостинного двора сделаны пристройки Рукавичного и Холщового рядов</div>
                </div>
              </div>
             
          </div>
        </div>

        {/* Слайдер */}
        <div className='felx-block'>
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
