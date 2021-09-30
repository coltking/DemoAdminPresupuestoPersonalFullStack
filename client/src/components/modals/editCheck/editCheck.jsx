import React, { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { actionUpdateCheck } from "../../../redux/userActions"
const ModalEditCheck = ({ idCheck, initialMount, initialConcept, CloseModal, modalState }) => {
    const [mount, setMount] = useState(0)
    const [concept, setConcept] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        setMount(initialMount)
        setConcept(initialConcept)
    }, [initialMount, initialConcept])
    return <Modal show={modalState} onHide={CloseModal} dialogClassName="d-flex">
        <Modal.Header closeButton>
            <Modal.Title>EDITAR ENTRADA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control type='text'
                value={concept}
                onChange={(e) => {
                    setConcept(e.target.value)
                }} />
            <Form.Control type='number'
                value={mount}
                onChange={(e) => {
                    if (initialMount < 1) {
                        if (e.target.value < 1) {
                            setMount(e.target.value)
                        } else {
                            alert("El valor no puede ser positivo.")
                        }
                    } else {
                        if (e.target.value >= 1) {
                            setMount(e.target.value)
                        } else {
                            alert("El valor no puede ser negativo.")
                        }
                    }
                }} />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary"
                onClick={() => {
                    setMount(0)
                    setConcept('')
                    CloseModal()
                }}>Cancelar</Button>
            <Button variant="primary"
                onClick={() => {
                    dispatch(actionUpdateCheck(idCheck, concept, mount))
                    setMount(0)
                    setConcept('')
                    CloseModal()
                }}>Guardar Cambios</Button>
        </Modal.Footer>
    </Modal>
}
export default ModalEditCheck
