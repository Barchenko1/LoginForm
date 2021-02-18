import {GET_BOOK, GET_BOOKS, SEARCH_BOOKS, SIGN_OUT} from '../actions/types'

const INIT_STATE = {
    book: null,
    books: []
}

export default (state = INIT_STATE, action) => {
    if (action.type === GET_BOOK) {
        return {...state, book: action.payload}
    }
    if (action.type === GET_BOOKS) {
        return {...state, books: action.payload}
    }
    if (action.type === SIGN_OUT) {
        return {...state, book: null, books: []}
    }
    if (action.type === SEARCH_BOOKS) {
        return {...state, books: action.payload}
    }

    return state;
}