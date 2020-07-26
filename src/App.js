import React, { Component} from 'react';
import './App.css';
//import "bootswatch/dist/litera/bootstrap.min.css";
import Buscador from "./componentes/Buscador"
import Resultado from "./componentes/Resultado"

class App extends Component{

  state = {
    termino: "",
    imagenes : [],
    color: "red"
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=15689473-9f661a18592fed1b7e8c3bcb3&q=${termino}&per_page=30`;

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes: resultado.hits}))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    },() => {
      this.consultarApi();
    })
  }

  render(){
    return (
      <div className="container-fluid text-light">
        <div className="jumbotron text-dark">
          <h3 className="bold text-center text-dark mb-4 textoB">Buscador de Imágenes</h3>
          <Buscador datosBusqueda={this.datosBusqueda}/>
          <Resultado imagenes={this.state.imagenes}/>
        </div>
      </div>
    );
  }
}



export default App;
