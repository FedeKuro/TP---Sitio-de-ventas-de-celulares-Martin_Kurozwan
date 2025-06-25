import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">La mejor tecnología en tus manos</h1>
          <p className="hero-description">
          Explorá nuestros últimos modelos de celulares
          </p>
          
          <Link to="/productos" className="cta-button">
            Ver productos
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" 
            alt="Colección de smartphones modernos" 
          />
        </div>
      </section>
      <section className="featured-section">
        <h2 className="section-title">Productos destacados</h2>
        <div className="featured-grid">
          <article className="featured-card">
            <img 
              src="https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="iPhone 14 Pro" 
              className="featured-image" 
            />
            <div className="featured-content">
              <h3 className="featured-title">iPhone 14 Pro</h3>
              <p className="featured-price">$1299</p>
              <Link to="/producto/1" className="featured-button">Ver detalles</Link>
            </div>
          </article>
          <article className="featured-card">
            <img 
              src="https://images.unsplash.com/photo-1678911820864-e5f41b4cef1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Samsung Galaxy S23 Ultra" 
              className="featured-image" 
            />
            <div className="featured-content">
              <h3 className="featured-title">Samsung Galaxy S23 Ultra</h3>
              <p className="featured-price">$1199</p>
              <Link to="/producto/2" className="featured-button">Ver detalles</Link>
            </div>
          </article>
          <article className="featured-card">
            <img 
              src="https://images.unsplash.com/photo-1667202334456-d99c9ff86c49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Google Pixel 7 Pro" 
              className="featured-image" 
            />
            <div className="featured-content">
              <h3 className="featured-title">Google Pixel 7 Pro</h3>
              <p className="featured-price">$899</p>
              <Link to="/producto/3" className="featured-button">Ver detalles</Link>
            </div>
          </article>
        </div>
      </section>
      <section className="benefits-section">
        <h2 className="section-title">¿Por qué elegirnos?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">🚚</div>
            <h3 className="benefit-title">Envío gratuito</h3>
            <p className="benefit-description">En todas tus compras superiores a $500</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🔒</div>
            <h3 className="benefit-title">Pago seguro</h3>
            <p className="benefit-description">Tus datos siempre protegidos</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🔄</div>
            <h3 className="benefit-title">Garantía</h3>
            <p className="benefit-description">1 año en todos nuestros productos</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">💬</div>
            <h3 className="benefit-title">Soporte 24/7</h3>
            <p className="benefit-description">Estamos aquí para ayudarte</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;