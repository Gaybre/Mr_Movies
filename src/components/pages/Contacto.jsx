import React from 'react'
import Github from '../../img/gh.png'
import Instagram from '../../img/ig.png'
import Linkedin from '../../img/lk.png'
import Twitter from '../../img/tw.png'

import './styles/contacto.css'

const Contacto = () => (
    <div className="container">
        <h1>Hola! Soy Juan Gaybre</h1>
        <img className="avatar" src="https://avatars2.githubusercontent.com/u/55895001?s=460&u=f04c2b0cf200a484222678ecf2cd0d820b32bd9a&v=4" alt="me"/>
        <h4>Mr. Movies es una marca inventada, ya sabes una excusa para practicar lo aprendido en esta semana pero yo soy real, charlemos ;)</h4>
        <h3>
            Me puedes encontrar en redes
        </h3>
        <div className="redes">
            <a href="https://github.com/Gaybre">
                <img src={ Github } alt="icon-redes" />
            </a>
            <a href="https://www.linkedin.com/in/juangaybre/" >
                <img src={ Linkedin } alt="icon-redes" />
            </a>
            <a href="https://twitter.com/JuanGaybre">
                <img src={ Twitter } alt="icon-redes" />
            </a>
            <a href="https://www.instagram.com/juangaybre/">
                <img src={ Instagram } alt="icon-redes" />
            </a>
        </div>
    </div>
)

export default Contacto