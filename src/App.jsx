
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../src/App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import SocialAndAddress from './components/SocialAndAddress';


function App() {
  return (
    <>
       <SocialAndAddress />
    <Router>
      <div className="App">
         
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
          <div className="container-fluid navbar-container">
            <Link className="navbar-brand" to="/"></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">INICIO</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">NOSOTROS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">PRODUCTOS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">CONTACTO</Link>
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