import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function AdminLayout() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="admin-layout">
      <Sidebar />

      <main className="main-content">
        <section style={{ maxWidth: "800px", margin: "0 auto", background: "white", padding: "2rem", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "700", color: "#1e293b" }}>Opciones del Sistema</h1>
            <button
              style={{ backgroundColor: "#facc15", color: "#1e293b", fontWeight: "600", padding: "0.5rem 1rem", borderRadius: "8px", border: "none", cursor: "pointer" }}
              onClick={() => setShowModal(true)}
            >
              Ver opciones
            </button>
          </div>

          <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.6 }}>
            Aquí puedes ver las funcionalidades generales del sistema. Aunque aún no están implementadas, esta vista te permite visualizar cómo podría lucir una configuración más completa y profesional para el usuario administrador o docente.
          </p>
        </section>
      </main>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Opciones del sistema</h2>
            <ul>
              <li>🔒 Cambiar contraseña</li>
              <li>👤 Ver perfil</li>
              <li>🌐 Idioma</li>
              <li>🌓 Modo oscuro</li>
            </ul>
            <button onClick={() => setShowModal(false)} className="btn-cerrar">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminLayout;