import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Contacto from './pages/Contacto'
import Footer from '../components/Footer'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/catalogo" component={ Catalogo } />
      <Route exact path="/contacto" component={ Contacto } />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App