import {combineReducers} from "redux";
import authReducer from './authReducer';
import {reducer} from 'redux-form';
import userReducer from "./userReducer";

export default combineReducers({
    authReducer,
    users: userReducer,
    form: reducer
})