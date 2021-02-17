export const createBasicAuthToken = (username, password) => {
    return 'Basic ' + window.btoa(username + ":" + password)
}