import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actionDeleteCheck, actionGetUserChecks, actionPostUserCheck } from '../../redux/userActions'
import { PencilSquare, Trash } from 'react-bootstrap-icons'
import ModalEditCheck from '../modals/editCheck/editCheck'
import './user.css'
const User = () => {
    const [concept, setConcept] = useState('')
    const [modalShow, setModalShow] = useState(false)
    const [modalIdCheck, setModalIdCheck] = useState(null)
    const [modalInitialMount, setModalInitialMount] = useState(null)
    const [modalInitialConcept, setModalInitialConcept] = useState(null)
    const [mount, setMount] = useState(0)
    const { idUser } = useParams()
    const dispatch = useDispatch()
    const username = useSelector(store => store.userReducer.user.name)
    const entryData = useSelector(store => store.userReducer.user.checks)
    const balance = useSelector(store => store.userReducer.balance)
    const HandleModalShow = () => {
        setModalShow(!modalShow);
        setTimeout(() => {
            return dispatch(actionGetUserChecks())
        }, 200)
    }
    const HandleEdit = (entry) => {
            setModalIdCheck(entry.idChecks)
            setModalInitialConcept(entry.concepto)
            setModalInitialMount(entry.entry)
            HandleModalShow()
    }
    const HandleClick = async () => {
        await dispatch(actionPostUserCheck(concept, mount))
        await setConcept('');
        await setMount(0);
        await dispatch(actionGetUserChecks(idUser))
    }
    const HandleDelete = (idCheck) => {
        dispatch(actionDeleteCheck(idCheck))
        setTimeout(() => {
            return dispatch(actionGetUserChecks(idUser))
        }, 200)
    }
    useEffect(() => {
        dispatch(actionGetUserChecks(idUser))
    }, [balance])
    return <Col className='justify-content-center'>
        <ModalEditCheck idCheck={modalIdCheck} initialMount={modalInitialMount} initialConcept={modalInitialConcept} CloseModal={HandleModalShow} modalState={modalShow} />
        <Row className='justify-content-center'>
            <h3 className='text-center'>{username}</h3>
        </Row>
        <Row className='justify-content-center'>
            <h4 className='text-center'>Saldo actual: ${balance.toFixed(2)}</h4>
        </Row>
        <Col>
            <Row>
                <Col className='text-center'>CONCEPTO</Col>
                <Col className='text-center'>MONTO</Col>
                <Col className='text-center'>FECHA</Col>
                <Col className='text-center'>TIPO</Col>
                <Col></Col>
            </Row>
            {entryData ? entryData.map((entry, index) => {
                if (entry.entry > 0) {
                    return <Ingreso entry={entry} index={index} HandleEdit={HandleEdit} HandleDelete={HandleDelete}/>
                } else {
                    return <Egreso entry={entry} index={index} HandleEdit={HandleEdit} HandleDelete={HandleDelete}/>
                }
            }) : undefined}
            <Row className='text-center'>
                <Col>NUEVA ENTRADA</Col>
            </Row>
            <Row className={'justify-content-center '}>
                <Col>
                    <Form.Control className='text-center'
                        type='input'
                        value={concept}
                        onChange={(e) => { e.preventDefault(); setConcept(e.target.value) }}
                        placeholder='ingrese un concepto' />
                </Col>
                <Col>
                    <Form.Control className='text-center'
                        type='number'
                        value={mount}
                        onChange={(e) => { e.preventDefault(); setMount(e.target.value) }}
                        placeholder='ingrese un monto' />
                </Col>
                <Col>
                    <Form.Control className='text-center'
                        type='input'
                        value={new Date().toLocaleDateString('es-ES')}
                        disabled />
                </Col>
                <Col>
                    <fieldset disabled className='text-center'>
                        {mount > 0 ?
                            <Button variant='success'>INGRESO</Button>
                            :
                            <Button variant='danger'>EGRESO</Button>}
                    </fieldset>
                </Col>
                <Col>
                    <fieldset className='text-center'>
                        <Button className='text-center'variant='primary' onClick={HandleClick}>AGREGAR</Button>
                    </fieldset>
                </Col>
            </Row>
        </Col>
    </Col>
}

/////////////////////////////////////////////////Secondary Functions
const Ingreso = ({entry, index,HandleEdit,HandleDelete}) => {
    return <Row className={'justify-content-center ingreso'} key={entry.updatedAt + index}>
    <Col className='text-center'>{entry.concepto}</Col>
    <Col className='text-center'>${entry.entry.toFixed(2)}</Col>
    <Col className='text-center'>{new Date(entry.updatedAt).toLocaleDateString('es-ES', { hour: 'numeric', minute: 'numeric', second: 'numeric' })}</Col>
    <Col className='text-center'>INGRESO</Col>
    <Col className='text-center'>
        <Row className='justify-content-center'>
            <Col>
                <Button variant='warning' onClick={() => HandleEdit(entry)}>
                    <PencilSquare />
                </Button>
            </Col>
            <Col>
                <Button variant='danger' onClick={() => {
                    HandleDelete(entry.idChecks)
                }}>
                    <Trash />
                </Button>
            </Col>
        </Row>
    </Col>
</Row>
}
const Egreso = ({entry, index,HandleEdit,HandleDelete}) => {
    return <Row className={'justify-content-center egreso'} key={entry.updatedAt + index}>
    <Col className='text-center'>{entry.concepto}</Col>
    <Col className='text-center'>${entry.entry}</Col>
    <Col className='text-center'>{new Date(entry.updatedAt).toLocaleDateString('es-ES', { hour: 'numeric', minute: 'numeric', second: 'numeric' })}</Col>
    <Col className='text-center'>EGRESO</Col>
    <Col className='text-center'>
        <Row className='justify-content-center'>
            <Col>
                <Button variant='warning' onClick={() => HandleEdit(entry)}>
                    <PencilSquare />
                </Button>
            </Col>
            <Col>
                <Button variant='danger' onClick={() => {
                    HandleDelete(entry.idChecks)
                }}>
                    <Trash />
                </Button>
            </Col>
        </Row>
    </Col>
</Row>
}
export default User
