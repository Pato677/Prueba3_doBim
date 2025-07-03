
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Componentes/Inicio';
import ListaPuntos from './Componentes/ListaPuntos';
import CrearPuntos from './Componentes/CrearPuntos';
import EditarPuntos from './Componentes/EditarPuntos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={""} element={<Inicio/>} />
          <Route path={"/PuntosDeRecoleccion"} element={<ListaPuntos/>} />
          <Route path={"/CrearPuntos"} element={<CrearPuntos/>} />
          <Route path={"/editar/punto/:id"} element={<EditarPuntos/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
