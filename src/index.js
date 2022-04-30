import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Main from './pages/main';
import MainMobile from './pages/main_mobile'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Map from './pages/map'

const root = ReactDOM.createRoot(document.getElementById('root'))

if (/iPhone/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)) {
  root.render(
    
    <React.StrictMode>
      <BrowserRouter>
        <MainMobile/>
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
