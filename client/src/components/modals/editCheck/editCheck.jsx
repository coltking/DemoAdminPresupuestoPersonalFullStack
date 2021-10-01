import React, { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { actionUpdateCheck } from "../../../redux/userActions"
const ModalEditCheck = ({ idCheck, initialMount, initialConcept, CloseModal, modalState }) => {
    const [inputs, setInputs] = useState({
        mount: 0,
        concept: ''
    })
    const HandleChange = (e) => {
        e.preventDefault()
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const HandleCancel = () => {
        setInputs({ mount: 0, concept: '' })
        CloseModal()
    }
    const HandleAccept = () => {
        if ((initialMount < 1 && inputs.mount < 1) ||(initialMount >=1 && inputs.mount >= 1)){
            dispatch(actionUpdateCheck(idCheck, inputs.concept, inputs.mount))
            setInputs({ mount: 0, concept: '' })
            CloseModal()
        } else if (initialMount < 1){
            toast("El valor no puede ser positivo.")
        } else {
            toast("El valor no puede ser negativo.")
        }
    }
    const dispatch = useDispatch()
    useEffect(() => {
        setInputs({ mount: initialMount, concept: initialConcept })
    }, [initialMount, initialConcept])
    return <Modal show={modalState} onHide={CloseModal} dialogClassName="d-flex">
        <Modal.Header closeButton>
            <Modal.Title>EDITAR ENTRADA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control type='text' name='concept' value={inputs.concept} onChange={HandleChange} />
            <Form.Control type='number' name='mount' value={inputs.mount} onChange={HandleChange} />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={HandleCancel}>Cancelar</Button>
            <Button variant="primary" onClick={HandleAccept}>Guardar Cambios</Button>
        </Modal.Footer>
    </Modal>
}
export default ModalEditCheck
