import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Swal from 'sweetalert2';


function Alumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [alumnoEditando, setAlumnoEditando] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://172.210.137.100:8080/api/alumnos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("No autorizado");
        return res.json();
      })
      .then((data) => {
        setAlumnos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevoAlumno, setNuevoAlumno] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    programa: '',
  });

  const handleCrearAlumno = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://172.210.137.100:8080/alumnos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(nuevoAlumno),
      });

      if (!res.ok) throw new Error("Error al crear alumno");

      const alumnoCreado = await res.json();

      // Actualizar lista
      setAlumnos([...alumnos, alumnoCreado]);
      setNuevoAlumno({ nombre: '', apellido: '', correo: '', programa: '' });
      setMostrarModal(false);


      Swal.fire({
        title: 'Alumno creado',
        text: 'El alumno fue registrado exitosamente.',
        icon: 'success',
        confirmButtonColor: '#10b981',
        confirmButtonText: 'Aceptar',
      });

    } catch (err) {
      console.error(err);


      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al crear el alumno.',
        icon: 'error',
        confirmButtonColor: '#ef4444',
        confirmButtonText: 'Intentar de nuevo',
      });
    }
  };

  const abrirModalEdicion = (alumno) => {
    setAlumnoEditando({ ...alumno }); // carga los datos en el modal
    setMostrarModal(true);
  };
  const handleActualizarAlumno = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://172.210.137.100:8080/api/alumnos/${alumnoEditando.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(alumnoEditando),
      });

      if (!res.ok) throw new Error("Error al actualizar alumno");

      const alumnoActualizado = await res.json();

      // Actualiza la tabla local
      const alumnosActualizados = alumnos.map((a) =>
        a.id === alumnoActualizado.id ? alumnoActualizado : a
      );
      setAlumnos(alumnosActualizados);
      setAlumnoEditando(null);
      setMostrarModal(false);

      Swal.fire({
        title: 'Alumno actualizado',
        text: 'Los datos fueron modificados exitosamente.',
        icon: 'success',
        confirmButtonColor: '#10b981',
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo actualizar el alumno.',
        icon: 'error',
        confirmButtonColor: '#ef4444',
      });
    }
  };
  const handleSubmit = (e) => {
    if (alumnoEditando) {
      handleActualizarAlumno(e);
    } else {
      handleCrearAlumno(e);
    }
  };
  const handleEliminarAlumno = async (id) => {
    const confirmacion = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e11d48',
      cancelButtonColor: '#94a3b8',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (confirmacion.isConfirmed) {
      try {
        const res = await fetch(`http://172.210.137.100:8080/api/alumnos/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Error al eliminar alumno");

        // Actualizar lista local
        const alumnosFiltrados = alumnos.filter((a) => a.id !== id);
        setAlumnos(alumnosFiltrados);

        Swal.fire({
          title: 'Eliminado',
          text: 'El alumno fue eliminado exitosamente.',
          icon: 'success',
          confirmButtonColor: '#10b981',
        });

      } catch (err) {
        console.error(err);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo eliminar el alumno.',
          icon: 'error',
          confirmButtonColor: '#ef4444',
        });
      }
    }
  };







  if (loading) return <p className="text-center text-slate-600 text-lg">Cargando alumnos...</p>;

  return (
    <div className="flex">
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />

      {/* Contenido principal desplazado a la derecha */}
      <main style={{ marginLeft: '16rem', width: '100%' }}>

        <div style={{ minHeight: '100vh', background: '#f1f5f9', padding: '2rem' }}>

          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              background: 'rgba(255,255,255,0.85)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '2px solid #cbd5e1',
                paddingBottom: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <h1
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  margin: 0,
                }}
              >
                Listado de Alumnos
              </h1>

              <button
                style={{
                  backgroundColor: '#facc15',
                  color: '#1e293b',
                  padding: '0.5rem 1rem',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
                onClick={() => setMostrarModal(true)}
              >
                + Crear
              </button>
              {mostrarModal && (
                <div className="modal-overlay">
                  <div className="modal">
                    <h2>{alumnoEditando ? "Editar Alumno" : "Nuevo Alumno"}</h2>
                    <form onSubmit={handleSubmit} className="modal-form">
                      <input
                        type="text"
                        placeholder="Nombre"
                        value={
                          alumnoEditando ? alumnoEditando.nombre : nuevoAlumno.nombre
                        }
                        onChange={(e) =>
                          alumnoEditando
                            ? setAlumnoEditando({ ...alumnoEditando, nombre: e.target.value })
                            : setNuevoAlumno({ ...nuevoAlumno, nombre: e.target.value })
                        }
                        required
                      />
                      <input
                        type="text"
                        placeholder="Apellido"
                        value={
                          alumnoEditando ? alumnoEditando.apellido : nuevoAlumno.apellido
                        }
                        onChange={(e) =>
                          alumnoEditando
                            ? setAlumnoEditando({ ...alumnoEditando, apellido: e.target.value })
                            : setNuevoAlumno({ ...nuevoAlumno, apellido: e.target.value })
                        }
                        required
                      />
                      <input
                        type="email"
                        placeholder="Correo"
                        value={
                          alumnoEditando ? alumnoEditando.correo : nuevoAlumno.correo
                        }
                        onChange={(e) =>
                          alumnoEditando
                            ? setAlumnoEditando({ ...alumnoEditando, correo: e.target.value })
                            : setNuevoAlumno({ ...nuevoAlumno, correo: e.target.value })
                        }
                        required
                      />
                      <input
                        type="text"
                        placeholder="Programa"
                        value={
                          alumnoEditando ? alumnoEditando.programa : nuevoAlumno.programa
                        }
                        onChange={(e) =>
                          alumnoEditando
                            ? setAlumnoEditando({ ...alumnoEditando, programa: e.target.value })
                            : setNuevoAlumno({ ...nuevoAlumno, programa: e.target.value })
                        }
                        required
                      />
                      <div className="modal-buttons">
                        <button type="submit" className="btn-guardar">
                          {alumnoEditando ? "Actualizar" : "Guardar"}
                        </button>
                        <button
                          type="button"
                          className="btn-cancelar"
                          onClick={() => {
                            setMostrarModal(false);
                            setAlumnoEditando(null);
                            setNuevoAlumno({ nombre: '', apellido: '', correo: '', programa: '' });
                          }}
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>

                  </div>
                </div>
              )}
            </div>

            <table className="tabla-elegante">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                  <th>Programa</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {alumnos.map((alumno) => (
                  <tr key={alumno.id}>
                    <td>{alumno.id}</td>
                    <td>{alumno.nombre}</td>
                    <td>{alumno.apellido}</td>
                    <td>{alumno.correo}</td>
                    <td>{alumno.programa}</td>
                    <td className="botones-acciones">
                      <button
                        className="btn-editar"
                        onClick={() => abrirModalEdicion(alumno)}
                      >
                        Editar
                      </button>


                      <button
                        className="btn-eliminar"
                        onClick={() => handleEliminarAlumno(alumno.id)}
                      >
                        Eliminar
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );


}

export default Alumnos;
