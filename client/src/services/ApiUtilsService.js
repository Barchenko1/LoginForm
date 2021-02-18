export const createBasicAuthToken = (username, password) => {
    return 'Basic ' + window.btoa(username + ":" + password)
}

export const isUserLoggedIn = () => {
    return sessionStorage.getItem("token");
}