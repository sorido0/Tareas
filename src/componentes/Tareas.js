import '../estilos/Tareas.css';
import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tareas({ id, texto, completada, completarTarea, eliminarTareas }){
    return(
        <div className={completada ? 'tarea-contedor completada' : 'tarea-contedor'}>
            <div className='tarea-texto'
            onClick={ () => completarTarea(id) }>
                { texto }
            </div>
            <div className='tareas-contedor-icono'
            onClick={ () => eliminarTareas(id) }>
               <AiOutlineCloseCircle className='tareas-icono'/>
            </div>
        </div>
    )
}

export default Tareas;