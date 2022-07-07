import React, { Component} from 'react';
import './App.css';
import Buscador from "./componentes/Buscador"
import Resultado from "./componentes/Resultado"

class App extends Component{

  constructor(){
    super();

    this.state = {
      termino: "",
      imagenes : [],
      pagina:"",
      botonVolverArriba: false
    }

    this.scrollFn = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollFn);
  }

  handleScroll(){
    if(window.pageYOffset > 400){
      this.setState({ botonVolverArriba:true});
    }else{
      this.setState({ botonVolverArriba: false});
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFn)
  }
  

  scrollUp = () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina;

    if(pagina===1) return null;

    pagina -=1;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scrollUp();
    });
  }

  paginaSiguiente = () => {
    
    let pagina = this.state.pagina;
    pagina +=1;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scrollUp();
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
      <div className="text-light contenedor">

        <nav className="nav">

          <div className="navbar-brand">Imágenes de Pixabay</div>
            
          <Buscador datosBusqueda={this.datosBusqueda}/>

        </nav>

        <div className="row justify-content-center">
          <Resultado 
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}
          paginaActual={this.state.pagina}
          imagenes={this.state.imagenes}/>
        </div>

        {this.state.botonVolverArriba === true && <button className='botonVolverArriba'
            onClick={this.scrollUp}
            ><li className="fas fa-arrow-up">
            </li>
            </button>
        }
        
      </div>
    );
  }
}

export default App;