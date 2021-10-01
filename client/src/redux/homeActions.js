import axios from 'axios'
import { toast } from 'react-toastify'
import { apiUrl } from '../config'
export const actionToast = (text) => {
    toast(text)
}
export const actionPostNewUser = (name,email,password) => {
    return (dispatch) => {
        axios.post(apiUrl + '/user/register', { name,email,password }, { withCredentials: true }).then(res => {
            dispatch(actionToast("Usuario registrado correctamente."))
        }).catch(error => {
            console.log(error.message);
            if (error.message === "Request failed with status code 401") {
                dispatch(actionToast("El email ya se encuentra registrado."))
            }
        })
    }
}
