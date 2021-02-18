import React from 'react';
import {connect} from 'react-redux';
import {getBooks} from "../actions/sorlBookActions";
import SearchBar from "./SearchBar";

class SorlBookList extends React.Component {

    componentDidMount() {
        this.props.getBooks();
    }

    onTermSubmit = async term => {
        // const response = await youtube.get('/search', {
        //     params: {
        //         q: term
        //     }
        // });
        // this.setState({videos : response.data.items, selectedVideo: response.data.items[0]})
    };

    renderBookList() {
        console.log(this.props)
        return this.props.books.map((book, index) => {
            return(
                <div className="item" key={index}>
                    <div className="content">
                        <div className="description">
                            book
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
                    {this.renderBookList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.sorlBooks.books
    }
}

export default connect(mapStateToProps, {getBooks})(SorlBookList);