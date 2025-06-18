import { Link } from "react-router-dom";
import { marcas } from "../data/data";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/quienes-somos">Quiénes Somos</Link> |{" "}
      <div style={{ display: "inline-block" }}>
        Productos ▼
        <ul>
          <li><Link to="/productos">Ver todos</Link></li>
          {marcas.map((marca) => (
            <li key={marca.id}>
              <Link to={`/productos/marca/${marca.id}`}>{marca.nombre}</Link>
            </li>
          ))}
        </ul>
      </div>
      {" | "}
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}
