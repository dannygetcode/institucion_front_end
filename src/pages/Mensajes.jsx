import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";

function Mensajes() {
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("//172.210.137.100:8080/api/mensajes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("No autorizado");
        return res.json();
      })
      .then((data) => {
        setMensajes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
        Swal.fire("Error", "No se pudieron cargar los mensajes", "error");
      });
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main style={{ marginLeft: '16rem', width: '100%' }}>
        <div style={{ minHeight: '100vh', background: '#f1f5f9', padding: '2rem' }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            background: 'rgba(255,255,255,0.85)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
          }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1e293b',
              borderBottom: '2px solid #cbd5e1',
              marginBottom: '1.5rem',
              paddingBottom: '0.5rem'
            }}>
              Mensajes Recibidos
            </h1>

            {loading ? (
              <p className="text-center text-slate-600">Cargando mensajes...</p>
            ) : (
              <table className="tabla-elegante">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Asunto</th>
                    <th>Mensaje</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {mensajes.map((msg) => (
                    <tr key={msg.id}>
                      <td>{msg.nombre}</td>
                      <td>{msg.email}</td>
                      <td>{msg.asunto}</td>
                      <td>{msg.contenido}</td>
                      <td>{new Date(msg.fechaEnvio).toLocaleString("es-CO", {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Mensajes;
