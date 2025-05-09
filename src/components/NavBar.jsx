import '../index.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" onClick={() => setClick(false)}>
          <img src="/img/logo.png" alt="Logo" width="60" height="60" />
          <span className="ms-2">Institución Educativa Horizonte</span>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}
              onClick={handleClick}
            >
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/nosotros"
              className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}
              onClick={handleClick}
            >
              Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/oferta"
              className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}
              onClick={handleClick}
            >
              Oferta Académica
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contacto"
              className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}
              onClick={handleClick}
            >
              Contacto
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/login"
              className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}
              onClick={handleClick}
              style={{
                backgroundColor: "#facc15",
                color: "#1e293b",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                fontWeight: 600,
                textDecoration: "none"
              }}
            >
              Portal
            </NavLink>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <HamburgetMenuClose />
            </span>
          ) : (
            <span className="icon">
              <HamburgetMenuOpen />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
