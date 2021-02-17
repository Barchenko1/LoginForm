import React from 'react'
import {Field, reduxForm} from "redux-form";
import {LOGIN_PAGE, REGISTRATION_PAGE} from "../utils/consts";
import {Link} from "react-router-dom";

class LoginForm extends React.Component {

    renderError(meta) {

    }

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
        return(
            <div className={className}>
                <label>{formProps.label}</label>
                <input
                    onChange={formProps.input.onChange}
                    value={formProps.input.value} autoComplete="off"
                />
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    onSubmit = (formProps) => {
        this.props.onSubmit(formProps);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field
                    name="usernameOrEmail"
                    component={this.renderInput}
                    label="Enter Login or Email"/>
                <Field
                    name="password"
                    component={this.renderInput}
                    label="Enter Password"/>
                <button className="ui button primary">
                    Login
                </button>
                <Link to={REGISTRATION_PAGE}>Register</Link>
            </form>
        );
    }
}

const validation = (formProps) => {
    const errors = {};

    return errors
}

const formWrapper = reduxForm({
    form: 'loginForm',
    validation
})(LoginForm);

export default formWrapper;