import React from 'react'
import { Link } from 'react-router-dom'

import WelcomeImg from '../../img/logo.png'
import './styles/home.css'

const Home = () => (
    <div className="welcomeCard">
        <h1>Que gusto tenerte de vuelta</h1>
        <img src={ WelcomeImg } alt="img-bienvenido"/>
        <h3>Hemos mejorado nuestra interfaz, esperamos que la disfrutes</h3>
        <Link
        to="/Mr_Movies/catalogo"
        className="welcomeCard__button"
        >
            <p>Comenzar</p>
        </Link>
    </div>
)

export default Home