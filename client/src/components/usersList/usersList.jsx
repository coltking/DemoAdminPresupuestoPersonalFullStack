import React, { Fragment, useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { actionGetUsers } from '../../redux/homeActions'
const UsersList = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const users = useSelector(state => state.homeReducer.users);
    useEffect(() => {
        dispatch(actionGetUsers())
    }, [])
    return <Fragment>
        {users.length < 1 ? <Row md='auto' className='justify-content-center'><p>No hay usuarios registrados</p></Row>
            :
            <Row className='justify-content-around d-flex'>
                {users.map((user, index) => {
                    return (<Col className='justify-content-center d-flex mb-1'
                        key={user.name + index}
                        sm='6'
                        md='5'
                        lg='1'>
                        <Button variant='primary'
                            onClick={() => {
                                history.push('/user/' + user.idUser)
                            }}>
                            {user.name}
                        </Button>{' '}
                    </Col>)
                })}
            </Row>}
    </Fragment>
}
export default UsersList