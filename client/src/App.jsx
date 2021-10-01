import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import './App.css'
import { Container } from 'react-bootstrap'
import Home from './components/home/home'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './components/user/user'
import Particles from 'react-particles-js'
import particlesCFG from './particlesjs-config.json'
import NavBar from './components/navbar/navBar';
import CreateUserForm from './components/createUserForm/createUserForm';
import Login from './components/login/login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="GeneralContainer">
          <Container className="ContentContainer">
            <Switch>
              <Route path='/user' component={User} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={CreateUserForm} />
              <Route exact path='/' component={Home} />
              <Redirect from='*' to="/" />
            </Switch>
          </Container>
        </div>
        {
          <Particles params={particlesCFG} />
        }
      </Router>
    </React.Fragment>
  )
}
export default App
