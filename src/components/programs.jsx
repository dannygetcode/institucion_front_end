import React, { useState } from 'react';


const programas = [
  {
    titulo: 'Preescolar',
    resumen: 'Desarrollo de habilidades cognitivas y socioemocionales.',
    detalles: {
      inicio: '15 de febrero de 2025',
      duracion: '2 años (4 semestres)',
      costo: 'Matrícula: $850.000; Semestre: $4.500.000',
      requisitos: [
        'Registro civil o documento de identidad',
        '2 fotos tipo documento',
        'Entrevista con el docente guía'
      ],
      linkPensum: '#'
    },
    imagen: '/img/preescolar.png'
  },
  {
    titulo: 'Educación Básica',
    resumen: 'Lectoescritura, matemáticas, ciencias naturales.',
    detalles: {
      inicio: '15 de febrero de 2025',
      duracion: '5 años (10 semestres)',
      costo: 'Matrícula: $900.000; Semestre: $5.000.000',
      requisitos: [
        'Documento de identidad',
        '3 fotos tipo documento',
        'Certificado de notas anteriores'
      ],
      linkPensum: '#'
    },
    imagen: '/img/educacion_basica.png'
  },
  {
    titulo: 'Educación Media',
    resumen: 'Orientación vocacional y preparación para la universidad.',
    detalles: {
      inicio: '15 de febrero de 2025',
      duracion: '2 años (4 semestres)',
      costo: 'Matrícula: $950.000; Semestre: $5.200.000',
      requisitos: [
        'Documento de identidad',
        'Resultados ICFES',
        'Entrevista con orientador vocacional'
      ],
      linkPensum: '#'
    },
    imagen: '/img/Educación Media (Bachillerato).png'
  }
];

function ProgramCards() {
  const [programaActivo, setProgramaActivo] = useState(null);

  return (
    <section className="programs-section">
      <h2 className="section-title">Nuestros Programas</h2>
      <div className="program-grid">
        {programas.map((prog, index) => (
          <div
            key={index}
            className="program-card"
            onClick={() => setProgramaActivo(index)}
          >
            <img src={prog.imagen} alt={prog.titulo} className="card-image" />
            <div className="card-body">
              <h3>{prog.titulo}</h3>
              <p>{prog.resumen}</p>
            </div>
          </div>
        ))}
      </div>

      {programaActivo !== null && (
        <div className="modal-backdrop" onClick={() => setProgramaActivo(null)}>
          <div
            className="program-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setProgramaActivo(null)}>
              &times;
            </button>
            <h2>{programas[programaActivo].titulo}</h2>
            <ul>
              <li><strong>Fecha de Inicio:</strong> {programas[programaActivo].detalles.inicio}</li>
              <li><strong>Duración:</strong> {programas[programaActivo].detalles.duracion}</li>
              <li><strong>Costo:</strong> {programas[programaActivo].detalles.costo}</li>
              <li><strong>Requisitos:</strong>
                <ul>
                  {programas[programaActivo].detalles.requisitos.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <a
              href={programas[programaActivo].detalles.linkPensum}
              className="btn-pensum"
            >
              Ver Pensum
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProgramCards;
