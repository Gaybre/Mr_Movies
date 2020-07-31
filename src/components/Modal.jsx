import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/components/modal.css'

const Modal = (props) => {
  if(!props.modalState ) {
    return null
  }
  return (
    ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__container">
          <button
            onClick={ props.onCloseModal } className="modal__close">
            X
          </button>
          { props.children }
        </div>
      </div>,
      document.getElementById('modal')
    ) 
  )
}

export default Modal