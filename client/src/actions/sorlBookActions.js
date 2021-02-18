import apis from "../utils/apis";
import {GET_BOOK, GET_BOOKS, SIGN_OUT} from "./types";
import {createBasicAuthToken} from "../services/ApiUtilsService";

export const getBook = () => async dispatch => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await apis.get(`/api/user/me?login=${user.login}`);
    console.log(response.data);
    dispatch ({
        type: GET_BOOK,
        payload: response.data
    })
}

export const getBooks = () => async dispatch  => {
    console.log("getBooks")
    const response = await apis.get("/api/book/all",
        { headers: { authorization: createBasicAuthToken(sessionStorage.getItem("login"), sessionStorage.getItem("password")) }}
    );
    console.log(response);
    dispatch ({
        type: GET_BOOKS,
        payload: response.data
    })
}

export const cleanBooks = () => async dispatch => {
    dispatch ({
        type: SIGN_OUT
    })
}