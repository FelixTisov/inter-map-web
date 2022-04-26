import '../styles/main_mobile.css'
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

function MainMobile() {
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
                    <div class = "line-box_mobile"><p class="line_mobile"></p></div>
                    <div class = "new_mobile"><p class="line-text_mobile">Торговые ряды — торгово-складской комплекс конца XVIII—начала XIX веков, расположенный в самом центре Костромы. Это образцовый в памятник градостроительного искусства времени екатерининской городской реформы.</p></div>
                </div>
                <div class = "button_kart_mobile">
                    <button onclick="document.location='pages/map.js'" class="button_mobile">КАРТА</button>
                </div>
                <div class = "button_kart_mobile">
                    <div className='strelka'></div>        
                </div>
                </div>
            </div>

            {/* Таймлайн */}
            <div className='cont' id='cont2'>
                <div className="model_mobile"></div>
                <div className="time_mobile">
                    <div className="time_mobile_radius">

                        <div className="line_mobile"></div>
                        <div className="dot_mobile"></div>

                        <div className="allinfo_mobile">
                            <div className="block_mobile">
                                <div className="foto_mobile" id='ph1'></div>
                                <div className="info_mobile">
                                    <div className="date_mobile">
                                        <div className="linedate_mobile"><hr></hr></div>
                                        <div className="number_mobile">1766</div>
                                    </div>
                                    <div className="textdate_mobile">Церковь Спаса на средства костромского купца С.С.Белова</div>
                                </div>
                            </div>
                            <div className="block_mobile">
                                <div className="foto_mobile" id='ph2'></div>
                                <div className="info_mobile">
                                <div className="date_mobile">
                                    <div className="linedate_mobile"><hr></hr></div>
                                    <div className="number_mobile">1791</div>
                                </div>
                                <div className="textdate_mobile">Начало строительства дворовой галереи гостинного двора у церкви под руководством зодчего С.А.Воротилова</div>
                                </div>
                            </div>
                            <div className="block_mobile">
                                <div className="foto_mobile"></div>
                                <div className="info_mobile">
                                <div className="date_mobile">
                                    <div className="linedate_mobile"><hr></hr></div>
                                    <div className="number_mobile">1796</div>
                                </div>
                                <div className="textdate_mobile">Завершение строительства под руководством губернского архитектора И.Гове</div>
                                </div>
                            </div>
                            <div className="block_mobile">
                                <div className="foto_mobile" id='ph4'></div>
                                <div className="info_mobile">
                                <div className="date_mobile">
                                    <div className="linedate_mobile"><hr></hr></div>
                                    <div className="number_mobile">1820-e</div>
                                </div>
                                <div className="textdate_mobile">К дворовой галерее Гостинного двора сделаны пристройки Рукавичного и Холщового</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Слайдер */}
            <div className='cont' id='slider'>

                <SimpleImageSlider width={'100%'} height={'100vh'} images={images} showBullets={true} showNavs={true} autoPlay={true}/> 

            </div>

            <div className='cont' id='slider1'>

                    {/* <SimpleImageSlider width={'100%'} height={'100%'} images={images} showBullets={true} showNavs={true} autoPlay={true}/> */}

            </div>

        </div>
    )
}

export default MainMobile