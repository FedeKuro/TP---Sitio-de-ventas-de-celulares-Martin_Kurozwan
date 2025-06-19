import "../pages/Contacto.css";

function Contacto() {
  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      <p>¿Tenés alguna duda o consulta? Estamos para ayudarte.</p>

      <div className="contacto-contenido">
        <form className="formulario-contacto">
          <label>
            Nombre
            <input type="text" placeholder="Tu nombre completo" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="tucorreo@example.com" required />
          </label>

          <label>
            Mensaje
            <textarea rows="5" placeholder="Escribí tu consulta..." required />
          </label>

          <button type="submit">Enviar mensaje</button>
        </form>

        <div className="info-contacto">
          <h2>También podés comunicarte por:</h2>
          <ul>
            <li>Teléfono: +54 9 11 1234-5678</li>
            <li>Email: soporte@celularesMarKu.com</li>
            <li>Dirección: Yatay 210, Buenos Aires</li>
          </ul>

          <h3>Horarios de atención</h3>
          <p>Lunes a Viernes de 9:00 a 18:00</p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
