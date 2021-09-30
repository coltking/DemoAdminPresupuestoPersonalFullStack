import { CHECK_DELETED, CHECK_UPDATED, SETTING_USER_CHECKS } from "./constants"
const initialState = {
    user: {
        name: '',
        checks: [],
    },
    balance: 0
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_UPDATED:
            return { ...state }
        case SETTING_USER_CHECKS:
            return { ...state,
                user: action.payload.user,
            balance: action.payload.balance }
        case CHECK_DELETED:
            return { ...state }
        default:
            return { ...state }
    }
}
export default userReducer