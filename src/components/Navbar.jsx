import React from 'react'
import { Link } from 'react-router-dom'

import './styles/navbar.css'
import Logo from '../img/logo.png'

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/">
                <img src={ Logo } alt="logo"/>
            </Link>
            <div className="navbar__menu">
                <Link className="navbar__menu-item" to="/catalogo">Catalogo</Link>
                <Link className="navbar__menu-item" to="/contacto">Contacto</Link>
            </div>
        </div>
    )
}

export default Navbar