import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>BioTint</h1>

        {/* Navegación entre secciones usando Link */}
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about-us">Nosotros</Link></li>
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>

        {/* Definición de las rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
