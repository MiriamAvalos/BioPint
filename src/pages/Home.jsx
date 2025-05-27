import React from 'react';
import WhatsappButton from '../components/WhatsappButton';
import '../pages/Home.css';

function Home() {
  return (
    <>
    <main className="home-container">
      <section className="intro">
        <h1 className="title">Bienvenidos a BioPint</h1>
        <p className="subtitle">
          Somos una empresa especializada en la fabricación y comercialización 
          de pinturas ecológicas a base de PET reciclado.
        </p>
      </section>

      <section className="valores">
        <h2 className="section-title">Valores</h2>
        <p>
          En BioPint promovemos la sustentabilidad con impacto, el trabajo en equipo, 
          la transparencia y honestidad en cada uno de nuestros procesos. Mantenemos 
          cercanía con el cliente para ofrecer soluciones personalizadas y nos enfocamos 
          en la mejora continua para optimizar productos y servicios.
        </p>
      </section>

      <section className="mision-vision">
        <div>
          <h2 className="section-title">Misión</h2>
          <p>
            Desarrollamos pinturas innovadoras a partir de PET reciclado, ofreciendo 
            recubrimientos de alto impacto. Desde Puebla, trabajamos para reducir residuos 
            y contribuir a un entorno más sostenible.
          </p>
        </div>
        <div>
          <h2 className="section-title">Visión</h2>
          <p>
            Posicionar a BioPint como líder en la transformación del PET en pinturas de alto impacto 
            en Puebla, promoviendo el reciclaje, la sostenibilidad y la educación ambiental.
          </p>
        </div>
      </section>

      <section className="objetivo">
        <h2 className="section-title">Objetivo</h2>
        <p>
          Nuestra objetivo es ofrecer una alternativa sustentable en la industria de recubrimientos, 
          promoviendo la economía circular y la reducción de residuos plásticos.
        </p>
      </section>
    </main>
              <WhatsappButton />
                </>
  
  );
}

export default Home;
