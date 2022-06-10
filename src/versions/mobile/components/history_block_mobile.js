/* Блок таймлайна мобильной версии */ 
import '../styles/historyBlockMobile.css'
import React from 'react'

function HistoryBlock({img, date, text}) {
    return (
        <div className="block-mobile" style={{height:'25%'}}>
            <div className='img-box-mobile'>
                <div className="foto-mobile" style={{backgroundImage: `url(${img})`}} />
            </div>
            <div className="line-mobile"/>
            <div className="info-mobile">
                <div className="date-mobile">
                <div className="linedate-mobile"><hr></hr></div>
                <div className="number-mobile">{date}</div>
                </div>
                <div className="textdate-mobile" style={{width:'90%'}}>{text}</div>
            </div>
        </div>
    )
}

export default HistoryBlock