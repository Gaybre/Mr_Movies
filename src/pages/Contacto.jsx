import React from 'react'
import '../styles/pages/contacto.css'

import Github from '../img/gh.png'
import Instagram from '../img/ig.png'
import Linkedin from '../img/lk.png'
import Twitter from '../img/tw.png'
// import Avatar from 'https://avatars2.githubusercontent.com/u/55895001?s=460&u=f04c2b0cf200a484222678ecf2cd0d820b32bd9a&v=4'

const Contacto = () => (
  <div className="container">
    <h1>
      Hola! Soy Juan Gaybre
    </h1>
    <h4>
      Mr. Movies es una marca inventada, ya sabes,
      una excusa para ir practicando, pero yo soy 100% real no fake. 
    </h4>
    <img 
      className="avatar" 
      src="https://avatars2.githubusercontent.com/u/55895001?s=460&u=f04c2b0cf200a484222678ecf2cd0d820b32bd9a&v=4"
      alt="me"
    />
    <h3>
      ¿Tienes alguna duda? charlemos ;) <br/>
      ¿Algun consejo? ayudame a mejorar :D
    </h3>
    <div className="redes">
      <a href="https://github.com/Gaybre">
        <img 
          src={ Github } 
          alt="icon-redes" 
        />
      </a>
      <a href="https://www.linkedin.com/in/juangaybre/" >
        <img 
          src={ Linkedin } 
          alt="icon-redes" 
        />
      </a>
      <a href="https://twitter.com/JuanGaybre">
        <img 
          src={ Twitter } 
          alt="icon-redes" 
        />
      </a>
      <a href="https://www.instagram.com/juangaybre/">
        <img 
          src={ Instagram } 
          alt="icon-redes" 
        />
      </a>
    </div>
    <h4>
      Me puedes encontrar en redes
    </h4>
  </div>
)

export default Contacto