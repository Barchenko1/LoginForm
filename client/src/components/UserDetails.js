import React from 'react';
import {connect} from 'react-redux';
import {getUser} from "../actions/authActions";
import {useEffect} from 'react';

const UserDetails = (props) => {

    useEffect(() => {
        props.getUser();
    })

    return(
        <div>
            UserDetails
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(null, {getUser})(UserDetails);