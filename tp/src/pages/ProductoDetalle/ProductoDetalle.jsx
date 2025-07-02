import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { celulares, marcas } from '../../data/data';
import './ProductoDetalle.css';
const ProductoDetalle = () => {
  const { idCelular } = useParams();
  const [producto, setProducto] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (idCelular) {
      const id = parseInt(idCelular);
      const foundProducto = celulares.find(celular => celular.id === id);
      if (foundProducto) {
        setProducto(foundProducto);
        setSelectedImage(foundProducto.fotos[0]);
      }
      setLoading(false);
    }
  }, [idCelular]);
  if (loading) {
    return (
      <div className="loading-container">
        <p>Cargando producto...</p>
      </div>
    );
  }
  if (!producto) {
    return (
      <div className="not-found-container">
        <h2>Producto no encontrado</h2>
        <p>Lo sentimos, el producto que buscas no existe o ha sido removido.</p>
        <Link to="/productos" className="back-button">
          Volver a productos
        </Link>
      </div>
    );
  }
  const marca = marcas.find(m => m.id === producto.marcaId);
  return (
    <div className="producto-detalle-page">
      <div className="breadcrumb">
        <Link to="/">Inicio</Link> &gt; 
        <Link to="/productos"> Productos</Link> &gt; 
        <span>{producto.nombre}</span>
      </div>
      <div className="producto-detalle-container">
        <div className="producto-gallery">
          <div className="main-image-container">
            <img 
              src={selectedImage} 
              alt={producto.nombre} 
              className="main-image" 
            />
          </div>
          
        </div>
        <div className="producto-info">
          <h1 className="producto-nombre">{producto.nombre}</h1>
          <div className="producto-meta">
            <span className="producto-marca">Marca: {marca?.nombre}</span>
            <span className="producto-id">ID: {producto.id}</span>
          </div>
          <div className="producto-precio-container">
            <span className="producto-precio">${producto.precio}</span>
            <span className="producto-disponibilidad">En stock</span>
          </div>
          <div className="producto-descripcion">
            <h2>Descripción</h2>
            <p>{producto.descripcion}</p>
          </div>
          <div className="producto-actions">
            <button className="add-to-cart-button">
              Añadir al carrito
            </button>
            <button className="buy-now-button">
              Comprar ahora
            </button>
          </div>
          <div className="producto-garantia">
            <div className="garantia-item">
              <span className="garantia-icon"></span>
              <span className="garantia-text">Envío gratuito en pedidos superiores a $500</span>
            </div>
            <div className="garantia-item">
              <span className="garantia-icon"></span>
              <span className="garantia-text">Garantía de 1 año del fabricante</span>
            </div>
            <div className="garantia-item">
              <span className="garantia-icon"></span>
              <span className="garantia-text">Pago seguro con múltiples opciones</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductoDetalle;