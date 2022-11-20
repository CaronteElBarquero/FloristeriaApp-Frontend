import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { FloristeriaApp } from './FloristeriaApp'

import './style/style_tail.css'
import './style/style.css'
import './style/style_sweet.css'
import './style/styleProducto.css'
import './style/styleCustomer.css'
import './style/style_home.css'





ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>


    <BrowserRouter>

      <FloristeriaApp />

    </BrowserRouter>


  </React.StrictMode>


)
