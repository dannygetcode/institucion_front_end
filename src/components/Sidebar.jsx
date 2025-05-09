import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";



function Sidebar() {
  const [mostrarModalOpciones, setMostrarModalOpciones] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Institución</h2>
          <nav className="sidebar-nav">
            <NavLink to="/alumnos" className="sidebar-link">
              Alumnos
            </NavLink>
            <NavLink to="/docentes" className="sidebar-link">
              Docentes
            </NavLink>
            <NavLink to="/cursos" className="sidebar-link">
              Cursos
            </NavLink>
            <NavLink to="/mensajes" className="sidebar-link">
              Mensajes
            </NavLink>
            <hr className="sidebar-separator" />
            <NavLink to="/opciones" className="sidebar-link">
              Opciones
            </NavLink>
          </nav>
        </div>
        <div className="sidebar-bottom">
          <button onClick={handleLogout} className="sidebar-logout">
            Cerrar sesión
          </button>
        </div>

      </div>
    </>
  );
}

export default Sidebar;
