import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Main from './pages/main';
import MainMobile from './pages/main_mobile'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

if (/iPhone/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)) {
  root.render(
    <React.StrictMode>
      <MainMobile/>
    </React.StrictMode>
  )
} else {
  root.render(
    <React.StrictMode>
      <Main/>
    </React.StrictMode>
  )
}

reportWebVitals()
