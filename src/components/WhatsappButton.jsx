import React from 'react';
import '../components/WhatsappButton.css';
import whatsappImg from '../assets/images/whatsApp_.png';

const WhatsappButton = () => {
  const phoneNumber = '+5212241091176'; // Reemplaza con tu número real

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className='whatsapp-container'>
      <img
        className='whatsapp-icon'
        src={whatsappImg}
        alt='whatsapp-icon'
        onClick={openWhatsApp}
      />
    </div>
  );
};

export default WhatsappButton;
