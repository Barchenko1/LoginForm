import React from 'react';
import {connect} from 'react-redux';
import {getUser} from "../actions/userActions";

class UserDetails extends React.Component {

    componentDidMount() {
        this.props.getUser();
    }

    renderUser() {
        console.log(this.props)
        if (this.props.user.accessToken) {
            return(
                <div className="description">
                    I'm {this.props.user.email} my role is
                </div>
            )
        }
    }

    renderUserDetails() {
        if (!this.props.user) {
            return <div>Loading...</div>
        }
        return(
            <div className="item">
                UserDetails
                <div className="content">
                    {this.renderUser()}
                </div>
            </div>
        )
    }

    render() {
        return(
            <div>
                {this.renderUserDetails()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {user: state.authReducer.user};
}

export default connect(mapStateToProps, {getUser})(UserDetails);