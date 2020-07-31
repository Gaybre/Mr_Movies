import React, { Fragment } from 'react'

import Modal from './Modal'
import ItemCarrousel from './ItemCarrousel'

const Carrousel = (props) => {
  var dataMovieSelected = []

  const isSelectedMovie = (movie, modal) => {
    dataMovieSelected = movie
    console.log('dataMovieSelected', dataMovieSelected.title)
    if(modal) return props.onOpenModal
  }
    
  const showModal = (dataMovieSelected) => (
      <Modal 
        modalState={ props.modalState } 
        onCloseModal={ props.onCloseModal }
      >
        <h1> { `soy un modal: ${dataMovieSelected.title}` } </h1>
        {/* <h1>{  }</h1>
        <div className="modal__video">
        <iframe 
        width="100%"
        src={ `https://www.youtube.com/embed/${ this.state.listMovies[0].action[0].yt_trailer_code }` } 
        frameBorder="0" 
        // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        />
        </div>
        <div className="modal__description">
        <p>{ this.state.listMovies[0].action[0].title }</p>
      </div> */}
      </Modal>
  )
  const getItems = () => {
    const categoryList = props.movies.map( item => (
      <ItemCarrousel 
        key={ item.id }
        movie={ item }
        onClick={ () => isSelectedMovie( item, true ) }
        modalState={ props.modalState } 
        onOpenModal={ props.onOpenModal }
      /> 
    ))
    return categoryList
  }            
  
  return (
    <Fragment>
      { getItems() }
      { props.modalState && showModal(dataMovieSelected) }
    </Fragment>
  )
}

export default Carrousel