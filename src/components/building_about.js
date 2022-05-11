import '../styles/building_about.css'

function BuildingAbout({img, name, date, icon, text,}) {
    return(
        <div className='infoCont'>
                    <div className='imgCont'>
                        
                    </div>

                    <div className='head'>
                        <div className='mainInfo'>
                            <div className='name'>
                                <p>Пряничные ряды</p>
                            </div>
                            <div className='date'>
                                <p>Конец XVIII - начало XIX векв</p>
                            </div>      
                        </div>
                        <div className='iconCont'>

                        </div>        
                    </div>

                    <div className='about'>
                        <div className='mainText'>
                            <p>Построены в стиле классицизма. Они сооружены на средства местных купцов на рубеже XVIII-XIX вв. (1800е) Кирпичный корпус расположен между Гостиным двором и Рыбными рядами. 
                            Внутреннюю структуру определяют поперечные капитальные стены, которые делят пространство на одинаковые ячейки – лавки. 
                            </p>
                        </div>                      
                    </div>
                </div>
    )
}

export default BuildingAbout