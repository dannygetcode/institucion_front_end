import React, { useState } from 'react';


const programas = [
  {
    id: 1,
    titulo: 'Inglés Intensivo',
    imagen: '/img/english.png',
    inicio: '15 de marzo de 2025',
    duracion: '6 meses intensivos',
    costo: '$2.200.000',
  },
  {
    id: 2,
    titulo: 'Robótica y Programación',
    imagen: '/img/programacion.png',
    inicio: '1 de abril de 2025',
    duracion: '6 meses intensivos',
    costo: '$1.350.000',
  },
  {
    id: 3,
    titulo: 'Emprendimiento Juvenil',
    imagen: '/img/emprendimiento_juvenil.png',
    inicio: '10 de mayo de 2025',
    duracion: '4 meses intensivos',
    costo: '$1.800.000',
  },
  {
    id: 4,
    titulo: 'Clubes Escolares',
    imagen: '/img/clubres.png',
    inicio: '16 de Agosto de 2025',
    duracion: '12 meses intensivos',
    costo: '$600.000 / trimestre',
  },
];

function ComplementaryCourses() {
  const [activo, setActivo] = useState(null);

  const toggleInfo = (id) => {
    setActivo(activo === id ? null : id);
  };

  return (
    <section className="programasSection">
  <h2>Programas Complementarios</h2>
  <div className="programasContainer">
    {programas.map((programa) => (
      <div key={programa.id} className="card">
        <img src={programa.imagen} alt={programa.titulo} className="imagen" />
        <h3>{programa.titulo}</h3>
        <button className="btnInfo" onClick={() => toggleInfo(programa.id)}>Más info</button>

        {activo === programa.id && programa.inicio && (
          <div className="info">
            <p><strong>Fecha Inicio:</strong> {programa.inicio}</p>
            <p><strong>Duración:</strong> {programa.duracion}</p>
            <p><strong>Costo (COP):</strong> {programa.costo}</p>
            <button className="btnVer">Ver Programa</button>
          </div>
        )}
      </div>
    ))}
  </div>
</section>

  );
}

export default ComplementaryCourses;