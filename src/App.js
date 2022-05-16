import './App.css';
import { React } from 'react';
import Logo from './componentes/Logo';
import ListaDetareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="app-Tareas">
     <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
          <ListaDetareas />
      </div>
    </div>
  );
}

export default App;
