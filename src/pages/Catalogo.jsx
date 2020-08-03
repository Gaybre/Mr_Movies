import React, { Fragment } from 'react'
import '../styles/pages/catalogo.css'

import Carrousel from '../components/Carrousel'
import Loader from '../components/Loader'
import List from '../components/List'
import ContentModal from '../components/ContentModal'

class Catalogo extends React.Component {
  constructor() {
    super()
    this.state = {
      listMovies: [],
      cargando: false,
      error: undefined,
      modalIsOpen: false,
      movieSelected: []
    }
  }

  handleCloseModal = (ev) => {
    this.setState({ modalIsOpen: false})
  }

  handleOpenModal = (movie, ev) => {
    this.setState({ 
      movieSelected: movie,
      modalIsOpen: true
    })
  }

  getMovies = async (list) => {
    const API = 'https://yts.mx/api/v2/list_movies.json?'

    try {
      const response = await fetch(`${API}genre=${list}`)
      const res = await response.json()
      const data = res.data.movies
      return data
    } catch(error) {
      return error
    }
  }
  
  getMovieList = async () => {
    this.setState({ cargando: true, error: null })
    const actionList = await this.getMovies(`Action`)
    const comedyList = await this.getMovies(`Comedy`)
    const terrorList = await this.getMovies(`Thriller`)
    
    try {
      this.setState({
        listMovies: [{
          action: actionList, 
          comedy: comedyList,
          thriller: terrorList
        }],
        cargando: false,
        error: undefined
      })
    } catch(error) {
      this.setState({ cargando: false, error: error })
    }
  }

  componentDidMount() {
    if(!this.state.listMovies.length) {
      this.getMovieList()
    }
  }

  loadCategory = category => {
    if(this.state.listMovies.length) {
      let list = []
      if(category === "action") list = this.state.listMovies[0].action
      if(category === "comedy") list = this.state.listMovies[0].comedy
      if(category === "thriller") list = this.state.listMovies[0].thriller
      
      return (
        <Carrousel 
          movies={ list }
          onOpenModal={ this.handleOpenModal }
        />
      )
    }
    else return <Loader />
  }

  loadCategoriesList = () => (
    <Fragment>
      <List categoria="Acción" >
        { this.loadCategory("action") }
      </List>
      <List categoria="Comedia">
        { this.loadCategory("comedy") }
      </List>
      <List categoria="Terror">
        { this.loadCategory("thriller") }
      </List>
    </Fragment>
  )

  loadModal = () => (
    this.state.modalState &&
      console.log('esta seleccionando: ', this.state.movieSelected.title),
        <ContentModal 
          movieSelected={ this.state.movieSelected }
          modalState={ this.state.modalIsOpen }
          onCloseModal={ this.handleCloseModal }
        />
  )
    
  render() {
    // ------------------------------ if Error
    if(this.state.error) {
      return `Error: ${this.state.error.message}`
    }

    return (
      <Fragment>
        <h1 className="title">Disfruta de nuestro catalogo de peliculas</h1>
        {/* ------------------------------ Cargar el catalogo */ 
        this.loadCategoriesList()
        }
        {/* ------------------------------ Validar si modalIsOpen is true */ 
        this.loadModal()
        }
      </Fragment>
    )
  }
}

export default Catalogo