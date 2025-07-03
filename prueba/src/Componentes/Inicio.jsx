import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="container">
      <h1>Bienvenido a la Aplicación Emaseo</h1>
      <p>Esta es una aplicación nos permitira un sistema de registro de los puntos de recolección.</p>
        <div>
            <Link to="/CrearPuntos" className="btn btn-primary">
                Ir a Crear Puntos
            </Link>
<<<<<<< HEAD
            <Link to="/ListaPuntos" className="btn btn-secondary ml-2">
=======
            <Link to="/PuntosDeRecoleccion" className="btn btn-secondary ml-2">
>>>>>>> cb831a4b5eed5be018963b65106c71f2cae9b676
                Ver Puntos
            </Link>
            <Link to="/usuarios" className="btn btn-success ml-2">
                Ir a Usuarios
            </Link>
         </div>   
      
      
    </div>
  );
}
export default Inicio;