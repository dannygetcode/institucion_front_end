import NavBar from "../components/NavBar";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import Swal from 'sweetalert2';

function Contacto() {
    const [mensaje, setMensaje] = useState({
        nombre: '',
        email: '',
        asunto: '',
        contenido: ''
    });

    
const handleEnviarMensaje = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch('http://172.210.137.100:8080/api/mensajes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mensaje),
        });

        if (!res.ok) throw new Error('Error al enviar mensaje');

        Swal.fire({
            title: 'Enviado',
            text: 'Tu mensaje ha sido enviado exitosamente.',
            icon: 'success',
            confirmButtonColor: '#10b981',
        });

        setMensaje({ nombre: '', email: '', asunto: '', contenido: '' });
    } catch (err) {
        console.error(err);
        Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al enviar el mensaje.',
            icon: 'error',
        });
    }
};
    return (
        <>

            <NavBar />
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Contáctanos</h1>
                    <p>Estamos aquí para ayudarte. ¡Escríbenos o visítanos!</p>
                </div>
            </section>
            <section className="contacto-section">
                <div className="contacto-grid">
                    <div className="contacto-item">
                        <FaMapMarkerAlt className="icono" />
                        <h3>Nuestra Dirección</h3>
                        <p>Calle 123, Bogotá, Colombia</p>
                    </div>
                    <div className="contacto-item">
                        <FaPhoneAlt className="icono" />
                        <h3>Teléfono</h3>
                        <p>+57 1 234 5678</p>
                    </div>
                    <div className="contacto-item">
                        <FaEnvelope className="icono" />
                        <h3>Email</h3>
                        <p>info@institutohorizonte.edu.co</p>
                    </div>
                </div>
            </section>
            <section className="form-mapa-section">
                <div className="form-mapa-container">
                    {/* Formulario */}
                    <div className="contact-form">
                        <h2>Envíanos un mensaje</h2>
                        <form onSubmit={handleEnviarMensaje}>
                            <input
                                type="text"
                                placeholder="Nombre"
                                value={mensaje.nombre}
                                onChange={(e) => setMensaje({ ...mensaje, nombre: e.target.value })}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={mensaje.email}
                                onChange={(e) => setMensaje({ ...mensaje, email: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Asunto"
                                value={mensaje.asunto}
                                onChange={(e) => setMensaje({ ...mensaje, asunto: e.target.value })}
                            />
                            <textarea
                                rows="5"
                                placeholder="Mensaje"
                                value={mensaje.contenido}
                                onChange={(e) => setMensaje({ ...mensaje, contenido: e.target.value })}
                                required
                            />
                            <button type="submit">Enviar Mensaje</button>
                        </form>

                    </div>

                    {/* Mapa */}
                    <div className="contact-map">
                        <h2>Encuéntranos aquí</h2>
                        <iframe
                            title="Google Maps Bogotá"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.748188954176!2d-74.09404228523823!3d4.656071143342548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9be1c62ac3ff%3A0x7353f3c0423d83a7!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1652044207380!5m2!1ses-419!2sco"
                            loading="lazy"
                            allowFullScreen=""
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
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

export default Contacto;