  // src/components/Navbar.jsx
  import { Link } from "react-router-dom";
  import { marcas } from "../data/data";
  import { useState } from "react";
  import "./navbar.css";

  function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
      <nav className="navbar">
        <Link to="/" className="navbar-logo">Celulares MarKu</Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/quienes-somos">Quienes Somos</Link>

          <div
    className="dropdown"
    onMouseEnter={() => setDropdownOpen(true)}
    onMouseLeave={() => setDropdownOpen(false)}
  >
    {/* ENVOLVÉ todo esto junto */}
    <div className="dropdown-wrapper">
      <span className="dropdown-label">
        Productos
        <svg
          className={`arrow-icon ${dropdownOpen ? "rotated" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>

      <div className={`dropdown-content ${dropdownOpen ? "visible" : ""}`}>
        <Link to="/productos">Ver todos</Link>
        {marcas.map((marca) => (
          <Link key={marca.id} to={`/productos/marca/${marca.id}`}>
            {marca.nombre}
          </Link>
        ))}
      </div>
    </div>
  </div>


          <Link to="/contacto">Contacto</Link>
        </div>
      </nav>
    );
  }

  export default Navbar;


