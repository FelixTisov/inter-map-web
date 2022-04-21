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
        <div>
          
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
