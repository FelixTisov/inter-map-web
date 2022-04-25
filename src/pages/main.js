import '../styles/main.css'
import SimpleImageSlider from "react-simple-image-slider"

const images = [
  require("../images/slider/1.jpeg"),
  require("../images/slider/2.jpg"),
  require("../images/slider/3.jpg"),
  require("../images/slider/4.jpg"),
  require("../images/slider/5.jpg"),
  require("../images/slider/6.jpg"),
  require("../images/slider/7.jpg"),
]

function Main() {
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

            <div style={{display: 'flex', zIndex: 1}}>
              <div class ="ryad" >
                <div class = "torg">
                  <p class = "torg-text">ТОРГ</p>
                </div>
                <div class = "text">
                  <div class = "line-box"><p class="line"></p></div>
                  <div class = "new"><p class="line-text">Торговые ряды — торгово-складской комплекс конца XVIII—начала XIX веков, расположенный в самом центре Костромы. Это образцовый в памятник градостроительного искусства времени екатерининской городской реформы.</p></div>
                </div>
                <div class = "button_kart">
                  <button onclick="document.location='pages/map.js'" class="button kart">КАРТА</button>
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
        <div className="felx-block">

          <div className="ryad" style={{width: '60%', justifyContent: 'center'}}>
            <div className="model"></div>
          </div>

          <div className="time">
            
            <div className="line"></div>
            <div className="dot"></div>

            <div className="allinfo">
              <div className="block">
                <div className="foto1"></div>
                <div className="info">
                  <div className="date">
                    <div className="linedate"><hr></hr></div>
                    <div className="number">1766</div>
                  </div>
                  <div className="textdate">Церковь Спаса на средства костромского купца С.С.Белова</div>
                </div>
              </div>
              <div className="block">
                <div className="foto2"></div>
                <div className="info">
                  <div className="date">
                    <div className="linedate"><hr></hr></div>
                    <div className="number">1791</div>
                  </div>
                  <div className="textdate">Начало строительства дворовой галереи гостинного двора у церкви под руководством зодчего С.А.Воротилова</div>
                </div>
              </div>
              <div className="block">
                <div className="foto3"></div>
                <div className="info">
                  <div className="date">
                    <div className="linedate"><hr></hr></div>
                    <div className="number">1796</div>
                  </div>
                  <div className="textdate">Завершение строительства под руководством губернского архитектора И.Гове</div>
                </div>
              </div>
              <div className="block">
                <div className="foto4"></div>
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

        </div>

        {/* Слайдер */}
        <div className='felx-block'>
          <div className="slider">
            <SimpleImageSlider width={'100%'} height={'100%'} images={images} showBullets={true} showNavs={true} autoPlay={true}/>
          </div>     
        </div>

    </div>
  )
}

export default Main
