import React, { Fragment, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { actionPostNewUser } from '../../redux/homeActions'
const CreateUserForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase())
    }
    return <Fragment>
        <h5 className='text-center  mt-5'>NUEVO USUARIO</h5>
        <Form onSubmit={(e) => {
            e.preventDefault()
            if (name !== '' && password !== '' && email !== '') {
                if (validateEmail(email)) {
                    dispatch(actionPostNewUser(name, email, password))
                } else {
                    toast("Email invalido.")
                }
            } else {
                toast("Todos los campos son obligatorios.")
            }
        }}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' value={name} placeholder='Carlos Castañeda' onChange={(e) => {
                    e.preventDefault()
                    setName(e.target.value)
                }} />
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
    </Fragment >
}
export default CreateUserForm
