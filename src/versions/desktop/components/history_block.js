import './history_block.css'

function HistoryBlock({img, date, text}) {
    return (
        <div className="block">
            <div className='img-box'>
                <div className="foto" style={{backgroundImage: `url(${img})`}} />
            </div>
            <div className="line"/>
            <div className="info">
                <div className="date">
                <div className="line-date-cont"><div className='line-date'/></div>
                <div className="number">{date}</div>
                </div>
                <div className="textdate">{text}</div>
            </div>
        </div>
    )
}

export default HistoryBlock