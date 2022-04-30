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

function Map() {
    return (
        <div className='felx-block'>
            <div className="slider">
                <SimpleImageSlider width={'100%'} height={'100%'} images={images} showBullets={true} showNavs={true} autoPlay={true}/>
            </div>     
        </div> 
    )
}

export default Map