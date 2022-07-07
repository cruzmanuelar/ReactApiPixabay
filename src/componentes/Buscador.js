import React, { Component } from 'react';
import '../App.css';

class Buscador extends Component {

    busquedaRef = React.createRef();
    obtenerDatos = (e) => {
        
        e.preventDefault();
        const termino = this.busquedaRef.current.value;
        this.props.datosBusqueda(termino);
    }

    render() { 
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="text-dark formulario">
                    <div className="col-md-8">
                        <input ref={this.busquedaRef} type="text" className="textoB form-control" placeholder="Palabra clave"/>
                    </div>
                    <div className="col-md-4 my-2">
                        <input type="submit" className="btn btn-color btn-lg btn-block rounded" value="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}

 
export default Buscador;