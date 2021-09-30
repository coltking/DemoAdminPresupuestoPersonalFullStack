import axios from 'axios'
import { SETTING_USERS } from './constants'

import { apiUrl } from '../config'

export const actionGetUsers = () => {
    return (dispatch) => {
        axios.get(apiUrl + '/user', { withCredentials: true }).then(res => {
            dispatch({ type: SETTING_USERS, payload: res.data })
        })
    }
}

export const actionPostNewUser = (name) => {
    return (dispatch) => {
        axios.post(apiUrl + '/user', { name }, { withCredentials: true }).then(res => {
            dispatch(actionGetUsers())
        }).catch(error => {
            console.log(error);
        })
    }
}