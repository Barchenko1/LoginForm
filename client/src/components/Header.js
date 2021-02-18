import React from 'react';
import {connect} from 'react-redux';
import {signOut} from "../actions/authActions";
import {cleanUsers} from "../actions/userActions";
import {cleanBooks} from "../actions/solrBookActions";

const Header = (props) => {

    const renderLogOutActions = () => {
        props.cleanBooks();
        props.cleanUsers();
        props.signOut();
    }

    const renderLogOutButton = () => {
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

export default connect(mapStateToProps, {signOut, cleanUsers, cleanBooks})(Header);