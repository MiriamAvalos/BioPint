import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsappButton from '../components/WhatsappButton';
import '../pages/Home.css';

import presentacion_uno from '../assets/images/presentacion1.jpg';
import presentacion_dos from '../assets/images/presentacion2.jpg';
import presentacion_tres from '../assets/images/presentacion3.jpg';
import presentacion_cuatro from '../assets/images/presentacion4.jpg';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <main className='home-container'>
        <section className='intro'>
          <h1 className='title' data-aos='zoom-in-down'>
            Bienvenidos a BioPint
          </h1>
          <p className='subtitle' data-aos='zoom-in-up'>
            Somos una empresa especializada en la fabricación y comercialización
            de pinturas ecológicas a base de PET reciclado.
          </p>
        </section>

        <div
          id='carouselExampleIndicators'
          className='carousel slide mt-4'
          data-bs-ride='carousel'
          data-bs-interval='7000'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='3'
              aria-label='Slide 4'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='4'
              aria-label='Slide 5'
            ></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                src={presentacion_uno}
                className='d-block w-100'
                alt='Imagen 1'
              />
            </div>
            <div className='carousel-item'>
              <img
                src={presentacion_dos}
                className='d-block w-100'
                alt='Imagen 2'
              />
            </div>
            <div className='carousel-item'>
              <img
                src={presentacion_tres}
                className='d-block w-100'
                alt='Imagen 3'
              />
            </div>
            <div className='carousel-item'>
              <img
                src={presentacion_cuatro}
                className='d-block w-100'
                alt='Imagen 3'
              />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Anterior</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Siguiente</span>
          </button>
        </div>

        <section className='valores'>
          <h2 className='section-title'>Valores</h2>
          <p>
            En BioPint promovemos la sustentabilidad con impacto, el trabajo en
            equipo, la transparencia y honestidad en cada uno de nuestros
            procesos. Mantenemos cercanía con el cliente para ofrecer soluciones
            personalizadas y nos enfocamos en la mejora continua para optimizar
            productos y servicios.
          </p>
        </section>

        <section className='mision-vision'>
          <div>
            <h2 className='section-title'>Misión</h2>
            <p>
              Desarrollamos pinturas innovadoras a partir de PET reciclado,
              ofreciendo recubrimientos de alto impacto. Desde Puebla,
              trabajamos para reducir residuos y contribuir a un entorno más
              sostenible.
            </p>
          </div>
          <div>
            <h2 className='section-title'>Visión</h2>
            <p>
              Posicionar a BioPint como líder en la transformación del PET en
              pinturas de alto impacto en Puebla, promoviendo el reciclaje, la
              sostenibilidad y la educación ambiental.
            </p>
          </div>
        </section>

        <section className='objetivo'>
          <h2 className='section-title'>Objetivo</h2>
          <p>
            Nuestra objetivo es ofrecer una alternativa sustentable en la
            industria de recubrimientos, promoviendo la economía circular y la
            reducción de residuos plásticos.
          </p>
        </section>
      </main>

      <WhatsappButton />
    </>
  );
}

export default Home;
