import React from 'react';
import { Link } from 'react-router-dom'
import BookComponent from './BookComponent.js'



class BookSearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    handleSearchInput = (query) => {

        query = query.trim();

        if (query.length > 0) {
            this.props.searchBooks(query, 20);
        } else {
            this.props.emptySearchResult();
        }
    }



    render() {

        let result = [];

        if (this.props.searchResult.length > 0) {
            result = this.props.searchResult;
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            onChange={(event) => this.handleSearchInput(event.target.value)}
                            placeholder="Search by title or author" />
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