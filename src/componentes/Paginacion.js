import React from 'react';

const Paginacion = (props) => {
    return(
        <div className="mb-3">
            <button style={estiloLetra} onClick={props.paginaAnterior} type="button" className="rounded-lg btn btn-success mr-1"><li className="fas fa-arrow-left"></li> Anterior</button>
            <button onClick={props.paginaSiguiente} type="button" style={estiloLetra} className="rounded-lg btn btn-success mr-1">Siguiente <li className="fas fa-arrow-right"></li></button>
            
        </div>
    )
}

const estiloLetra = {
    fontSize:'15px',
    fontFamily:'Poppins'
}

export default Paginacion;