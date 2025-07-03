
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Inicio from './Componentes/Inicio';
import ListaPuntos from './Componentes/ListaPuntos';
import CrearPuntos from './Componentes/CrearPuntos';
import EditarPuntos from './Componentes/EditarPuntos';


function App() {
  const [lPuntosDeRecoleccion, setlPuntosDeRecoleccion] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3000/puntosDeRecoleccion')
      .then(response => {
        setlPuntosDeRecoleccion(response.data);
      })
      .catch(error => {
        console.error("Error al cargar los puntos de recolección:", error);
      });
  }, []);

  const addPuntoRecoleccion = (nuevoPunto) => {
    axios.post('http://localhost:3000/puntosDeRecoleccion', nuevoPunto)
      .then(response => {
        setlPuntosDeRecoleccion([...lPuntosDeRecoleccion, response.data]);
      })
      .catch(error => {
        console.error("Error al agregar el punto de recolección:", error);
      });
  }

  const eliminarPuntoRecoleccion = (id) => {
    axios.delete("http://localhost:3000/puntosDeRecoleccion/" + id)
      .then(() => {
        setlPuntosDeRecoleccion(lPuntosDeRecoleccion.filter(punto => punto.id !== id));
        console.log("Punto de recolección eliminado con éxito");
      })
      .catch(error => {
        console.error("Error al eliminar el punto de recolección:", error);
      });
  };

  const actualizarPuntoRecoleccion = (puntoActualizado) => {
    axios.put("http://localhost:3000/puntosDeRecoleccion/" + puntoActualizado.id, puntoActualizado)
      .then(response => {
        setlPuntosDeRecoleccion(lPuntosDeRecoleccion.map(punto => punto.id === puntoActualizado.id ? response.data : punto));
      })
      .catch(error => {
        console.error("Error al actualizar el punto de recolección:", error);
      });
  };
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={""} element={<Inicio/>} />
          <Route path={"/PuntosDeRecoleccion"} element={<ListaPuntos puntosDeRecoleccion={lPuntosDeRecoleccion} handlerEliminar={eliminarPuntoRecoleccion} />} />
          <Route path={"/CrearPuntos"} element={<CrearPuntos handlerAgregar={addPuntoRecoleccion} />} />
          <Route path={"/editar/punto/:id"} element={<EditarPuntos puntosDeRecoleccion={lPuntosDeRecoleccion} handlerActualizar={actualizarPuntoRecoleccion} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
