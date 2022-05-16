import '../estilos/Formulario.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props){
     
    const [input, setInput] = useState(""); 

    const manejarCambio = e => {
       setInput(e.target.value);
    } 

    const manejarEnvio = e => {
       
        e.preventDefault();
               
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
      props.onSubmit(tareaNueva);
    }
    
    return(
        <form className="tareas-formulario"
        onSubmit={manejarEnvio}>
            <input 
            className="tareas-input"
            type="text"
            placeholder="Escribe tu tarea"
            name="texto"
            onChange={ manejarCambio}>
            </input>
            <button className="tareas-boton">
            Agregar
            </button>  
        </form>
    )
}

export default Formulario;