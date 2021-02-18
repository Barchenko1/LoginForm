import React from 'react';
import {connect} from 'react-redux';
import {getBooks, searchBooks} from "../actions/solrBookActions";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";

class SolrBookList extends React.Component {

    componentDidMount() {
        // this.props.getBooks(this.props.match.params.id);
    }

    onTermSubmit = async term => {
        console.log(term);
        this.props.searchBooks(term);
    };

    renderBookList() {
        console.log(this.props)
        return this.props.books.map((book, index) => {
            return(
                <div className="item" key={index}>
                    <div className="content">
                        title is
                        <Link to={`/book/${book.id}`}>
                            {book.title}
                        </Link>
                        <div className="description">
                            author is {book.author}
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

export default connect(mapStateToProps, {getBooks, searchBooks})(SolrBookList);