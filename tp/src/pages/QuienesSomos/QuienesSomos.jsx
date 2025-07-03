import React from 'react';
import './QuienesSomos.css';
const QuienesSomos = () => {
  return (
    <div className="quienes-somos-page">
      <section className="about-header">
        <h1 className="page-title">Quiénes Somos</h1>
        <p className="page-subtitle">
          Conoce más sobre nuestra dupla programadora y nuestra pasión por la tecnología.
        </p>
      </section>
      <section className="about-content">
        <div className="about-image">   
          <img 
            src="https://image.spreadshirtmedia.com/image-server/v1/compositions/T210A2PA4301PT17X41Y48D1035572788W25000H20833/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/in-case-of-fire-git-commit-git-push-git-out-mens-t-shirt.jpg" 
            alt="Equipo de MarKu" 
          />
        </div>
        <div className="about-text">
          <h2 className="about-subtitle">Nuestra Historia</h2>
          <p>
            Fundada en 2023 por dos amigos, Fede Kurozwan y André Martin, MarKu surgió de nuestra pasión compartida por los celulares y la tecnología. Nos conocimos en tercer año y, desde entonces, descubrimos una conexión única para trabajar en equipo. Esa química nos llevó a emprender juntos con el objetivo de ofrecer una experiencia distinta, cercana y de calidad para todos nuestros clientes.
          </p>
          <p>
            A lo largo de este camino, crecimos con la misma pasión con la que se vive el fútbol en La Bombonera. En MarKu llevamos la tecnología en la sangre como los bosteros llevan los colores. Cada celular que vendemos lo tratamos como si fuera una final: con compromiso, garra y corazón. Nuestro equipo no solo sabe de móviles, también entiende de aguante y de estar siempre para vos, en las buenas y en las malas.
          </p>
        </div>
      </section>
      <section className="values-section">
  <h2 className="section-title">Nuestros Valores</h2>
  <div className="values-grid">
    <div className="value-card">
      <div className="value-icon">🧱</div>
      <h3 className="value-title">Programación Orientada a Objetos</h3>
      <p className="value-description">
        Creemos en la reutilización, la organización y la claridad del código. Como en la POO, cada parte de MarKu tiene una responsabilidad definida y se comunica con eficiencia.
      </p>
    </div>
    <div className="value-card">
      <div className="value-icon">📊</div>
      <h3 className="value-title">Diagrama Nassi-Schneiderman</h3>
      <p className="value-description">
        Nuestra forma de trabajar es estructurada, visual y lógica. Nos gusta planificar bien cada paso antes de escribir una sola línea de código... o de vender un celular.
      </p>
    </div>
    <div className="value-card">
      <div className="value-icon">🔁</div>
      <h3 className="value-title">Lógica Booleana Simplificada</h3>
      <p className="value-description">
        Eliminamos lo innecesario. Simplificamos problemas complejos. En MarKu aplicamos la lógica (literal) para tomar decisiones más claras y eficientes.
      </p>
    </div>
    <div className="value-card">
      <div className="value-icon">🌐</div>
      <h3 className="value-title">Protocolo OSI</h3>
      <p className="value-description">
        Como en las redes, creemos en las capas bien definidas. Comunicación clara, procesos ordenados y todo funcionando en conjunto para que la experiencia del cliente sea impecable.
      </p>
    </div>
  </div>
</section>

      <section className="team-section">
        <h2 className="section-title">Nuestro Equipo</h2>
        <div className="team-grid">
          <div className="team-member">
            <img 
              src="https://i.postimg.cc/4d1gtBwh/image.png" 
              alt="André Martin" 
              className="team-image" 
            />
            <h3 className="team-name">André Martin</h3>
            <p className="team-role">Principalmente backend, scrum master</p>
          </div>
          <div className="team-member">
            <img 
              src="https://i.postimg.cc/d1Rq6qQ3/90d2d954-0851-4ee2-9627-2443891c7424.jpg" 
              alt="Fede Kurozwan" 
              className="team-image" 
            />
            <h3 className="team-name">Fede kuro</h3>
            <p className="team-role">Alma diseñadora, y un gran corazón</p>
          </div>          
        </div>
      </section>
    </div>
  );
};
export default QuienesSomos;