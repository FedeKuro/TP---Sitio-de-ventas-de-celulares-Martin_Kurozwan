import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero principal */}
      <section className="hero">
        <div className="hero">
          <h1 className="hero">Descubre la última tecnología en móviles</h1>
          <p className="hero">
            En MarKu encontrarás los mejores celulares del mercado con
            ofertas exclusivas y atención personalizada.
          </p>
          <Link to="/productos" className="btn-hero">
            Ver productos
          </Link>
        </div>
        <div className="unsplash">
          <img
            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80"
            alt="Colección de smartphones modernos"
          />
        </div>
      </section>

      {/* Productos destacados */}
      <section className="destacados">
        <h2 className="section-title">Productos destacados</h2>
        <div className="destacados-scroll">
          <article className="destacado-card">
            <img
              src="https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?auto=format&fit=crop&w=800&q=80"
              alt="iPhone 14 Pro"
              className="destacado-imagen"
            />
            <h3 className="destacado-titulo">iPhone 14 Pro</h3>
            <p className="destacado-precio">$1299</p>
            <Link to="/producto/1" className="btn-hero">Ver detalles</Link>
          </article>

          <article className="destacado-card">
            <img
              src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Samsung Galaxy S23"
              className="destacado-imagen"
            />
            <h3 className="destacado-titulo">Samsung Galaxy S23</h3>
            <p className="destacado-precio">$999</p>
            <Link to="/producto/2" className="btn-hero">Ver detalles</Link>
          </article>

          <article className="destacado-card">
            <img
              src="https://images.unsplash.com/photo-1702451462735-3f0ba7679641?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Xiaomi 13 Pro"
              className="destacado-imagen"
            />
            <h3 className="destacado-titulo">Xiaomi 13 Pro</h3>
            <p className="destacado-precio">$899</p>
            <Link to="/producto/3" className="btn-hero">Ver detalles</Link>
          </article>
        </div>
      </section>

      {/* Beneficios */}
      <section className="beneficios">
        <h2 className="section-title">¿Por qué elegirnos?</h2>
        <div className="beneficios-grid">
          <div className="beneficio-card">
            <div className="beneficio-icon"><img src="/envio.png" alt="envío" /></div>
            <h3 className="beneficio-title">Envío gratuito</h3>
            <p className="beneficio-desc">En todas tus compras superiores a $500</p>
          </div>
          <div className="beneficio-card">
            <div className="beneficio-icon"><img src="/tarjeta.png" alt="tarjeta" /></div>
            <h3 className="beneficio-title">Pago seguro</h3>
            <p className="beneficio-desc">Tus datos siempre protegidos</p>
          </div>
          <div className="beneficio-card">
            <div className="beneficio-icon"><img src="/garantia.png" alt="garantía" /></div>
            <h3 className="beneficio-title">Garantía</h3>
            <p className="beneficio-desc">1 año en todos nuestros productos</p>
          </div>
          <div className="beneficio-card">
            <div className="beneficio-icon"><img src="/soporte.png" alt="soporte" /></div>
            <h3 className="beneficio-title">Soporte 24/7</h3>
            <p className="beneficio-desc">Estamos aquí para ayudarte</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
