import React from 'react'
import '../styles/pages/home.css'

import Button from '../components/Button'
import WelcomeImg from '../img/logo.png'

const Home = () => (
  <div className="welcomeCard">
    <h1>
      Que gusto tenerte de vuelta
    </h1>
    <img 
      src={ WelcomeImg } 
      alt="img-bienvenido"
    />
    <h3>
      Hemos mejorado nuestra interfaz, esperamos que la disfrutes
    </h3>
    <Button 
      title="acceder"
      navigation="catalogo"
    />
  </div>
)

export default Home