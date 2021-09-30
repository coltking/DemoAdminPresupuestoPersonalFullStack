import React from 'react'
import { Fragment } from 'react'
import { Col } from 'react-bootstrap'
import CreateUserForm from '../createUserForm/createUserForm'
import UsersList from '../usersList/usersList'
import './home.css'
const Home = () => {
    return <Fragment>
        <Col className='justify-content-center'>
            <h4 className='text-center'>Te doy la bienvenida al administrador de presupuesto personal</h4>
            <p className='text-center'>Haz click en un usuario o crea uno nuevo para comenzar</p>
            <UsersList />
            <CreateUserForm />
        </Col>
    </Fragment>
}
export default Home
