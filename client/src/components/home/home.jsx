import React from 'react'
import { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import './home.css'
import { useSelector } from 'react-redux'
import User from '../user/user'

//////////////////////////////////// Secondary Function
const Welcome = () => {
    const history = useHistory()
    const HandleClickLogin = (e) => {
        e.preventDefault()
        history.push('/login')
    }
    const HandleClickRegister = (e) => {
        e.preventDefault()
        history.push('/register')
    }
    return <Col className='justify-content-center'>
        <h1 className='text-center title'>Te doy la bienvenida.</h1>
        <p className='text-center'><a href='' onClick={HandleClickLogin}>inicia sesion </a> o
            <a href='' onClick={HandleClickRegister}> registrate</a> para comenzar</p>
    </Col>
}
//////////////////////////////////// END Secondary Function
//////////////////////////////////// Primary Function
const Home = () => {
    const name = useSelector(store => store.userReducer.user.name)
    return <Fragment>
        {name === '' ? <Welcome /> : <User />}
    </Fragment>
}
//////////////////////////////////// END Primary Function
export default Home
