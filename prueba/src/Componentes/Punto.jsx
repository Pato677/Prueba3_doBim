import React, { useState } from "react";
import './estilos/Punto.css';
import { useNavigate } from "react-router-dom";

const Punto = (props) => {
    const { id, tipoDePunto, direccion, estado, observaciones, onLike, onDislike, onEliminar } = props;
    
    // Estado para manejar las reacciones del punto
    const [reacciones, setReacciones] = useState({
        likes: 0,
        dislikes: 0
    });
    
    const navigate = useNavigate();

    const handlerLike = () => {
        setReacciones((prevState) => ({
            ...prevState, 
            likes: prevState.likes + 1
        }));
        onLike();
    };

    const handlerDislike = () => {
        setReacciones((prevState) => ({
            ...prevState,
            dislikes: prevState.dislikes + 1
        }));
        onDislike();
    };

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
            
            <div className="reacciones">
                <h4>👍 Likes: {reacciones.likes}</h4>
                <button onClick={handlerLike} className="btn-like">Like</button>
                
                <h4>👎 Dislikes: {reacciones.dislikes}</h4>
                <button onClick={handlerDislike} className="btn-dislike">Dislike</button>
            </div>
            
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
