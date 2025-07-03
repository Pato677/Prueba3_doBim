import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
