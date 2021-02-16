import {GET_USER, GET_USERS} from "./types";
import apis from "../utils/apis";
import history from "../utils/history";

export const getUser = () => async dispatch => {
    const response = await apis.get("/api/user/me");
    console.log(response);
    return {
        type: GET_USER,
        payload: response.data
    }
}

export const getUsers = () => async dispatch  => {
    const response = await apis.get('/api/user/all');
    console.log(response)
    dispatch ({
        type: GET_USERS,
        payload: response.data
    })
}