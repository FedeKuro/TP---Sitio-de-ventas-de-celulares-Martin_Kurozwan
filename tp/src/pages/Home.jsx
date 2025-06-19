import { useEffect, useState } from "react";
import { celulares } from "../data/data";
import { Link } from "react-router-dom";
import "../pages/Home.css";



function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(celulares);
  }, []);
  console.log(productos);

  return (
    <div className="home-container">
      
      <section className="hero">
        <h1>La mejor tecnología en tus manos</h1>
        <p>Explorá nuestros últimos modelos de celulares</p>
        <Link to="/productos" className="btn-hero">Ver productos</Link>
      </section>

      
      <section className="destacados">
        <h2>Modelos destacados</h2>
        <div className="destacados-scroll">
          {productos.slice(0, 3).map((celular) => (
            <div key={celular.id} className="destacado-card">
              <img src={celular.fotos[0]} alt={celular.nombre} />
              <p>{celular.nombre}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="todos-productos">
        <h2>Todos los celulares</h2>
        <div className="grid-productos">
          {productos.map((celular) => (
            <Link to={`/producto/${celular.id}`} key={celular.id} className="card-producto">
              <img src={celular.fotos[0]} alt={celular.nombre} />
              <h3>{celular.nombre}</h3>
              <p>${celular.precio}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="beneficios">
        <div className="beneficio">
          <h3>🚚 Envío Gratis</h3>
          <p>En compras mayores a $50.000</p>
        </div>
        <div className="beneficio">
          <h3>📱 Última tecnología</h3>
          <p>Modelos recientes de Apple, Xiaomi, Samsung y más</p>
        </div>
        <div className="beneficio">
          <h3>💳 Pagá en cuotas</h3>
          <p>Hasta 12 cuotas sin interés</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
