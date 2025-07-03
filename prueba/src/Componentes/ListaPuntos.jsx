import React, { useState } from "react";
import Punto from './Punto';
import './estilos/ListaPuntos.css';
import { Link } from "react-router-dom";

const ListaPuntos = (props) => {
  const { puntos, onEliminar } = props;
  
  const [likesTotales, setLikesTotales] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const actualizarLikes = () => {
    setLikesTotales((prevState) => prevState + 1);
    actualizarMensaje("");
  };

  const actualizarDislikes = () => {
    setLikesTotales((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      } else {
        actualizarMensaje("No se puede disminuir los likes, no hay suficientes");
        return prevState;
      }
    });
  };

  const actualizarMensaje = (mensaje) => {
    setMensaje(mensaje);
  };

  return (
    <div>
      <Link to="/home">Volver al inicio</Link>
      
      <h2>Registrar nuevo punto de recolección</h2>
      <h1>Likes totales: </h1>
      <h2>{likesTotales}</h2>
      <h1>{mensaje}</h1>
      
      {puntos.map((punto, index) => (
        <Punto
          key={index}
          id={punto.id}
          tipoDePunto={punto.tipoDePunto}
          direccion={punto.direccion}
          estado={punto.estado}
          observaciones={punto.observaciones}
          onLike={actualizarLikes}
          onDislike={actualizarDislikes}
          onEliminar={() => onEliminar(punto.id)}
        />
      ))}
    </div>
  );
};

export default ListaPuntos;
