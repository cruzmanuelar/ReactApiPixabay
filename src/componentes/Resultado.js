import React, { Component } from 'react';
import Imagen from "./Imagen";
import Paginacion from './Paginacion';
import '../App.css';

class Resultado extends Component {

    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;

        if(imagenes.length === 0) return null;
        
        return(
            <React.Fragment>
                <div className="col-12 py-3 row bg-resultados">
                    {imagenes.map(imagen => (
                        <Imagen 
                        key={imagen.id}
                        imagen={imagen}/>
                    ))}
                </div>
                <Paginacion
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                    paginaActual={this.props.paginaActual}
                />
            </React.Fragment>
        )
    }

    render() { 
        return ( 
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
         );
    }
}
 
export default Resultado;