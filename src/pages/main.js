import '../styles/main.css';

import SimpleImageSlider from "react-simple-image-slider";

const images = [
   require("../images/6.jpg"),
 require("../images/7.jpg"),
 require("../images/8.jpg"),
];

function Main() {
  return (
    <div className="Main">
      <body>
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
        <div className="timeline">

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
        <div>
          <SimpleImageSlider width={'100%'} height={750} images={images} showBullets={true} showNavs={true} autoPlay={true}/>
        </div>

      </body>
    </div>
  );
}

export default Main;
