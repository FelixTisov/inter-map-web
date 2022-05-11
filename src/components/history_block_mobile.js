import '../styles/history_block.css'
import React, { useState } from 'react'

function HistoryBlock({img, date, text}) {
    return (
        <div className="block" style={{height:'25%'}}>
            <div className='img-box'>
                <div className="foto" style={{backgroundImage: `url(${img})`}} />
            </div>
            <div className="line"/>
            <div className="info">
                <div className="date">
                <div className="linedate"><hr></hr></div>
                <div className="number">{date}</div>
                </div>
                <div className="textdate" style={{width:'85%'}}>{text}</div>
            </div>
        </div>
    )
}

export default HistoryBlock