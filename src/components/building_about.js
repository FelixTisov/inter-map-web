import '../styles/building_about.css'

function BuildingAbout({isVisible='visible', img=null, thename='', date='', icon=null, text=''}) {
    img = require('../images/infoImages/pryanichnye.jpg')
    thename = 'Пряничные ряды'
    date = 'Конец XVIII - начало XIX века'
    icon = require('../images/icons/krendel.png')
    text='Построены в стиле классицизма. Они сооружены на средства местных купцов на рубеже XVIII-XIX вв. (1800е) Кирпичный корпус расположен между Гостиным двором и Рыбными рядами. Внутреннюю структуру определяют поперечные капитальные стены, которые делят пространство на одинаковые ячейки – лавки.'

    return(
        <div className='infoCont' style={{visibility: `${isVisible}`}}>
            <div className='imgCont' style={{backgroundImage: `url(${img})`}}/>

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
                    <div className="icon" style={{backgroundImage: `url(${icon})`}} />
                </div>        
            </div>

            <div className='about'>
                <div className='mainText'>
                    <p>{text}</p>
                </div>                      
            </div>
        </div>
    )
}

export default BuildingAbout