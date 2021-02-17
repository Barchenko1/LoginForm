import {combineReducers} from "redux";
import authReducer from './authReducer';
import {reducer} from 'redux-form';
import userReducer from "./userReducer";

// export const INIT_STATE = {
//     username: null,
//     isSignedIn: null,
//     role: [],
//     user: null,
//     users: []
// }

export default combineReducers({
    authReducer,
    users: userReducer,
    form: reducer
})