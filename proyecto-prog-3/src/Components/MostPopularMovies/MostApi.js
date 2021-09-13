import React, {Component} from 'react';
import Search from '../Search/Search';
import MostPopularMovies from './MostPopularMovies';
import './MostPopularMovies.css'

class MostApi extends Component{
    constructor(){
        super();
        this.state = {
            peliculasPopulares:[],
            paginas: 1,
            peliculas: [],
            cargando: true
        }
}
    componentDidMount(){
        console.log('me monte')
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=' + this.state.paginas;
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    peliculasPopulares: data.results, paginas: this.state.paginas+1,
                    cargando : false,
                    peliculas: data.results
                    
                })
            })
            .catch(function(e){
                console.log(e)
            })
    }

    ocultar(id){
        let peliculasQueQuedan = this.state.peliculasPopulares.filter(peliculas =>{
            return peliculas.id != id
        })  
        this.setState({
            peliculasPopulares : peliculasQueQuedan
        })
    }

    masPeliculasPopulares(){
            let url = 'https://api.themoviedb.org/3/movie/popular?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=' + this.state.paginas;
            fetch(url)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then((data) =>{
                this.setState({
                    peliculasPopulares : this.state.peliculasPopulares.concat(data.results), paginas: this.state.paginas + 1, 
                    cargando : false,
                    peliculas: this.state.peliculasPopulares.concat(data.results)
                })
            })
        
    }

    
    filtrar(valorAFiltrar){
        let peliculasFiltradas = this.state.peliculasPopulares.filter(peliculas =>{ 
            return peliculas.title.toLowerCase().includes(valorAFiltrar.toLowerCase())
        })
        this.setState({
            peliculas : peliculasFiltradas
        })
    }

    render(){
        return(
            <React.Fragment>
                    <div className='fondo'>
                    <h2 className='titulos'> Most Popular Movies </h2>
                    {this.state.cargando ? <p>Cargando</p> : null} 
                    <Search filtrarPeliculas = {(valorAFiltrar)=> this.filtrar(valorAFiltrar)}/>
                    <div className='peliss'>
                    {this.state.peliculas.map((peliculas, id)=><MostPopularMovies key={peliculas.title + id} dataPopularMovies={peliculas} ocultar = {(idEliminar)=>this.ocultar(idEliminar)}/>)}
                    </div>
                    <button className='masPeliculas' onClick= {() => this.masPeliculasPopulares() } >Mas peliculas</button>
                    </div>
            </React.Fragment>
            )
        }
}

export default MostApi;