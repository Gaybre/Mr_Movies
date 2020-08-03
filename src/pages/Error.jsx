import React from 'react'
import '../styles/pages/error.css'

import Logo from '../img/logo-nav.png'
import ErrorIcon from '../img/error.png'
import Button from '../components/Button'


const Error = () => (
    <div className="error">
      <h1>
        No encontramos la ruta que buscabas
      </h1>
      <img 
        src={ Logo } 
        alt="Logo" 
        width="500"
      />
      <img 
        src={ ErrorIcon } 
        alt="error"
        className="error__notfound"
      />
      <Button 
        title="Ver el catalogo"
        navigation="catalogo"
      />
    </div>
)
  
export default Error