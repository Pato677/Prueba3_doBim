import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="container">
      <h1>Bienvenido a la Aplicación de Prueba</h1>
      <p>Esta es una aplicación de ejemplo para demostrar el uso de React Router.</p>
      <Link to="/usuarios" className="btn btn-primary">
        Ir a Usuarios
      </Link>
    </div>
  );
}