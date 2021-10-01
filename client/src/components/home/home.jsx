import React from 'react'
import { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import './home.css'
import { useSelector } from 'react-redux'
import User from '../user/user'
const Home = () => {
    const history = useHistory()
    const name = useSelector(store => store.userReducer.user.name)
    return <Fragment>
        {name === '' ? <Col className='justify-content-center'>
            <h1 className='text-center title'>Te doy la bienvenida.</h1>
            <p className='text-center'><a href='' onClick={((e) => {
                e.preventDefault()
                history.push('/login')
            })}>inicia sesion</a> o <a href='' onClick={((e) => {
                e.preventDefault()
                history.push('/register')
            })}>registrate</a> para comenzar</p>
        </Col> : <Col>
        <User/>
        </Col>}
    </Fragment>
}
export default Home
