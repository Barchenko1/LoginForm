import {combineReducers} from "redux";
import authReducer from './authReducer';
import {reducer} from 'redux-form';
import userReducer from "./userReducer";
import sorlBookReducer from "./solrBookReducer";

export default combineReducers({
    authReducer,
    users: userReducer,
    solrBooks: sorlBookReducer,
    form: reducer
})