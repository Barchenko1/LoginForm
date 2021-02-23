import React from 'react';
import {connect} from 'react-redux';
import './SolrBootDetails.css';
import {getBook} from "../actions/solrBookActions";

class SolrBookDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentPage: 0, charsForPage: 250, subArrays: []}
    }

    componentDidMount() {
        let subArrays = [];
        // const indexOfLast = this.state.currentPage * this.state.charsForPage;
        // const indexOfFirst = indexOfLast - this.state.charsForPage;
        // let subArrays1 = this.props.book.description.slice(indexOfFirst, indexOfLast);

        const len = Math.ceil(this.props.book.description.length / this.state.charsForPage);
        for (let i = 0; i < len; i++){
            const arg = this.props.book.description.slice((i*this.state.charsForPage), (i*this.state.charsForPage) + this.state.charsForPage);
            subArrays[i] = arg;
        }
        this.setState({subArrays: subArrays});
        console.log(subArrays);

        const args = this.props.term.split(' ');
        const regExp = new RegExp(args[0], 'gi');
        subArrays.forEach((arr, index) => {
            if (arr.match(regExp)) {
                this.setState({currentPage: index});
            }
        })
    }

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

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    countPageNumbers() {
        const pageNumbers = [];
        for (let i = 0; i < Math.ceil(this.props.book.description.length / this.state.charsForPage); i++) {
            pageNumbers.push(i);
        }
        console.log(pageNumbers);
        return pageNumbers
    }

    render() {
        if (!this.props.book) {
            return <div>Loading...</div>
        }
        const { title, author, description} = this.props.book;
        const pageNumbers = this.countPageNumbers();
        const renderCurrentDescription = () => {
            console.log(this.state.currentPage)
            return this.state.subArrays.map((el, index) => {
                if (index === this.state.currentPage) {
                    return <div key={index}>{this.makeBold(el)}</div>
                }
            })

        };

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {++number}
                </li>
            );
        });

        return (
            <div>
                <div>{this.makeBold(title)}</div>
                <div>{this.makeBold(author)}</div>
                {renderCurrentDescription(description)}
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
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