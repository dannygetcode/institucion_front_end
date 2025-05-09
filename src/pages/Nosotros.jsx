import NavBar from "../components/NavBar";

const eventos = [
    {
        año: "2001",
        titulo: "Fundación",
        descripcion:
            "Se estableció el Instituto Horizonte con la visión de formar jóvenes íntegros, críticos y comprometidos con el desarrollo de su comunidad...",
    },
    {
        año: "2008",
        titulo: "Primera Acreditación",
        descripcion:
            "Recibe su primera acreditación oficial por parte del Ministerio de Educación Nacional, destacando programas técnicos...",
    },
    {
        año: "2015",
        titulo: "Expansión",
        descripcion:
            "Se abren dos nuevas sedes y se firman convenios internacionales con instituciones en Canadá y España...",
    },
    {
        año: "2023",
        titulo: "Innovación",
        descripcion:
            "Se implementa un modelo híbrido, se inauguran laboratorios STEAM con kits de robótica, impresoras 3D y estaciones de programación básica...",
    },
];


function Nosotros() {
    return (
        <>
            <NavBar />
            <section className="nosotros-hero">
                <video autoPlay loop muted playsInline className="nosotros-video">
                    <source src="/img/video.mp4" type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>
                <div className="overlay">
                    <h1>Quiénes Somos</h1>
                    <p>Formando profesionales del futuro con integridad e innovación</p>
                </div>
            </section>
            <section className="historia-section">
                <h2 className="historia-titulo">Nuestra Historia</h2>
                <div className="timeline">
                    {eventos.map((evento, index) => (
                        <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
                            <div className="timeline-content">
                                <h3>{evento.año} - {evento.titulo}</h3>
                                <p>{evento.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-16 bg-gray-50">
                <div className="card-grid-nosotros">
                    {/* Tarjeta Misión */}
                    <div className="card-nosotros">
                        <h3>Misión</h3>
                        <p>
                            Impulsar el desarrollo integral de nuestros estudiantes a través de una formación técnica, ética e innovadora,
                            orientada al futuro y al servicio de la sociedad.
                        </p>
                    </div>

                    {/* Tarjeta Visión */}
                    <div className="card-nosotros">
                        <h3>Visión</h3>
                        <p>
                            Ser referente de excelencia educativa y tecnológica en la región, promoviendo el conocimiento, la integridad y el liderazgo juvenil.
                        </p>
                    </div>

                    {/* Tarjeta Valores */}
                    <div className="card-nosotros">
                        <h3>Valores</h3>
                        <p>
                            Innovación, Conocimiento, Futuro, Integridad.
                        </p>
                    </div>
                </div>
            </section>
            <section className="equipo-section">
                <h2 className="equipo-title">Nuestro Equipo</h2>
                <div className="equipo-grid">
                    {/* Integrante 1 */}
                    <div className="equipo-card">
                        <img src="/img/rector.png" alt="Dr. Juan Pérez" className="equipo-img" />
                        <h3 className="equipo-nombre">Dr. Juan Pérez</h3>
                        <p className="equipo-cargo">Rector</p>
                    </div>

                    {/* Integrante 2 */}
                    <div className="equipo-card">
                        <img src="/img/coordinadora.png" alt="Ing. María Gómez" className="equipo-img" />
                        <h3 className="equipo-nombre">Ing. María Gómez</h3>
                        <p className="equipo-cargo">Coordinadora Académica</p>
                    </div>

                    {/* Integrante 3 */}
                    <div className="equipo-card">
                        <img src="/img/docente.png" alt="Lic. Carlos Ruiz" className="equipo-img" />
                        <h3 className="equipo-nombre">Lic. Carlos Ruiz</h3>
                        <p className="equipo-cargo">Profesor STEAM</p>
                    </div>
                </div>
            </section>
            <section className="instalaciones-section">
                <h2 className="instalaciones-title">Instalaciones</h2>
                <div className="instalaciones-grid">
                    <div className="instalacion-card">
                        <img src="/img/aula.png" alt="Aula" />
                        <div className="overlay">Aula</div>
                    </div>

                    <div className="instalacion-card">
                        <img src="/img/Laboratorio.png" alt="Laboratorio" />
                        <div className="overlay">Laboratorio</div>
                    </div>

                    <div className="instalacion-card">
                        <img src="/img/biblioteca.png" alt="Biblioteca" />
                        <div className="overlay">Biblioteca</div>
                    </div>
                </div>
            </section>
            <section className="acreditaciones-section">
                <h2 className="acreditaciones-title">Acreditaciones & Convenios</h2>
                <div className="acreditaciones-logos">
                    <img src="/img/logo_de_acreditacion.png" alt="Acreditación" />
                    <img src="/img/convenio.png" alt="Convenio" />
                    <img src="/img/socio.png" alt="Socio" />
                </div>
            </section>
            <section className="cta-section">
                <h2 className="cta-title">¿Quieres saber más?</h2>
                <p className="cta-subtitle">Solicita información o agenda tu visita hoy mismo.</p>
                <a href="/contacto" className="cta-button">Contáctanos</a>
            </section>
            <footer className="footer">
                <p>© 2025 Institución Educativa. Todos los derechos reservados.</p>
                <p>Contacto: info@institutohorizonte.edu.co</p>
            </footer>





        </>
    );
}

export default Nosotros;