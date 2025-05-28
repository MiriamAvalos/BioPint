import React from 'react';
import WhatsappButton from '../components/WhatsappButton';
import '../pages/Home.css';


import presentacion_uno  from '../assets/images/presentacion1.jpg';
import presentacion_dos  from '../assets/images/presentacion2.jpg';
import presentacion_tres  from '../assets/images/presentacion3.jpg';
import presentacion_cuatro from '../assets/images/presentacion4.jpg';



function Home() {
  return (
    <>
      <main className="home-container">
        <section className="intro">
          <h1 className="title">Bienvenidos a BioPint</h1>
          <p className="subtitle">
            Somos una empresa especializada en la fabricación
            y comercialización de pinturas ecológicas a base de
            PET reciclado.
          </p>
        </section>

        {/* Carrusel de imágenes */}
        <div id="carouselExampleIndicators" className="carousel slide mt-4" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={presentacion_uno} className="d-block w-100" alt="Imagen 1" />
            </div>
            <div className="carousel-item">
              <img src={presentacion_dos} className="d-block w-100" alt="Imagen 2" />
            </div>
            <div className="carousel-item">
              <img src={presentacion_tres} className="d-block w-100" alt="Imagen 3" />
            </div>
             <div className="carousel-item">
              <img src={presentacion_cuatro} className="d-block w-100" alt="Imagen 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </main>

      <WhatsappButton />
    </>
  );
}

export default Home;
