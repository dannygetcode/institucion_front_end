import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Swal from 'sweetalert2';


function Cursos() {
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [cursoEditando, setCursoEditando] = useState(null);
    const [nuevoCurso, setNuevoCurso] = useState({
        codigo: '',
        nombre: '',
        descripcion: '',
        creditos: ''
    });

    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch("http://172.210.137.100:8080/api/cursos", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                if (!res.ok) throw new Error("No autorizado");
                return res.json();
            })
            .then((data) => {
                setCursos(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error:", err);
                setLoading(false);
            });
    }, []);
    const handleSubmitCurso = async (e) => {
        e.preventDefault();
        const data = cursoEditando || nuevoCurso;

        try {
            const url = cursoEditando
                ? `http://172.210.137.100:8080/api/cursos/${cursoEditando.id}`
                : 'http://172.210.137.100:8080/api/cursos';
            const method = cursoEditando ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Error al guardar curso');
            const curso = await res.json();

            if (cursoEditando) {
                setCursos(cursos.map(c => c.id === curso.id ? curso : c));
            } else {
                setCursos([...cursos, curso]);
            }

            setCursoEditando(null);
            setNuevoCurso({ codigo: '', nombre: '', descripcion: '', creditos: '' });
            setMostrarModal(false);

            Swal.fire({
                title: cursoEditando ? 'Curso actualizado' : 'Curso creado',
                icon: 'success',
                confirmButtonColor: '#10b981'
            });
        } catch (err) {
            console.error(err);
            Swal.fire('Error', 'No se pudo guardar el curso', 'error');
        }
    };

    const handleEliminarCurso = async (id) => {
        const confirmacion = await Swal.fire({
            title: '¿Eliminar curso?',
            text: 'Esta acción no se puede deshacer.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e11d48',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, eliminar',
        });

        if (confirmacion.isConfirmed) {
            try {
                const res = await fetch(`http://172.210.137.100:8080/api/cursos/${id}`, {
                    method: 'DELETE',
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!res.ok) throw new Error('Error al eliminar');
                setCursos(cursos.filter(c => c.id !== id));
                Swal.fire('Eliminado', 'Curso eliminado exitosamente', 'success');
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

                    {/* Header + Crear */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-slate-800">Cursos</h1>
                        <button
                            className="btn-crear-curso"
                            onClick={() => {
                                setCursoEditando(null);
                                setNuevoCurso({ codigo: '', nombre: '', descripcion: '', creditos: '' });
                                setMostrarModal(true);
                            }}

                        >
                            + Crear
                        </button>

                        {mostrarModal && (
                            <div className="modal-overlay">
                                <div className="modal">
                                    <h2>{cursoEditando ? 'Editar Curso' : 'Nuevo Curso'}</h2>
                                    <form onSubmit={handleSubmitCurso} className="modal-form">
                                        <input
                                            type="text"
                                            placeholder="Código"
                                            value={cursoEditando ? cursoEditando.codigo : nuevoCurso.codigo}
                                            onChange={(e) =>
                                                cursoEditando
                                                    ? setCursoEditando({ ...cursoEditando, codigo: e.target.value })
                                                    : setNuevoCurso({ ...nuevoCurso, codigo: e.target.value })
                                            }
                                            required
                                        />
                                        <input
                                            type="text"
                                            placeholder="Nombre"
                                            value={cursoEditando ? cursoEditando.nombre : nuevoCurso.nombre}
                                            onChange={(e) =>
                                                cursoEditando
                                                    ? setCursoEditando({ ...cursoEditando, nombre: e.target.value })
                                                    : setNuevoCurso({ ...nuevoCurso, nombre: e.target.value })
                                            }
                                            required
                                        />
                                        <textarea
                                            placeholder="Descripción"
                                            value={cursoEditando ? cursoEditando.descripcion : nuevoCurso.descripcion}
                                            onChange={(e) =>
                                                cursoEditando
                                                    ? setCursoEditando({ ...cursoEditando, descripcion: e.target.value })
                                                    : setNuevoCurso({ ...nuevoCurso, descripcion: e.target.value })
                                            }
                                        />
                                        <input
                                            type="number"
                                            placeholder="Créditos"
                                            value={cursoEditando ? cursoEditando.creditos : nuevoCurso.creditos}
                                            onChange={(e) =>
                                                cursoEditando
                                                    ? setCursoEditando({ ...cursoEditando, creditos: e.target.value })
                                                    : setNuevoCurso({ ...nuevoCurso, creditos: e.target.value })
                                            }
                                            required
                                        />
                                        <div className="modal-buttons">
                                            <button type="submit" className="btn-guardar">
                                                {cursoEditando ? 'Actualizar' : 'Guardar'}
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-cancelar"
                                                onClick={() => {
                                                    setMostrarModal(false);
                                                    setCursoEditando(null);
                                                    setNuevoCurso({ codigo: '', nombre: '', descripcion: '', creditos: '' });
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

                        {loading ? (
                            <p className="text-center text-slate-600">Cargando cursos...</p>
                        ) : (
                            /* Aquí va el grid, 1 columna móvil, 2 sm, 3 md+ */
                            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {cursos.map((curso) => (
                                    <div key={curso.id} className="card-curso">
                                        <div>
                                            <h2>{curso.nombre}</h2>
                                            <p><strong>Código:</strong> {curso.codigo}</p>
                                            <p><strong>Créditos:</strong> {curso.creditos}</p>
                                            <p>
                                                <strong>Descripción:</strong><br />
                                                {curso.descripcion}
                                            </p>
                                        </div>
                                        <div className="card-curso-actions">
                                            <button
                                                className="card-btn edit"
                                                onClick={() => {
                                                    setCursoEditando(curso);
                                                    setMostrarModal(true);
                                                }}
                                            >
                                                Editar
                                            </button>

                                            <button
                                                className="card-btn delete"
                                                onClick={() => handleEliminarCurso(curso.id)}
                                            >
                                                Eliminar
                                            </button>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </main>
        </div>
    );

}

export default Cursos;
