import React, { Fragment } from 'react'
import '../styles/components/itemCarrousel.css'

const ItemCarrousel = (props) => {
  return (
    <Fragment>
      <div
        key={ props.movie.id }
        className="carrousel__item" 
        onClick={ props.onClick }
      >
        <figure>
          <img 
            src={ props.movie.medium_cover_image } 
            alt="caratula pelicula"
          />
        </figure>
        <div className="carrousel__item-details">
          <p className="item__title">
            { props.movie.title }
          </p>
          <p className="details">
            Range:{ props.movie.rating }
          </p>
          <p className="details">
            Year:{ props.movie.year }
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default ItemCarrousel