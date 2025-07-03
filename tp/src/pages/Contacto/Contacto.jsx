import React, { useState } from 'react';
import './Contacto.css';
const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Email inválido';
    }
    if (!formData.mensaje.trim()) {
      errors.mensaje = 'El mensaje es requerido';
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      });
    }, 1000);
  };
  return (
    <div className="contacto-page">
      <section className="contacto-header">
        <h1 className="page-title">Contacto</h1>
        <p className="page-subtitle">
          Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
        </p>
      </section>
      <div className="contacto-container">
        <div className="contacto-info">
          <div className="info-card">
            <div className="info-icon"> <img src="/public/ubicacion.png" alt="" /></div>
            <h3 className="info-title">Dirección</h3>
            <p className="info-text">Yatay 210</p>
          </div>
          <div className="info-card">
            <div className="info-icon"><img src="/public/telefono.png" alt="" /></div>
            <h3 className="info-title">Teléfono</h3>
            <p className="info-text">+54 9 11 1266-7890</p>
          </div>
          <div className="info-card">
            <div className="info-icon"><img src="/public/mail.png" alt="" /></div>
            <h3 className="info-title">Email</h3>
            <p className="info-text">info@MarKu.com</p>
          </div>
          <div className="info-card">
            <div className="info-icon"><img src="/public/reloj.png" alt="" /></div>
            <h3 className="info-title">Horario</h3>
            <p className="info-text">Lunes a Viernes: 9:00 - 20:00</p>
            <p className="info-text">Sábados: 10:00 - 15:00</p>
          </div>
        </div>
        <div className="contacto-form-container">
          {formSubmitted ? (
            <div className="form-success">
              <h2>¡Mensaje enviado con éxito!</h2>
              <p>Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.</p>
              <button 
                className="new-message-button"
                onClick={() => setFormSubmitted(false)}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className="contacto-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre <span className="required">*</span></label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={formErrors.nombre ? 'error' : ''}
                />
                {formErrors.nombre && <span className="error-message">{formErrors.nombre}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="asunto">Asunto</label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje <span className="required">*</span></label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className={formErrors.mensaje ? 'error' : ''}
                ></textarea>
                {formErrors.mensaje && <span className="error-message">{formErrors.mensaje}</span>}
              </div>
              <button type="submit" className="submit-button">
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    
    </div>
  );
};
export default Contacto;