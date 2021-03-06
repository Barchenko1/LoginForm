import React from 'react'
import {connect} from 'react-redux';
import {getUsers} from "../actions/userActions";
import SearchBar from "./SearchBar";

class UserList extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    onTermSubmit = async term => {
        // const response = await youtube.get('/search', {
        //     params: {
        //         q: term
        //     }
        // });
        // this.setState({videos : response.data.items, selectedVideo: response.data.items[0]})
    };

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
                <h2>Admin</h2>
                <SearchBar label="Book search" onFormSubmit={this.onTermSubmit}/>
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