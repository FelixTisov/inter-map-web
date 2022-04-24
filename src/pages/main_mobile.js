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
                <div>
                    
                </div>
            </div>

            {/* Слайдер */}
            <div className='cont'>
                <div className="slider">
                    <SimpleImageSlider width={'390px'} height={'100%'} images={images} showBullets={true} showNavs={true} autoPlay={true}/>
                </div>
            </div>

        </div>
    )
}

export default MainMobile