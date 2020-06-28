import React from 'react'
import { Link } from 'react-router-dom'

import './styles/navbar.css'
import Logo from '../img/logo-nav.png'

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/Mr_Movies/">
                <img src={ Logo } alt="logo"/>
            </Link>
            <div className="navbar__menu">
                <Link className="navbar__menu-item" to="/Mr_Movies/catalogo">Catalogo</Link>
                <Link className="navbar__menu-item" to="/Mr_Movies/contacto">Contacto</Link>
            </div>
        </div>
    )
}

export default Navbar