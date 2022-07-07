import React, { Component } from 'react';
import Imagen from "./Imagen";
import Paginacion from './Paginacion';
import '../App.css';
import notFound from '../assets/imagenes/notFound.jpg'

class Resultado extends Component {

    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;

        if(imagenes.length === 0) return <div className='contenedorNotFound'>
            <h3>No hay resultados</h3>
            <img className='imagenNotFound' alt='sin resultados' src={notFound}/>
        </div>;
        
        return(
            <React.Fragment>
                <div className="col-12 py-3 row">
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