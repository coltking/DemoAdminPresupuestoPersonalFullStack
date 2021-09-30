import React, { Fragment, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { actionPostNewUser } from '../../redux/homeActions'
const CreateUserForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    return <Fragment>
        <h5 className='text-center  mt-5'>CREA UN USUARIO NUEVO</h5>
        <Form onSubmit={() => {
            dispatch(actionPostNewUser(name))
        }}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' value={name} placeholder='Carlos Castañeda' onChange={(e) => {
                    e.preventDefault()
                    setName(e.target.value)
                }} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant='success' type='submit' size='lg'>Enviar</Button>
            </div>
        </Form>
    </Fragment>
}
export default CreateUserForm
