import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Swal from 'sweetalert2';

function Docentes() {
  const [docentes, setDocentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [docenteEditando, setDocenteEditando] = useState(null);
  const [nuevoDocente, setNuevoDocente] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    area: '',
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://172.210.137.100:8080/api/docentes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("No autorizado");
        return res.json();
      })
      .then((data) => {
        setDocentes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);
  const handleSubmitDocente = async (e) => {
    e.preventDefault();
    const data = docenteEditando || nuevoDocente;

    try {
      const url = docenteEditando
        ? `http://172.210.137.100:8080/api/docentes/${docenteEditando.id}`
        : 'http://172.210.137.100:8080/api/docentes';
      const method = docenteEditando ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Error al guardar docente');

      const docente = await res.json();
      if (docenteEditando) {
        setDocentes(docentes.map((d) => (d.id === docente.id ? docente : d)));
      } else {
        setDocentes([...docentes, docente]);
      }

      setDocenteEditando(null);
      setNuevoDocente({ nombre: '', apellido: '', correo: '', area: '' });
      setMostrarModal(false);

      Swal.fire({
        title: docenteEditando ? 'Docente actualizado' : 'Docente creado',
        icon: 'success',
        confirmButtonColor: '#10b981',
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo guardar el docente',
        icon: 'error',
      });
    }
  };

  const handleEliminarDocente = async (id) => {
    const confirmacion = await Swal.fire({
      title: '¿Eliminar docente?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e11d48',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, eliminar',
    });

    if (confirmacion.isConfirmed) {
      try {
        const res = await fetch(`http://172.210.137.100:8080/api/docentes/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Error al eliminar docente');
        setDocentes(docentes.filter((d) => d.id !== id));
        Swal.fire('Eliminado', 'Docente eliminado con éxito', 'success');
      } catch (err) {
        console.error(err);
        Swal.fire('Error', 'No se pudo eliminar', 'error');
      }
    }
  };



  return (
    <div className="flex">
      <Sidebar />
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
                Listado de Docentes
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
                onClick={() => {
                  setDocenteEditando(null); // aseguramos que sea creación
                  setMostrarModal(true);
                }}
              >
                + Crear
              </button>
              {mostrarModal && (
                <div className="modal-overlay">
                  <div className="modal">
                  <h2>{docenteEditando ? 'Editar Docente' : 'Nuevo Docente'}</h2>
                    <form onSubmit={handleSubmitDocente} className="modal-form">
                      <input
                        type="text"
                        placeholder="Nombre"
                        value={docenteEditando ? docenteEditando.nombre : nuevoDocente.nombre}
                        onChange={(e) =>
                          docenteEditando
                            ? setDocenteEditando({ ...docenteEditando, nombre: e.target.value })
                            : setNuevoDocente({ ...nuevoDocente, nombre: e.target.value })
                        }
                        required
                      />
                      <input
                        type="text"
                        placeholder="Apellido"
                        value={docenteEditando ? docenteEditando.apellido : nuevoDocente.apellido}
                        onChange={(e) =>
                          docenteEditando
                            ? setDocenteEditando({ ...docenteEditando, apellido: e.target.value })
                            : setNuevoDocente({ ...nuevoDocente, apellido: e.target.value })
                        }
                        required
                      />
                      <input
                        type="email"
                        placeholder="Correo"
                        value={docenteEditando ? docenteEditando.correo : nuevoDocente.correo}
                        onChange={(e) =>
                          docenteEditando
                            ? setDocenteEditando({ ...docenteEditando, correo: e.target.value })
                            : setNuevoDocente({ ...nuevoDocente, correo: e.target.value })
                        }
                        required
                      />
                      <input
                        type="text"
                        placeholder="Área"
                        value={docenteEditando ? docenteEditando.area : nuevoDocente.area}
                        onChange={(e) =>
                          docenteEditando
                            ? setDocenteEditando({ ...docenteEditando, area: e.target.value })
                            : setNuevoDocente({ ...nuevoDocente, area: e.target.value })
                        }
                        required
                      />
                      <div className="modal-buttons">
                        <button type="submit" className="btn-guardar">
                          {docenteEditando ? 'Actualizar' : 'Guardar'}
                        </button>
                        <button
                          type="button"
                          className="btn-cancelar"
                          onClick={() => {
                            setMostrarModal(false);
                            setDocenteEditando(null);
                            setNuevoDocente({ nombre: '', apellido: '', correo: '', area: '' });
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


            {loading ? (
              <p style={{ textAlign: 'center', color: '#64748b' }}>Cargando docentes...</p>
            ) : (
              <table className="tabla-elegante">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Área</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {docentes.map((docente) => (
                    <tr key={docente.id}>
                      <td>{docente.id}</td>
                      <td>{docente.nombre}</td>
                      <td>{docente.apellido}</td>
                      <td>{docente.correo}</td>
                      <td>{docente.area}</td>
                      <td className="botones-acciones">
                        <button className="card-btn edit" onClick={() => {
                          setDocenteEditando(docente);
                          setMostrarModal(true);
                        }}>Editar</button>

                        <button className="card-btn delete" onClick={() => handleEliminarDocente(docente.id)}>Eliminar</button>

                      </td>
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

export default Docentes;
