import {GET_USER, GET_USERS, SIGN_OUT} from '../actions/types'

const INIT_STATE = {
    user: null,
    users: []
}

export default (state = INIT_STATE, action) => {
    if (action.type === GET_USER) {
        return {...state, user: action.payload}
    }
    if (action.type === GET_USERS) {
        return {...state, users: action.payload}
    }
    if (action.type === SIGN_OUT) {
        return {...state, user: null, users: []}
    }

    return state;
}