import { SETTING_USERS } from "./constants"
const initialState = {
    users: []
}
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETTING_USERS:
            return { ...state, users: action.payload }
        default:
            return state
    }
}
export default homeReducer
