
import React from "react";
import Punto from './Punto';
import './estilos/ListaPuntos.css';
import { Link } from "react-router-dom";

const ListaPuntos = (props) => {
  const { puntosDeRecoleccion = [], handlerEliminar } = props;

  return (
    <div className="lista-puntos-container">
      <div className="header">
        <Link to="/" className="btn-volver">🏠 Volver al inicio</Link>
        <h2>Lista de Puntos de Recolección</h2>
      </div>
      
      {puntosDeRecoleccion && puntosDeRecoleccion.length > 0 ? (
        <div className="puntos-grid">
          {puntosDeRecoleccion.map((punto) => (
            <Punto
              key={punto.id}
              id={punto.id}
              tipoDePunto={punto.tipoDePunto}
              direccion={punto.direccion}
              estado={punto.estado}
              observaciones={punto.observaciones}
              onEliminar={handlerEliminar}
            />
          ))}
        </div>
      ) : (
        <div className="no-puntos">
          <h3>No hay puntos de recolección disponibles</h3>
          <p>Agrega algunos puntos para comenzar.</p>
          <Link to="/CrearPuntos" className="btn-crear">➕ Crear Primer Punto</Link>
        </div>
      )}
    </div>
  );
};

export default ListaPuntos;
