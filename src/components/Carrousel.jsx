import React from 'react'

import ItemCarrousel from './ItemCarrousel'

const Carrousel = (props) => {
  const categoryList = props.movies.map( item => (
    <ItemCarrousel 
      key={ item.id }
      movie={ item }
      onOpenModal={ props.onOpenModal }
    /> 
  ))
  
  return categoryList
}

export default Carrousel