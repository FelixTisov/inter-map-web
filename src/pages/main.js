import '../styles/main.css';

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
          <div class="all">
		      <input checked type="radio" name="respond" id="desktop">
			      <article id="slider">
				    	<input checked type="radio" name="slider" id="switch1">
				    	<input type="radio" name="slider" id="switch2">
				    	<input type="radio" name="slider" id="switch3">
					    <input type="radio" name="slider" id="switch4">
					    <input type="radio" name="slider" id="switch5">
				        <div id="slides">
				        	<div id="overflow">
						        <div class="image">
						        	<article><img src="6.jpg"></article>
						        	<article><img src="8.jpg"></article>
							        <article><img src="3.jpg"></article>
						          <article><img src="4.jpg"></article>
						        	<article><img src="5.jpg"></article>
					        	</div>
					        </div>
				        </div>
			        	<div id="controls">
				        	<label for="switch1"></label>
				        	<label for="switch2"></label>
				        	<label for="switch3"></label>
				        	<label for="switch4"></label>
				        	<label for="switch5"></label>
			        	</div>
				        <div id="active">
					        <label for="switch1"></label>
				        	<label for="switch2"></label>
				        	<label for="switch3"></label>
				        	<label for="switch4"></label>
				        	<label for="switch5"></label>
			        	</div>
			      </article>
	      </div>
        </div>

      </body>
    </div>
  );
}

export default Main;
