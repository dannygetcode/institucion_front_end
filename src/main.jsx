import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Oferta from './pages/Oferta';
import Contacto from './pages/Contacto';
import Alumnos from "./pages/Alumnos";
import Docentes from "./pages/Docentes";
import Cursos from "./pages/Cursos";
import Mensajes from "./pages/Mensajes";
import AdminLayout from "./pages/AdminLayout";
import Login from "./pages/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/alumnos" element={<Alumnos />} />
      <Route path="/docentes" element={<Docentes />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/oferta" element={<Oferta />} /> 
      <Route path="/contacto" element={<Contacto />} /> 
      <Route path="/mensajes" element={<Mensajes />} /> 
      <Route path="/opciones" element={<AdminLayout />} /> 

    </Routes>
  </BrowserRouter>
);
