import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import userReducer from "./userReducer";
const rootReducers = combineReducers({
    homeReducer,userReducer
 })
export default rootReducers;