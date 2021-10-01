import axios from 'axios'
import apiUrl from '../config'
import { CHECK_DELETED, CHECK_UPDATED, SETTING_USER, SETTING_USER_CHECKS } from './constants'
export const verifyLogin = () => {
    return (dispatch) => {
        const localToken = localStorage.getItem('token')
        if (localToken) {
            const user = localStorage.getItem('user')
            dispatch({ type: SETTING_USER, payload: JSON.parse(user) })
        }
    }
}
export const actionGetUserChecks = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        axios.get(apiUrl + '/check', { withCredentials: true, headers: { 'Authorization': 'Bearer '+token} }).then(res => {
            dispatch({ type: SETTING_USER_CHECKS, payload: res.data })
        })
    }
}
export const actionPostLogin = (email, password) => {
    return async dispatch => {
        const { data } = await (await axios.post(apiUrl + '/user/login', { email, password },{withCredentials: true}))
        console.log("login",data);
        if (data.token) {
            localStorage.setItem('token',data.token)
            localStorage.setItem('user',JSON.stringify(data.user))
            dispatch({type: SETTING_USER,payload: data.user })
        }
    }
}
export const actionPostUserCheck = (concept, mount) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        axios.post(apiUrl + '/check', { concepto: concept, entry: mount }, { withCredentials: true, headers: { 'Authorization': 'Bearer '+token} }).then(
            dispatch(actionGetUserChecks())
        )
    }
}
export const actionDeleteCheck = (idCheck) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        axios.delete(apiUrl + '/check/' + idCheck, { withCredentials: true, headers: { 'Authorization': 'Bearer '+token} }).then(res => {
            dispatch({ type: CHECK_DELETED })
        })
    }
}
export const actionUpdateCheck = (idCheck, concept, mount) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        axios.put(apiUrl + '/check/' + idCheck, { concepto: concept, entry: mount }, { withCredentials: true, headers: { 'Authorization': 'Bearer '+token} }).then(res => {
            dispatch({ type: CHECK_UPDATED })
        })
    }
}
