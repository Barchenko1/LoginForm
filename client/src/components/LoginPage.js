import React from 'react';
import LoginForm from "../forms/LoginForm";
import {connect} from 'react-redux';
import {signIn} from "../actions/authActions";

class LoginPage extends React.Component {

    onSubmit = (formProps) => {
        console.log(formProps)
        this.props.signIn(formProps);
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <LoginForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default connect(null, {signIn})(LoginPage);