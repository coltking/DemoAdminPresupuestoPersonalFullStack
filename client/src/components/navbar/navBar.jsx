import React, { Fragment, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { verifyLogin } from '../../redux/userActions'
import './navBar.css'


function NavBar() {
    const history = useHistory()
    const dispatch = useDispatch()
    const email = useSelector(store => store.userReducer.user.email)
    const HandleLogin = () => history.push('/login')
    const HandleRegister = () => history.push('/register')
    const HandleHome = () => history.push('/')
    const Logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setTimeout(() => {
            return history.go(0)
        }, 100)
    }
    useEffect(() => {
        dispatch(verifyLogin())
    }, [])
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand onClick={HandleHome}>
                    { email === '' ? "Presupuesto personal" : email }
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={HandleHome}>Home</Nav.Link>
                        {email === "" ?
                            <Fragment>
                                <Nav.Link onClick={HandleLogin}>Iniciar sesion</Nav.Link>
                                <Nav.Link onClick={HandleRegister}>Registrarme</Nav.Link>
                            </Fragment>
                            : <Nav.Link onClick={Logout}>Cerrar sesion</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
