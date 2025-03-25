import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    
  </StrictMode>,
)
