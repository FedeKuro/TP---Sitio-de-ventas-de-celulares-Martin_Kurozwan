import React from 'react';
import './QuienesSomos.css';
const QuienesSomos = () => {
  return (
    <div className="quienes-somos-page">
      <section className="about-header">
        <h1 className="page-title">Quiénes Somos</h1>
        <p className="page-subtitle">
          Conoce más sobre MóvilStore y nuestra pasión por la tecnología móvil
        </p>
      </section>
      <section className="about-content">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
            alt="Equipo de MóvilStore" 
          />
        </div>
        <div className="about-text">
          <h2 className="about-subtitle">Nuestra Historia</h2>
          <p>
            Fundada en 2015, MóvilStore nació con la visión de ofrecer a nuestros clientes la mejor experiencia en la compra de dispositivos móviles. Lo que comenzó como una pequeña tienda local se ha convertido en uno de los referentes del sector, gracias a nuestra dedicación y compromiso con la calidad y el servicio al cliente.
          </p>
          <p>
            A lo largo de estos años, hemos crecido constantemente, ampliando nuestra oferta de productos y servicios para satisfacer las necesidades cambiantes de nuestros clientes. Hoy, contamos con un equipo de expertos apasionados por la tecnología, listos para asesorarte y ayudarte a encontrar el dispositivo perfecto para ti.
          </p>
        </div>
      </section>
      <section className="values-section">
        <h2 className="section-title">Nuestros Valores</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3 className="value-title">Excelencia</h3>
            <p className="value-description">
              Nos esforzamos por ofrecer productos y servicios de la más alta calidad, superando las expectativas de nuestros clientes en cada interacción.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3 className="value-title">Integridad</h3>
            <p className="value-description">
              Actuamos con honestidad y transparencia en todos nuestros procesos, construyendo relaciones de confianza con nuestros clientes y proveedores.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3 className="value-title">Innovación</h3>
            <p className="value-description">
              Estamos constantemente buscando nuevas formas de mejorar nuestros productos, servicios y procesos para mantenernos a la vanguardia del sector.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">♻️</div>
            <h3 className="value-title">Sostenibilidad</h3>
            <p className="value-description">
              Nos comprometemos con prácticas comerciales responsables que minimicen nuestro impacto ambiental y contribuyan al bienestar de la sociedad.
            </p>
          </div>
        </div>
      </section>
      <section className="team-section">
        <h2 className="section-title">Nuestro Equipo</h2>
        <div className="team-grid">
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Carlos Rodríguez" 
              className="team-image" 
            />
            <h3 className="team-name">Carlos Rodríguez</h3>
            <p className="team-role">Fundador y CEO</p>
          </div>
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
              alt="Ana Martínez" 
              className="team-image" 
            />
            <h3 className="team-name">Ana Martínez</h3>
            <p className="team-role">Directora de Operaciones</p>
          </div>
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Miguel López" 
              className="team-image" 
            />
            <h3 className="team-name">Miguel López</h3>
            <p className="team-role">Jefe de Tecnología</p>
          </div>
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" 
              alt="Laura Sánchez" 
              className="team-image" 
            />
            <h3 className="team-name">Laura Sánchez</h3>
            <p className="team-role">Directora de Marketing</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default QuienesSomos;