import React from 'react'

import './styles/itemCarrousel.css'

const ItemCarrousel = (props) => {
    const showMovies = () => (
        props.movies.map( item => (
            <div className="carrousel__item" key={ item.id }>
                <figure>
                    <img src={ item.medium_cover_image } alt="portada"/>
                </figure>
                <div className="carrousel__item-details">
                    <p className="item__title">{ item.title }</p>
                    <p className="details">Range: { item.rating }</p>
                    <p className="details">Year: { item.year }</p>
                </div>
            </div>
        ))
    )
    
    return(
        <React.Fragment>
            { showMovies() }
        </React.Fragment>
    )
}

export default ItemCarrousel