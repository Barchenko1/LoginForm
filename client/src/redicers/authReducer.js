import {GET_USER, GET_USERS, REGISTRATION, SIGN_IN, SIGN_OUT} from '../actions/types'

const INIT_STATE = {
    isSignedIn: null,
    user: null,
    users: []
}

export default (state = INIT_STATE, action) => {
    if (action.type === SIGN_IN) {
        return {...state, user: action.payload}
    }
    if (action.type === SIGN_OUT) {

    }
    if (action.type === REGISTRATION) {
        return {...state}
    }

    return state;
}