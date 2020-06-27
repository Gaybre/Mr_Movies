import React from 'react'
import ItemCarrousel from '../ItemCarrousel'
import Loader from '../Loader'
import List from '../List'

import './styles/catalogo.css'

class Catalogo extends React.Component {
    constructor() {
        super()
        this.state = {
            listMovies: []
        }
    }

    async getMovies(){
        const API = 'https://yts.mx/api/v2/list_movies.json'
        const response = await fetch(API)
        const res = await response.json()
        this.setState({
            listMovies: res.data.movies
        })
    }

    componentDidMount() {
        this.getMovies()
    }
    
    loadMovies() {
        if(!this.state.listMovies.length){
            return <Loader />
        }
        return <ItemCarrousel movies={ this.state.listMovies } />
    }

    render() {
        // console.log('render',this.state.listMovies)
        return (
            <React.Fragment>
                <h1 className="title">Disfruta de nuestro catalogo de peliculas</h1>
                <List categoria="Comedia">
                    { this.loadMovies() }
                </List>
                <List categoria="Terror">
                    { this.loadMovies() }
                </List>
            </React.Fragment>
        )
    }
}

export default Catalogo