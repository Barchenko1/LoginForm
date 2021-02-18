import {combineReducers} from "redux";
import authReducer from './authReducer';
import {reducer} from 'redux-form';
import userReducer from "./userReducer";
import sorlBookReducer from "./sorlBookReducer";

export default combineReducers({
    authReducer,
    users: userReducer,
    sorlBooks: sorlBookReducer,
    form: reducer
})