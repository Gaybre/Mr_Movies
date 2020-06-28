import React from 'react'
import ItemCarrousel from '../ItemCarrousel'
import Loader from '../Loader'
import List from '../List'

import './styles/catalogo.css'

class Catalogo extends React.Component {
    constructor() {
        super()
        this.state = {
            listMovies: [
                {
                    action:[]
                },
                {
                    comedy:[]
                },
                {
                    thriller:[]
                }
            ],
            cargando: false
        }
    }

    async getMovies() {
        const API = 'https://yts.mx/api/v2/list_movies.json?genre='
        this.setState({cargando: true})
        
        const getMovieList = async (url) => {
            const response = await fetch(url)
            const res = await response.json()
            const data = res.data.movies
            return data
        }
        
        const actionList = await getMovieList(`${API}Action`)
        const comedyList = await getMovieList(`${API}Comedy`)
        const terrorList = await getMovieList(`${API}Thriller`)
        
        this.setState({
            listMovies: [
                {
                    action: actionList
                },
                {
                    comedy: comedyList
                },
                {
                    thriller: terrorList
                }
            ],
            cargando: false
        })
    }

    componentDidMount() {
        this.getMovies()
    }

    loadActionMovies() {
        if(!this.state.cargando) {
            return (
                <ItemCarrousel 
                    movies={ this.state.listMovies[0].action }
                /> 
            ) 
        }
        return <Loader />
    }

    loadComedyMovies() {
        if(!this.state.cargando) {
            return (
                <ItemCarrousel 
                    movies={ this.state.listMovies[1].comedy }
                /> 
            ) 
        }
        return <Loader />
    }

    loadThrillerMovies() {
        if(!this.state.cargando) {
            return (
                <ItemCarrousel 
                    movies={ this.state.listMovies[2].thriller }
                /> 
            ) 
        }
        return <Loader />
    }

    render() {
        console.log('render',this.state.listMovies)
        return (
            <React.Fragment>
                <h1 className="title">Disfruta de nuestro catalogo de peliculas</h1>
                <List categoria="Acción">
                    { this.loadActionMovies() }
                </List>
                <List categoria="Comedia">
                    { this.loadComedyMovies() }
                </List>
                <List categoria="Terror">
                    { this.loadThrillerMovies() }
                </List>
            </React.Fragment>
        )
    }
}

export default Catalogo