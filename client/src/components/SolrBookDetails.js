import React from 'react';
import {connect} from 'react-redux';
import {getBook} from "../actions/solrBookActions";

class SolrBookDetails extends React.Component {

    makeBold(input) {
        let regExp = new RegExp(this.props.term, 'g')
        return (
            input.replace(regExp, '<b>'+ this.props.term + '</b>')
        )
    }

    render() {
        console.log(this.props);
        if (!this.props.book) {
            return <div>Loading...</div>
        }

        const { title, author, description} = this.props.book;

        return (
            <div>
                <p>{this.makeBold(title)}</p>
                <p>{this.makeBold(author)}</p>
                <p>{this.makeBold(description)}</p>
            </div>
        )
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        book: state.solrBooks.books.find(book => book.id == ownProps.match.params.id),
        term: state.solrBooks.term
    }
}

export default connect(mapStateToProps, {getBook})(SolrBookDetails);