import React from 'react'
import Modal from './Modal'

const ContentModal = (props) => (
  <Modal 
    modalState={ props.modalState } 
    onCloseModal={ props.onCloseModal }
  >
    <h2 className="modal__title">{ props.movieSelected.title }</h2>
    <div className="modal__video">
      <iframe 
        src={ `https://www.youtube.com/embed/${ props.movieSelected.yt_trailer_code }` } 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
    </div>
    <div className="modal__description">
      <p>
        <span>Year: </span>
        { props.movieSelected.year }
      </p>
      <p>
        <span>Desciption: </span>
        { props.movieSelected.description_full }
      </p>
    </div>
  </Modal>
)

export default ContentModal