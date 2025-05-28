import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import '../components/SocialAndAddress.css';

function SocialAndAddress() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://www.facebook.com/profile.php?id=61574091243583" target="_blank" rel="noopener noreferrer" className="text-white mx-3 social-icon">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/biopint5/" target="_blank" rel="noopener noreferrer" className="text-white mx-3 social-icon">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.youtube.com/@Biopint" target="_blank" rel="noopener noreferrer" className="text-white mx-3 social-icon">
            <FaYoutube size={24} />
          </a>
             <a href="https://www.tiktok.com/@biopint" target="_blank" rel="noopener noreferrer" className="text-white mx-3 social-icon">
            <FaTiktok size={24} />
          </a>
        </div>
        <p className="mb-0">Dirección: Calle Ficticia 123, Ciudad, País</p>
      </div>
    </footer>
  );
}

export default SocialAndAddress;
