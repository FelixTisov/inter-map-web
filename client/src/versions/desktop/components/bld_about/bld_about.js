/* Карточка зданий */ 
import './bld_about.css'

const defaultImage = require('../../../../images/infoImages/default.png')

// isVisible - состояние открыта или закрыта карточка
// img - фотография здания в карточке
// thename - название здания
// date - даты постройки
// text - описание здания

function BldAbout({isVisible='hidden', img=defaultImage, thename='Упс...', date='', text='Это здание ещё не добавлено :('}) {
    return(
        <div className='infoCont' style={{visibility: `${isVisible}`}}>

            <div className='imgCont'>
                <div className='img' style={{backgroundImage: `url(${img})`}}/>
            </div>          

            <div className='headCont'>
                <div className='head'>
                    <div className='mainInfo'>
                        <div className='name'>
                            <p>{thename}</p>
                        </div>
                        <div className='date'>
                            <p>{date}</p>
                        </div>      
                    </div>
                    <div className='iconCont'>
                        <div className="icon" />
                    </div>        
                </div>
                
            </div>
           
           <div className='aboutCont'>
            <div className='about'>
                <div className='mainText'>
                    <p>{text}</p>
                </div>                      
            </div>
           </div>
              
        </div>
    )
}

export default BldAbout