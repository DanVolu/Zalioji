import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import FirstSection from './components/categories/FirstSection.jsx'
import SecondSection from './components/categories/SecondSection.jsx'
import './styles/Navbar.css'
import './styles/Header.css'
import './styles/categories/FirstSection.css'
import './styles/categories/SecondSection.css'
import './styles/index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationBar />
    <Header />
    <FirstSection />
    <SecondSection />
  </React.StrictMode>,
)
