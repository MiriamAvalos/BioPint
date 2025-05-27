import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    
  </StrictMode>,
)
