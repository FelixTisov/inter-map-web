/* Раздел помощи */ 
import './help.css'
import { useState } from 'react'

function Help() {
    const [visibility, setVisibility] = useState('hidden')
    return(
        <div>
            {/* Кнопка помощи */}
            <div id='help' onClick={() => 
                (visibility === 'hidden' ? setVisibility('visible') : setVisibility('hidden'))
            }>
                <p>?</p>
            </div>

            {/* Окно помощи  */}
            <div className='help-cont' style={{visibility: `${visibility}`}} >
                <div className='txt-cont'>
                    <p>Это 3Д карта торговых рядов. Просто нажмите на здание, чтобы просмотреть дополнительную информацию про него.</p>
                </div>
            </div>
        </div>
    )
}

export default Help