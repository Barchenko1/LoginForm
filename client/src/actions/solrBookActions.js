import apis from "../utils/apis";
import {GET_BOOK, GET_BOOKS, SEARCH_BOOKS, SIGN_OUT} from "./types";
import {createBasicAuthToken} from "../services/ApiUtilsService";

export const getBook = (id) => async dispatch => {
    const response = await apis.get(`/api/book/${id}`,
        { headers: { authorization: createBasicAuthToken(sessionStorage.getItem("login"), sessionStorage.getItem("password")) }}
    );
    dispatch ({
        type: GET_BOOK,
        payload: response.data
    })
}

export const getBooks = () => async dispatch  => {
    const response = await apis.get("/api/book/all",
        { headers: { authorization: createBasicAuthToken(sessionStorage.getItem("login"), sessionStorage.getItem("password")) }}
    );
    dispatch ({
        type: GET_BOOKS,
        payload: response.data.content
    })
}

export const searchBooks = (searchStr) => async dispatch => {
    console.log(searchStr);
    const response = await apis.get(`/api/book/${searchStr}`,
        { headers: { authorization: createBasicAuthToken(sessionStorage.getItem("login"), sessionStorage.getItem("password")) }}
    )
    console.log(response);
    dispatch ({
        type: SEARCH_BOOKS,
        term: searchStr,
        payload: response.data
    })
}

export const cleanBooks = () => async dispatch => {
    dispatch ({
        type: SIGN_OUT
    })
}