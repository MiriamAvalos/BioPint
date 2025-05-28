import React, { useState } from 'react'; 
 
import WhatsappButton from '../components/WhatsappButton';
import '../pages/Contact.css';
const Contact = () => {
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear link mailto con datos del formulario
    const mailtoLink = `mailto:lechugasfrescasyverdes@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(
      'Correo del remitente: ' + email
    )}`;

    window.location.href = mailtoLink;

    // Opcional: limpiar campos
    setEmail('');
    setAsunto('');
  };

  return (
     <>  
    <section className='valores' data-aos='fade-up'>
      <h2 className='contact-tittle'>Contacto</h2>

      <p className='quienesSomos'>
        ¿Quieres escribirnos directamente? Usa el formulario o contáctanos en:
      </p>

      <p className='quienesSomos'>
        ✉️ <strong>biopint5@gmail.com</strong>
      </p>

      <form onSubmit={handleSubmit} className='contact-form'>
        <label>
          Tu correo electrónico:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='tucorreo@ejemplo.com'
            required
          />
        </label>

        <label>
          Asunto:
          <input
            type='text'
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            placeholder='Asunto del mensaje'
            required
          />
        </label>

        <button type='submit' className='btn-enviar'>
          Enviar
        </button>
      </form>

      <div className='map-container' style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h3>Encuéntranos aquí</h3>
        <iframe
          title='Mapa BioPint Puebla'
          src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3784.5469306194495!2d-97.83560082480983!3d18.458869182622774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI3JzMxLjkiTiA5N8KwNDknNTguOSJX!5e0!3m2!1ses-419!2smx!4v1748415107883!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen='
          width='100%'
          height='300'
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </section>
    <WhatsappButton /></>
 
  );
};

export default Contact;
 