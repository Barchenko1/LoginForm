import {GET_USER, GET_USERS, REGISTRATION, SIGN_IN, SIGN_OUT} from '../actions/types'

const INIT_STATE = {
    username: null,
    isSignedIn: null,
    role: []
}

export default (state = INIT_STATE, action) => {
    if (action.type === SIGN_IN) {
        return {...state, isSignedIn: action.payload.authenticated, username: action.payload.principal.username, role: action.payload.authorities}
    }
    if (action.type === SIGN_OUT) {
        return {...state, isSignedIn: false, username: null, role: []}
    }
    if (action.type === REGISTRATION) {
        return {...state}
    }

    return state;
}