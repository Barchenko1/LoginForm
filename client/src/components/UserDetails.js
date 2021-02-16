import React from 'react';
import {connect} from 'react-redux';
import {getUser} from "../actions/userActions";

class UserDetails extends React.Component {

    componentDidMount() {
        this.props.getUser();
    }

    renderUserDetails() {
        if (!this.props.user) {
            return <div>Loading...</div>
        }
        return(
            <div className="item">
                UserDetails
                <div className="content">
                    <div className="description">
                        I'm {this.props.user.firstName} {this.props.user.lastName} my role is {this.props.user.role.name}
                    </div>
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
    return {user: state.authReducer.user};
}

export default connect(mapStateToProps, {getUser})(UserDetails);