import React from 'react';
import {connect} from 'react-redux';
import {signOut} from "../actions/authActions";
import authReducer from "../redicers/authReducer";
import {cleanUsers} from "../actions/userActions";

const Header = (props) => {

    const renderLogOutActions = () => {
        props.cleanUsers();
        props.signOut();
    }

    const renderLogOutButton = () => {
        console.log(props)
        if (props.isSignedIn === null) {
            return null;
        } else if (props.isSignedIn) {
            return(
                <button onClick={renderLogOutActions} className="ui red google button">
                    <i  className="google icon"/>
                    Sing Out
                </button>
            )
        }
    }

    return(
        <div className="ui secondary pointing menu">
            Head
            <div className="right menu">
                {renderLogOutButton()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { isSignedIn: state.authReducer.isSignedIn }
}

export default connect(mapStateToProps, {signOut, cleanUsers})(Header);