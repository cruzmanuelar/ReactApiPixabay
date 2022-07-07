import React from 'react';
import '../App.css';

const Paginacion = (props) => {

    return(
        <div className="mb-3">

            {props.paginaActual === 1 ?
            <button onClick={props.paginaSiguiente} type="button" style={estiloLetra} className="rounded-lg btn btn-color mr-1">
                Siguiente{' '}<li className="fas fa-arrow-right">
                </li>
            </button>
            :
            <>
                <button style={estiloLetra} onClick={props.paginaAnterior} type="button" className="rounded-lg btn btn-color mr-1">
                    <li className="fas fa-arrow-left">
                    </li>{' '}Anterior
                </button>

                <button onClick={props.paginaSiguiente} type="button" style={estiloLetra} className="rounded-lg btn btn-color mr-1">
                    Siguiente{' '}<li className="fas fa-arrow-right">
                    </li>
                </button>
            </>
            }

            
        </div>
    )
}

const estiloLetra = {
    fontSize:'15px',
    fontFamily:'Poppins'
}

export default Paginacion;