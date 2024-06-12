import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Component/Header/Header.jsx'
import Footer from './Component/Footer/Footer.jsx'


ReactDOM.createRoot(document.getElementById('header1')).render(
  <React.StrictMode>
    <Header />
    
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer/>
    
  </React.StrictMode>,
)
