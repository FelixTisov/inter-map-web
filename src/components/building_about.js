import '../styles/building_about.css'

function BuildingAbout({isVisible='hidden', img=null, thename='', date='', icon=null, text=''}) {
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