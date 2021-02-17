import React from 'react'
import {connect} from 'react-redux';
import {getUsers} from "../actions/userActions";

class UserList extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    renderUserList() {
        return this.props.users.map((user, index) => {
            return(
                <div className="item" key={index}>
                    <div className="content">
                        <div className="description">
                            {user.login} {user.email} {user.role}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <div className="ui celled list">
                    {this.renderUserList()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        users: state.users.users
    }
}

export default connect(mapStateToProps, {getUsers})(UserList);