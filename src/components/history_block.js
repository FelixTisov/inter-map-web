import '../styles/history_block.css'
import React, { useState } from 'react'

function HistoryBlock({img, date, text}) {
    return (
        <div className="block">
            <div className='img-box'>
                <div className="foto1" style={{backgroundImage: `url(${img})`}} />
            </div>
            <div className="line"/>
            <div className="info">
                <div className="date">
                <div className="linedate"><hr></hr></div>
                <div className="number">{date}</div>
                </div>
                <div className="textdate">{text}</div>
            </div>
        </div>
    )
}

export default HistoryBlock