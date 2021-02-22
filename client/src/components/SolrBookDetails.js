import React from 'react';
import {connect} from 'react-redux';
import {getBook} from "../actions/solrBookActions";

class SolrBookDetails extends React.Component {

    makeBold(input) {
        const args = this.props.term.split(' ');
        args.forEach(e => {
            const regExp = new RegExp(e, 'gi');
            const replacement = `<span style='background: red'>${e}</span>`;
            input = input.replace(regExp, replacement);
            console.log(input);
        })
        return <div dangerouslySetInnerHTML={{__html: input}}/>;
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