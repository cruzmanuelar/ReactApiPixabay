import React from 'react';

const Paginacion = (props) => {
    return(
        <div className="mb-3">
            <button onClick={props.paginaAnterior} type="button" className="rounded-0 btn btn-info mr-1"> &larr; Anterior</button>
            <button onClick={props.paginaSiguiente} type="button" className="rounded-0 btn btn-info mr-1">Siguiente &rarr;</button>
            
        </div>
    )
}

export default Paginacion;