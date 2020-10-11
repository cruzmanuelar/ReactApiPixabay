import React, { Component} from 'react';
import './App.css';
import Buscador from "./componentes/Buscador"
import Resultado from "./componentes/Resultado"

class App extends Component{

  state = {
    termino: "",
    imagenes : [],
    pagina:""
  }

  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth","start");
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina;

    if(pagina===1) return null;

    pagina -=1;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  paginaSiguiente = () => {
    
    let pagina = this.state.pagina;
    pagina +=1;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=15689473-9f661a18592fed1b7e8c3bcb3&q=${termino}&per_page=32&page=${pagina}`;

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes: resultado.hits}))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina:1
    },() => {
      this.consultarApi();
    })
  }

  render(){
    return (
      <div className="container-fluid text-light">
        <div className="jumbotron bg-primary">
          <h3 className="text-center text-light mb-4 textoB">Imágenes de Pixabay</h3>
          <Buscador datosBusqueda={this.datosBusqueda}/>
        </div>
        <div className="row justify-content-center">
          <Resultado 
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}
          imagenes={this.state.imagenes}/>
        </div>
      </div>
    );
  }
}

export default App;