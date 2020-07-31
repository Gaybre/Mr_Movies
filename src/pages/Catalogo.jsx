import React, { Fragment } from 'react'
import '../styles/pages/catalogo.css'

import Carrousel from '../components/Carrousel'
import Loader from '../components/Loader'
import List from '../components/List'

class Catalogo extends React.Component {
  constructor() {
    super()
    this.state = {
      listMovies: [],
      cargando: false,
      error: undefined,
      modalIsOpen: false
    }
  }

  handleCloseModal = (ev) => {
    this.setState({ modalIsOpen: false})
  }

  handleOpenModal = (ev) => {
    this.setState({ modalIsOpen: true})
  }

  getMovies = async () => {
    const API = 'https://yts.mx/api/v2/list_movies.json?genre='
    this.setState({ cargando: true, error: null })
    
    try {
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
      this.getMovies()
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
          modalState={ this.state.modalIsOpen } 
          onOpenModal={ this.handleOpenModal }
          onCloseModal={ this.handleCloseModal }
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
    
  render() {
    // ------------------------------ if Error
    if(this.state.error) {
      return `Error: ${this.state.error.message}`
    }

    return (
      <React.Fragment>
        <h1 className="title">Disfruta de nuestro catalogo de peliculas</h1>
        {/* ------------------------------ if Error */}
        { this.loadCategoriesList() }
      </React.Fragment>
    )
  }
}

export default Catalogo