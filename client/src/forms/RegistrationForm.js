import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {LOGIN_PAGE} from "../utils/consts";

class RegistrationForm extends React.Component {
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
                    name="firstName"
                    component={this.renderInput}
                    label="First Name"/>
                <Field
                    name="lastName"
                    component={this.renderInput}
                    label="Last Name"/>
                <Field
                    name="login"
                    component={this.renderInput}
                    label="Login"/>
                <Field
                    name="password"
                    component={this.renderInput}
                    label="Password"/>
                {/*<Field*/}
                {/*    name="confirm password"*/}
                {/*    component={this.renderInput}*/}
                {/*    label="Confirm Password"/>*/}
                <button className="ui button primary">
                    Register
                </button>
                <Link to={LOGIN_PAGE}>Cancel</Link>
            </form>
        );
    }


}

const validation = (formProps) => {
    const errors = {};

    return errors
}

const formWrapper = reduxForm({
    form: 'registrationForm',
    validation
})(RegistrationForm);

export default formWrapper;