import React from 'react';
import { Link } from 'react-router-dom'
import BookComponent from './BookComponent.js'



class BookSearchComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: ''
        }
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }


    handleSearchInput(event) {

        let query = event.target.value;
        this.props.searchBooks(query, 20);

    }

    
    render() {

        let result = this.props.searchResult;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={this.handleSearchInput} placeholder="Search by title or author" />
                    </div>
                </div>
                <BookComponent
                    mybooks={this.props.books}
                    books={result}
                    divClassName="search-books-results"
                    updateShelf={this.props.updateShelf}
                />

            </div>

        );

    }

}

export default BookSearchComponent;