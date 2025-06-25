import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import QuienesSomos from './pages/QuienesSomos/QuienesSomos';
import Productos from './pages/Productos/Productos';
import ProductoDetalle from './pages/ProductoDetalle/ProductoDetalle';
import Contacto from './pages/Contacto/Contacto';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/marca/:idMarca" element={<Productos />} />
          <Route path="/producto/:idCelular" element={<ProductoDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
