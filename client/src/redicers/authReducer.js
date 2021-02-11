import {GET_USER, REGISTRATION, SIGN_IN, SIGN_OUT} from '../actions/types'

const INIT_STATE = {
    isSignedIn: null,
    user: null
}

export default (state = INIT_STATE, action) => {
    if (action.type === SIGN_IN) {
        return {...state}
    }
    if (action.type === SIGN_OUT) {

    }
    if (action.type === REGISTRATION) {

    }
    if (action.type === GET_USER) {

    }

    return state;
}