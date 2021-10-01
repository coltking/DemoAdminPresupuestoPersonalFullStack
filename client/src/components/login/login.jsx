import React, { Fragment, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { actionPostLogin } from '../../redux/userActions'

function Login() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    const HandleChange = (e) => {
        e.preventDefault()
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const dispatch = useDispatch()
    const history = useHistory()
    const validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase())
    }
    const HandleSubmit = (e) => {
        e.preventDefault()
        if (validateEmail(inputs.email)) {
            if (inputs.password !== '') {
                dispatch(actionPostLogin(inputs.email, inputs.password))
                setTimeout(() => {
                    return history.push('/')
                }, 200);
            } else {
                toast("Todos los campos son obligatorios.")
            }
        } else {
            toast("Email invalido.")
        }
    }
    return (
        <Fragment>
            <h5 className='text-center  mt-5'>INICIAR SESION</h5>
            <Form onSubmit={HandleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' value={inputs.email} name='email' placeholder='carlos@castañeda.com' onChange={HandleChange} />
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type='password' name='password' value={inputs.password} onChange={HandleChange} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant='success' type='submit' size='lg'>Enviar</Button>
                </div>
            </Form>
        </Fragment>
    )
}
export default Login
