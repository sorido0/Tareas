import Formulario from './Formulario';
import '../estilos/ListaDeTarea.css';
import { useState } from 'react';
import Tareas from './Tareas';

function ListaDetareas() {
    
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim())
        {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }

    }

    const eliminarTareas =  id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas)
    }
    
    const completarTarea = id => {
        //console.log('Si funciono');
        const tareasActualizadas = tareas.map(tarea => 
            {
            if (tarea.id === id){
                tarea.completada =! tarea.completada;
            }
            return tarea;
            });
        setTareas(tareasActualizadas)
    }

    return(
        <>  
            <Formulario onSubmit={ agregarTarea }/>
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) => 
                    <Tareas 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTareas={eliminarTareas}
                    />
                    )
                }
            </div>
        </>
    )
}

export default ListaDetareas;