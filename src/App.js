import React, { Component} from 'react';
import './App.css';
//import "bootswatch/dist/litera/bootstrap.min.css";
import Buscador from "./componentes/Buscador"

class App extends Component{

  state = {
    termino: ""
  }

  consultarApi = () => {
    const url = `https://pixabay.com/api/?key=15689473-9f661a18592fed1b7e8c3bcb3&q=${this.state.termino}`;
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    })
  }

  render(){
    return (
      <div className="container-fluid text-light">
        <div className="jumbotron text-dark">
          <h3 className="bold text-center text-dark mb-4 textoB">Buscador de Imágenes</h3>
          <Buscador datosBusqueda={this.datosBusqueda}/>
          {this.state.termino}
        </div>
      </div>
    );
  }
}



export default App;
