import { useParams, Link } from "react-router-dom";
import { celulares } from "../data/data";

export default function Productos() {
  const { idMarca } = useParams();
  const lista = idMarca
    ? celulares.filter(c => c.marcaId === Number(idMarca))
    : celulares;

  return (
    <>
      <h2>Listado de Celulares</h2>
      <ul>
        {lista.map((cel) => (
          <li key={cel.id}>
            <Link to={`/productos/${cel.id}`}>{cel.nombre}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
