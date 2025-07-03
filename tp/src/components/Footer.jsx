import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">MarKu</h3>
          <p className="footer-description">
            Tu tienda de confianza para encontrar los mejores celulares del mercado con precios competitivos y atención personalizada.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Enlaces</h3>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Contacto</h3>
          <address className="footer-contact">
            <p>Yatay 210</p>
            <p>Teléfono: +54 9 11 1266-7890</p>
            <p>Email: info@MarKu.com</p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MarKu. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;