import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import "bootswatch/dist/litera/bootstrap.min.css";
import Buscador from "./componentes/Buscador"

class App extends Component{
  render(){
    return (
      <div className="container-fluid text-light">
        <div className="jumbotron">
          <h3 className="bold text-center text-dark mb-4">Buscador de Imágenes</h3>
          <Buscador/>
        </div>
      </div>
    );
  }
}
  

export default App;
