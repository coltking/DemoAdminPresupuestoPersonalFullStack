import axios from 'axios'
import apiUrl from '../config'
import { CHECK_DELETED, CHECK_UPDATED, SETTING_USER_CHECKS } from './constants'

export const actionGetUserChecks = (idUser) => {
    return (dispatch) => {
        axios.get(apiUrl + '/user/' + idUser, { withCredentials: true }).then(res => {
            console.log(res.data)
            dispatch({ type: SETTING_USER_CHECKS, payload: res.data })
        })
    }
}

export const actionPostUserCheck = (idUser, concept, mount) => {
    return (dispatch) => { //arreglar concepto por concept y entry por mount en el back
        axios.post(apiUrl + '/check/' + idUser, { idUser, concepto: concept, entry: mount }).then(
            dispatch(actionGetUserChecks(idUser))
        )
    }
}

export const actionDeleteCheck = (idCheck) => {
    return (dispatch) => {
        axios.delete(apiUrl + '/check/' + idCheck, { withCredentials: true }).then(res => {
            dispatch({ type: CHECK_DELETED })
        })
    }
}
export const actionUpdateCheck = (idCheck, concept, mount) => {
    return (dispatch) => {
        axios.put(apiUrl + '/check/' + idCheck, { concepto: concept, entry: mount }, { withCredentials: true }).then(res => {
            dispatch({ type: CHECK_UPDATED })
        })
    }
}