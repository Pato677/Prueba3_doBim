<<<<<<< HEAD
import React, { useState } from "react";
import Punto from './Punto';
=======
import React from "react";
import Punto from './punto';
>>>>>>> cb831a4b5eed5be018963b65106c71f2cae9b676
import './estilos/ListaPuntos.css';
import { Link } from "react-router-dom";

const ListaPuntos = (props) => {
  const { puntos = [], onEliminar } = props;

  return (
    <div>
      <Link to="/home">Volver al inicio</Link>
      
      <h2>Lista de Puntos de Recolección</h2>
      
      {puntos && puntos.length > 0 ? (
        puntos.map((punto, index) => (
          <Punto
            key={index}
            id={punto.id}
            tipoDePunto={punto.tipoDePunto}
            direccion={punto.direccion}
            estado={punto.estado}
            observaciones={punto.observaciones}
            onEliminar={() => onEliminar(punto.id)}
          />
        ))
      ) : (
        <div>
          <h3>No hay puntos de recolección disponibles</h3>
          <p>Agrega algunos puntos para comenzar.</p>
        </div>
      )}
    </div>
  );
};

export default ListaPuntos;
