import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { celulares, marcas } from '../../data';
import './Productos.css';
const Productos = () => {
  const { idMarca } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeMarca, setActiveMarca] = useState(null);
  useEffect(() => {
    if (idMarca) {
      const marcaId = parseInt(idMarca);
      setFilteredProducts(celulares.filter(celular => celular.marcaId === marcaId));
      setActiveMarca(marcaId);
    } else {
      setFilteredProducts(celulares);
      setActiveMarca(null);
    }
  }, [idMarca]);
  return (
    <div className="productos-page">
      <section className="productos-header">
        <h1 className="page-title">Nuestros Productos</h1>
        <p className="page-subtitle">
          Descubre nuestra amplia selección de celulares de las mejores marcas
        </p>
      </section>
      <section className="filter-section">
        <h2 className="filter-title">Filtrar por marca</h2>
        <div className="brand-filters">
          <Link 
            to="/productos" 
            className={`brand-filter ${activeMarca === null ? 'active' : ''}`}
          >
            Todos
          </Link>
          {marcas.map(marca => (
            <Link 
              key={marca.id}
              to={`/productos/marca/${marca.id}`}
              className={`brand-filter ${activeMarca === marca.id ? 'active' : ''}`}
            >
              {marca.nombre}
            </Link>
          ))}
        </div>
      </section>
      <section className="productos-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(celular => (
            <article key={celular.id} className="producto-card">
              <div className="producto-image-container">
                <img 
                  src={celular.fotos[0]} 
                  alt={celular.nombre} 
                  className="producto-image" 
                />
              </div>
              <div className="producto-content">
                <h3 className="producto-title">{celular.nombre}</h3>
                <p className="producto-price">${celular.precio}</p>
                <p className="producto-brand">
                  {marcas.find(marca => marca.id === celular.marcaId)?.nombre}
                </p>
                <Link to={`/producto/${celular.id}`} className="producto-button">
                  Ver más
                </Link>
              </div>
            </article>
          ))
        ) : (
          <div className="no-products">
            <p>No se encontraron productos para esta marca.</p>
            <Link to="/productos" className="back-link">
              Ver todos los productos
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};
export default Productos; 