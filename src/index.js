import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/common.css'
import Main from './pages/main';
import MainMobile from './pages/main_mobile'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Map from './pages/map'
import MapMobile from './pages/map_mobile'

const root = ReactDOM.createRoot(document.getElementById('root'))

if (/iPhone/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)) 
{
  root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<MainMobile/>}/>
            <Route exact path='/map_mobile' element={<MapMobile/>}/>
          </Routes> 
        </BrowserRouter>
      </React.StrictMode>
  )
} else {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/map' element={<Map/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

reportWebVitals()
