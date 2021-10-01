import React, { Fragment, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { actionPostNewUser } from '../../redux/homeActions'
const CreateUserForm = () => {
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    })
    const validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase())
    }
    const HandleChange = (e) => {
        e.preventDefault()
        setInputs({...inputs,
        [e.target.name]: e.target.value
        })
    }
    const HandleSubmit = (e) => {
        e.preventDefault()
        if (inputs.name !== '' && inputs.password !== '' && inputs.email !== '') {
            if (validateEmail(inputs.email)) {
                dispatch(actionPostNewUser(inputs.name, inputs.email, inputs.password))
            } else {
                toast("Email invalido.")
            }
        } else {
            toast("Todos los campos son obligatorios.")
        }
    }
    return <Fragment>
        <h5 className='text-center  mt-5'>NUEVO USUARIO</h5>
        <Form onSubmit={HandleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' name='name' value={inputs.name} placeholder='Carlos Castañeda' onChange={HandleChange} />
                <Form.Label>Email</Form.Label>
                <Form.Control type='text' name='email' value={inputs.email} placeholder='carlos@castañeda.com' onChange={HandleChange} />
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' name='password' value={inputs.password} onChange={HandleChange} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant='success' type='submit' size='lg'>Enviar</Button>
            </div>
        </Form>
    </Fragment>
}
export default CreateUserForm
