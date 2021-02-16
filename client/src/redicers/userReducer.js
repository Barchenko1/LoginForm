import {GET_USER, GET_USERS} from '../actions/types'

const INIT_STATE = {
    isSignedIn: null,
    user: {},
    users: []
}

export default (state = INIT_STATE, action) => {
    if (action.type === GET_USER) {

    }
    if (action.type === GET_USERS) {
        return {...state, users: action.payload}
    }

    return state;
}