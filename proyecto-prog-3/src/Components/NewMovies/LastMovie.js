import React, {Component} from 'react';


class LastMovie extends Component{
    constructor(props){
        super(props);
        this.state={
            verMas: false,
            text: 'Ver mas',
            selected: false,
        }
    }

//Para ver mas y ver menos////////////
verMas(){
    if(this.state.verMas){
        this.setState({
            verMas: false,
            text: 'Ver más'
        })
    } else {
        this.setState({
            verMas: true,
            text: 'Ver menos'
        })            
    }
}
selected(){
    if(this.state.selected){
        this.setState({
            selected: false,
        })
    } else {
        this.setState({
            selected: true,
        })
    }
}
//Para ver mas y ver menos////////////

    render(){
        if(this.props.LastMovie == undefined) return (null)
        return(
            <React.Fragment>
                      <div className={`character-card ${this.state.selected ? 'active' : ''}`} onDoubleClick={ ()=>this.selected()}>
                        <div className='pelisPopu'>
                        <section class="card-container">
                            <section class="navigation">
                                <div>
                                    <i class="fas fa-chevron-left"></i>
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                                <i class="far fa-window-close"></i>
                            </section>
                            <article>
                                <main>
                                    <h3>{this.props.ultimaMovie.title}</h3>
                                    <p className={`extra ${this.state.verMas ? 'show' : 'hide'}`}>{this.props.ultimaMovie.release_date} /  {this.props.ultimaMovie.vote_average} stars. {this.props.ultimaMovie.overview} </p>
                                    <button type="button" className="btn btn-outline-primary" onClick={()=>this.verMas()}>{this.state.text}</button>
                                    <button type="button" className="btn btn-danger" onClick = { () => this.props.ocultar(this.props.ultimaMovie.id)}>Quitar</button>
                                </main>
                            </article>
            
                        </section>
                    </div>
                </div>  
            </React.Fragment>
        )
    }
    
}

export default LastMovie;