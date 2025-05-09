import NavBar from "../components/NavBar";

function Home() {
  return (
    <>

      <NavBar />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenidos a Nuestra Institución</h1>
          <p>Formando futuros líderes con excelencia educativa.</p>
          <button>
            <a href="/nosotros" style={{ color: 'inherit', textDecoration: 'none' }}>
              Conócenos
            </a>
          </button>

        </div>
      </section>
      <section className="video-section">
        <div className="video-container">
          <div className="responsive-video">
            <iframe
              src="https://www.youtube.com/embed/xE_J7woW9ts"
              title="Video Institucional"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="mv-section">
        <div className="mv-container">
          <div className="mv-card mission">
            <h3>Misión</h3>
            <p>
              Formar integralmente a nuestros estudiantes, promoviendo valores humanos,
              pensamiento crítico y competencias académicas que les permitan construir su proyecto de vida.
              La Institución Educativa Horizonte busca brindar una educación de calidad, inclusiva y pertinente,
              orientada al desarrollo social, científico y cultural de nuestra comunidad.
            </p>
          </div>

          <div className="mv-card vision">
            <h3>Visión</h3>
            <p>
              Ser reconocidos en el año 2030 como una institución líder en innovación pedagógica,
              formación en valores y excelencia académica, que potencia las habilidades de sus estudiantes
              para enfrentar los desafíos del mundo contemporáneo, contribuyendo activamente al progreso de la sociedad.
            </p>
          </div>
        </div>
      </section>
      <section className="oferta-academica-section">
        <h2 className="section-title">Oferta Académica</h2>
        <div className="oferta-grid">

          {/* Preescolar */}
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <img src="/img/preescolar.png" alt="Preescolar" />
                <h3>Preescolar</h3>
              </div>
              <div className="flip-back">
                <h3>Preescolar</h3>
                <ul>
                  <li>Desarrollo de habilidades cognitivas y socioemocionales.</li>
                  <li>Aprendizaje a través del juego y la exploración.</li>
                  <li>Inmersión en lectura, escritura y pensamiento lógico.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Educación Básica */}
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <img src="/img/educacion_basica.png" alt="Básica" />
                <h3>Educación Básica</h3>
              </div>
              <div className="flip-back">
                <h3>Educación Básica</h3>
                <ul>
                  <li>Énfasis en lectoescritura, matemáticas y ciencias naturales.</li>
                  <li>Formación artística, deportiva y tecnológica.</li>
                  <li>Proyectos integradores, creatividad y resolución de problemas.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Educación Media */}
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <img src="/img/Educación Media (Bachillerato).png" alt="Media" />
                <h3>Educación Media</h3>
              </div>
              <div className="flip-back">
                <h3>Educación Media</h3>
                <ul>
                  <li>Orientación vocacional y preparación superior.</li>
                  <li>Énfasis en TIC, pensamiento crítico e investigación.</li>
                  <li>Proyectos pedagógicos transversales y ciudadanos.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="programas-section">
        <div className="programas-container">
          <h2 className="text-3xl font-bold text-slate-800">Programas Complementarios</h2>
          <div className="programas-grid">
            <div className="programa-card">
              <img src="/img/english.png" alt="Inglés intensivo" />
              <div className="contenido">
                Inglés intensivo (con certificación internacional C1).
              </div>
            </div>
            {/* otras tarjetas igual... */}
            <div className="programa-card">
              <img src="/img/programacion.png" alt="Inglés intensivo" />
              <div className="contenido">
                Inglés intensivo (con certificación internacional C1).
              </div>
            </div>
            <div className="programa-card">
              <img src="/img/emprendimiento_juvenil.png" alt="Inglés intensivo" />
              <div className="contenido">
                Inglés intensivo (con certificación internacional C1).
              </div>
            </div>
            <div className="programa-card">
              <img src="/img/clubres.png" alt="Inglés intensivo" />
              <div className="contenido">
                Inglés intensivo (con certificación internacional C1).
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="noticias-eventos-container">
        <h2 className="seccion-titulo">Noticias y Eventos</h2>
        <div className="grid-eventos-noticias">

          {/* Calendario de Google */}
          <div className="calendario-container">
            <h3 className="subtitulo">Calendario de Eventos</h3>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=tu_calendario%40gmail.com&ctz=America%2FBogota"
              style={{ border: 0 }}
              width="100%"
              height="450"
              frameBorder="0"
              scrolling="no"
              title="Calendario Google"
            ></iframe>
          </div>

          {/* Noticias */}
          <div className="noticias-container">
            <h3 className="subtitulo">Noticias</h3>

            {/* Noticia 1 */}
            <div className="noticia-card hover-effect">
              <img src="/img/top.png" alt="Noticia 1" />
              <div>
                <h4 className="titulo-noticia">Reconocimientos a estudiantes o docentes destacados.</h4>
                <p>Los mejores Estudiantes y docentes de este año</p>
              </div>
            </div>

            {/* Noticia 2 */}
            <div className="noticia-card hover-effect">
              <img src="/img/competencia.png" alt="Noticia 2" />
              <div>
                <h4 className="titulo-noticia">Ganadores en competencias.</h4>
                <p>Conoce los ganadores deportivos, académicos y culturales</p>
              </div>
            </div>

            {/* Noticia 3 */}
            <div className="noticia-card hover-effect">
              <img src="/img/convenios.png" alt="Noticia 3" />
              <div>
                <h4 className="titulo-noticia">Nuevos convenios con universidades y entidades.</h4>
                <p>Conoce los nuevos convenios de la institución educativa Horizonte</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="extras-utiles-container">
        <h2 className="seccion-titulo">Extras útiles</h2>
        <div className="grid-extras">

          {/* Card 1 */}
          <div className="card-extra">
            <h3>Calendario académico descargable</h3>
            <p>
              Descarga el calendario con las fechas importantes del año.{" "}
              <a href="/public/Calendario_Academico_Diseñado_Instituto_Horizonte_2025.pdf" download>(aquí)</a>
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-extra resaltado">
            <h3>Formularios de inscripción a eventos</h3>
            <p>
              Accede a los formularios para participar en eventos.{" "}
              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=JLadtEYlWUK_NhmcbpiAM2n9THmH0ylPlKuy2ykhwlJUNkxWVURCSjQ2SUc2RjFCR0ZNNUxFRjVLTC4u"
                target="_blank"
                rel="noreferrer"
              >
                (aquí)
              </a>
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-extra">
            <h3>Tips para Padres</h3>
            <p>
              Pequeñas recomendaciones semanales para apoyar a sus hijos en casa{" "}
              <a
                href="https://www.health.harvard.edu/blog/navigating-middle-school-is-tough-how-parents-can-help-202310042979"
                target="_blank"
                rel="noreferrer"
              >
                (aquí)
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>© 2025 Institución Educativa. Todos los derechos reservados.</p>
        <p>Contacto: info@institutohorizonte.edu.co</p>
      </footer>

    </>
  );
}

export default Home;
