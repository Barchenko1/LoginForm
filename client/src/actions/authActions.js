import {REGISTRATION, SIGN_IN, SIGN_OUT, GET_USER} from "./types";

export const signIn = (formProps) => {
    return {
        type: SIGN_IN
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const registration = (formProps) => {
    return {
        type: REGISTRATION
    }
}

export const getUser = () => {
    return {
        type: GET_USER
    }
}