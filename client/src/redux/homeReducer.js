import { SETTING_TOAST } from "./constants"
const initialState = {
    toast: ''
}
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETTING_TOAST:
            return { ...state, toast: action.payload }
        default:
            return state
    }
}
export default homeReducer
