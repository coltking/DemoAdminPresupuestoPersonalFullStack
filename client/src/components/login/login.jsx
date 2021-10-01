import React, { Fragment, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { actionPostLogin } from '../../redux/userActions'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase())
    }
    return (
        <Fragment>
        <h5 className='text-center  mt-5'>NUEVO USUARIO</h5>
        <Form onSubmit={(e) => {
            e.preventDefault()
            if (validateEmail(email)){
                if (password !== ''){
                    console.log(email,password);
                    dispatch(actionPostLogin(email, password))
                    setTimeout(() => {
                        return history.push('/')
                    }, 200);
                } else {
                    toast("Todos los campos son obligatorios.")
                }
            }else {
                toast("Email invalido.")
            }
        }}>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type='text' value={email} placeholder='carlos@castañeda.com' onChange={(e) => {
                    e.preventDefault()
                    setEmail(e.target.value)
                }} />
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' value={password} onChange={(e) => {
                    e.preventDefault()
                    setPassword(e.target.value)
                }} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant='success' type='submit' size='lg'>Enviar</Button>
            </div>
        </Form>
    </Fragment>
    )
}

export default Login
