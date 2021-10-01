import { CHECK_DELETED, CHECK_UPDATED, SETTING_USER, SETTING_USER_CHECKS } from "./constants"
const initialState = {
    user: {
        name: '',
        email: '',
        checks: []
    },
    balance: 0
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETTING_USER:
            return { ...state, user: action.payload }
        case CHECK_UPDATED:
            return { ...state }
        case SETTING_USER_CHECKS:
            return {
                ...state,
                user: {...state.user, checks: action.payload.checks},
                balance: action.payload.balance
            }
        case CHECK_DELETED:
            return { ...state }
        default:
            return { ...state }
    }
}
export default userReducer