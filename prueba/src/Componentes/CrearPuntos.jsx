import React, {useState} from "react";
//import './Style.css';
import { Link } from "react-router-dom";

const CrearPuntos = ({handlerAgregar}) => {
    const[puntos, setPuntos] = useState({
        tipoDePunto: "",
        direccion: "",
        estado: "",
        observaciones: ""
    });

    const onChangeDatos = (e) => {
        const {name, value} = e.target;
        setPuntos(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const Agregar = (e) => {
        e.preventDefault();
        handlerAgregar(puntos);
        setPuntos({
            tipoDePunto: "",
            direccion: "",
            estado: "",
            observaciones: ""
        });
    }

    return (
        <form onSubmit={Agregar}>
            <h1>Agregar Punto de Recolección</h1>

            <label htmlFor="tipoDePunto">Tipo de Punto:</label>
            <select id="tipoDePunto" name="tipoDePunto" required value={puntos.tipoDePunto} onChange={onChangeDatos}>
                <option value="">Selecciona un tipo de punto</option>
                <option value="contenedores tradicionales">Contenedores tradicionales</option>
                <option value="puntos de reciclaje">Puntos de reciclaje</option>
                <option value="puntos criticos">Puntos críticos</option>
                <option value="puntos especiales">Puntos especiales</option>
            </select>
            <br />

            <label htmlFor="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion" required value={puntos.direccion} onChange={onChangeDatos}/>
            <br />
 
            <label htmlFor="estado">Estado:</label>
            <select id="estado" name="estado" required value={puntos.estado} onChange={onChangeDatos}>
                <option value="">Selecciona un estado</option>
                <option value="activo">Activo</option>
                <option value="danado">Dañado</option>
                <option value="retirado">Retirado</option>
            </select>
            <br />
        
            <label htmlFor="observaciones">Observaciones:</label>
            <input type="text" id="observaciones" name="observaciones" required value={puntos.observaciones} onChange={onChangeDatos}/>
            <br />
            
            <button type="submit">Agregar Punto</button>

            <Link to="/">Home</Link>
        </form>
    )
}

export default CrearPuntos;