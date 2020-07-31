import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Contacto from './pages/Contacto'
import Footer from './components/Footer'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/Mr_Movies/" component={ Home } />
      <Route exact path="/Mr_Movies/catalogo" component={ Catalogo } />
      <Route exact path="/Mr_Movies/contacto" component={ Contacto } />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App