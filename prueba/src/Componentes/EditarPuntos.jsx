import React, { useState, useEffect } from "react";
import './Style.css';
import { Link, useParams, useNavigate } from "react-router-dom";

const EditarPuntos = ({ handlerActualizar, puntosDeRecoleccion }) => {
  const [punto, setPunto] = useState({});
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect ejecutado:", { puntosDeRecoleccion, id });
    
    // Ejecuta cuando puntosDeRecoleccion está disponible y tenemos un ID
    if (puntosDeRecoleccion && puntosDeRecoleccion.length > 0 && id) {
      console.log("Buscando punto con ID:", id);
      
      // Buscar comparando tanto números como strings ya que json-server puede devolver strings
      const puntoEncontrado = puntosDeRecoleccion.find(p => {
        return p.id == id || p.id === parseInt(id) || p.id.toString() === id.toString();
      });
      
      if (puntoEncontrado) {
        console.log("✅ Punto encontrado:", puntoEncontrado);
        setPunto(puntoEncontrado);
        setError(null);
        setCargando(false);
      } else {
        console.log("❌ Punto NO encontrado con ID:", id);
        console.log("IDs disponibles:", puntosDeRecoleccion.map(p => p.id));
        setError("Punto de recolección no encontrado con ID: " + id);
        setCargando(false);
      }
    } else if (puntosDeRecoleccion && puntosDeRecoleccion.length === 0) {
      console.log("❌ No hay puntos de recolección disponibles");
      setCargando(false);
      setError("No hay puntos de recolección disponibles");
    } else if (!puntosDeRecoleccion) {
      console.log("⏳ Esperando que se carguen los puntos de recolección...");
      // Mantener cargando true si aún no hay datos
    }
  }, [puntosDeRecoleccion, id]); // Removemos punto.id para evitar loops infinitos

  const onChangeDatos = (e) => {
    const { name, value } = e.target;
    setPunto(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const Editar = (e) => {
    e.preventDefault();
    handlerActualizar(punto);
    // Navegar de vuelta a la lista después de editar
    navigate('/PuntosDeRecoleccion');
  };

  return (
    <div>
      {cargando ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2>Cargando datos del punto...</h2>
        </div>
      ) : error ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2 style={{ color: 'red' }}>Error: {error}</h2>
          <Link to="/PuntosDeRecoleccion">Volver a la lista</Link>
        </div>
      ) : (
        <form onSubmit={Editar}>
          <h1>Editar Punto de Recolección</h1>

          <label htmlFor="tipoDePunto">Tipo de Punto:</label>
          <select
            id="tipoDePunto"
            name="tipoDePunto"
            required
            value={punto.tipoDePunto || ''}
            onChange={onChangeDatos}
          >
            <option value="">Selecciona un tipo de punto</option>
            <option value="contenedores tradicionales">Contenedores tradicionales</option>
            <option value="puntos de reciclaje">Puntos de reciclaje</option>
            <option value="puntos criticos">Puntos críticos</option>
            <option value="puntos especiales">Puntos especiales</option>
          </select>
          <br />

          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            required
            value={punto.direccion || ''}
            onChange={onChangeDatos}
          />
          <br />

          <label htmlFor="estado">Estado:</label>
          <select
            id="estado"
            name="estado"
            required
            value={punto.estado || ''}
            onChange={onChangeDatos}
          >
            <option value="">Selecciona un estado</option>
            <option value="activo">Activo</option>
            <option value="danado">Dañado</option>
            <option value="retirado">Retirado</option>
          </select>
          <br />

          <label htmlFor="observaciones">Observaciones:</label>
          <input
            type="text"
            id="observaciones"
            name="observaciones"
            required
            value={punto.observaciones || ''}
            onChange={onChangeDatos}
          />
          <br />

          <button type="submit">Editar Punto</button>
          <Link to="/PuntosDeRecoleccion">Volver a la lista</Link>
        </form>
      )}
    </div>
  );
};

export default EditarPuntos;
