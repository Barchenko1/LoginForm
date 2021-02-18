import React from 'react';
import {connect} from 'react-redux';
import {getBook} from "../actions/solrBookActions";

class SolrBookDetails extends React.Component {

    render() {
        console.log(this.props)
        if (!this.props.book) {
            return <div>Loading...</div>
        }

        const { title, author, description} = this.props.book;

        return (
            <div>
                <h1>{title}</h1>
                <h5>{author}</h5>
                <h5>{description}</h5>
            </div>
        )
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        book: state.sorlBooks.books[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {getBook})(SolrBookDetails);