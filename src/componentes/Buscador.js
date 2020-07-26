import React, { Component } from 'react';

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
                <div className="row text-dark">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control textoB form-control-lg" placeholder="¿Qué desea buscar?"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-success btn-lg btn-block rounded-0" value="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}

 
export default Buscador;