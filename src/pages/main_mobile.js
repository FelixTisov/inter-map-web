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
                <div>

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
                                <div className="foto1_mobile"></div>
                                <div className="info_mobile">
                                    <div className="date_mobile">
                                        <div className="linedate_mobile"><hr></hr></div>
                                        <div className="number_mobile">1766</div>
                                    </div>
                                    <div className="textdate_mobile">Церковь Спаса на средства костромского купца С.С.Белова</div>
                                </div>
                            </div>
                            <div className="block_mobile">
                                <div className="foto2_mobile"></div>
                                <div className="info_mobile">
                                <div className="date_mobile">
                                    <div className="linedate_mobile"><hr></hr></div>
                                    <div className="number_mobile">1791</div>
                                </div>
                                <div className="textdate_mobile">Начало строительства дворовой галереи гостинного двора у церкви под руководством зодчего С.А.Воротилова</div>
                                </div>
                            </div>
                            <div className="block_mobile">
                                <div className="foto3_mobile"></div>
                                <div className="info_mobile">
                                <div className="date_mobile">
                                    <div className="linedate_mobile"><hr></hr></div>
                                    <div className="number_mobile">1796</div>
                                </div>
                                <div className="textdate_mobile">Завершение строительства под руководством губернского архитектора И.Гове</div>
                                </div>
                            </div>
                            <div className="block_mobile">
                                <div className="foto4_mobile"></div>
                                <div className="info_mobile">
                                <div className="date_mobile">
                                    <div className="linedate_mobile"><hr></hr></div>
                                    <div className="number_mobile">1820-e</div>
                                </div>
                                <div className="textdate_mobile">К дворовой галерее Гостинного двора сделаны пристройки Рукавичного и Холщового рядов</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Слайдер */}
            <div className='cont'>
                <div className="slider">
                    <SimpleImageSlider width={'100%'} height={'100%'} images={images} showBullets={true} showNavs={true} autoPlay={true}/>
                </div>
            </div>

        </div>
    )
}

export default MainMobile