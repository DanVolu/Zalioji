import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import './styles/Navbar.css'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Header />
  </React.StrictMode>,
)
