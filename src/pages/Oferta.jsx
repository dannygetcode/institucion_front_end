import React from 'react';
import NavBar from '../components/NavBar';
import ProgramCards from '../components/programs';
import ComplementaryCourses from '../components/complementary';




function Oferta() {
    
  return (
    <>
      <NavBar />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Oferta Académica 2025</h1>
          <p>Formando profesionales del futuro con integridad, innovación y excelencia..</p>
        </div>
      </section>
      <ProgramCards />
      <ComplementaryCourses />
      <footer className="footer">
        <p>© 2025 Institución Educativa. Todos los derechos reservados.</p>
        <p>Contacto: info@institutohorizonte.edu.co</p>
      </footer>
      
    </>
  );
}

export default Oferta;
