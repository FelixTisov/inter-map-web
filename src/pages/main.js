import '../styles/main.css';

function Main() {
  return (
    <div className="Main">
      <body>
        {/* Главная часть */}
        <div>
          {/* header */}
          <div>
          <header>
            <nav>
              <a href="#история" class = "ss">История</a>
              <a href="#галерея" class = "ss">Галерея</a>
              <a href="#карта" class = "ss">Карта</a>
            </nav>
          </header>
          </div>
          {/* Основная часть */}
          <div class = "flex-container">
            <div class ="container1">
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
            <div class="container2">
                <div class = "del">
                  <p class ="ove-text">ОВЫЕ<br/>РЯДЫ</p>
                </div>
            </div>
          </div>

        </div>

        {/* Таймлайн */}
        <div>
          
        </div>

        {/* Слайдер */}
        <div>
          
        </div>

      </body>
    </div>
  );
}

export default Main;
