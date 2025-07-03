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

            <Link to="/PuntosDeRecoleccion" className="btn btn-secondary ml-2">
                Ver Puntos
            </Link>

         </div>   
      
      
    </div>
  );
}
export default Inicio;