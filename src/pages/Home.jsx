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
          <p className='subtitle2' data-aos='zoom-in-up'>
            {' '}
            <strong>🔁 Pinta con impacto, renueva con BioPint.</strong>
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

        <div
          style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}
        >
          <iframe
            src='https://www.youtube.com/embed/EZNiLRe0hy0?si=QCJNr9YJZ42lJP7Y'
            title='Video de BioPint'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            style={{
              position: 'absolute',
              top: 30,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </div>

        <section className='valores' data-aos='flip-down'>
          <h2 className='section-title'>¿QUIENES SOMOS?</h2>
          <p className='quienesSomos'>
            <strong>BioPint </strong> es una empresa innovadora dedicada a
            transformar residuos plásticos en pinturas ecológicas de alta
            calidad.
            <strong>
              {' '}
              Nuestras pinturas están elaboradas a partir de PET cristal triturado y sellador
              de unicel reciclado.
            </strong>{' '}
            <br />
            Nuestro objetivo es ofrecer productos accesibles, sostenibles y de
            calidad, que contribuyan a combatir la contaminación por plásticos.
            <br /> <strong> 📍Desde Puebla</strong>, promovemos la <strong>economía
            circular, el reciclaje y la sostenibilidad ambiental.</strong>{' '}
          </p>
        </section>

        <section className='valores' data-aos='flip-down'>
          <h2 className='section-title'>La problemática</h2>
          <p className='quienesSomos'>
            En México, <strong>solo el 32 % del plástico </strong> se recicla
            adecuadamente. En municipios como{' '}
            <strong> Ixcaquixtla y Tepexi de Rodríguez, Puebla</strong>, se
            generan más de{' '}
            <strong> 1,200 toneladas de residuos plásticos al año</strong>, sin
            infraestructura suficiente para su tratamiento. Estos residuos suelen
            en basureros clandestinos o son incinerados, liberando sustancias tóxicas
            como el <strong>estireno</strong>, que afectan gravemente la salud.
            Además, gran parte de la población local pertenece al nivel
            socioeconómico D, con ingresos limitados que dificultan el acceso a
            productos ecológicos, lo que agrava los riesgos sanitarios y
            ambientales.
          </p>
        </section>

        
        <section className='valores' data-aos='flip-down'>
  <h2 className='section-title'>Nuestra propuesta de valor</h2>
  <p className='quienesSomos'>
    BioPint transforma esta problemática en una <strong>oportunidad de impacto positivo</strong>, creando una pintura ecológica con:
  </p>

  <ul>
    <li><strong>Material reciclado (PET y unicel)</strong></li>
    <li><strong>Precio accesible</strong></li>
    <li><strong>Resistencia a la humedad</strong></li>
    <li><strong>Libre de compuestos orgánicos volátiles (COVs)</strong></li>
  </ul>

  <p>
    Cada kilogramo de PET que utilizamos evita la emisión de <strong>1.5 kg de CO₂.</strong>
  </p>

  <p>
    A diferencia de pinturas convencionales derivadas del petróleo, BioPint ofrece <strong>protección, estética y sostenibilidad en un solo producto.</strong>
  </p>
</section>

<section className='valores' data-aos='flip-down'>
  <h2 className='section-title'>¿Cómo funciona?</h2>
  <p  >
    Nuestra pintura se encuentra en fase de <strong>prototipo funcional</strong> y ha sido probada con resultados positivos en:
  </p>
  <ul>
    <li><strong>Adherencia</strong></li>
    <li><strong>Resistencia al agua</strong></li>
    <li><strong>Acabado estético</strong></li>
  </ul>
  <p>
    Es útil para interiores y exteriores, y está diseñada para escalar su producción, ya que tanto el PET como el unicel reciclado están disponibles a bajo costo.
  </p>
  <p>
    Actualmente trabajamos en:
  </p>
  <ul>
    <li><strong>Cumplimiento de normativas (SEMARNAT, NOM-003-SSA1-2006)</strong></li>
    <li><strong>Control de calidad</strong></li>
    <li><strong>Alianzas con centros de investigación</strong></li>
  </ul>
</section>


        <section className='mision-vision'>
          <div data-aos='flip-left' className='contenedorObjetivos'>
            <h2 className='section-title'>Misión</h2>
            <p>
              Desarrollamos pinturas innovadoras a partir de PET reciclado,
              ofreciendo recubrimientos de alto impacto. Desde Puebla,
              trabajamos para reducir residuos y contribuir a un entorno más
              sostenible.
            </p>
          </div>
          <div data-aos='flip-right' className='contenedorObjetivos' >
            <h2 className='section-title'>Visión</h2>
            <p>
              Posicionar a BioPint como líder en la transformación del PET en
              pinturas de alto impacto en Puebla, promoviendo el reciclaje, la
              sostenibilidad y la educación ambiental.
            </p>
          </div>
        </section>

        <section className='objetivo  contenedorObjetivos' data-aos='flip-down'>
          <h2 className='section-title'>Objetivo</h2>
          <p className='objetivo'>
            Nuestro objetivo es ofrecer una <strong>alternativa sustentable</strong> en la
            industria de recubrimientos, promoviendo la economía circular y la
            <strong>reducción de residuos plásticos.</strong>
          </p>
        </section>
        
      </main>

      <WhatsappButton />
    </>
  );
}

export default Home;
