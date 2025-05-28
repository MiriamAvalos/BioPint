// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../src/App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SocialAndAddress from './components/SocialAndAddress';

// Importa el logo
import logo from './assets/images/LBP1_Color.png';

function App() {
  return (
    <>
      <SocialAndAddress />
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent custom-navbar">
            <div className="container-fluid navbar-container">
              
              {/* 1) Logo fijo a la izquierda */}
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="Logo BioPint" className="logo-img" />
              </Link>

              {/* 2) Botón hamburguesa (aparece en pantallas pequeñas) */}
              <button
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* 3) Menú colapsable: los enlaces van a la derecha con ms-auto */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item mx-2">
                    <Link className="nav-link text-beige" to="/">INICIO</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link text-beige" to="/about-us">NOSOTROS</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link text-beige" to="/products">PRODUCTOS</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link text-beige" to="/contact">CONTACTO</Link>
                  </li>
                </ul>
              </div>

            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
