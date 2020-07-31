import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/components/navbar.css'

import Logo from '../img/logo-nav.png'

const Navbar = () => (
  <div className="navbar">
    <Link to="/Mr_Movies/">
      <img src={ Logo } alt="Mr. movie logo"/>
    </Link>
    <div className="navbar__menu">
      <NavLink 
        className="navbar__menu-item" 
        activeClassName="active" 
        to="/Mr_Movies/catalogo"
      >
        Catalogo
      </NavLink>
      <NavLink 
        className="navbar__menu-item" 
        activeClassName="active" 
        to="/Mr_Movies/contacto"
      >
        Contacto
      </NavLink>
    </div>
  </div>
)

export default Navbar