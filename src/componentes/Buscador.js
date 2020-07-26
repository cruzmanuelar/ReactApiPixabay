import React, { Component } from 'react';

class Buscador extends Component {

    render() { 
        return (
            <form>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" className="form-control form-control-lg" placeholder="¿Qué desea buscar?"/>
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