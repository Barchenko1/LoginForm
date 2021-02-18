import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isUserLoggedIn} from "../services/ApiUtilsService";
import {LOGIN_PAGE} from "../utils/consts";

class AuthenticatedRoute extends React.Component {
    render() {
        console.log(isUserLoggedIn())
        if (isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to={LOGIN_PAGE} />
        }
    }
}

export default AuthenticatedRoute