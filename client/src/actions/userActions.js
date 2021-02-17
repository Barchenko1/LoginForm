import {GET_USER, GET_USERS, SIGN_OUT} from "./types";
import apis from "../utils/apis";
import history from "../utils/history";
import {ACCESS_TOKEN} from "../utils/consts";
import axios from "axios";
import {createBasicAuthToken} from "../services/ApiUtilsService";
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "./authActions";

export const getUser = () => async dispatch => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await apis.get(`/api/user/me?login=${user.login}`);
    console.log(response.data);
    dispatch ({
        type: GET_USER,
        payload: response.data
    })
}

export const getUsers = () => async dispatch  => {
    console.log("getUsers")
    const response = await apis.get("/api/user/all",
        { headers: { authorization: createBasicAuthToken(sessionStorage.getItem("login"), sessionStorage.getItem("password")) }}
    );
    console.log(response);
    dispatch ({
        type: GET_USERS,
        payload: response.data
    })
}

export const cleanUsers = () => async dispatch => {
    dispatch ({
        type: SIGN_OUT
    })
}