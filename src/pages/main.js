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
];

function Main() {
  return (
    <div className="Main">
        {/* Главная часть */}
        <div>
          {/* header */}
          <div>

          </div>
          {/* Основная часть */}
          <div>
            
          </div>

        </div>

        {/* Таймлайн */}
        <div className="felx-block">

          <div className="ryad">
            <div className="model"></div>
          </div>

          <div className="time">
            
            <div className="line">
            </div>

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
