import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://172.210.137.100:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error("Credenciales inválidas");

      const data = await res.json();
      localStorage.setItem("token", data.token); // <- Aquí guardas el token

      Swal.fire({
        title: '¡Login exitoso!',
        text: 'Bienvenido al sistema',
        icon: 'success',
        confirmButtonColor: '#facc15',
        confirmButtonText: 'Aceptar',
      });

      navigate("/alumnos"); // redirigir al listado de alumnos
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error de autenticación',
        text: 'Usuario o contraseña incorrectos',
        icon: 'error',
        confirmButtonColor: '#ef4444',
        confirmButtonText: 'Intentar de nuevo',
      });
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span></span>
      <button
        type="submit"
        style={{
          backgroundColor: "#facc15",
          color: "#1e293b",
          padding: "0.75rem 1rem",
          border: "none",
          borderRadius: "8px",
          fontWeight: "600",
          fontSize: "1rem",
          cursor: "pointer",
          marginBottom: "0.5rem",
        }}
      >
        Ingresar
      </button>
      <button
        type="button"
        onClick={() => navigate("/")}
        style={{
          padding: "0.75rem 1rem",
          border: "none",
          borderRadius: "8px",
          fontWeight: "500",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Regresar
      </button>
    </form>
  );
}

export default Login;
