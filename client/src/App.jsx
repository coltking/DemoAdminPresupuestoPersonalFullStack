import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import './App.css'
import { Container } from 'react-bootstrap'
import Home from './components/home/home'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './components/user/user'
import Particles from 'react-particles-js'
import particlesCFG from './particlesjs-config.json'


function App() {
  return (
    <React.Fragment>
      <Container fluid className="ContentContainer">
        <Router>
          <Switch>
            <Route path='/user/:idUser' component={User} />
            <Route exact path='/' component={Home} />
            <Redirect from='*' to="/" />
          </Switch>
        </Router>
      </Container>
      {/*<Particles params={particlesCFG} />*/}
    </React.Fragment>
  )
}

export default App
