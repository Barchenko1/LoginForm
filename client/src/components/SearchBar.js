import React from 'react';

class SearchBar extends React.Component {

    state = {term:''};

    onInputChange = (event) => {
        this.setState({term : event.target.value});
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.term !== this.state.term && this.state.term.length > 2) {
            console.log(this.state.term);
            this.props.onFormSubmit(this.state.term);
        }
    }

    onFormSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>{this.props.label}</label>
                        <input type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;