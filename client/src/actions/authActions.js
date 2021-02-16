import {REGISTRATION, SIGN_IN, SIGN_OUT, GET_USER, GET_USERS} from "./types";
import apis from "../utils/apis";
import {LOGIN_PAGE, USER_DETAILS} from "../utils/consts";
import history from "../utils/history";

export const signIn = (formProps) => async dispatch => {
    const response = await apis.get('/api/auth/signin',
        { headers: { authorization: 'Basic ' + window.btoa(formProps.login + ":" + formProps.password) } }
        );
    console.log(response);
    dispatch ({
        type: SIGN_IN,
        payload: response.data
    })
    history.push(USER_DETAILS);
};

export const signOut = (formProps) => async dispatch => {
    dispatch ({
        type: SIGN_OUT
    })
}

export const registration = (formProps) => async dispatch => {
    const form = {...formProps, role:"USER"}
    const response = await apis.post('/api/auth/signup', form);
    console.log(response);
    dispatch ({
        type: REGISTRATION,
        payload: response.data
    })
    if (response.data.success === true) {
        history.push(LOGIN_PAGE);
    }
}
