import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
 //общие стили для страниц десктопных версий
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route} from "react-router-dom";

/* Страницы разных версий*/ 
import Main from './versions/desktop/pages/main'
import Map from './versions/desktop/pages/map'

import MainMobile from './versions/mobile/pages/main_mobile'
import MapMobile from './versions/mobile/pages/map_mobile'

import AdminPage from './versions/admin/pages/AdminPage'
import AuthPage from './versions/admin/pages/AuthPage'

const root = ReactDOM.createRoot(document.getElementById('root'))

// if (/iPhone/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)) 
// {
  /* Рендер мобильной версии */ 
//   root.render(
//       <React.StrictMode>
//         <BrowserRouter>
//           <Routes>
//             <Route exact path='/' element={<MainMobile/>}/>
//             <Route exact path='/map_mobile' element={<MapMobile/>}/>
//           </Routes> 
//         </BrowserRouter>
//       </React.StrictMode>
//   )
// } else {
  /* Рендер десктопной версии */
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/map' element={<Map/>}/>
          <Route exact path='/auth' element={<AuthPage/>}/>
          <Route exact path='/admin' element={<AdminPage/>}/>
        </Routes>
      </BrowserRouter>   
    </React.StrictMode>
  )
// }

reportWebVitals()
