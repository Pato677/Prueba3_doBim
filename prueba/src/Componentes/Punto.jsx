import React from "react";
import './estilos/Punto.css';
import { useNavigate } from "react-router-dom";

const Punto = (props) => {
    const { id, tipoDePunto, direccion, estado, observaciones, onEliminar } = props;
    
    const navigate = useNavigate();

    const actualizar = () => {
        navigate("/actualizarpunto/" + id);
    };

    const getEstadoIcon = (estado) => {
        switch (estado) {
            case 'activo': return '✅';
            case 'danado': return '⚠️';
            case 'retirado': return '❌';
            default: return '❓';
        }
    };

    const getEstadoClass = (estado) => {
        switch (estado) {
            case 'activo': return 'estado-activo';
            case 'danado': return 'estado-danado';
            case 'retirado': return 'estado-retirado';
            default: return '';
        }
    };

    return (
        <div className="punto">
            <h1>#{id} - {tipoDePunto}</h1>
            <h2>📍 {direccion}</h2>
            <h3 className={`estado ${getEstadoClass(estado)}`}>
                {getEstadoIcon(estado)} Estado: {estado}
            </h3>
            {observaciones && (
                <p className="observaciones">💬 {observaciones}</p>
            )}
            
            <div className="acciones">
                <button onClick={() => onEliminar(id)} className="btn-eliminar">
                    🗑️ Eliminar
                </button>
                <button onClick={actualizar} className="btn-actualizar">
                    ✏️ Actualizar
                </button>
            </div>
        </div>
    );
};

export default Punto;
