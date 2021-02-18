import {REGISTRATION, SIGN_IN, SIGN_OUT, GET_USER, GET_USERS} from "./types";
import apis from "../utils/apis";
import {ACCESS_TOKEN, BOOK_LIST, LOGIN_PAGE, USER_DETAILS, USER_LIST} from "../utils/consts";
import history from "../utils/history";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

const createBasicAuthToken = (username, password) => {
    return 'Basic ' + window.btoa(username + ":" + password)
}

const logout = () => {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('token');

    // deleteAxiosInterceptors();
}

const isUserLoggedIn = () => {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
}

const setupAxiosInterceptors = (token) => {
    console.log(token)
    apis.interceptors.request.use(
        (config) => {
            if (isUserLoggedIn()) {
                config.headers.authorization = token
            }
            return config
        }
    )
}

const deleteAxiosInterceptors = () => {
    console.log("deleteAxiosInterceptors")
    apis.interceptors.request.use(
        (config) => {
            delete config.headers.authorization
            return config;
        }
    )
}

const createSetAuthInterceptor = options => config => {
    if (options.access) {
        config.headers.Authorization = options.access;
    } else {
        delete config.headers.Authorization;
    }
    return config;
};

const registerSuccessfulLogin = (username, password) => {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem("login", username);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem('token', createBasicAuthToken(username, password))
    // setupAxiosInterceptors(createBasicAuthToken(username, password))
}

export const signIn = (formProps) => async dispatch => {
    console.log(formProps);
    const response = await apis.post('/api/auth/signin', formProps,
        { headers: { authorization: createBasicAuthToken(formProps.usernameOrEmail, formProps.password) }}
    )
    console.log(response.data);
    dispatch ({
        type: SIGN_IN,
        payload: response.data
    })
    registerSuccessfulLogin(formProps.usernameOrEmail, formProps.password);
    history.push(BOOK_LIST);
};

export const signOut = () => async dispatch => {
    await apis.get("/api/auth/signout");
    dispatch ({
        type: SIGN_OUT
    })
    logout();
    history.push(LOGIN_PAGE);
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
