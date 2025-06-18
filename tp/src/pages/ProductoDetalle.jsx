import { useParams } from "react-router-dom";
import { celulares } from "../data/data";

export default function ProductoDetalle() {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === Number(idCelular));

  if (!celular) return <p>Celular no encontrado</p>;

  return (
    <>
      <h2>{celular.nombre}</h2>
      <p>{celular.descripcion}</p>
      <p>Precio: ${celular.precio}</p>
      <img src={celular.fotos[0]} alt={celular.nombre} width="300" />
    </>
  );
}
